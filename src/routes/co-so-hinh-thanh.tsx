import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Landmark,
  BookOpen,
  UserCheck,
  ArrowRight,
  Globe,
  Shield,
  Sparkles,
  Quote,
  ExternalLink,
} from "lucide-react";
import { AnimatedTabs } from "@/components/AnimatedTabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, type CoSoContent } from "@/lib/content-db";

import thucTienVn from "@/assets/thuctien-vn.jpg";
import thucTienTg from "@/assets/thuctien-tg.jpg";
import lyLuan from "@/assets/lyluan.jpg";
import chanDung from "@/assets/chandung-1946.jpg";

export const Route = createFileRoute("/co-so-hinh-thanh")({
  head: () => ({
    meta: [
      { title: "Cơ sở hình thành tư tưởng Hồ Chí Minh · Visual Storyteller" },
      {
        name: "description",
        content:
          "Nghiên cứu cơ sở thực tiễn Việt Nam & thế giới, tiền đề lý luận và nhân tố chủ quan hình thành tư tưởng Hồ Chí Minh.",
      },
    ],
  }),
  component: CoSoHinhThanhPage,
});

const THUC_TIEN_VN = [
  {
    title: "Sự xâm lược của thực dân Pháp (1858)",
    desc: "Thực dân Pháp nổ súng xâm lược Việt Nam; triều đình phong kiến nhà Nguyễn từng bước đầu hàng, ký kết các hiệp ước bất bình đẳng và trở thành tay sai cho chính quyền thực dân.",
    sourceUrl: "https://vi.wikipedia.org/wiki/Tr%E1%BA%ADn_%C4%90%C3%A0_N%E1%BA%B5ng",
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
    sourceUrl: "https://vi.wikipedia.org/wiki/Giai_c%E1%BA%A5p_c%C3%B4ng_nh%C3%A2n",
    sourceLabel: "Wikipedia",
  },
];

const THUC_TIEN_TG = [
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
];

const LY_LUAN_DATA = [
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
];

const CHU_QUAN_DATA = [
  {
    title: "Phẩm chất cá nhân & Đạo đức cách mạng trong sáng",
    icon: Shield,
    content:
      "Nguyễn Ái Quốc – Hồ Chí Minh sở hữu một hoài bão cứu nước cứu dân cháy bỏng; ý chí kiên định phi thường trước mọi gian nan tù đày; tư duy độc lập, tự chủ, giàu tính phản biện và đổi mới sáng tạo; tầm nhìn chiến lược vượt trước thời đại; và một nhân cách suốt đời tận trung với nước, tận hiếu với dân.",
  },
  {
    title: "Tài năng hoạt động thực tiễn & Năng lực tổng kết lý luận",
    icon: Sparkles,
    content:
      "Trải qua 30 năm bôn ba qua gần 30 quốc gia thuộc nhiều châu lục, thấu hiểu sâu sắc đời sống thống khổ của người lao động thuộc địa lẫn chính quốc, Người có năng lực tổng kết thực tiễn thiên tài: chuyển hóa lý luận Mác – Lênin thành đường lối cách mạng sinh động, phù hợp với đặc thù xã hội Việt Nam.",
  },
];

function CoSoHinhThanhPage() {
  const [activeTab, setActiveTab] = React.useState<string>("thuc-tien");

  // Nạp dữ liệu động theo yêu cầu (on-demand loading) từ Database
  const { data: dbResult, isLoading } = useQuery({
    queryKey: ["co-so-content", activeTab],
    queryFn: () => contentDatabase.getCoSoContent(),
    staleTime: 1000 * 60 * 5,
  });

  const content: CoSoContent =
    dbResult?.data || (contentDatabase as any).memoryCache?.get("co-so-hinh-thanh");

  const tabs = [
    {
      id: "thuc-tien",
      label: "Cơ sở thực tiễn",
      icon: <Landmark className="h-4 w-4" />,
      badge: "Việt Nam & Thế giới",
    },
    {
      id: "ly-luan",
      label: "Tiền đề lý luận",
      icon: <BookOpen className="h-4 w-4" />,
      badge: "3 trụ cột",
    },
    {
      id: "chu-quan",
      label: "Nhân tố chủ quan",
      icon: <UserCheck className="h-4 w-4" />,
      badge: "Hồ Chí Minh",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs">{content?.eyebrow || "Chuyên đề nghiên cứu"}</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
          {content?.title || "Cơ sở hình thành tư tưởng Hồ Chí Minh"}
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {content?.intro ||
            "Tư tưởng Hồ Chí Minh không phải là sự xuất hiện ngẫu nhiên, mà là kết quả tất yếu của quá trình kết tinh sâu sắc giữa thực tiễn lịch sử dân tộc, xu thế thời đại, tinh hoa văn hóa nhân loại và thiên tài của một nhân cách vĩ đại."}
        </p>
      </div>

      {/* Animated Tabs Navigation */}
      <AnimatedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab}>
        {/* Tab 1: Cơ sở thực tiễn */}
        {activeTab === "thuc-tien" && (
          <div className="space-y-12">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Thực tiễn Việt Nam */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={thucTienVn}
                    alt="Phố Hàng Buồm đầu thế kỷ XX"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 photo-frame"
                  />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    Bối cảnh trong nước
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Thực tiễn Việt Nam cuối TK XIX – đầu TK XX
                  </h3>
                  <p className="text-xs text-muted-foreground italic">
                    <a
                      href="https://vi.wikipedia.org/wiki/Ph%E1%BB%91_H%C3%A0ng_Bu%E1%BB%93m"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Phố Hàng Buồm – Wikipedia tiếng Việt"
                      className="hover:underline hover:text-primary inline-flex items-center gap-1 font-medium"
                    >
                      <span>Phố Hàng Buồm, Hà Nội đầu thế kỷ XX</span>
                      <ExternalLink className="size-2.5 inline" />
                    </a>{" "}
                    — phản ánh xã hội thuộc địa nửa phong kiến.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {content.thucTienVn.map((item) => (
                    <div key={item.title} className="group/item flex gap-3.5 p-2 rounded-xl hover:bg-secondary/40 transition-colors">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                          {item.sourceUrl && (
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Mở bài viết ${item.sourceLabel} về ${item.title}`}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                            >
                              <span>{item.sourceLabel}</span>
                              <ExternalLink className="size-2.5" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thực tiễn Thế giới */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={thucTienTg}
                    alt="Cung điện Mùa Đông bị chiếm, tháng 10-1917"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 photo-frame"
                  />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-accent border-accent/30">
                    Xu thế quốc tế
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Thực tiễn thời đại và thế giới
                  </h3>
                  <p className="text-xs text-muted-foreground italic">
                    Petrograd sau khi Cung điện Mùa Đông bị chiếm (10-1917) — mở ra thời đại mới.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {content.thucTienTg.map((item) => (
                    <div key={item.title} className="group/item flex gap-3.5 p-2 rounded-xl hover:bg-secondary/40 transition-colors">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                          {item.sourceUrl && (
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Mở bài viết ${item.sourceLabel} về ${item.title}`}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-foreground/80 hover:text-accent-foreground hover:underline"
                            >
                              <span>{item.sourceLabel}</span>
                              <ExternalLink className="size-2.5" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  Sự tương tác mật thiết giữa thực tiễn trong nước và quốc tế đã thúc đẩy Nguyễn Tất
                  Thành quyết định ra đi tìm đường cứu nước vào năm 1911.
                </p>
              </div>
              <Button asChild size="sm" className="gap-2">
                <Link to="/qua-trinh-phat-trien">
                  <span>Xem 5 thời kỳ phát triển</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Tab 2: Tiền đề lý luận */}
        {activeTab === "ly-luan" && (
          <div className="space-y-10">
            <div className="grid gap-6 md:grid-cols-3">
              {content.lyLuan.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-4 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-extrabold text-gold">
                        {item.number}
                      </span>
                      <Badge variant="secondary" className="text-[0.7rem]">
                        {item.badge}
                      </Badge>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                      {item.summary}
                    </p>
                    <ul className="space-y-2.5 pt-2">
                      {item.details.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Lenin Spotlight Card */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8 grid gap-8 md:grid-cols-[280px_1fr] items-center">
              <img
                src={lyLuan}
                alt="Chân dung V.I. Lênin năm 1920"
                className="rounded-xl w-full aspect-3/4 object-cover photo-frame"
              />
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">
                  Bước ngoặt lịch sử 07/1920
                </Badge>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Gặp gỡ Luận cương Lênin – Lời giải cho bài toán giải phóng dân tộc
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Khi đọc “Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc
                  địa” của V. I. Lênin đăng trên báo L'Humanité, Nguyễn Ái Quốc đã nghẹn ngào reo
                  lên như nói với đồng bào:{" "}
                  <strong className="text-foreground">
                    “Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con
                    đường giải phóng chúng ta!”
                  </strong>
                  .
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Chủ nghĩa Mác – Lênin trở thành kim chỉ nam cho mọi thắng lợi
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Nhân tố chủ quan */}
        {activeTab === "chu-quan" && (
          <div className="space-y-10">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 grid gap-8 md:grid-cols-[300px_1fr] items-start shadow-sm">
              <div className="space-y-3">
                <img
                  src={chanDung}
                  alt="Chân dung Chủ tịch Hồ Chí Minh 1946"
                  className="rounded-xl w-full aspect-3/4 object-cover photo-frame"
                />
                <p className="text-xs text-muted-foreground text-center italic">
                  Chân dung Chủ tịch Hồ Chí Minh năm 1946 — bản lĩnh phi thường của vị lãnh tụ dân
                  tộc.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="text-gold border-gold/30">
                    Nhân tố quyết định
                  </Badge>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Nhân tố chủ quan Hồ Chí Minh
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Mọi điều kiện khách quan chỉ trở thành hiện thực cách mạng khi được soi rọi và
                    chuyển hóa qua trí tuệ uyên bác, ý chí sắt đá và trái tim nhân ái bao la của Hồ
                    Chí Minh.
                  </p>
                </div>

                <div className="space-y-4">
                  {content.chuQuan.map((item, idx) => {
                    const Icon = idx === 0 ? Shield : Sparkles;
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-border/80 bg-secondary/40 p-5 space-y-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="font-display text-lg font-bold text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-10.5">
                          {item.content}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-ink text-parchment p-6 relative overflow-hidden">
                  <Quote className="h-12 w-12 text-gold/20 absolute -top-2 right-2" />
                  <p className="relative z-10 text-sm italic font-display text-parchment/90 leading-relaxed">
                    “Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ tịch, người anh
                    hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và
                    non sông đất nước ta.”
                  </p>
                  <span className="mt-3 block text-xs font-semibold text-gold tracking-wider uppercase">
                    — Điếu văn của Ban Chấp hành Trung ương Đảng (1969)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatedTabs>

      {/* Navigation to next topic */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/">
            <span>← Quay lại Trang chủ</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/qua-trinh-phat-trien">
            <span>Tiếp theo: Quá trình phát triển 1911–1969</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
