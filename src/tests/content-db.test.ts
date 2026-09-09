import { describe, it, expect } from "vitest";
import { contentDatabase, BASE_LUAN_BAN_DATA } from "../lib/content-db";

describe("Content Database & Dynamic On-Demand Loading", () => {
  it("should contain authentic base content for THOI_THE (5 points)", () => {
    expect(BASE_LUAN_BAN_DATA.thoiThe.points).toHaveLength(5);
    expect(BASE_LUAN_BAN_DATA.thoiThe.points[0]).toContain("Thực dân Pháp xâm lược");
    expect(BASE_LUAN_BAN_DATA.thoiThe.points[1]).toContain("Cần Vương");
    expect(BASE_LUAN_BAN_DATA.thoiThe.points[2]).toContain("Xã hội khủng hoảng sâu sắc");
    expect(BASE_LUAN_BAN_DATA.thoiThe.points[3]).toContain("Cách mạng Tháng Mười Nga");
    expect(BASE_LUAN_BAN_DATA.thoiThe.points[4]).toContain("Chủ nghĩa yêu nước, tinh hoa văn hóa");
  });

  it("should contain authentic base content for ANH_HUNG (5 points)", () => {
    expect(BASE_LUAN_BAN_DATA.anhHung.points).toHaveLength(5);
    expect(BASE_LUAN_BAN_DATA.anhHung.points[0]).toContain("Hoài bão lớn cứu nước, cứu dân");
    expect(BASE_LUAN_BAN_DATA.anhHung.points[1]).toContain("Năng lực tổng kết thực tiễn");
    expect(BASE_LUAN_BAN_DATA.anhHung.points[2]).toContain("Tìm ra con đường cứu nước đúng đắn (1920)");
    expect(BASE_LUAN_BAN_DATA.anhHung.points[3]).toContain("Chấm dứt khủng hoảng đường lối (1930)");
    expect(BASE_LUAN_BAN_DATA.anhHung.points[4]).toContain("Khai sinh nước Việt Nam Dân chủ Cộng hòa (1945)");
  });

  it("should query content on-demand from database", async () => {
    const result = await contentDatabase.getLuanBanContent("doi-chieu");
    expect(result.data).toBeDefined();
    expect(result.data.title).toBe("Hai mặt của một thời đại");
    expect(result.loadTimeMs).toBeGreaterThanOrEqual(100);
    expect(result.source).toBeDefined();
  });

  it("should preserve international scholars with valid links", () => {
    expect(BASE_LUAN_BAN_DATA.scholars.length).toBeGreaterThanOrEqual(6);
    BASE_LUAN_BAN_DATA.scholars.forEach((scholar) => {
      expect(scholar.sourceUrl).toMatch(/^https?:\/\//);
      expect(scholar.sourceLabel.length).toBeGreaterThan(0);
      expect(scholar.text.length).toBeGreaterThan(10);
    });
  });
});
