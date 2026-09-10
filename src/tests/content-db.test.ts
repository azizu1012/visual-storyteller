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

  it("should provide 28 authentic historical photos with valid categories and Pho Hang Buom wiki link", async () => {
    const result = await contentDatabase.getTuLieuAnhContent();
    expect(result.data).toHaveLength(28);

    // Verify Pho Hang Buom
    const hangBuom = result.data.find((p) => p.id === 2);
    expect(hangBuom).toBeDefined();
    expect(hangBuom?.title).toContain("Phố Hàng Buồm");
    expect(hangBuom?.category).toBe("Bối cảnh xã hội");
    expect(hangBuom?.sourceUrl).toBe("https://vi.wikipedia.org/wiki/Ph%E1%BB%91_H%C3%A0ng_Bu%E1%BB%93m");
    expect(hangBuom?.sourceLabel).toBe("Phố Hàng Buồm – Wikipedia tiếng Việt");

    // Verify newly added historical milestones
    const cauLongBien = result.data.find((p) => p.id === 18);
    expect(cauLongBien).toBeDefined();
    expect(cauLongBien?.title).toContain("Cầu Paul Doumer");
    expect(cauLongBien?.category).toBe("Bối cảnh xã hội");

    const hoaLo = result.data.find((p) => p.id === 19);
    expect(hoaLo).toBeDefined();
    expect(hoaLo?.title).toContain("Hỏa Lò");
    expect(hoaLo?.category).toBe("Bối cảnh xã hội");

    const conDao = result.data.find((p) => p.id === 20);
    expect(conDao).toBeDefined();
    expect(conDao?.title).toContain("Côn Đảo");
    expect(conDao?.category).toBe("Địa danh lịch sử");

    const cayDaTanTrao = result.data.find((p) => p.id === 21);
    expect(cayDaTanTrao).toBeDefined();
    expect(cayDaTanTrao?.title).toContain("Cây đa Tân Trào");
    expect(cayDaTanTrao?.category).toBe("Địa danh lịch sử");

    const dinhTanTrao = result.data.find((p) => p.id === 22);
    expect(dinhTanTrao).toBeDefined();
    expect(dinhTanTrao?.title).toContain("Đình Tân Trào");
    expect(dinhTanTrao?.category).toBe("Địa danh lịch sử");

    const nguyenAiQuocLienXo = result.data.find((p) => p.id === 23);
    expect(nguyenAiQuocLienXo).toBeDefined();
    expect(nguyenAiQuocLienXo?.title).toContain("Liên Xô năm 1923");
    expect(nguyenAiQuocLienXo?.category).toBe("Hành trình cứu nước");

    const quocTeCongSan = result.data.find((p) => p.id === 24);
    expect(quocTeCongSan).toBeDefined();
    expect(quocTeCongSan?.title).toContain("Đại hội V Quốc tế Cộng sản");
    expect(quocTeCongSan?.category).toBe("Bối cảnh thời đại");

    const baoThanhNien = result.data.find((p) => p.id === 25);
    expect(baoThanhNien).toBeDefined();
    expect(baoThanhNien?.title).toContain("Báo 'Thanh Niên'");
    expect(baoThanhNien?.category).toBe("Tiền đề lý luận");

    const mitTinh = result.data.find((p) => p.id === 26);
    expect(mitTinh).toBeDefined();
    expect(mitTinh?.title).toContain("Nhà hát Lớn Hà Nội");
    expect(mitTinh?.category).toBe("Mốc son lịch sử");

    const geneva = result.data.find((p) => p.id === 27);
    expect(geneva).toBeDefined();
    expect(geneva?.title).toContain("Hội nghị Genève");
    expect(geneva?.category).toBe("Mốc son lịch sử");

    const diChuc = result.data.find((p) => p.id === 28);
    expect(diChuc).toBeDefined();
    expect(diChuc?.title).toContain("Di chúc thiêng liêng");
    expect(diChuc?.category).toBe("Tiền đề lý luận");

    // Verify every filter category has at least 2 matching items
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
      expect(itemsInCat.length).toBeGreaterThanOrEqual(2);
    });
  });
});
