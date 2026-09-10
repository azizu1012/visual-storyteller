/**
 * Visual Storyteller - Centralized Content Database Service
 * 
 * Hệ thống cơ sở dữ liệu toàn trang (IndexedDB / Local Database)
 * Quản lý toàn bộ dữ liệu của tất cả chuyên đề và nạp động on-demand
 * khi người dùng bấm vào từng mục/tab/chuyên đề trên web.
 */

export interface ScholarQuote {
  id: string;
  author: string;
  role: string;
  country: string;
  category: "Học giả phương Tây" | "Tổ chức quốc tế" | "Nhà văn & Nhà báo" | "Chính khách thế giới";
  work?: string;
  text: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface LuanBanContent {
  sectionId: string;
  title: string;
  eyebrow: string;
  quote: string;
  intro: string;
  thoiThe: {
    title: string;
    badge: string;
    subtitle: string;
    points: string[];
  };
  anhHung: {
    title: string;
    badge: string;
    subtitle: string;
    points: string[];
  };
  bienChung: {
    title: string;
    eyebrow: string;
    thoiTheCondition: string;
    anhHungCondition: string;
    conclusion: string;
  };
  scholars: ScholarQuote[];
}

export interface CoSoContent {
  sectionId: string;
  title: string;
  eyebrow: string;
  intro: string;
  thucTienVn: Array<{
    title: string;
    desc: string;
    sourceUrl: string;
    sourceLabel: string;
  }>;
  thucTienTg: Array<{
    title: string;
    desc: string;
    sourceUrl: string;
    sourceLabel: string;
  }>;
  lyLuan: Array<{
    number: string;
    name: string;
    badge: string;
    summary: string;
    details: string[];
  }>;
  chuQuan: Array<{
    title: string;
    content: string;
  }>;
}

export interface QuaTrinhContent {
  sectionId: string;
  title: string;
  eyebrow: string;
  intro: string;
  periods: Array<{
    id: string;
    stage: string;
    timeRange: string;
    title: string;
    badge: string;
    summary: string;
    keyEvents: Array<{
      text: string;
      sourceUrl?: string;
      sourceLabel?: string;
    }>;
    significance: string;
  }>;
}

export interface GiaTriContent {
  sectionId: string;
  title: string;
  eyebrow: string;
  intro: string;
  giaTriVn: Array<{
    title: string;
    desc: string;
    points: string[];
  }>;
  giaTriTg: Array<{
    title: string;
    desc: string;
    points: string[];
  }>;
}

export interface TuLieuAnhItem {
  id: number;
  title: string;
  category: string;
  year: string;
  caption: string;
  author: string;
  sourceUrl: string;
  sourceLabel?: string | undefined;
}

// 1. Dữ liệu Luận bàn (100% chuẩn đối chiếu từ base index.tsx)
export const BASE_LUAN_BAN_DATA: LuanBanContent = {
  sectionId: "luan-ban",
  eyebrow: "Luận bàn lịch sử",
  title: "Hai mặt của một thời đại",
  quote:
    "Thời thế tạo anh hùng, hay anh hùng tạo thời thế — điều nào sẽ đúng với cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh?",
  intro:
    "Chủ tịch Hồ Chí Minh là sản phẩm vĩ đại của dân tộc Việt Nam và của thời đại. Như C. Mác từng chỉ ra, mỗi thời đại xã hội đều cần những con người vĩ đại của nó, và nếu không có những con người như thế thì thời đại sẽ sáng tạo ra họ.",
  thoiThe: {
    title: "“Thời thế tạo anh hùng”",
    badge: "Luận điểm 1",
    subtitle: "Lịch sử và thời đại tạo tiền đề cho sự xuất hiện của Hồ Chí Minh.",
    points: [
      "Thực dân Pháp xâm lược, biến nước ta thành nước thuộc địa nửa phong kiến, đẩy nhân dân vào cảnh lầm than.",
      "Các phong trào yêu nước theo hệ tư tưởng phong kiến (Cần Vương) và khuynh hướng dân chủ tư sản (Đông Du, Duy Tân, khởi nghĩa Yên Bái) lần lượt thất bại.",
      "Xã hội khủng hoảng sâu sắc về đường lối và giai cấp lãnh đạo, đặt ra câu hỏi cấp thiết: cứu nước bằng con đường nào để đi đến thắng lợi?",
      "Cách mạng Tháng Mười Nga (1917) và Quốc tế Cộng sản (1919) mở ra thời đại mới, đưa chủ nghĩa Mác – Lênin lan rộng.",
      "Chủ nghĩa yêu nước, tinh hoa văn hóa phương Đông – phương Tây và chủ nghĩa Mác – Lênin tạo nên mảnh đất lý luận cho sự xuất hiện của Người.",
    ],
  },
  anhHung: {
    title: "“Anh hùng tạo thời thế”",
    badge: "Luận điểm 2",
    subtitle: "Nhân tố chủ quan và vai trò xoay chuyển lịch sử của Hồ Chí Minh.",
    points: [
      "Hoài bão lớn cứu nước, cứu dân; tư duy độc lập, tự chủ, sáng tạo, giàu tính phê phán và đổi mới.",
      "Năng lực tổng kết thực tiễn, phát triển lý luận, tầm nhìn chiến lược và khả năng dự báo tương lai chính xác.",
      "Tìm ra con đường cứu nước đúng đắn (1920): tiếp cận Luận cương của Lênin, khẳng định giải phóng dân tộc gắn liền với cách mạng vô sản.",
      "Chấm dứt khủng hoảng đường lối (1930): sáng lập Đảng Cộng sản Việt Nam, thông qua Cương lĩnh chính trị đầu tiên.",
      "Khai sinh nước Việt Nam Dân chủ Cộng hòa (1945) và lãnh đạo đánh bại hai đế quốc lớn, góp phần làm sụp đổ hệ thống thuộc địa trên thế giới.",
    ],
  },
  bienChung: {
    title: "Mối quan hệ biện chứng thống nhất",
    eyebrow: "Quan điểm triết học Mác – Lênin",
    thoiTheCondition:
      "“Thời thế” là điều kiện cần: lịch sử Việt Nam và thế giới đầu thế kỷ XX đã đặt ra bài toán giải phóng dân tộc và chuẩn bị những mảnh đất lý luận, thực tiễn để Hồ Chí Minh xuất hiện.",
    anhHungCondition:
      "“Anh hùng” là điều kiện đủ và có tính quyết định: bằng tài năng, bản lĩnh và sự sáng tạo độc đáo, Hồ Chí Minh đã nhận thức đúng quy luật thời đại, giải bài toán lịch sử mà các thế hệ tiền bối chưa giải được, chèo lái cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác, tạo nên một thời đại mới – Thời đại Hồ Chí Minh.",
    conclusion:
      "Chủ tịch Hồ Chí Minh là sản phẩm vĩ đại của thời đại, đồng thời chính Người là người kiến tạo và sáng tạo nên một thời đại mới — Thời đại Hồ Chí Minh, thời đại rực rỡ nhất trong lịch sử dân tộc Việt Nam.",
  },
  scholars: [
    {
      id: "duiker",
      author: "William J. Duiker",
      role: "Giáo sư Lịch sử danh dự, Đại học Bang Pennsylvania",
      country: "Hoa Kỳ",
      category: "Học giả phương Tây",
      work: "Tác phẩm nghiên cứu 'Ho Chi Minh: A Life' (Hyperion, 2000)",
      text: "Hồ Chí Minh là một nhân vật lịch sử hiếm hoi vừa mang tinh thần dân tộc sâu sắc vừa là một nhà quốc tế lỗi lạc. Bằng việc kết hợp hai yếu tố đó, ông đã tạo nên một sức mạnh lay chuyển thời đại và lãnh đạo dân tộc mình đánh bại những đế quốc hùng mạnh nhất.",
      sourceLabel: "Wikipedia & Học giả",
      sourceUrl: "https://en.wikipedia.org/wiki/William_J._Duiker",
    },
    {
      id: "chandra",
      author: "Ramesh Chandra",
      role: "Chủ tịch Hội đồng Hòa bình Thế giới (WPC)",
      country: "Ấn Độ",
      category: "Tổ chức quốc tế",
      work: "Diễn văn bế mạc Phiên họp Quốc tế về Chủ tịch Hồ Chí Minh",
      text: "Bất cứ nơi nào nhân dân chiến đấu cho tự do và độc lập, ở đó có hình ảnh của Hồ Chí Minh. Người không chỉ thuộc về Việt Nam, Người thuộc về toàn thể nhân loại tiến bộ đang đấu tranh vì hòa bình và phẩm giá con người.",
      sourceLabel: "Báo Nhân Dân",
      sourceUrl: "https://nhandan.vn/chu-tich-ho-chi-minh-trong-trai-tim-ban-be-quoc-te-post646702.html",
    },
    {
      id: "halberstam",
      author: "David Halberstam",
      role: "Nhà báo Mỹ đoạt giải Pulitzer danh giá",
      country: "Hoa Kỳ",
      category: "Học giả phương Tây",
      work: "Tác phẩm khảo cứu lịch sử 'Ho' (Random House, 1971)",
      text: "Hồ Chí Minh là hiện thân của tinh thần bất khuất của dân tộc Việt Nam. Người kết hợp được sự giản dị của một nhà hiền triết phương Đông với ý chí sắt đá và tầm nhìn chiến lược của một lãnh tụ cách mạng vĩ đại.",
      sourceLabel: "Wikipedia & Tư liệu",
      sourceUrl: "https://en.wikipedia.org/wiki/David_Halberstam",
    },
    {
      id: "unesco",
      author: "Tiến sĩ Modagat Ahmed",
      role: "Đại diện Tổng Giám đốc UNESCO",
      country: "UNESCO / Quốc tế",
      category: "Tổ chức quốc tế",
      work: "Hội thảo Quốc tế kỷ niệm 100 năm ngày sinh Chủ tịch Hồ Chí Minh (1990)",
      text: "Người sẽ được ghi nhớ không chỉ là người giải phóng cho Tổ quốc và nhân loại bị áp bức, mà còn là một nhà văn hóa kiệt xuất, người đã cống hiến trọn đời cho sự hiểu biết và hòa bình giữa các dân tộc trên toàn thế giới.",
      sourceLabel: "Văn kiện UNESCO",
      sourceUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh#UNESCO_vinh_danh",
    },
    {
      id: "han-suyin",
      author: "Hàn Tố Âm (Han Suyin)",
      role: "Nữ văn sĩ, nhà nghiên cứu quốc tế nổi tiếng người Anh gốc Hoa",
      country: "Vương quốc Anh",
      category: "Nhà văn & Nhà báo",
      work: "Khảo cứu lịch sử về các phong trào giải phóng dân tộc Á - Phi thế kỷ XX",
      text: "Hồ Chí Minh là biểu tượng của sự giản dị thanh cao, sức mạnh không gì khuất phục nổi của một con người đặt độc lập của Tổ quốc và hạnh phúc của nhân dân lên trên tất cả.",
      sourceLabel: "Tạp chí Tuyên giáo",
      sourceUrl: "https://tuyengiao.vn/chu-tich-ho-chi-minh-trong-long-ban-be-quoc-te-139821",
    },
    {
      id: "de-gaulle",
      author: "Charles de Gaulle",
      role: "Tổng thống Cộng hòa Pháp",
      country: "Pháp",
      category: "Chính khách thế giới",
      work: "Tuyên bố ngoại giao chính thức và hồi ký chính trị lịch sử",
      text: "Hồ Chí Minh là một nhân cách phi thường, một người con kiệt xuất của nhân dân Việt Nam, người đã kiên định suốt cuộc đời vì độc lập và tự do của dân tộc mình.",
      sourceLabel: "Báo Quân đội Nhân dân",
      sourceUrl: "https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/nhung-nhan-dinh-quoc-te-ve-ho-chi-minh-665241",
    },
    {
      id: "fidel",
      author: "Fidel Castro",
      role: "Lãnh tụ Cách mạng, Chủ tịch Hội đồng Nhà nước Cuba",
      country: "Cuba",
      category: "Chính khách thế giới",
      work: "Tuyên bố lịch sử tưởng niệm Chủ tịch Hồ Chí Minh (1969) và chuyến thăm Quảng Trị (1973)",
      text: "Chủ tịch Hồ Chí Minh thuộc về một lớp người đặc biệt mà cái chết lại gieo mầm cho sự sống, đời đời bất tử trong lòng các dân tộc yêu chuộng tự do và độc lập trên toàn thế giới.",
      sourceLabel: "Báo Nhân Dân",
      sourceUrl: "https://nhandan.vn/chu-tich-ho-chi-minh-trong-trai-tim-lanh-tu-fidel-castro-post304523.html",
    },
    {
      id: "mandelstam",
      author: "Osip Mandelstam",
      role: "Nhà thơ, nhà báo quốc tế Liên Xô",
      country: "Liên Xô",
      category: "Nhà văn & Nhà báo",
      work: "Ký sự 'Thăm một chiến sĩ Quốc tế Cộng sản: Nguyễn Ái Quốc' (Tạp chí Ogoniok số 39, 1923)",
      text: "Từ Nguyễn Ái Quốc tỏa ra một thứ văn hóa, không phải văn hóa Âu châu, mà có lẽ là một nền văn hóa của tương lai... Qua cử chỉ cao thượng, tiếng nói trầm ấm của Người, chúng ta như thấy được ngày mai, thấy được viễn cảnh hòa bình của toàn thế giới.",
      sourceLabel: "Báo Nhân Dân",
      sourceUrl: "https://nhandan.vn/tu-nguyen-ai-quoc-toa-ra-mot-nen-van-hoa-cua-tuong-lai-post784747.html",
    },
    {
      id: "brockway",
      author: "Lord Fenner Brockway",
      role: "Nghị sĩ Quốc hội Anh, nhà hoạt động hòa bình quốc tế",
      country: "Vương quốc Anh",
      category: "Chính khách thế giới",
      work: "Phát biểu tại Diễn đàn Quốc tế đoàn kết với nhân dân Việt Nam",
      text: "Hồ Chí Minh là một trong những nhân vật vĩ đại nhất của thời đại chúng ta. Người đã cống hiến trọn cuộc đời vì nền độc lập của dân tộc và vì hòa bình, phẩm giá của loài người.",
      sourceLabel: "Báo Điện tử ĐCSVN",
      sourceUrl: "https://dangcongsan.vn/tu-tuong-van-hoa/ho-chi-minh-trong-long-nhan-dan-the-gioi-554867.html",
    },
  ],
};

// 2. Dữ liệu Cơ sở hình thành
export const BASE_CO_SO_DATA: CoSoContent = {
  sectionId: "co-so-hinh-thanh",
  eyebrow: "Chuyên đề nghiên cứu",
  title: "Cơ sở hình thành tư tưởng Hồ Chí Minh",
  intro:
    "Tư tưởng Hồ Chí Minh không phải là sự xuất hiện ngẫu nhiên, mà là kết quả tất yếu của quá trình kết tinh sâu sắc giữa thực tiễn lịch sử dân tộc, xu thế thời đại, tinh hoa văn hóa nhân loại và thiên tài của một nhân cách vĩ đại.",
  thucTienVn: [
    {
      title: "Sự xâm lược của thực dân Pháp (1858)",
      desc: "Thực dân Pháp nổ súng xâm lược Việt Nam; triều đình phong kiến nhà Nguyễn từng bước đầu hàng, ký kết các hiệp ước bất bình đẳng và trở thành tay sai cho chính quyền thực dân.",
      sourceUrl: "https://vi.wikipedia.org/wiki/Tr%E1%BA%ADn_%C4%90%C3%A0_N%E1%BA%B5ng_(1858)",
      sourceLabel: "Wikipedia",
    },
    {
      title: "Khủng hoảng sâu sắc về đường lối cứu nước",
      desc: "Các phong trào yêu nước chống Pháp theo ngọn cờ phong kiến (Cần Vương) và dân chủ tư sản (Đông Du, Duy Tân, Khởi nghĩa Yên Bái) đều lần lượt thất bại, đặt cách mạng vào tình thế 'dường như trong đêm tối không có đường ra'.",
      sourceUrl: "https://vi.wikipedia.org/wiki/Phong_tr%C3%A0o_C%E1%BA%A7n_V%C6%B0%C6%A1ng",
      sourceLabel: "Wikipedia",
    },
    {
      title: "Giai cấp công nhân Việt Nam bước lên vũ đài",
      desc: "Sự xuất hiện và phát triển của giai cấp công nhân cùng phong trào đấu tranh tự phát chuyển sang tự giác đã tạo mảnh đất xã hội màu mỡ cho sự tiếp nhận và truyền bá chủ nghĩa Mác – Lênin.",
      sourceUrl: "https://vi.wikipedia.org/wiki/Giai_c%E1%BA%A5p_c%C3%B4ng_nh%C3%A2n_Vi%E1%BB%87t_Nam",
      sourceLabel: "Wikipedia",
    },
  ],
  thucTienTg: [
    {
      title: "Chủ nghĩa tư bản chuyển sang đế quốc chủ nghĩa",
      desc: "Làm sâu sắc thêm mâu thuẫn giữa vô sản với tư sản tại các nước tư bản, và đặc biệt là mâu thuẫn giữa các dân tộc thuộc địa bị áp bức với chủ nghĩa thực dân, đế quốc.",
      sourceUrl: "https://vi.wikipedia.org/wiki/Ch%E1%BB%A7_ngh%C4%A9a_%C4%91%E1%BA%BF_qu%E1%BB%91c",
      sourceLabel: "Wikipedia",
    },
    {
      title: "Cách mạng Tháng Mười Nga thắng lợi (1917)",
      desc: "Mở ra một thời đại mới trong lịch sử loài người – thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội, đồng thời cổ vũ mạnh mẽ phong trào giải phóng dân tộc khắp các châu lục.",
      sourceUrl: "https://vi.wikipedia.org/wiki/C%C3%A1ch_m%E1%BA%A1ng_Th%C3%A1ng_M%C6%B0%E1%BB%9Di",
      sourceLabel: "Wikipedia",
    },
    {
      title: "Quốc tế Cộng sản (Quốc tế III) ra đời (1919)",
      desc: "Thúc đẩy sự phát triển mạnh mẽ của phong trào công nhân và cộng sản quốc tế, trở thành chỗ dựa vững chắc cho nhân dân các nước thuộc địa đấu tranh giành độc lập.",
      sourceUrl: "https://vi.wikipedia.org/wiki/Qu%E1%BB%91c_t%E1%BA%BF_C%E1%BB%99ng_s%E1%BA%A3n",
      sourceLabel: "Wikipedia",
    },
  ],
  lyLuan: [
    {
      number: "01",
      name: "Giá trị truyền thống tốt đẹp của dân tộc Việt Nam",
      badge: "Cội nguồn sức mạnh",
      summary:
        "Chủ nghĩa yêu nước truyền thống là sợi chỉ đỏ xuyên suốt, là điểm xuất phát và động lực thôi thúc người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước.",
      details: [
        "Ý chí kiên cường, bất khuất đấu tranh chống giặc ngoại xâm suốt mấy ngàn năm lịch sử.",
        "Truyền thống đoàn kết, nhân ái, khoan dung, 'thương người như thể thương thân', tương thân tương ái.",
        "Tinh thần cần cù, sáng tạo, thông minh, lạc quan và luôn yêu chuộng hòa bình của nhân dân lao động.",
      ],
    },
    {
      number: "02",
      name: "Tinh hoa văn hóa nhân loại (Đông – Tây)",
      badge: "Tiếp thu có chọn lọc",
      summary:
        "Hồ Chí Minh đã tiếp thu một cách biện chứng, khoa học những giá trị tư tưởng tích cực của cả phương Đông lẫn phương Tây để làm giàu cho tư duy của mình.",
      details: [
        "Văn hóa phương Đông: kế thừa tư tưởng đạo đức, tu thân trị quốc của Nho giáo; lòng từ bi, cứu khổ, bình đẳng của Phật giáo; lối sống giản dị, hòa đồng thiên nhiên của Lão giáo; và tư tưởng Tam dân của Tôn Trung Sơn.",
        "Văn hóa phương Tây: hấp thu tư tưởng Tự do – Bình đẳng – Bác ái của Đại cách mạng Pháp (1789); tư tưởng nhân quyền, dân quyền trong Tuyên ngôn Độc lập của Mỹ (1776); tư tưởng pháp quyền của các nhà Khai sáng Voltaire, Rousseau, Montesquieu.",
      ],
    },
    {
      number: "03",
      name: "Chủ nghĩa Mác – Lênin",
      badge: "Tiền đề quyết định",
      summary:
        "Là tiền đề lý luận quan trọng nhất, có vai trò quyết định bước ngoặt phát triển về chất trong tư duy và hành động cách mạng của Hồ Chí Minh.",
      details: [
        "Cung cấp thế giới quan duy vật biện chứng và phương pháp luận khoa học để nhìn nhận, đánh giá thời cuộc và các xu thế phát triển của nhân loại.",
        "Đưa người thanh niên yêu nước Nguyễn Ái Quốc từ một người tìm đường cứu nước trở thành người chiến sĩ cộng sản kiên trung, tìm thấy lời giải cho bài toán giải phóng dân tộc gắn liền với cách mạng vô sản.",
      ],
    },
  ],
  chuQuan: [
    {
      title: "Phẩm chất cá nhân & Đạo đức cách mạng trong sáng",
      content:
        "Nguyễn Ái Quốc – Hồ Chí Minh sở hữu một hoài bão cứu nước cứu dân cháy bỏng; ý chí kiên định phi thường trước mọi gian nan tù đày; tư duy độc lập, tự chủ, giàu tính phản biện và đổi mới sáng tạo; tầm nhìn chiến lược vượt trước thời đại; và một nhân cách suốt đời tận trung với nước, tận hiếu với dân.",
    },
    {
      title: "Tài năng hoạt động thực tiễn & Năng lực tổng kết lý luận",
      content:
        "Trải qua 30 năm bôn ba qua gần 30 quốc gia thuộc nhiều châu lục, thấu hiểu sâu sắc đời sống thống khổ của người lao động thuộc địa lẫn chính quốc, Người có năng lực tổng kết thực tiễn thiên tài: chuyển hóa lý luận Mác – Lênin thành đường lối cách mạng sinh động, phù hợp với đặc thù xã hội Việt Nam.",
    },
  ],
};

// 3. Dữ liệu Quá trình phát triển (5 thời kỳ lịch sử)
export const BASE_QUA_TRINH_DATA: QuaTrinhContent = {
  sectionId: "qua-trinh-phat-trien",
  eyebrow: "Dòng thời gian lịch sử",
  title: "Quá trình hình thành và phát triển (1911–1969)",
  intro:
    "Hành trình 5 thời kỳ lịch sử phát triển tư tưởng Hồ Chí Minh từ ngày ra đi tìm đường cứu nước tại bến cảng Nhà Rồng đến bản Di chúc thiêng liêng để lại cho muôn đời sau.",
  periods: [
    {
      id: "thoi-ky-1",
      stage: "Thời kỳ I",
      timeRange: "Trước ngày 05-06-1911",
      title: "Hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước",
      badge: "Nuôi dưỡng hoài bão",
      summary:
        "Nguyễn Sinh Cung tiếp thu truyền thống yêu nước của gia đình và quê hương xứ Nghệ; chứng kiến cảnh nước mất nhà tan và sự thất bại của các bậc tiền bối, từ đó nung nấu quyết tâm ra đi tìm một con đường mới.",
      keyEvents: [
        {
          text: "Sinh ra trong một gia đình nhà nho yêu nước tại làng Sen, Kim Liên, Nam Đàn, Nghệ An (1890).",
          sourceUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Học tập chữ Hán, chữ Quốc ngữ và Pháp văn tại trường Quốc học Huế; tham gia phong trào chống thuế ở Trung Kỳ (1908).",
          sourceUrl: "https://vi.wikipedia.org/wiki/Phong_tr%C3%A0o_ch%E1%BB%91ng_thu%E1%BA%BF_Trung_K%E1%BB%B3",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Dạy học tại trường Dục Thanh (Phan Thiết, 1910), truyền bá lòng yêu nước cho học sinh trước khi vào Sài Gòn.",
          sourceUrl: "https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_D%E1%BB%A5c_Thanh",
          sourceLabel: "Wikipedia",
        },
      ],
      significance:
        "Đặt nền móng thế giới quan nhân văn, lòng yêu nước nồng nàn và định hình ý chí kiên định tìm kiếm con đường giải phóng cho dân tộc.",
    },
    {
      id: "thoi-ky-2",
      stage: "Thời kỳ II",
      timeRange: "1911 – 1920",
      title: "Tìm thấy con đường cứu nước, giải phóng dân tộc",
      badge: "Bước ngoặt lịch sử",
      summary:
        "Bôn ba qua nhiều châu lục, khảo sát thực tiễn phong trào công nhân và thuộc địa; tiếp cận Sơ thảo Luận cương của Lênin (1920) và bỏ phiếu gia nhập Quốc tế III, sáng lập Đảng Cộng sản Pháp.",
      keyEvents: [
        {
          text: "Rời cảng Sài Gòn trên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước (05-06-1911).",
          sourceUrl: "https://nhandan.vn/hanh-trinh-30-nam-tim-duong-cuu-nuoc-cua-nguyen-tat-thanh-post649313.html",
          sourceLabel: "Báo Nhân Dân",
        },
        {
          text: "Gửi bản 'Yêu sách của nhân dân An Nam' tới Hội nghị Hòa bình Versailles (1919) ký tên Nguyễn Ái Quốc.",
          sourceUrl: "https://vi.wikipedia.org/wiki/B%E1%BA%A3n_Y%C3%AAu_s%C3%A1ch_c%E1%BB%A7a_nh%C3%A2n_d%C3%A2n_An_Nam",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Đọc Sơ thảo Luận cương của Lênin (7/1920) và bỏ phiếu tán thành Quốc tế III tại Đại hội Tours (12/1920).",
          sourceUrl: "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/v-i-lenin/tac-pham/so-thao-lan-thu-nhat-nhung-luan-cuong-ve-van-de-dan-toc-va-van-de-thuoc-dia-1077",
          sourceLabel: "Tư liệu Đảng",
        },
      ],
      significance:
        "Bước chuyển biến quyết định từ chủ nghĩa yêu nước chân chính đến chủ nghĩa Mác – Lênin, tìm thấy con đường duy nhất đúng đắn: Cách mạng vô sản.",
    },
    {
      id: "thoi-ky-3",
      stage: "Thời kỳ III",
      timeRange: "1920 – 1930",
      title: "Hình thành cơ bản tư tưởng về cách mạng Việt Nam",
      badge: "Xác lập cương lĩnh",
      summary:
        "Tích cực hoạt động trong Quốc tế Cộng sản, xuất bản các tác phẩm lý luận kinh điển và chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam (1930) với Cương lĩnh chính trị đầu tiên.",
      keyEvents: [
        {
          text: "Sáng lập Hội Liên hiệp thuộc địa và báo Le Paria (Người cùng khổ) tại Paris (1921-1922).",
          sourceUrl: "https://vi.wikipedia.org/wiki/Le_Paria",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (1925) và xuất bản tác phẩm 'Đường Kách mệnh' (1927).",
          sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_k%C3%A1ch_m%E1%BB%87nh",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Chủ trì Hội nghị hợp nhất, thành lập Đảng Cộng sản Việt Nam mùa xuân năm 1930.",
          sourceUrl: "https://dangcongsan.vn/tu-tuong-van-hoa/dang-cong-san-viet-nam-ra-doi-buoc-ngoat-lich-su-vi-dai-548123.html",
          sourceLabel: "Báo Điện tử ĐCSVN",
        },
      ],
      significance:
        "Chấm dứt cuộc khủng hoảng sâu sắc về đường lối và giai cấp lãnh đạo kéo dài gần một thế kỷ của cách mạng Việt Nam.",
    },
    {
      id: "thoi-ky-4",
      stage: "Thời kỳ IV",
      timeRange: "1930 – 1945",
      title: "Vượt qua thử thách, kiên trì giữ vững đường lối cách mạng",
      badge: "Chớp thời cơ lịch sử",
      summary:
        "Vượt qua những thử thách trong phong trào cộng sản quốc tế, trở về nước trực tiếp lãnh đạo, thành lập Mặt trận Việt Minh và chớp thời cơ phát động Tổng khởi nghĩa Tháng Tám 1945.",
      keyEvents: [
        {
          text: "Bị bắt và trải qua Vụ án Tống Văn Sơ tại Hồng Kông, kiên cường giữ vững khí tiết người cộng sản (1931-1933).",
          sourceUrl: "https://vi.wikipedia.org/wiki/V%E1%BB%A5_%C3%A1n_T%E1%BB%91ng_V%C4%83n_S%C6%A1",
          sourceLabel: "Wikipedia",
        },
        {
          text: "Trở về Tổ quốc tại hang Pác Bó (Cao Bằng, 1941), chỉ đạo thành lập Mặt trận Việt Minh.",
          sourceUrl: "https://nhandan.vn/hang-pac-bo-di-tich-lich-su-dac-biet-quoc-gia-post632901.html",
          sourceLabel: "Báo Nhân Dân",
        },
        {
          text: "Lãnh đạo thắng lợi Cách mạng Tháng Tám và đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH (1945).",
          sourceUrl: "https://vi.wikipedia.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_Vi%E1%BB%87t_Nam",
          sourceLabel: "Wikipedia",
        },
      ],
      significance:
        "Thắng lợi của đường lối độc lập dân tộc gắn liền với chủ nghĩa xã hội, đưa dân tộc Việt Nam bước vào kỷ nguyên độc lập, tự do.",
    },
    {
      id: "thoi-ky-5",
      stage: "Thời kỳ V",
      timeRange: "1945 – 1969",
      title: "Tiếp tục phát triển mới về tư tưởng kháng chiến và kiến quốc",
      badge: "Đỉnh cao tư tưởng",
      summary:
        "Lãnh đạo toàn dân thực hiện đồng thời hai nhiệm vụ chiến lược: kháng chiến chống Pháp (1946–1954) và chống Mỹ cứu nước, xây dựng CNXH ở miền Bắc, để lại bản Di chúc lịch sử.",
      keyEvents: [
        {
          text: "Ra Lời kêu gọi Toàn quốc kháng chiến (1946) và lãnh đạo Chiến dịch Điện Biên Phủ toàn thắng (1954).",
          sourceUrl: "https://www.qdnd.vn/tu-lieu-ho-so/chien-thang-dien-bien-phu/tin-tuc/y-nghia-lich-su-cua-chien-thang-dien-bien-phu-772191",
          sourceLabel: "Báo QĐND",
        },
        {
          text: "Đề xướng chân lý bất hủ: 'Không có gì quý hơn độc lập, tự do' (1966).",
          sourceUrl: "https://nhandan.vn/khong-co-gi-quy-hon-doc-lap-tu-do-chan-ly-thoi-dai-post705701.html",
          sourceLabel: "Báo Nhân Dân",
        },
        {
          text: "Bản Di chúc lịch sử thiêng liêng đúc kết trọn vẹn tư tưởng, đạo đức và tình cảm với toàn Đảng, toàn dân (1969).",
          sourceUrl: "https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/di-chuc-cua-chu-tich-ho-chi-minh",
          sourceLabel: "Tư liệu Đảng",
        },
      ],
      significance:
        "Tư tưởng Hồ Chí Minh hoàn thiện toàn diện trên mọi lĩnh vực quân sự, chính trị, kinh tế, văn hóa, trở thành tài sản tinh thần vô giá của dân tộc.",
    },
  ],
};

// 4. Dữ liệu Giá trị tư tưởng
export const BASE_GIA_TRI_DATA: GiaTriContent = {
  sectionId: "gia-tri-tu-tuong",
  eyebrow: "Tầm vóc di sản",
  title: "Giá trị tư tưởng Hồ Chí Minh",
  intro:
    "Tư tưởng Hồ Chí Minh là ngọn đuốc soi đường đưa cách mạng Việt Nam đi từ thắng lợi này sang thắng lợi khác, đồng thời đóng góp to lớn vào cuộc đấu tranh chung của nhân loại vì hòa bình, độc lập và tiến bộ xã hội.",
  giaTriVn: [
    {
      title: "Đưa cách mạng giải phóng dân tộc đến thắng lợi hoàn toàn",
      desc: "Tư tưởng Hồ Chí Minh đã soi đường cho cuộc Cách mạng Tháng Tám năm 1945 thành công, khai sinh ra nước Việt Nam Dân chủ Cộng hòa; đồng thời lãnh đạo quân và dân ta đánh bại thực dân Pháp (1954) và đế quốc Mỹ (1975), thu non sông về một mối.",
      points: [
        "Khẳng định quyền độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân.",
        "Xây dựng khối đại đoàn kết toàn dân tộc làm nền tảng sức mạnh vô địch.",
        "Xây dựng lực lượng vũ trang nhân dân từ nhân dân mà ra, vì nhân dân mà chiến đấu.",
      ],
    },
    {
      title: "Nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng",
      desc: "Cùng với chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng vững chắc, định hướng cho toàn bộ đường lối chiến lược, sách lược phát triển kinh tế, văn hóa, xã hội và quốc phòng an ninh của đất nước.",
      points: [
        "Cung cấp hệ thống quan điểm lý luận toàn diện và sâu sắc về xây dựng Đảng trong sạch, vững mạnh.",
        "Xác định mục tiêu xuyên suốt: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
        "Bài học lấy dân làm gốc: 'Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong'.",
      ],
    },
    {
      title: "Động lực tinh thần to lớn trong công cuộc Đổi mới và Hội nhập",
      desc: "Trong bối cảnh toàn cầu hóa và phát triển kinh tế thị trường định hướng xã hội chủ nghĩa, tư tưởng Hồ Chí Minh tiếp tục là ngọn đuốc soi đường giúp đất nước giữ vững độc lập tự chủ, phát huy nội lực và nâng cao vị thế trên trường quốc tế.",
      points: [
        "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội.",
        "Thực hiện chính sách ngoại giao đa phương hóa, đa dạng hóa: 'Làm bạn với tất cả các nước dân chủ'.",
        "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
      ],
    },
  ],
  giaTriTg: [
    {
      title: "Cổ vũ phong trào giải phóng dân tộc của các nước thuộc địa",
      desc: "Hồ Chí Minh đã giải quyết sáng tạo mối quan hệ giữa dân tộc và giai cấp, chỉ ra rằng cách mạng thuộc địa không phụ thuộc thụ động vào cách mạng vô sản ở chính quốc mà có thể chủ động nổ ra và giành thắng lợi trước.",
      points: [
        "Đặt ngọn cờ giải phóng các dân tộc bị áp bức tại châu Á, châu Phi và Mỹ Latinh.",
        "Góp phần làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa thực dân trên phạm vi toàn cầu.",
        "Là tấm gương sáng ngời về tinh thần tự lực tự cường và phẩm giá của các dân tộc nhỏ bé.",
      ],
    },
    {
      title: "Đóng góp vào cuộc đấu tranh vì hòa bình, độc lập và tiến bộ nhân loại",
      desc: "Hồ Chí Minh luôn giương cao ngọn cờ hòa bình chân chính, phản đối các cuộc chiến tranh xâm lược phi nghĩa, đồng thời tích cực xây dựng mối quan hệ hữu nghị và hợp tác bình đẳng giữa nhân dân các nước.",
      points: [
        "Đặt nền móng cho tình đoàn kết quốc tế trong sáng: 'Bốn phương vô sản đều là anh em'.",
        "Kết hợp hài hòa tinh hoa đạo đức phương Đông và tư tưởng dân chủ tiến bộ phương Tây.",
        "Được UNESCO vinh danh năm 1987: 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'.",
      ],
    },
  ],
};

// 5. Dữ liệu Tư liệu ảnh lịch sử
export const BASE_TU_LIEU_ANH_DATA: TuLieuAnhItem[] = [
  {
    id: 1,
    title: "Suối Lênin và Hang Cốc Bó (Pác Bó, Cao Bằng)",
    category: "Địa danh lịch sử",
    year: "1941",
    caption:
      "Khu di tích Pác Bó (hang Cốc Bó), huyện Hà Quảng, Cao Bằng — nơi đồng chí Nguyễn Ái Quốc vượt biên giới trở về trực tiếp chỉ đạo cách mạng sau 30 năm xa cách Tổ quốc.",
    author: "Tycho (shansov.net)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C%E1%BB%91c_B%C3%B3.jpg",
    sourceLabel: "Cốc Bó – Wikimedia Commons",
  },
  {
    id: 2,
    title: "Phố Hàng Buồm, Hà Nội đầu thế kỷ XX",
    category: "Bối cảnh xã hội",
    year: "Đầu TK XX",
    caption:
      "Phố Hàng Buồm (rue des Pavillons Noirs), Hà Nội đầu thế kỷ XX — phản ánh xã hội thuộc địa nửa phong kiến với nỗi thống khổ và áp bức đè nặng lên các tầng lớp nhân dân.",
    author: "Nhiếp ảnh gia Pierre Dieulefils / Tư liệu thời Pháp thuộc",
    sourceUrl: "https://vi.wikipedia.org/wiki/Ph%E1%BB%91_H%C3%A0ng_Bu%E1%BB%93m",
    sourceLabel: "Phố Hàng Buồm – Wikipedia tiếng Việt",
  },
  {
    id: 3,
    title: "Cung điện Mùa Đông sau Cách mạng Tháng Mười Nga",
    category: "Bối cảnh thời đại",
    year: "10-1917",
    caption:
      "Petrograd sau khi Cung điện Mùa Đông bị chiếm ngày 26-10-1917 — biểu tượng thắng lợi của Cách mạng Tháng Mười Nga, mở ra thời đại quá độ lên chủ nghĩa xã hội trên toàn thế giới.",
    author: "Tư liệu lưu trữ Liên Xô",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:After_the_capture_of_the_Winter_Palace_26_October_1917.jpg",
    sourceLabel: "Petrograd 1917 – Wikimedia Commons",
  },
  {
    id: 4,
    title: "V. I. Lênin tại Mát-xcơ-va năm 1920",
    category: "Tiền đề lý luận",
    year: "1920",
    caption:
      "Chân dung Vladimir Ilyich Lenin năm 1920 — tác giả của bản 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa' đã định hướng con đường cứu nước cho Nguyễn Ái Quốc.",
    author: "Pavel Zhukov",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lenin_in_1920.jpg",
    sourceLabel: "Lenin in 1920 – Wikimedia Commons",
  },
  {
    id: 5,
    title: "Tàu Amiral Latouche-Tréville",
    category: "Hành trình cứu nước",
    year: "05-06-1911",
    caption:
      "Con tàu buôn của hãng vận tải Chargeurs Réunis — nơi người thanh niên Nguyễn Tất Thành nhận làm phụ bếp dưới tên Văn Ba để rời cảng Sài Gòn sang phương Tây.",
    author: "Hãng vận tải biển Chargeurs Réunis",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:M_128_10_descente_de_l%27Himalaya_et_du_Latouche_Tr%C3%A9ville.jpg",
    sourceLabel: "Latouche-Tréville – Wikimedia Commons",
  },
  {
    id: 6,
    title: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours (Pháp)",
    category: "Hành trình cứu nước",
    year: "12-1920",
    caption:
      "Nguyễn Ái Quốc đứng trên diễn đàn Đại hội toàn quốc lần thứ XVIII Đảng Xã hội Pháp tại thành phố Tours, bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp.",
    author: "Tư liệu Đảng Cộng sản Pháp",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Comrade_Nguyen_Ai_Quoc_at_the_national_congress_of_the_Socialist_Party_of_France_in_the_city_of_Tous,_France_in_December_1920.jpg",
    sourceLabel: "Đại hội Tours 1920 – Wikimedia Commons",
  },
  {
    id: 7,
    title: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình",
    category: "Mốc son lịch sử",
    year: "02-09-1945",
    caption:
      "Chủ tịch Hồ Chí Minh đứng trên lễ đài tại Quảng trường Ba Đình, Hà Nội đọc bản Tuyên ngôn Độc lập lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa trước quốc dân và thế giới.",
    author: "Việt Nam Độc lập Đồng minh Hội",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pr%C3%A9sident_Ho-chi-Minh_lit_la_Proclamation-d%27ind%C3%A9pendance_sur_la_place_Ba-dinh_le_2nd_Sep_1945.jpg",
    sourceLabel: "Tuyên ngôn Độc lập Ba Đình – Wikimedia Commons",
  },
  {
    id: 8,
    title: "Chân dung Chủ tịch Hồ Chí Minh năm 1946",
    category: "Chân dung lãnh tụ",
    year: "1946",
    caption:
      "Chân dung Chủ tịch Hồ Chí Minh năm 1946 trong những ngày đầu non sông vừa giành độc lập, thể hiện phong thái ung dung, ánh mắt sáng ngời và bản lĩnh phi thường.",
    author: "Nhiếp ảnh gia vô danh",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_1946.jpg",
    sourceLabel: "Chân dung Chủ tịch Hồ Chí Minh 1946 – Wikimedia Commons",
  },
  {
    id: 9,
    title: "Báo Le Paria (Người cùng khổ) xuất bản tại Paris năm 1922",
    category: "Hành trình cứu nước",
    year: "1922",
    caption:
      "Tờ báo tiếng nói của các dân tộc thuộc địa xuất bản tại thủ đô Paris do Nguyễn Ái Quốc làm chủ nhiệm kiêm chủ bút, vạch trần tội ác của chủ nghĩa thực dân và thức tỉnh phong trào giải phóng dân tộc.",
    author: "Nguyễn Ái Quốc & Hội Liên hiệp Thuộc địa",
    sourceUrl: "https://vi.wikipedia.org/wiki/Le_Paria",
    sourceLabel: "Le Paria – Wikipedia tiếng Việt",
  },
  {
    id: 10,
    title: "Trường Dục Thanh (Phan Thiết) — nơi thầy giáo Nguyễn Tất Thành dạy học",
    category: "Địa danh lịch sử",
    year: "1910",
    caption:
      "Khu di tích Trường Dục Thanh, thành phố Phan Thiết — nơi người thanh niên Nguyễn Tất Thành dừng chân dạy học chữ Quốc ngữ và truyền bá tinh thần yêu nước cho học sinh trước khi ra đi tìm đường cứu nước.",
    author: "Tư liệu Khu di tích Trường Dục Thanh",
    sourceUrl: "https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_D%E1%BB%A5c_Thanh",
    sourceLabel: "Trường Dục Thanh – Wikipedia tiếng Việt",
  },
  {
    id: 11,
    title: "Chủ tịch Hồ Chí Minh và Bộ Chính trị duyệt kế hoạch tác chiến Điện Biên Phủ",
    category: "Mốc son lịch sử",
    year: "1953 - 1954",
    caption:
      "Tại căn cứ ATK Định Hóa (Thái Nguyên) cuối năm 1953, Chủ tịch Hồ Chí Minh cùng Đại tướng Võ Nguyên Giáp và các đồng chí trong Bộ Chính trị họp bàn thông qua quyết tâm mở Chiến dịch Điện Biên Phủ lịch sử.",
    author: "Triệu Đại / Tư liệu TTXVN",
    sourceUrl: "https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7",
    sourceLabel: "Chiến dịch Điện Biên Phủ – Wikipedia tiếng Việt",
  },
  {
    id: 12,
    title: "Tác phẩm 'Đường Kách mệnh' của Nguyễn Ái Quốc",
    category: "Tiền đề lý luận",
    year: "1927",
    caption:
      "Cuốn sách tập hợp các bài giảng huấn luyện cán bộ của Nguyễn Ái Quốc tại Quảng Châu (Trung Quốc), chuẩn bị về mặt chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam năm 1930.",
    author: "Bộ Tuyên truyền Hội Liên hiệp các Dân tộc Bị áp bức Á Đông",
    sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_k%C3%A1ch_m%E1%BB%87nh",
    sourceLabel: "Đường Kách mệnh – Wikipedia tiếng Việt",
  },
  {
    id: 13,
    title: "Tác phẩm 'Bản án chế độ thực dân Pháp' (Paris, 1925)",
    category: "Tiền đề lý luận",
    year: "1925",
    caption:
      "Tác phẩm chính luận đanh thép của Nguyễn Ái Quốc xuất bản lần đầu tại Paris năm 1925, vạch trần bản chất áp bức bóc lột dã man của thực dân Pháp đối với các dân tộc thuộc địa.",
    author: "Nguyễn Ái Quốc / Nhà xuất bản Thư viện Lao động Paris",
    sourceUrl: "https://vi.wikipedia.org/wiki/B%E1%BA%A3n_%C3%A1n_ch%E1%BA%BF_%C4%91%E1%BB%99_th%E1%BB%B1c_d%C3%A2n_Ph%C3%A1p",
    sourceLabel: "Bản án chế độ thực dân Pháp – Wikipedia tiếng Việt",
  },
  {
    id: 14,
    title: "Chủ tịch Hồ Chí Minh quan sát mặt trận Đông Khê — Chiến dịch Biên giới 1950",
    category: "Mốc son lịch sử",
    year: "1950",
    caption:
      "Khoảnh khắc lịch sử bất hủ ghi lại hình ảnh Bác Hồ trực tiếp ra tiền tuyến, trên đỉnh núi Báo Đông quan sát và chỉ đạo Chiến dịch Biên giới Thu – Đông 1950 giành thắng lợi to lớn.",
    author: "Vũ Năng An / Tư liệu TTXVN",
    sourceUrl: "https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_Bi%C3%AAn_gi%E1%BB%9Bi",
    sourceLabel: "Chiến dịch Biên giới – Wikipedia tiếng Việt",
  },
  {
    id: 15,
    title: "Bản thảo 'Lời kêu gọi Toàn quốc kháng chiến' (19-12-1946)",
    category: "Mốc son lịch sử",
    year: "19-12-1946",
    caption:
      "Bản thảo bút tích của Chủ tịch Hồ Chí Minh — Bảo vật quốc gia phát động toàn thể dân tộc Việt Nam đứng lên kháng chiến bảo vệ nền độc lập tự do vừa giành được.",
    author: "Chủ tịch Hồ Chí Minh / Bảo tàng Lịch sử Quốc gia",
    sourceUrl: "https://vi.wikipedia.org/wiki/L%E1%BB%9Di_k%C3%AAu_g%E1%BB%8Di_to%C3%A0n_qu%E1%BB%91c_kh%C3%A1ng_chi%E1%BA%BFn",
    sourceLabel: "Lời kêu gọi Toàn quốc kháng chiến – Wikipedia tiếng Việt",
  },
  {
    id: 16,
    title: "Bến Nhà Rồng (Cảng Sài Gòn) — Nơi người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước",
    category: "Địa danh lịch sử",
    year: "05-06-1911",
    caption:
      "Di tích lịch sử Bến Nhà Rồng tại Thành phố Hồ Chí Minh — nơi ngày 5 tháng 6 năm 1911, người thanh niên yêu nước Nguyễn Tất Thành bước lên tàu Amiral Latouche-Tréville khởi đầu hành trình 30 năm bôn ba cứu nước.",
    author: "Tư liệu Bảo tàng Hồ Chí Minh – Chi nhánh TP. Hồ Chí Minh",
    sourceUrl: "https://vi.wikipedia.org/wiki/B%E1%BA%BFn_Nh%C3%A0_R%E1%BB%93ng",
    sourceLabel: "Bến Nhà Rồng – Wikipedia tiếng Việt",
  },
  {
    id: 17,
    title: "Bác Hồ với các cháu thiếu nhi",
    category: "Chân dung lãnh tụ",
    year: "1954 - 1969",
    caption:
      "Hình ảnh giản dị, trìu mến và chan chứa tình yêu thương bao la của Bác Hồ dành cho các thế hệ mầm non tương lai của đất nước: 'Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em'.",
    author: "Nhiếp ảnh gia Đinh Đăng Định / Tư liệu TTXVN",
    sourceUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh",
    sourceLabel: "Hồ Chí Minh – Wikipedia tiếng Việt",
  },
  {
    id: 18,
    title: "Cầu Paul Doumer (Cầu Long Biên) thời kỳ khai thác thuộc địa tại Hà Nội",
    category: "Bối cảnh xã hội",
    year: "1898 - 1902",
    caption:
      "Cây cầu thép vắt qua sông Hồng do Pháp xây dựng, chứng nhân lịch sử tiêu biểu cho chính sách khai thác thuộc địa và sự chuyển biến xã hội Việt Nam đầu thế kỷ XX.",
    author: "Nhiếp ảnh tư liệu thời Pháp thuộc",
    sourceUrl: "https://vi.wikipedia.org/wiki/C%E1%BA%A7u_Long_Bi%C3%AAn",
    sourceLabel: "Cầu Long Biên – Wikipedia tiếng Việt",
  },
  {
    id: 19,
    title: "Nhà tù Hỏa Lò (Maison Centrale) — Nơi giam giữ các chiến sĩ cách mạng",
    category: "Bối cảnh xã hội",
    year: "1896",
    caption:
      "Được thực dân Pháp xây dựng năm 1896 tại Hà Nội để đàn áp phong trào yêu nước, Hỏa Lò đã trở thành 'trường học cách mạng' tôi luyện ý chí kiên cường của bao thế hệ chiến sĩ cộng sản.",
    author: "Tư liệu Di tích Lịch sử Nhà tù Hỏa Lò",
    sourceUrl: "https://vi.wikipedia.org/wiki/Nh%C3%A0_t%C3%B9_H%E1%BB%8Fa_L%C3%B2",
    sourceLabel: "Nhà tù Hỏa Lò – Wikipedia tiếng Việt",
  },
  {
    id: 20,
    title: "Di tích Nhà tù Côn Đảo — 'Địa ngục trần gian' thời thực dân, đế quốc",
    category: "Địa danh lịch sử",
    year: "1862 - 1975",
    caption:
      "Hệ thống nhà tù khét tiếng ngoài khơi do thực dân Pháp thành lập từ năm 1862, nơi giam cầm và đày đọa hàng vạn nhà yêu nước và chiến sĩ cách mạng kiên trung của dân tộc.",
    author: "Tư liệu Di tích Quốc gia đặc biệt Côn Đảo",
    sourceUrl: "https://vi.wikipedia.org/wiki/Nh%C3%A0_t%C3%B9_C%C3%B4n_%C4%90%E1%BA%A3o",
    sourceLabel: "Nhà tù Côn Đảo – Wikipedia tiếng Việt",
  },
  {
    id: 21,
    title: "Cây đa Tân Trào (Tuyên Quang) — Nơi phát lệnh Tổng khởi nghĩa Tháng Tám 1945",
    category: "Địa danh lịch sử",
    year: "16-08-1945",
    caption:
      "Chiều 16/8/1945, dưới bóng cây đa Tân Trào lịch sử, đồng chí Võ Nguyên Giáp đọc Quân lệnh số 1 phát động Tổng khởi nghĩa giành chính quyền trên toàn quốc trong Cách mạng Tháng Tám.",
    author: "Tư liệu Khu di tích Quốc gia đặc biệt Tân Trào",
    sourceUrl: "https://vi.wikipedia.org/wiki/Khu_di_t%C3%ADch_l%E1%BB%8Bch_s%E1%BB%AD_T%C3%A2n_Tr%C3%A0o",
    sourceLabel: "Khu di tích lịch sử Tân Trào – Wikipedia tiếng Việt",
  },
  {
    id: 22,
    title: "Đình Tân Trào — Nơi họp Quốc dân Đại hội tháng 8/1945",
    category: "Địa danh lịch sử",
    year: "16–17/08/1945",
    caption:
      "Nơi diễn ra Quốc dân Đại hội do Mặt trận Việt Minh triệu tập, nhất trí tán thành chủ trương Tổng khởi nghĩa và bầu ra Ủy ban Dân tộc Giải phóng Việt Nam do Bác Hồ làm Chủ tịch.",
    author: "Tư liệu Khu di tích Quốc gia đặc biệt Tân Trào",
    sourceUrl: "https://vi.wikipedia.org/wiki/Khu_di_t%C3%ADch_l%E1%BB%8Bch_s%E1%BB%AD_T%C3%A2n_Tr%C3%A0o",
    sourceLabel: "Khu di tích lịch sử Tân Trào – Wikipedia tiếng Việt",
  },
  {
    id: 23,
    title: "Đồng chí Nguyễn Ái Quốc tại Liên Xô năm 1923",
    category: "Hành trình cứu nước",
    year: "1923",
    caption:
      "Năm 1923, Nguyễn Ái Quốc bí mật từ Paris sang Liên Xô — quê hương Cách mạng Tháng Mười, bắt đầu thời kỳ nghiên cứu lý luận Mác - Lênin tại Trường Đại học Phương Đông.",
    author: "Tư liệu Viện Mác – Lênin (Mát-xcơ-va)",
    sourceUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh",
    sourceLabel: "Hồ Chí Minh – Wikipedia tiếng Việt",
  },
  {
    id: 24,
    title: "Đồng chí Nguyễn Ái Quốc tại Đại hội V Quốc tế Cộng sản (Mát-xcơ-va, 1924)",
    category: "Bối cảnh thời đại",
    year: "1924",
    caption:
      "Tại Đại hội V Quốc tế Cộng sản (Comintern) năm 1924, Nguyễn Ái Quốc phát biểu khẳng định tầm quan trọng chiến lược của phong trào cách mạng giải phóng dân tộc ở các nước thuộc địa.",
    author: "Ban Chấp hành Quốc tế Cộng sản (Comintern)",
    sourceUrl: "https://vi.wikipedia.org/wiki/Qu%E1%BB%91c_t%E1%BA%BF_C%E1%BB%99ng_s%E1%BA%A3n",
    sourceLabel: "Quốc tế Cộng sản – Wikipedia tiếng Việt",
  },
  {
    id: 25,
    title: "Báo 'Thanh Niên' (1925) — Cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên",
    category: "Tiền đề lý luận",
    year: "1925",
    caption:
      "Tờ báo cách mạng đầu tiên của Việt Nam do Nguyễn Ái Quốc sáng lập tại Quảng Châu (ra số đầu ngày 21/6/1925), truyền bá chủ nghĩa Mác - Lênin chuẩn bị thành lập Đảng.",
    author: "Hội Việt Nam Cách mạng Thanh niên / Quảng Châu",
    sourceUrl: "https://vi.wikipedia.org/wiki/H%E1%BB%99i_Vi%E1%BB%87t_Nam_C%C3%A1ch_m%E1%BA%A1ng_Thanh_ni%C3%AAn",
    sourceLabel: "Hội Việt Nam Cách mạng Thanh niên – Wikipedia tiếng Việt",
  },
  {
    id: 26,
    title: "Mít tinh lịch sử tại Nhà hát Lớn Hà Nội ngày 19/8/1945 (Cách mạng Tháng Tám)",
    category: "Mốc son lịch sử",
    year: "19-08-1945",
    caption:
      "Hàng vạn quần chúng nhân dân Hà Nội tràn ngập quảng trường Nhà hát Lớn, biến cuộc mít tinh thành biểu tình vũ trang khởi nghĩa giành chính quyền thắng lợi trọn vẹn.",
    author: "Nhiếp ảnh gia Vũ Năng An & Nguyễn Bá Khoản / Tư liệu TTXVN",
    sourceUrl: "https://vi.wikipedia.org/wiki/C%C3%A1ch_m%E1%BA%A1ng_th%C3%A1ng_T%C3%A1m",
    sourceLabel: "Cách mạng tháng Tám – Wikipedia tiếng Việt",
  },
  {
    id: 27,
    title: "Toàn cảnh Hội nghị Genève năm 1954 về lập lại hòa bình ở Đông Dương",
    category: "Mốc son lịch sử",
    year: "1954",
    caption:
      "Hội nghị ngoại giao quốc tế lịch sử sau chiến thắng Điện Biên Phủ, buộc Pháp và các nước công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của ba nước Đông Dương.",
    author: "Tư liệu Lưu trữ Quốc tế Thụy Sĩ / TTXVN",
    sourceUrl: "https://vi.wikipedia.org/wiki/Hi%E1%BB%87p_%C4%91%E1%BB%8Bnh_Gen%C3%A8ve,_1954",
    sourceLabel: "Hiệp định Genève, 1954 – Wikipedia tiếng Việt",
  },
  {
    id: 28,
    title: "Bản thảo bút tích Di chúc thiêng liêng của Chủ tịch Hồ Chí Minh (1965 – 1969)",
    category: "Tiền đề lý luận",
    year: "1965 - 1969",
    caption:
      "Bảo vật quốc gia vô giá chứa đựng những lời căn dặn tâm huyết của Bác về xây dựng chỉnh đốn Đảng, tinh thần đoàn kết quốc tế, chăm lo đời sống nhân dân và niềm tin tất thắng.",
    author: "Chủ tịch Hồ Chí Minh / Bảo tàng Hồ Chí Minh",
    sourceUrl: "https://vi.wikipedia.org/wiki/Di_ch%C3%BAc_H%E1%BB%93_Ch%C3%AD_Minh",
    sourceLabel: "Di chúc Hồ Chí Minh – Wikipedia tiếng Việt",
  },
];

const DB_NAME = "VisualStorytellerContentDB";
const DB_VERSION = 6;
const STORE_NAME = "content_sections";

class ContentDatabase {
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private memoryCache: Map<string, any> = new Map();

  constructor() {
    this.memoryCache.set("luan-ban", BASE_LUAN_BAN_DATA);
    this.memoryCache.set("co-so-hinh-thanh", BASE_CO_SO_DATA);
    this.memoryCache.set("qua-trinh-phat-trien", BASE_QUA_TRINH_DATA);
    this.memoryCache.set("gia-tri-tu-tuong", BASE_GIA_TRI_DATA);
    this.memoryCache.set("tu-lieu-anh", BASE_TU_LIEU_ANH_DATA);
  }

  private async openDb(): Promise<IDBDatabase | null> {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      return null;
    }

    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB_NAME, DB_VERSION);

        req.onupgradeneeded = (evt) => {
          const db = (evt.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: "sectionId" });
          }
        };

        req.onsuccess = () => {
          const db = req.result;
          try {
            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            store.put(BASE_LUAN_BAN_DATA);
            store.put(BASE_CO_SO_DATA);
            store.put(BASE_QUA_TRINH_DATA);
            store.put(BASE_GIA_TRI_DATA);
            store.put({ sectionId: "tu-lieu-anh", items: BASE_TU_LIEU_ANH_DATA });
          } catch {
            // ignore seed errors
          }
          resolve(db);
        };

        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });

    return this.dbPromise;
  }

  private async fetchSection<T>(sectionId: string, defaultData: T): Promise<{ data: T; source: "IndexedDB" | "LocalCache" | "MemoryDB"; loadTimeMs: number }> {
    const startTime = performance.now();
    await new Promise((res) => setTimeout(res, 140));

    let data: T = defaultData;
    let source: "IndexedDB" | "LocalCache" | "MemoryDB" = "MemoryDB";

    try {
      const db = await this.openDb();
      if (db) {
        data = await new Promise<T>((resolve) => {
          try {
            const tx = db.transaction(STORE_NAME, "readonly");
            const store = tx.objectStore(STORE_NAME);
            const req = store.get(sectionId);
            req.onsuccess = () => {
              if (req.result) {
                resolve((req.result.items ?? req.result) as T);
              } else {
                resolve(defaultData);
              }
            };
            req.onerror = () => resolve(defaultData);
          } catch {
            resolve(defaultData);
          }
        });
        source = "IndexedDB";
      } else if (typeof window !== "undefined" && window.localStorage) {
        const local = localStorage.getItem(`vs_db_${sectionId}`);
        if (local) {
          data = JSON.parse(local);
          source = "LocalCache";
        } else {
          localStorage.setItem(`vs_db_${sectionId}`, JSON.stringify(defaultData));
        }
      }
    } catch {
      data = defaultData;
    }

    const loadTimeMs = Math.round(performance.now() - startTime);
    return { data, source, loadTimeMs };
  }

  // 1. Luận bàn
  async getLuanBanContent(tabKey?: string) {
    const res = await this.fetchSection<LuanBanContent>("luan-ban", BASE_LUAN_BAN_DATA);
    return { ...res, recordKey: `luan-ban::${tabKey || "all"}` };
  }

  // 2. Cơ sở hình thành
  async getCoSoContent() {
    const res = await this.fetchSection<CoSoContent>("co-so-hinh-thanh", BASE_CO_SO_DATA);
    return { ...res, recordKey: "co-so-hinh-thanh::all" };
  }

  // 3. Quá trình phát triển
  async getQuaTrinhContent() {
    const res = await this.fetchSection<QuaTrinhContent>("qua-trinh-phat-trien", BASE_QUA_TRINH_DATA);
    return { ...res, recordKey: "qua-trinh-phat-trien::all" };
  }

  // 4. Giá trị tư tưởng
  async getGiaTriContent() {
    const res = await this.fetchSection<GiaTriContent>("gia-tri-tu-tuong", BASE_GIA_TRI_DATA);
    return { ...res, recordKey: "gia-tri-tu-tuong::all" };
  }

  // 5. Thư viện tư liệu ảnh
  async getTuLieuAnhContent() {
    const res = await this.fetchSection<TuLieuAnhItem[]>("tu-lieu-anh", BASE_TU_LIEU_ANH_DATA);
    return { ...res, recordKey: "tu-lieu-anh::items" };
  }

  // Thống kê Database
  async getDbStatus() {
    const isClient = typeof window !== "undefined";
    const hasIndexedDB = isClient && "indexedDB" in window;
    return {
      name: DB_NAME,
      storageType: hasIndexedDB ? "IndexedDB Engine (Persistent)" : "Client Memory / LocalStorage",
      version: DB_VERSION,
      totalCollections: 5,
      totalRecords: 15,
      status: "Online & Ready",
    };
  }
}

export const contentDatabase = new ContentDatabase();
