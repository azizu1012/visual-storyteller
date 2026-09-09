import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Landmark,
  Milestone,
  Award,
  Scale,
  Image as ImageIcon,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Quote,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import chanDung from "@/assets/chandung-1946.jpg";
import thucTienVn from "@/assets/thuctien-vn.jpg";
import tk1911 from "@/assets/tk-1911.jpg";
import tk1945 from "@/assets/tk-1945.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tư tưởng Hồ Chí Minh — Di sản, Cơ sở, Quá trình và Giá trị · Visual Storyteller" },
      {
        name: "description",
        content:
          "Trang tư liệu học tập và nghiên cứu trực quan về cơ sở hình thành, quá trình phát triển và giá trị của tư tưởng Hồ Chí Minh.",
      },
    ],
  }),
  component: HomePage,
});

const TOPICS = [
  {
    to: "/co-so-hinh-thanh",
    title: "Cơ sở hình thành tư tưởng",
    tag: "Nền tảng",
    icon: Landmark,
    image: thucTienVn,
    desc: "Khám phá bối cảnh thực tiễn Việt Nam & thế giới cuối TK XIX - đầu TK XX, ba trụ cột tiền đề lý luận và nhân tố chủ quan thiên tài của Chủ tịch Hồ Chí Minh.",
    highlights: ["Thực tiễn VN & thế giới", "Chủ nghĩa Mác – Lênin", "Phẩm chất cá nhân"],
  },
  {
    to: "/qua-trinh-phat-trien",
    title: "Quá trình hình thành & phát triển",
    tag: "Dòng thời gian (1911 – 1969)",
    icon: Milestone,
    image: tk1911,
    desc: "Tiến trình lịch sử 5 thời kỳ từ chuyến tàu tìm đường cứu nước năm 1911, tiếp cận Luận cương Lênin 1920, thành lập Đảng 1930 đến Tuyên ngôn Độc lập 1945.",
    highlights: ["5 thời kỳ lịch sử", "Mốc son 1911 & 1920", "Pác Bó 1941 & Ba Đình 1945"],
  },
  {
    to: "/gia-tri-tu-tuong",
    title: "Giá trị đối với dân tộc & thời đại",
    tag: "Tầm vóc di sản",
    icon: Award,
    image: chanDung,
    desc: "Nền tảng tư tưởng, kim chỉ nam đưa cách mạng Việt Nam đi từ thắng lợi này sang thắng lợi khác, đồng thời mở đường giải phóng cho các dân tộc thuộc địa trên thế giới.",
    highlights: ["Thắng lợi dân tộc", "Kim chỉ nam Đổi mới", "Vinh danh UNESCO 1987"],
  },
  {
    to: "/luan-ban",
    title: "Luận bàn: Thời thế & Anh hùng",
    tag: "Chuyên sâu",
    icon: Scale,
    image: tk1945,
    desc: "Phân tích biện chứng 2 mặt của thời đại: 'Thời thế tạo anh hùng' và 'Anh hùng tạo thời thế', kèm nhận định học giả quốc tế có link nguồn.",
    highlights: ["Đối chiếu 2 luận điểm", "Mối quan hệ biện chứng", "Học giả quốc tế có link"],
  },
  {
    to: "/tu-lieu-anh",
    title: "Thư viện tư liệu ảnh lịch sử",
    tag: "Kho lưu trữ",
    icon: ImageIcon,
    image: tk1945,
    desc: "Tổng hợp bộ sưu tập hình ảnh tư liệu lịch sử quý báu, nguồn ảnh Wikimedia Commons và chú thích xuất xứ chi tiết.",
    highlights: ["8 ảnh tư liệu kinh điển", "Xem phóng to Lightbox", "Nguồn gốc rõ ràng"],
  },
];

function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Majestic Hero Section */}
      <section className="relative overflow-hidden bg-ink text-parchment">
        <img
          src={tk1945}
          alt="Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình"
          className="absolute inset-0 h-full w-full object-cover opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl space-y-6 rise">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold text-xs">
                Chuyên đề nghiên cứu 2 · Tư liệu học tập
              </span>
            </div>

            <h1 className="font-display fluid-hero-title font-bold tracking-tight text-parchment leading-[1.08]">
              Cơ sở, quá trình và giá trị tư tưởng Hồ Chí Minh
            </h1>

            <p className="fluid-body text-parchment/85 max-w-2xl">
              Từ thực tiễn Việt Nam và thế giới cuối thế kỷ XIX – đầu thế kỷ XX đến hệ thống quan
              điểm soi đường cho cách mạng Việt Nam và phong trào giải phóng dân tộc trên thế giới.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              >
                <Link to="/co-so-hinh-thanh">
                  <BookOpen className="h-4 w-4" />
                  <span>Bắt đầu khám phá</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 text-primary border-parchment/30 hover:bg-parchment/10"
              >
                <Link to="/tu-lieu-anh">
                  <ImageIcon className="h-4 w-4" />
                  <span>Kho tư liệu ảnh</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-gold hover:text-gold hover:bg-gold/10 border border-gold/30"
              >
                <Link to="/m">
                  <Smartphone className="h-4 w-4" />
                  <span>Bản Mobile</span>
                </Link>
              </Button>
            </div>

            {/* Quick Stats Grid */}
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-parchment/20 pt-8 max-w-lg">
              <div>
                <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">1858</dt>
                <dd className="eyebrow mt-1 text-[0.68rem] text-parchment/60">Pháp nổ súng</dd>
              </div>
              <div>
                <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">05</dt>
                <dd className="eyebrow mt-1 text-[0.68rem] text-parchment/60">
                  Thời kỳ phát triển
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">1969</dt>
                <dd className="eyebrow mt-1 text-[0.68rem] text-parchment/60">Di chúc lịch sử</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gold/30 bg-card p-8 sm:p-12 text-center space-y-4 shadow-sm relative overflow-hidden">
          <Quote className="h-10 w-10 text-gold/30 mx-auto" />
          <blockquote className="font-display text-xl sm:text-2xl italic text-foreground leading-relaxed max-w-3xl mx-auto">
            “Thời thế tạo anh hùng, hay anh hùng tạo thời thế — điều nào sẽ đúng với cuộc đời và sự
            nghiệp của Chủ tịch Hồ Chí Minh?”
          </blockquote>
          <p className="text-xs sm:text-sm text-muted-foreground pt-1">
            Chủ tịch Hồ Chí Minh là sản phẩm vĩ đại của dân tộc và thời đại, đồng thời chính Người
            đã khắc họa và sáng tạo nên Thời đại Hồ Chí Minh rực rỡ.
          </p>
          <div className="pt-2">
            <Button asChild variant="link" className="gap-1.5 text-primary text-xs">
              <Link to="/luan-ban">
                <span>Xem phân tích biện chứng chuyên sâu</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Topics Directory Grid (Navigates to Real Sub-pages) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow text-primary text-xs">Chỉ mục chuyên đề</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Các nội dung nghiên cứu trọng tâm
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Nhấp vào từng chuyên mục bên dưới để truy cập các trang nội dung chi tiết với hiệu ứng
            chuyển tab, hình ảnh tư liệu và tính năng tương tác.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="flex"
              >
                <Link
                  to={topic.to}
                  className="group w-full rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs hover:shadow-lg hover:border-primary/50 transition-all flex flex-col justify-between space-y-5 cursor-pointer select-none"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-[0.68rem] font-medium">
                        {topic.tag}
                      </Badge>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-xs font-bold text-gold">Mục 0{index + 1}</span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {topic.desc}
                    </p>

                    <div className="space-y-1.5 border-t border-border/80 pt-3">
                      {topic.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-primary pt-2">
                    <span>Khám phá nội dung</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Historical Milestones Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-secondary/40 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="eyebrow text-xs text-gold font-bold">Mốc son tiêu biểu</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Hành trình từ Sài Gòn (1911) đến Quảng trường Ba Đình (1945)
              </h2>
            </div>
            <Button asChild size="sm" className="gap-2 shrink-0">
              <Link to="/qua-trinh-phat-trien">
                <span>Xem dòng thời gian đầy đủ</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
            {[
              {
                year: "1911",
                title: "Rời Bến Nhà Rồng",
                desc: "Xuất phát tìm đường cứu nước trên tàu Latouche-Tréville",
                wikiUrl:
                  "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_T%E1%BA%A5t_Th%E1%BB%83nh_ra_%C4%91i_t%C3%ACm_%C4%91%C6%B0%E1%BB%9Dng_c%E1%BB%A9u_n%C6%B0%E1%BB%9Bc",
                sourceName: "Wikipedia",
              },
              {
                year: "1920",
                title: "Đại hội Tours",
                desc: "Tiếp cận Luận cương Lênin và gia nhập Quốc tế III",
                wikiUrl: "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_h%E1%BB%99i_Tours",
                sourceName: "Wikipedia",
              },
              {
                year: "1941",
                title: "Trở về Pác Bó",
                desc: "Trực tiếp lãnh đạo cách mạng sau 30 năm xa Tổ quốc",
                wikiUrl: "https://vi.wikipedia.org/wiki/P%C3%A1c_B%C3%B3",
                sourceName: "Wikipedia",
              },
              {
                year: "1945",
                title: "Tuyên ngôn Độc lập",
                desc: "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
                wikiUrl:
                  "https://vi.wikipedia.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_(Vi%E1%BB%87t_Nam)",
                sourceName: "Wikipedia",
              },
            ].map((m) => (
              <a
                key={m.year}
                href={m.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Mở bài viết ${m.sourceName} về sự kiện ${m.title}`}
                className="group rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-all duration-200 hover:border-primary/60 hover:shadow-md hover:-translate-y-0.5 active:scale-95 block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">{m.year}</span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>{m.sourceName}</span>
                    <ExternalLink className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors underline-offset-4 group-hover:underline">
                  {m.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
