import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Milestone,
  ArrowRight,
  Calendar,
  Flag,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { AnimatedTabs } from "@/components/AnimatedTabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, type QuaTrinhContent } from "@/lib/content-db";

import tk1911 from "@/assets/tk-1911.jpg";
import tk1920 from "@/assets/tk-1920.jpg";
import tk1941 from "@/assets/tk-1941.jpg";
import tk1945 from "@/assets/tk-1945.jpg";
import thucTienVn from "@/assets/thuctien-vn.jpg";

export const Route = createFileRoute("/qua-trinh-phat-trien")({
  head: () => ({
    meta: [
      { title: "Quá trình hình thành và phát triển (1911–1969) · Visual Storyteller" },
      {
        name: "description",
        content:
          "Hành trình lịch sử 5 thời kỳ phát triển tư tưởng Hồ Chí Minh từ năm 1911 đến 1969 với các mốc son chói lọi.",
      },
    ],
  }),
  component: QuaTrinhPhatTrienPage,
});

export interface KeyEventItem {
  text: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

interface PeriodItem {
  id: string;
  stage: string;
  timeRange: string;
  title: string;
  badge: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  summary: string;
  keyEvents: KeyEventItem[];
  significance: string;
}

const PERIODS: PeriodItem[] = [
  {
    id: "thoi-ky-1",
    stage: "Thời kỳ I",
    timeRange: "Trước ngày 05-06-1911",
    title: "Hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước",
    badge: "Nuôi dưỡng hoài bão",
    image: thucTienVn,
    imageAlt: "Hà Nội đầu thế kỷ XX",
    imageCaption: "Bối cảnh xã hội Việt Nam thời niên thiếu của người thanh niên Nguyễn Sinh Cung.",
    summary:
      "Nguyễn Sinh Cung tiếp thu truyền thống yêu nước của gia đình và quê hương xứ Nghệ; chứng kiến cảnh nước mất nhà tan và sự thất bại của các bậc tiền bối, từ đó nung nấu quyết tâm ra đi tìm một con đường mới.",
    keyEvents: [
      {
        text: "Hấp thụ truyền thống hiếu học, yêu nước thương nòi từ thân phụ Nguyễn Sinh Sắc và thân mẫu Hoàng Thị Loan.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_Sinh_S%E1%BA%AFc",
        sourceLabel: "Wikipedia",
      },
      {
        text: "Học tập tại trường Quốc học Huế, tiếp xúc với văn hóa phương Tây và các khẩu hiệu Tự do – Bình đẳng – Bác ái.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_Trung_h%E1%BB%8Dc_ph%E1%BB%95_th%C3%B4ng_chuy%C3%AAn_Qu%E1%BB%91c_H%E1%BB%8Dc_%E2%80%93_Hu%E1%BA%BF",
        sourceLabel: "Wikipedia",
      },
      {
        text: "Tham gia phong trào chống thuế ở Trung Kỳ (1908), thấu hiểu nỗi thống khổ của người nông dân.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/Phong_tr%C3%A0o_ch%E1%BB%91ng_s%C6%B0u_thu%E1%BA%BF_Trung_K%E1%BB%B3_1908",
        sourceLabel: "Wikipedia",
      },
      {
        text: "Rời trường Dục Thanh (Phan Thiết) vào Sài Gòn, chuẩn bị cho chuyến vượt đại dương sang phương Tây.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_D%E1%BB%A5c_Thanh",
        sourceLabel: "Wikipedia",
      },
    ],
    significance:
      "Hình thành hoài bão cứu nước cứu dân, tư duy độc lập tự chủ và quyết định không đi theo lối mòn của các sĩ phu đương thời.",
  },
  {
    id: "thoi-ky-2",
    stage: "Thời kỳ II",
    timeRange: "06-06-1911 → 30-12-1920",
    title: "Tìm thấy con đường cứu nước, giải phóng dân tộc",
    badge: "Bước ngoặt lập trường",
    image: tk1911,
    imageAlt: "Tàu Latouche-Tréville",
    imageCaption:
      "Tàu Amiral Latouche-Tréville — nơi Nguyễn Tất Thành làm phụ bếp rời cảng Sài Gòn năm 1911.",
    summary:
      "Khảo sát thực tiễn tại các nước tư bản phát triển và thuộc địa; tiếp cận Luận cương Lênin và quyết định gia nhập Quốc tế Cộng sản, xác định con đường cách mạng vô sản cho dân tộc Việt Nam.",
    keyEvents: [
      {
        text: "05-06-1911: Nguyễn Tất Thành lấy tên Văn Ba, lên tàu Amiral Latouche-Tréville rời Sài Gòn sang Pháp.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/B%E1%BA%BFn_Nh%C3%A0_R%E1%BB%93ng",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1911 – 1917: Bôn ba qua nhiều nước ở châu Âu, châu Phi, châu Mỹ; thấu hiểu bản chất chủ nghĩa đế quốc.",
        sourceUrl:
          "https://nhandan.vn/hanh-trinh-30-nam-tim-duong-cuu-nuoc-cua-nguyen-tat-thanh-post649313.html",
        sourceLabel: "Báo Nhân Dân",
      },
      {
        text: "1919: Thay mặt nhóm người Việt Nam yêu nước tại Pháp gửi 'Bản Yêu sách của nhân dân An Nam' đến Hội nghị Versailles.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Y%C3%AAu_s%C3%A1ch_c%E1%BB%A7a_nh%C3%A2n_d%C3%A2n_An_Nam",
        sourceLabel: "Wikipedia",
      },
      {
        text: "07-1920: Đọc 'Sơ thảo lần thứ nhất những luận cương...' của Lênin và tìm ra con đường giải phóng cho dân tộc.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/Lenin",
        sourceLabel: "Wikipedia",
      },
      {
        text: "12-1920: Tại Đại hội Tours, bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp.",
        sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A3ng_C%E1%BB%99ng_s%E1%BA%A3n_Ph%C3%A1p",
        sourceLabel: "Wikipedia",
      },
    ],
    significance:
      "Bước ngoặt căn bản về chất: chuyển từ chủ nghĩa yêu nước truyền thống sang lập trường chủ nghĩa Mác – Lênin và cách mạng vô sản.",
  },
  {
    id: "thoi-ky-3",
    stage: "Thời kỳ III",
    timeRange: "31-12-1920 → 03-02-1930",
    title: "Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam",
    badge: "Định hình đường lối",
    image: tk1920,
    imageAlt: "Nguyễn Ái Quốc tại Đại hội Tours 1920",
    imageCaption: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours (Pháp), tháng 12-1920.",
    summary:
      "Tích cực hoạt động lý luận và thực tiễn trong phong trào cộng sản quốc tế, chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.",
    keyEvents: [
      {
        text: "1921: Sáng lập Hội Liên hiệp thuộc địa và chủ nhiệm kiêm chủ bút báo 'Le Paria' (Người cùng khổ).",
        sourceUrl: "https://vi.wikipedia.org/wiki/Le_Paria",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1923 – 1924: Hoạt động tại Liên Xô, tham dự Đại hội V Quốc tế Cộng sản, bảo vệ quan điểm về vai trò cách mạng thuộc địa.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Qu%E1%BB%91c_t%E1%BA%BF_C%E1%BB%99ng_s%E1%BA%A3n",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1925: Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (Trung Quốc), mở các lớp huấn luyện cán bộ.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/H%E1%BB%99i_Vi%E1%BB%87t_Nam_C%C3%A1ch_m%E1%BA%A1ng_Thanh_ni%C3%AAn",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1927: Xuất bản cuốn sách kinh điển 'Đường Kách mệnh' – cẩm nang lý luận chuẩn bị thành lập Đảng.",
        sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_k%C3%A1ch_m%E1%BB%87nh",
        sourceLabel: "Wikipedia",
      },
      {
        text: "03-02-1930: Chủ trì Hội nghị hợp nhất, sáng lập Đảng Cộng sản Việt Nam và thông qua Cương lĩnh chính trị đầu tiên.",
        sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A3ng_C%E1%BB%99ng_s%E1%BA%A3n_Vi%E1%BB%87t_Nam",
        sourceLabel: "Báo Điện tử ĐCSVN",
      },
    ],
    significance:
      "Xây dựng hệ thống quan điểm toàn diện, sáng tạo về con đường giải phóng dân tộc Việt Nam, chấm dứt cuộc khủng hoảng đường lối lãnh đạo.",
  },
  {
    id: "thoi-ky-4",
    stage: "Thời kỳ IV",
    timeRange: "04-02-1930 → 28-01-1941",
    title: "Vượt qua thử thách, kiên trì giữ vững đường lối cách mạng đúng đắn",
    badge: "Bản lĩnh kiên định",
    image: tk1941,
    imageAlt: "Khu di tích hang Pác Bó Cao Bằng",
    imageCaption: "Hang Cốc Bó, Pác Bó (Cao Bằng) — mốc son Người trở về nước sau 30 năm bôn ba.",
    summary:
      "Vượt qua những nhận thức giáo điều, 'tả khuynh' trong phong trào cộng sản thời bấy giờ, kiên định đường lối giương cao ngọn cờ độc lập dân tộc gắn liền với ruộng đất cho dân cày; chuẩn bị điều kiện về nước trực tiếp lãnh đạo.",
    keyEvents: [
      {
        text: "1931 – 1933: Bị chính quyền thực dân Anh bắt giam tại Hồng Kông (vụ án Tống Văn Sơ), được luật sư Loseby bảo vệ.",
        sourceUrl: "https://vi.wikipedia.org/wiki/V%E1%BB%A5_%C3%A1n_T%E1%BB%91ng_V%C4%83n_S%C6%A1",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1934 – 1938: Học tập và nghiên cứu tại Viện Nghiên cứu các vấn đề dân tộc và thuộc địa ở Mát-xcơ-va.",
        sourceUrl: "https://nhandan.vn/thoi-ky-nguyen-ai-quoc-o-lien-xo-1934-1938-post702143.html",
        sourceLabel: "Báo Nhân Dân",
      },
      {
        text: "1935: Đại hội VII Quốc tế Cộng sản chuyển hướng chiến lược lập Mặt trận Dân chủ chống phát xít, khẳng định quan điểm của Người là chính xác.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Qu%E1%BB%91c_t%E1%BA%BF_C%E1%BB%99ng_s%E1%BA%A3n",
        sourceLabel: "Wikipedia",
      },
      {
        text: "28-01-1941: Vượt mốc 108 biên giới Việt – Trung trở về hang Cốc Bó, Pác Bó (Cao Bằng) trực tiếp lãnh đạo cách mạng.",
        sourceUrl: "https://vi.wikipedia.org/wiki/P%C3%A1c_B%C3%B3",
        sourceLabel: "Báo Nhân Dân",
      },
    ],
    significance:
      "Chứng minh bản lĩnh kiên cường, phương pháp tư duy biện chứng sắc sảo và niềm tin tuyệt đối vào sức mạnh của khối đại đoàn kết toàn dân tộc.",
  },
  {
    id: "thoi-ky-5",
    stage: "Thời kỳ V",
    timeRange: "28-01-1941 → 02-09-1969",
    title: "Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng",
    badge: "Đỉnh cao thắng lợi",
    image: tk1945,
    imageAlt: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập 1945",
    imageCaption:
      "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, ngày 2-9-1945.",
    summary:
      "Tư tưởng Hồ Chí Minh hoàn thiện và hiện thực hóa thành những thắng lợi vĩ đại: Cách mạng Tháng Tám 1945, hai cuộc kháng chiến chống Pháp – chống Mỹ, và sự nghiệp xây dựng chủ nghĩa xã hội.",
    keyEvents: [
      {
        text: "05-1941: Chủ trì Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Minh",
        sourceLabel: "Wikipedia",
      },
      {
        text: "19-08-1945: Lãnh đạo cuộc Tổng khởi nghĩa Cách mạng Tháng Tám giành chính quyền về tay nhân dân.",
        sourceUrl: "https://vi.wikipedia.org/wiki/C%C3%A1ch_m%E1%BA%A1ng_Th%C3%A1ng_T%C3%A1m",
        sourceLabel: "Wikipedia",
      },
      {
        text: "02-09-1945: Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.",
        sourceUrl:
          "https://vi.wikipedia.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_Vi%E1%BB%87t_Nam",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1946 – 1954: Đề ra đường lối kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh; làm nên chiến thắng Điện Biên Phủ 'lừng lẫy năm châu'.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7",
        sourceLabel: "Wikipedia",
      },
      {
        text: "1954 – 1969: Lãnh đạo đồng thời hai chiến lược cách mạng: xây dựng CNXH ở miền Bắc và kháng chiến chống Mỹ ở miền Nam.",
        sourceUrl: "https://nhandan.vn/bac-ho-voi-su-nghiep-xay-dung-chu-nghia-xa-hoi-o-mien-bac-post602951.html",
        sourceLabel: "Báo Nhân Dân",
      },
      {
        text: "1969: Để lại bản Di chúc lịch sử kết tinh đạo đức, trí tuệ và khát vọng hòa bình cho toàn dân tộc.",
        sourceUrl: "https://vi.wikipedia.org/wiki/Di_ch%C3%BAc_H%E1%BB%93_Ch%C3%AD_Minh",
        sourceLabel: "Wikipedia",
      },
    ],
    significance:
      "Tư tưởng Hồ Chí Minh trở thành di sản tinh thần vô giá, nền tảng tư tưởng và kim chỉ nam đưa đất nước vững bước trên con đường phát triển.",
  },
];

const PERIOD_IMAGES: Record<string, { image: string; alt: string; caption: string }> = {
  "thoi-ky-1": {
    image: thucTienVn,
    alt: "Hà Nội đầu thế kỷ XX",
    caption: "Bối cảnh xã hội Việt Nam thời niên thiếu của người thanh niên Nguyễn Sinh Cung.",
  },
  "thoi-ky-2": {
    image: tk1920,
    alt: "Nguyễn Ái Quốc tại Đại hội Tours 1920",
    caption: "Nguyễn Ái Quốc tại Đại hội Tours (Pháp) năm 1920 — bước ngoặt tìm ra con đường cứu nước.",
  },
  "thoi-ky-3": {
    image: tk1911,
    alt: "Tàu Amiral Latouche-Tréville",
    caption: "Tàu Amiral Latouche-Tréville — mở đầu hành trình bôn ba tìm chân lý cách mạng.",
  },
  "thoi-ky-4": {
    image: tk1941,
    alt: "Cột mốc 108 và hang Pác Bó 1941",
    caption: "Sau 30 năm bôn ba, Bác trở về Pác Bó (Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam.",
  },
  "thoi-ky-5": {
    image: tk1945,
    alt: "Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình",
    caption: "Ngày 02/09/1945 tại Quảng trường Ba Đình — mốc son chói lọi mở ra kỷ nguyên độc lập tự do.",
  },
};

function QuaTrinhPhatTrienPage() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>("thoi-ky-1");

  // Nạp dữ liệu động theo yêu cầu (on-demand loading) từ Database
  const { data: dbResult, isLoading } = useQuery({
    queryKey: ["qua-trinh-content", selectedPeriod],
    queryFn: () => contentDatabase.getQuaTrinhContent(),
    staleTime: 1000 * 60 * 5,
  });

  const content: QuaTrinhContent =
    dbResult?.data || (contentDatabase as any).memoryCache?.get("qua-trinh-phat-trien");
  const periods = content?.periods || PERIODS;

  const tabs = periods.map((p) => ({
    id: p.id,
    label: p.stage,
    badge: p.timeRange.split("→")[0]?.trim(),
  }));

  const current = periods.find((p) => p.id === selectedPeriod) ?? periods[0]!;
  const currentMedia = PERIOD_IMAGES[current.id] ?? {
    image: thucTienVn,
    alt: current.title,
    caption: current.summary,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs">{content?.eyebrow || "Tiến trình lịch sử"}</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
          {content?.title || "Quá trình hình thành và phát triển (1911 – 1969)"}
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {content?.intro ||
            "Trải qua gần 6 thập kỷ hoạt động không ngừng nghỉ, tư tưởng Hồ Chí Minh đã phát triển qua 5 thời kỳ lịch sử gắn liền với những mốc son chói lọi của cách mạng Việt Nam và phong trào giải phóng dân tộc trên thế giới."}
        </p>
      </div>

      {/* Interactive Tabs for 5 Periods */}
      <AnimatedTabs tabs={tabs} activeTab={selectedPeriod} onChange={setSelectedPeriod}>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] items-start">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {current.stage}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gold font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    {current.timeRange}
                  </span>
                  <Badge variant="outline" className="text-muted-foreground">
                    {current.badge}
                  </Badge>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {current.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
                  {current.summary}
                </p>
              </div>

              {/* Key Events */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <Flag className="h-4 w-4" />
                  Các mốc sự kiện tiêu biểu
                </h3>
                <div className="space-y-2.5">
                  {current.keyEvents.map((evt, i) => (
                    <div
                      key={i}
                      className="group/evt flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed p-2.5 rounded-xl border border-transparent hover:border-border/80 hover:bg-secondary/40 transition-all duration-150"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary font-bold text-[0.65rem] border border-border group-hover/evt:bg-primary group-hover/evt:text-primary-foreground transition-colors">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-foreground/90 leading-relaxed">{evt.text}</span>
                        {evt.sourceUrl && (
                          <div className="pt-1.5">
                            <a
                              href={evt.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Mở bài viết ${evt.sourceLabel || "tư liệu"} về sự kiện này`}
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-150 active:scale-95 shadow-2xs"
                            >
                              <span>{evt.sourceLabel || "Xem tư liệu"}</span>
                              <ExternalLink className="size-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Significance Box */}
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 sm:p-5 space-y-1.5">
                <span className="eyebrow text-[0.68rem] text-gold flex items-center gap-1.5 font-bold">
                  <Sparkles className="h-3.5 w-3.5" />Ý nghĩa lịch sử của giai đoạn này
                </span>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {current.significance}
                </p>
              </div>
            </div>

            {/* Historical Photo Card */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={currentMedia.image}
                  alt={currentMedia.alt}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 photo-frame"
                />
              </div>
              <p className="text-xs text-muted-foreground italic leading-relaxed text-center">
                {currentMedia.caption}
              </p>
            </div>
          </div>
        </div>
      </AnimatedTabs>

      {/* Complete Linear Timeline Overview */}
      <div className="rounded-2xl border border-border bg-ink text-parchment p-8 sm:p-12 space-y-8">
        <div className="space-y-2">
          <span className="eyebrow text-gold text-xs">Tổng quan tiến trình</span>
          <h2 className="font-display text-3xl font-bold text-parchment">
            5 Thời kỳ trong một dòng chảy liên tục
          </h2>
          <p className="text-xs sm:text-sm text-parchment/70 max-w-2xl">
            Tư tưởng Hồ Chí Minh là một hệ thống mở, không ngừng được bổ sung, kiểm nghiệm và hoàn
            thiện qua thực tiễn sinh động của phong trào giải phóng dân tộc.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 pt-4">
          {PERIODS.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => setSelectedPeriod(p.id)}
              className={`cursor-pointer rounded-xl p-5 border transition-all space-y-3 ${
                selectedPeriod === p.id
                  ? "border-gold bg-gold/15 shadow-md scale-102"
                  : "border-parchment/15 bg-white/5 hover:border-parchment/30 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-gold font-mono">
                <span>0{idx + 1}</span>
                <span>{p.stage}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-parchment leading-snug line-clamp-2">
                {p.title}
              </h3>
              <p className="text-[0.7rem] text-parchment/60 font-mono">{p.timeRange}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to next topic */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/co-so-hinh-thanh">
            <span>← Quay lại: Cơ sở hình thành</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/gia-tri-tu-tuong">
            <span>Tiếp theo: Giá trị tư tưởng Hồ Chí Minh</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
