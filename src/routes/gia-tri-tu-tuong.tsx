import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Award,
  Globe2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { AnimatedTabs } from "@/components/AnimatedTabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, type GiaTriContent } from "@/lib/content-db";

export const Route = createFileRoute("/gia-tri-tu-tuong")({
  head: () => ({
    meta: [
      { title: "Giá trị tư tưởng Hồ Chí Minh · Visual Storyteller" },
      {
        name: "description",
        content:
          "Giá trị to lớn của tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam và phong trào tiến bộ nhân loại.",
      },
    ],
  }),
  component: GiaTriTuTuongPage,
});

const GIA_TRI_VN_ITEMS = [
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
];

const GIA_TRI_TG_ITEMS = [
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
];

function GiaTriTuTuongPage() {
  const [activeTab, setActiveTab] = React.useState<string>("viet-nam");

  // Nạp dữ liệu động theo yêu cầu (on-demand loading) từ Database
  const { data: dbResult, isLoading } = useQuery({
    queryKey: ["gia-tri-content", activeTab],
    queryFn: () => contentDatabase.getGiaTriContent(),
    staleTime: 1000 * 60 * 5,
  });

  const content: GiaTriContent =
    dbResult?.data || (contentDatabase as any).memoryCache?.get("gia-tri-tu-tuong");

  const tabs = [
    {
      id: "viet-nam",
      label: "Cách mạng Việt Nam",
      icon: <ShieldCheck className="h-4 w-4" />,
      badge: "Dân tộc",
    },
    {
      id: "the-gioi",
      label: "Tiến bộ nhân loại",
      icon: <Globe2 className="h-4 w-4" />,
      badge: "Thời đại",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs">{content?.eyebrow || "Tầm vóc & Ý nghĩa"}</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
          {content?.title || "Giá trị tư tưởng Hồ Chí Minh"}
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {content?.intro ||
            "Tư tưởng Hồ Chí Minh không chỉ là tài sản tinh thần vô giá của dân tộc Việt Nam, mà còn là đóng góp quan trọng vào kho tàng văn hóa, tư tưởng chính trị tiến bộ của nhân loại trong thế kỷ XX và hôm nay."}
        </p>
      </div>

      {/* Animated Tabs */}
      <AnimatedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab}>
        {/* Tab 1: Đối với cách mạng Việt Nam */}
        {activeTab === "viet-nam" && (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              {content.giaTriVn.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-4 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-bold text-primary">
                        0{idx + 1}
                      </span>
                      <Award className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-border pt-4">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex items-center gap-6 flex-wrap md:flex-nowrap">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-foreground">
                  Kim chỉ nam xuyên suốt thời kỳ Đổi mới
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Đảng ta khẳng định: “Đảng lấy chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh làm
                  nền tảng tư tưởng, kim chỉ nam cho hành động”. Đó là sự đúc kết từ thực tiễn lịch
                  sử máu và hoa của dân tộc.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Đối với sự phát triển tiến bộ của nhân loại */}
        {activeTab === "the-gioi" && (
          <div className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {content.giaTriTg.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm hover:border-gold/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-gold border-gold/40">
                      Giá trị toàn cầu 0{idx + 1}
                    </Badge>
                    <Globe2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {item.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* UNESCO Recognition Card */}
            <div className="rounded-2xl border border-gold/40 bg-ink text-parchment p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-8 w-8 text-gold shrink-0" />
                <div>
                  <span className="eyebrow text-gold text-xs">Vinh danh quốc tế</span>
                  <h3 className="font-display text-2xl font-bold text-parchment">
                    Nghị quyết UNESCO năm 1987
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-parchment/80 leading-relaxed max-w-4xl italic font-display">
                “Chủ tịch Hồ Chí Minh là một biểu tượng kiệt xuất về quyết tâm của cả một dân tộc,
                đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam,
                góp phần vào cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập dân tộc, dân
                chủ và tiến bộ xã hội.”
              </p>
              <div className="pt-2 text-xs text-gold/80 font-mono">
                Khóa họp lần thứ 24 của Đại hội đồng UNESCO tại Paris, Pháp (Nghị quyết 24C/18.65)
              </div>
            </div>
          </div>
        )}
      </AnimatedTabs>

      {/* Navigation to next topic */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/qua-trinh-phat-trien">
            <span>← Quay lại: Quá trình phát triển</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/luan-ban">
            <span>Tiếp theo: Luận bàn Thời thế & Anh hùng</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
