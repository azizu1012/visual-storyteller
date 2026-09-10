export type StoryCategory =
  "thuc-tien" | "ly-luan" | "chu-quan" | "thoi-ky" | "gia-tri" | "luan-ban";

export interface StoryItem {
  id: string;
  title: string;
  category: StoryCategory;
  categoryName: string;
  period: string;
  content: string;
  source: string;
  imageUrl?: string | undefined;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const CATEGORY_MAP: Record<StoryCategory, string> = {
  "thuc-tien": "Cơ sở thực tiễn",
  "ly-luan": "Cơ sở lý luận",
  "chu-quan": "Nhân tố chủ quan",
  "thoi-ky": "Thời kỳ lịch sử",
  "gia-tri": "Giá trị tư tưởng",
  "luan-ban": "Luận bàn lịch sử",
};

export const INITIAL_STORIES: StoryItem[] = [
  {
    id: "story-1",
    title: "Nguyễn Tất Thành rời cảng Sài Gòn tìm đường cứu nước",
    category: "thoi-ky",
    categoryName: "Thời kỳ lịch sử",
    period: "05-06-1911",
    content:
      "Nguyễn Tất Thành làm phụ bếp trên con tàu Amiral Latouche-Tréville rời Tổ quốc, mở đầu cuộc hành trình bôn ba khắp năm châu bốn biển kéo dài 30 năm để tìm con đường cứu nước giải phóng dân tộc.",
    source: "Tàu Amiral Latouche-Tréville · Tư liệu lịch sử",
    imageUrl: "/src/assets/tk-1911.jpg",
    tags: ["Nguyễn Tất Thành", "Latouche-Tréville", "1911", "Cứu nước"],
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "story-2",
    title: "Tiếp cận Luận cương Lênin & Bỏ phiếu tán thành Quốc tế III",
    category: "ly-luan",
    categoryName: "Cơ sở lý luận",
    period: "12-1920",
    content:
      "Tại Đại hội Tours (Pháp), Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp sau khi tìm thấy con đường cứu nước đúng đắn qua Luận cương của V.I. Lênin.",
    source: "Đại hội Tours · Ảnh tư liệu",
    imageUrl: "/src/assets/tk-1920.jpg",
    tags: ["Đại hội Tours", "Quốc tế Cộng sản", "Lênin", "1920"],
    createdAt: "2026-01-02T00:00:00.000Z",
    updatedAt: "2026-01-02T00:00:00.000Z",
  },
  {
    id: "story-3",
    title: "Trở về Tổ quốc tại hang Pác Bó (Cao Bằng)",
    category: "thoi-ky",
    categoryName: "Thời kỳ lịch sử",
    period: "28-01-1941",
    content:
      "Sau 30 năm bôn ba hải ngoại, Lãnh tụ Nguyễn Ái Quốc vượt qua cột mốc 108 biên giới Việt - Trung trở về Pác Bó, Cao Bằng để trực tiếp lãnh đạo phong trào cách mạng Việt Nam.",
    source: "Hang Cốc Bó, Pác Bó · Tycho (shansov.net)",
    imageUrl: "/src/assets/tk-1941.jpg",
    tags: ["Pác Bó", "Cao Bằng", "1941", "Trở về Tổ quốc"],
    createdAt: "2026-01-03T00:00:00.000Z",
    updatedAt: "2026-01-03T00:00:00.000Z",
  },
  {
    id: "story-4",
    title: "Tuyên ngôn Độc lập tại Quảng trường Ba Đình",
    category: "gia-tri",
    categoryName: "Giá trị tư tưởng",
    period: "02-09-1945",
    content:
      "Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa, khẳng định quyền độc lập tự do thiêng liêng bất khả xâm phạm của dân tộc Việt Nam trước toàn thế giới.",
    source: "Quảng trường Ba Đình · Việt Nam Độc lập Đồng minh Hội",
    imageUrl: "/src/assets/tk-1945.jpg",
    tags: ["Tuyên ngôn Độc lập", "Ba Đình", "1945", "Khai sinh đất nước"],
    createdAt: "2026-01-04T00:00:00.000Z",
    updatedAt: "2026-01-04T00:00:00.000Z",
  },
  {
    id: "story-5",
    title: "Bối cảnh xã hội Việt Nam thuộc địa nửa phong kiến",
    category: "thuc-tien",
    categoryName: "Cơ sở thực tiễn",
    period: "Cuối TK XIX - Đầu TK XX",
    content:
      "Thực dân Pháp áp đặt ách thống trị tàn bạo, chia rẽ ba kỳ. Các phong trào yêu nước theo ngọn cờ phong kiến và dân chủ tư sản đều thất bại, xã hội khủng hoảng sâu sắc về đường lối cứu nước.",
    source: "Phố Hàng Buồm đầu thế kỷ XX · Tư liệu lưu trữ",
    imageUrl: "/src/assets/thuctien-vn.jpg",
    tags: ["Thực tiễn", "Việt Nam", "Thuộc địa", "Khủng hoảng đường lối"],
    createdAt: "2026-01-05T00:00:00.000Z",
    updatedAt: "2026-01-05T00:00:00.000Z",
  },
  {
    id: "story-6",
    title: "Phẩm chất cá nhân & Bản lĩnh trí tuệ phi thường",
    category: "chu-quan",
    categoryName: "Nhân tố chủ quan",
    period: "1890 - 1969",
    content:
      "Ý chí cứu nước sắt đá, tư duy độc lập tự chủ, nhạy bén với cái mới cùng vốn sống thực tiễn phong phú qua gần 30 quốc gia trên thế giới đã tạo nên nhân cách vĩ đại Hồ Chí Minh.",
    source: "Chân dung Chủ tịch Hồ Chí Minh năm 1946",
    imageUrl: "/src/assets/chandung-1946.jpg",
    tags: ["Nhân tố chủ quan", "Trí tuệ", "Bản lĩnh", "Hồ Chí Minh"],
    createdAt: "2026-01-06T00:00:00.000Z",
    updatedAt: "2026-01-06T00:00:00.000Z",
  },
];

const STORAGE_KEY = "visual_storyteller_items";

export function getStoredStories(): StoryItem[] {
  if (typeof window === "undefined") {
    return INITIAL_STORIES;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STORIES));
      return INITIAL_STORIES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_STORIES;
  } catch {
    return INITIAL_STORIES;
  }
}

export function saveStories(stories: StoryItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  } catch (error) {
    console.error("Failed to save stories to localStorage:", error);
  }
}

export function createStory(
  data: Omit<StoryItem, "id" | "categoryName" | "createdAt" | "updatedAt">,
): StoryItem {
  const current = getStoredStories();
  const newItem: StoryItem = {
    ...data,
    id: "story-" + Date.now(),
    categoryName: CATEGORY_MAP[data.category] || data.category,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const updated = [newItem, ...current];
  saveStories(updated);
  return newItem;
}

export function updateStory(id: string, data: Partial<Omit<StoryItem, "id">>): StoryItem | null {
  const current = getStoredStories();
  const index = current.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const existing = current[index]!;
  const category = data.category ?? existing.category;
  const updatedItem: StoryItem = {
    ...existing,
    ...data,
    category,
    categoryName: CATEGORY_MAP[category] || category,
    updatedAt: new Date().toISOString(),
  };

  current[index] = updatedItem;
  saveStories(current);
  return updatedItem;
}

export function deleteStory(id: string): boolean {
  const current = getStoredStories();
  const filtered = current.filter((item) => item.id !== id);
  if (filtered.length === current.length) return false;
  saveStories(filtered);
  return true;
}

export function resetStoriesToDefault(): StoryItem[] {
  saveStories(INITIAL_STORIES);
  return INITIAL_STORIES;
}
