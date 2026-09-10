import { describe, it, expect } from "vitest";
import { NAVIGATION_ITEMS } from "../components/navigation-items";

describe("Navigation & Hamburger Menu Structure", () => {
  it("should contain all essential routes", () => {
    const routes = NAVIGATION_ITEMS.map((item) => item.to);
    expect(routes).toContain("/");
    expect(routes).toContain("/co-so-hinh-thanh");
    expect(routes).toContain("/qua-trinh-phat-trien");
    expect(routes).toContain("/gia-tri-tu-tuong");
    expect(routes).toContain("/luan-ban");
    expect(routes).toContain("/tu-lieu-anh");
    expect(routes).toContain("/contribution");
    expect(routes).not.toContain("/quan-ly");
  });

  it("should have descriptive section names without 2.1 or 2.2 prefixes", () => {
    NAVIGATION_ITEMS.forEach((item) => {
      expect(item.label).not.toMatch(/^2\.\d/);
      expect(item.title).not.toMatch(/^2\.\d/);
      expect(item.title.length).toBeGreaterThan(5);
      expect(item.desc.length).toBeGreaterThan(10);
    });
  });

  it("should have icon and tag for every menu item", () => {
    NAVIGATION_ITEMS.forEach((item) => {
      expect(item.icon).toBeDefined();
      expect(item.tag).toBeDefined();
      expect(item.tag.length).toBeGreaterThan(0);
    });
  });

  it("should support tactile press styles on buttons", async () => {
    const { buttonVariants } = await import("../components/ui/button");
    const classes = buttonVariants({ variant: "default" });
    expect(classes).toContain("active:scale-[0.96]");
    expect(classes).toContain("transition-all");
  });
});
