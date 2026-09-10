import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Compass,
  ArrowRight,
  Landmark,
  Milestone,
  Award,
  Scale,
  Image as ImageIcon,
  BookOpen,
  Monitor,
  CheckCircle2,
  ChevronRight,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NAVIGATION_ITEMS } from "@/components/navigation-items";

export const Route = createFileRoute("/m")({
  head: () => ({
    meta: [
      { title: "Phiên bản Mobile · Tư tưởng Hồ Chí Minh" },
      {
        name: "description",
        content:
          "Giao diện Mobile - Tối ưu hóa cảm ứng, tốc độ và trải nghiệm đọc trên thiết bị di động.",
      },
    ],
  }),
  component: MobileDedicatedPage,
});

function MobileDedicatedPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const quickStats = [
    { label: "Thời kỳ", value: "5 mốc" },
    { label: "Trụ cột", value: "3 cơ sở" },
    { label: "Ảnh tư liệu", value: "28 ảnh quý" },
  ];

  return (
    <div className="min-h-screen bg-background px-3.5 py-4 sm:px-6">
      {/* Mobile Special Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-3.5 py-2.5 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-xs">
            <Smartphone className="size-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Giao diện Mobile
              </span>
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-muted-foreground">
              Tối ưu thao tác vuốt chạm & tiết kiệm dung lượng
            </p>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 rounded-lg border-border text-xs active:scale-95"
        >
          <Link to="/">
            <Monitor className="size-3.5 text-muted-foreground" />
            <span>Desktop</span>
          </Link>
        </Button>
      </motion.div>

      {/* Hero Header for Mobile */}
      <section className="mb-6 rounded-2xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-4 shadow-sm">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <Compass className="size-3.5" />
          <span>Học phần Tư tưởng Hồ Chí Minh</span>
        </div>

        <h1 className="fluid-hero-title font-bold text-foreground tracking-tight">
          Hành trình & Di sản Tư tưởng
        </h1>

        <p className="mt-2 fluid-body text-muted-foreground">
          Chuyên đề nghiên cứu khoa học được thiết kế tối ưu riêng cho màn hình điện thoại với chỉ mục bài học trực quan.
        </p>

        {/* Quick metrics in pills */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-3">
          {quickStats.map((st) => (
            <div key={st.label} className="text-center">
              <div className="text-base font-bold text-primary font-display">{st.value}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Lesson Cards optimized for touch tap */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Layers className="size-4 text-primary" />
            <span>Danh mục 6 chuyên đề</span>
          </h2>
          <span className="text-[11px] text-muted-foreground">Chạm để mở</span>
        </div>

        <div className="space-y-2.5">
          {NAVIGATION_ITEMS.filter((item) => item.to !== "/").map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <Link
                  to={item.to}
                  className="group block rounded-xl border border-border/80 bg-card p-3.5 shadow-xs transition-all duration-150 active:scale-[0.98] active:bg-secondary/40 hover:border-accent hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <Icon className="size-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          {item.tag}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground font-mono">
                          0{idx + 2}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <ChevronRight className="size-4 shrink-0 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote Card */}
      <section className="mt-6 rounded-2xl border border-accent/40 bg-card/60 p-4">
        <blockquote className="border-l-2 border-accent pl-3 text-xs italic text-foreground/90 font-serif leading-relaxed">
          "Không có gì quý hơn độc lập, tự do!"
        </blockquote>
        <div className="mt-2 text-right text-[11px] font-semibold text-primary">
          — Chủ tịch Hồ Chí Minh (1966)
        </div>
      </section>

      {/* Bottom Switcher Card */}
      <section className="mt-6 mb-8 text-center rounded-xl border border-dashed border-border p-4 bg-secondary/20">
        <p className="text-xs text-muted-foreground mb-3">
          Bạn muốn xem đồ họa đầy đủ trên màn hình lớn?
        </p>
        <Button asChild variant="default" size="sm" className="rounded-lg shadow-sm active:scale-95">
          <Link to="/">
            <Monitor className="size-4 mr-1.5" />
            <span>Chuyển sang Desktop</span>
          </Link>
        </Button>
      </section>
    </div>
  );
}
