import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Scale,
  ArrowRight,
  Quote,
  CheckCircle,
  Lightbulb,
  MessageSquareQuote,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Award,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { AnimatedTabs } from "@/components/AnimatedTabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, type LuanBanContent } from "@/lib/content-db";

export const Route = createFileRoute("/luan-ban")({
  head: () => ({
    meta: [
      { title: "Luận bàn: Thời thế & Anh hùng · Visual Storyteller" },
      {
        name: "description",
        content:
          "Chuyên đề luận bàn: Hai mặt của một thời đại (Thời thế tạo anh hùng vs Anh hùng tạo thời thế) và Góc nhìn học giả quốc tế có dẫn nguồn chính thống.",
      },
    ],
  }),
  component: LuanBanPage,
});

function LuanBanPage() {
  const [activeTab, setActiveTab] = React.useState<string>("doi-chieu");

  // Cơ chế truy vấn dữ liệu theo yêu cầu (on-demand loading) từ Database
  // Khi người dùng bấm tab nào, TanStack Query sẽ truy vấn trực tiếp từ DB cho tab đó
  const { data: dbResult, isLoading } = useQuery({
    queryKey: ["luan-ban-content", activeTab],
    queryFn: () => contentDatabase.getLuanBanContent(activeTab),
    staleTime: 1000 * 60 * 5, // Cache 5 phút
  });

  const content: LuanBanContent = dbResult?.data || (contentDatabase as any).memoryCache?.get("luan-ban");

  const tabs = [
    {
      id: "doi-chieu",
      label: "Đối chiếu 2 luận điểm",
      icon: <Scale className="h-4 w-4" />,
      badge: "Thời thế vs Anh hùng",
    },
    {
      id: "bien-chung",
      label: "Quan điểm biện chứng",
      icon: <Lightbulb className="h-4 w-4" />,
      badge: "Mối quan hệ thống nhất",
    },
    {
      id: "hoc-gia",
      label: "Góc nhìn học giả quốc tế",
      icon: <MessageSquareQuote className="h-4 w-4" />,
      badge: "Có link trích dẫn",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header (Chuẩn đối chiếu từ base index.tsx) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs font-semibold uppercase tracking-wider">
            {content?.eyebrow || "Luận bàn lịch sử"}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {content?.title || "Hai mặt của một thời đại"}
        </h1>
        <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
          {content?.intro ||
            "Chủ tịch Hồ Chí Minh là sản phẩm vĩ đại của dân tộc Việt Nam và của thời đại. Như C. Mác từng chỉ ra, mỗi thời đại xã hội đều cần những con người vĩ đại của nó, và nếu không có những con người như thế thì thời đại sẽ sáng tạo ra họ."}
        </p>
      </div>

      {/* Hero Quote Card (Chuẩn đối chiếu từ base) */}
      <div className="rounded-2xl bg-primary text-primary-foreground p-7 sm:p-10 shadow-md relative overflow-hidden">
        <Quote className="absolute right-6 top-6 h-20 w-20 text-white/10 select-none pointer-events-none" />
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="eyebrow text-gold text-xs font-bold uppercase tracking-wider">
            Câu hỏi lịch sử
          </span>
          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl italic leading-snug">
            “{content?.quote ||
              "Thời thế tạo anh hùng, hay anh hùng tạo thời thế — điều nào sẽ đúng với cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh?"}”
          </blockquote>
          <p className="text-xs sm:text-sm text-primary-foreground/85 pt-2">
            Mỗi thời đại lịch sử đều đặt ra những yêu cầu khách quan, nhưng chỉ có những cá nhân
            kiệt xuất mới có thể nắm bắt và hiện thực hóa sứ mệnh lịch sử đó.
          </p>
        </div>
      </div>

      {/* Animated Tabs: Nạp dữ liệu động theo Tab */}
      <AnimatedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab}>
        {/* Loading state indicator */}
        {isLoading ? (
          <div className="space-y-4 py-12 text-center">
            <RefreshCw className="size-8 text-primary animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Đang truy vấn nội dung từ Database...</p>
          </div>
        ) : (
          <>
            {/* Tab 1: Đối chiếu 2 luận điểm (100% Khôi phục nội dung gốc chuẩn xác) */}
            {activeTab === "doi-chieu" && (
              <div className="grid gap-8 md:grid-cols-2">
                {/* Luận điểm 1: Thời thế tạo anh hùng */}
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-primary border-primary/40">
                      Mặt khách quan
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {content.thoiThe.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {content.thoiThe.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-3">
                      {content.thoiThe.subtitle}
                    </p>
                  </div>

                  {/* 5 ý nguyên bản đối chiếu từ base */}
                  <ul className="space-y-3.5 pt-2">
                    {content.thoiThe.points.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/20 p-3.5 text-xs sm:text-sm leading-relaxed text-foreground/90 transition-all hover:bg-secondary/40"
                      >
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-[10px]">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Luận điểm 2: Anh hùng tạo thời thế */}
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-accent border-accent/40">
                      Mặt chủ quan
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {content.anhHung.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {content.anhHung.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-3">
                      {content.anhHung.subtitle}
                    </p>
                  </div>

                  {/* 5 ý nguyên bản đối chiếu từ base */}
                  <ul className="space-y-3.5 pt-2">
                    {content.anhHung.points.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/20 p-3.5 text-xs sm:text-sm leading-relaxed text-foreground/90 transition-all hover:bg-secondary/40"
                      >
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-[10px]">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: Quan điểm biện chứng (100% Khôi phục nội dung gốc chuẩn xác) */}
            {activeTab === "bien-chung" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gold/30 bg-ink text-parchment p-8 sm:p-12 space-y-8 shadow-md">
                  <div className="space-y-2">
                    <span className="eyebrow text-gold text-xs font-semibold uppercase tracking-wider">
                      {content.bienChung.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-parchment">
                      {content.bienChung.title}
                    </h3>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-parchment/15 bg-white/5 p-6 space-y-3">
                      <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Điều kiện cần</span>
                      </div>
                      <p className="text-xs sm:text-sm text-parchment/85 leading-relaxed">
                        {content.bienChung.thoiTheCondition}
                      </p>
                    </div>

                    <div className="rounded-xl border border-parchment/15 bg-white/5 p-6 space-y-3">
                      <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Điều kiện đủ có tính quyết định</span>
                      </div>
                      <p className="text-xs sm:text-sm text-parchment/85 leading-relaxed">
                        {content.bienChung.anhHungCondition}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-parchment/20 pt-6 space-y-2">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider">
                      Kết luận khoa học:
                    </h4>
                    <p className="text-sm sm:text-base text-parchment/90 leading-relaxed font-serif">
                      {content.bienChung.conclusion}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Góc nhìn học giả quốc tế (Có đầy đủ công trình & link dẫn nguồn) */}
            {activeTab === "hoc-gia" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Tuyển tập <strong>{content.scholars.length}</strong> nhận định của các học giả, nhà nghiên cứu và yếu nhân quốc tế có liên kết dẫn nguồn:
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {content.scholars.map((item, idx) => (
                    <div
                      key={item.id}
                      className="group rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md hover:border-gold/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-muted-foreground">
                          <Badge variant="outline" className="text-[10px] font-mono border-border">
                            {item.category}
                          </Badge>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            #{idx + 1} · {item.country}
                          </span>
                        </div>

                        <div className="relative">
                          <Quote className="h-6 w-6 text-primary group-hover:scale-110 transition-transform mb-1 opacity-70" />
                          <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed font-display">
                            “{item.text}”
                          </p>
                        </div>

                        {item.work && (
                          <div className="rounded-lg bg-secondary/30 p-2.5 border-l-2 border-primary/50 text-[11px] text-muted-foreground font-serif leading-snug">
                            <span className="font-semibold text-foreground/80 block not-italic font-sans text-[10px] uppercase tracking-wider mb-0.5">
                              Công trình / Bối cảnh:
                            </span>
                            {item.work}
                          </div>
                        )}
                      </div>

                      <div className="border-t border-border pt-4 space-y-2">
                        <div>
                          <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.author}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-snug">{item.role}</p>
                        </div>

                        {item.sourceUrl && (
                          <div className="pt-1">
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 hover:underline active:scale-95 transition-all"
                            >
                              <ShieldCheck className="size-3.5 text-gold shrink-0" />
                              <span>Nguồn: {item.sourceLabel}</span>
                              <ExternalLink className="size-3 shrink-0" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </AnimatedTabs>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/gia-tri-tu-tuong">
            <span>← Quay lại: Giá trị tư tưởng</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/tu-lieu-anh">
            <span>Tiếp theo: Kho tư liệu ảnh lịch sử</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
