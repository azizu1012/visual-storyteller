import { describe, it, expect, beforeEach } from "vitest";
import {
  getStoredStories,
  createStory,
  updateStory,
  deleteStory,
  resetStoriesToDefault,
  CATEGORY_MAP,
  INITIAL_STORIES,
} from "../lib/storage";

describe("CRUD Storage Module", () => {
  beforeEach(() => {
    localStorage.clear();
    resetStoriesToDefault();
  });

  it("should initialize with default stories", () => {
    const stories = getStoredStories();
    expect(stories.length).toBe(INITIAL_STORIES.length);
    expect(stories[0]?.title).toBe(INITIAL_STORIES[0]?.title);
  });

  it("should create a new story successfully (Create)", () => {
    const newStory = createStory({
      title: "Khởi nghĩa Ba Tơ",
      category: "thoi-ky",
      period: "1945",
      content: "Cuộc khởi nghĩa vũ trang Ba Tơ giành thắng lợi.",
      source: "Lịch sử quân sự",
      tags: ["Khởi nghĩa", "Ba Tơ"],
    });

    expect(newStory).toBeDefined();
    expect(newStory.id).toMatch(/^story-/);
    expect(newStory.categoryName).toBe("Thời kỳ lịch sử");
    expect(newStory.title).toBe("Khởi nghĩa Ba Tơ");

    const all = getStoredStories();
    expect(all.length).toBe(INITIAL_STORIES.length + 1);
    expect(all[0]?.id).toBe(newStory.id);
  });

  it("should read and retrieve existing stories (Read)", () => {
    const stories = getStoredStories();
    const first = stories[0]!;
    expect(first.id).toBeDefined();
    expect(first.title).toBeDefined();
    expect(CATEGORY_MAP[first.category]).toBe(first.categoryName);
  });

  it("should update an existing story (Update)", () => {
    const stories = getStoredStories();
    const target = stories[0]!;

    const updated = updateStory(target.id, {
      title: "Tiêu đề đã được cập nhật kiểm thử",
      period: "1911 - 1920",
    });

    expect(updated).not.toBeNull();
    expect(updated?.title).toBe("Tiêu đề đã được cập nhật kiểm thử");
    expect(updated?.period).toBe("1911 - 1920");

    const reloaded = getStoredStories();
    expect(reloaded[0]?.title).toBe("Tiêu đề đã được cập nhật kiểm thử");
  });

  it("should delete a story by ID (Delete)", () => {
    const stories = getStoredStories();
    const initialCount = stories.length;
    const target = stories[0]!;

    const success = deleteStory(target.id);
    expect(success).toBe(true);

    const reloaded = getStoredStories();
    expect(reloaded.length).toBe(initialCount - 1);
    expect(reloaded.find((s) => s.id === target.id)).toBeUndefined();
  });

  it("should reset stories to default", () => {
    // Delete all
    const stories = getStoredStories();
    stories.forEach((s) => deleteStory(s.id));
    expect(getStoredStories().length).toBe(0);

    // Reset
    const restored = resetStoriesToDefault();
    expect(restored.length).toBe(INITIAL_STORIES.length);
    expect(getStoredStories().length).toBe(INITIAL_STORIES.length);
  });
});
