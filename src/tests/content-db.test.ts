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

  it("should provide 17 authentic historical photos with valid categories and Pho Hang Buom wiki link", async () => {
    const result = await contentDatabase.getTuLieuAnhContent();
    expect(result.data).toHaveLength(17);

    // Verify Pho Hang Buom
    const hangBuom = result.data.find((p) => p.id === 2);
    expect(hangBuom).toBeDefined();
    expect(hangBuom?.title).toContain("Phố Hàng Buồm");
    expect(hangBuom?.category).toBe("Bối cảnh xã hội");
    expect(hangBuom?.sourceUrl).toBe("https://vi.wikipedia.org/wiki/Ph%E1%BB%91_H%C3%A0ng_Bu%E1%BB%93m");
    expect(hangBuom?.sourceLabel).toBe("Phố Hàng Buồm – Wikipedia tiếng Việt");

    // Verify newly added historical milestones
    const leParia = result.data.find((p) => p.id === 9);
    expect(leParia).toBeDefined();
    expect(leParia?.title).toContain("Le Paria");
    expect(leParia?.category).toBe("Hành trình cứu nước");

    const ducThanh = result.data.find((p) => p.id === 10);
    expect(ducThanh).toBeDefined();
    expect(ducThanh?.title).toContain("Trường Dục Thanh");
    expect(ducThanh?.category).toBe("Địa danh lịch sử");

    const dienBienPhu = result.data.find((p) => p.id === 11);
    expect(dienBienPhu).toBeDefined();
    expect(dienBienPhu?.title).toContain("Điện Biên Phủ");
    expect(dienBienPhu?.category).toBe("Mốc son lịch sử");

    const duongKachMenh = result.data.find((p) => p.id === 12);
    expect(duongKachMenh).toBeDefined();
    expect(duongKachMenh?.title).toContain("Đường Kách mệnh");
    expect(duongKachMenh?.category).toBe("Tiền đề lý luận");

    const banAn = result.data.find((p) => p.id === 13);
    expect(banAn).toBeDefined();
    expect(banAn?.title).toContain("Bản án chế độ thực dân Pháp");
    expect(banAn?.category).toBe("Tiền đề lý luận");

    const bienGioi = result.data.find((p) => p.id === 14);
    expect(bienGioi).toBeDefined();
    expect(bienGioi?.title).toContain("Chiến dịch Biên giới");
    expect(bienGioi?.category).toBe("Mốc son lịch sử");

    const loiKeuGoi = result.data.find((p) => p.id === 15);
    expect(loiKeuGoi).toBeDefined();
    expect(loiKeuGoi?.title).toContain("Lời kêu gọi Toàn quốc kháng chiến");
    expect(loiKeuGoi?.category).toBe("Mốc son lịch sử");

    const benNhaRong = result.data.find((p) => p.id === 16);
    expect(benNhaRong).toBeDefined();
    expect(benNhaRong?.title).toContain("Bến Nhà Rồng");
    expect(benNhaRong?.category).toBe("Địa danh lịch sử");

    const thieuNhi = result.data.find((p) => p.id === 17);
    expect(thieuNhi).toBeDefined();
    expect(thieuNhi?.title).toContain("thiếu nhi");
    expect(thieuNhi?.category).toBe("Chân dung lãnh tụ");

    // Verify every filter category has matching items
    const expectedCategories = [
      "Địa danh lịch sử",
      "Bối cảnh xã hội",
      "Bối cảnh thời đại",
      "Tiền đề lý luận",
      "Hành trình cứu nước",
      "Mốc son lịch sử",
      "Chân dung lãnh tụ",
    ];

    expectedCategories.forEach((cat) => {
      const itemsInCat = result.data.filter((p) => p.category === cat);
      expect(itemsInCat.length).toBeGreaterThan(0);
    });
  });
});
