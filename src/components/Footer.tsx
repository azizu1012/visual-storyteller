import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Landmark,
  Milestone,
  Award,
  Scale,
  Image as ImageIcon,
  Smartphone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Tư tưởng Hồ Chí Minh
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Hệ thống tư liệu học tập và nghiên cứu trực quan về cơ sở hình thành, quá trình phát
              triển, giá trị thời đại và bài học biện chứng lịch sử.
            </p>
            <div className="pt-2 text-xs text-muted-foreground font-mono">
              Chuyên đề 2 · Tư liệu học tập và nghiên cứu
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Chuyên đề chính
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/co-so-hinh-thanh"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Landmark className="h-3.5 w-3.5 text-primary" />
                  <span>Cơ sở hình thành</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/qua-trinh-phat-trien"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Milestone className="h-3.5 w-3.5 text-primary" />
                  <span>Quá trình phát triển</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gia-tri-tu-tuong"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Award className="h-3.5 w-3.5 text-primary" />
                  <span>Giá trị tư tưởng</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Tư liệu & Hệ thống
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/luan-ban"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Scale className="h-3.5 w-3.5 text-primary" />
                  <span>Luận bàn lịch sử</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tu-lieu-anh"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ImageIcon className="h-3.5 w-3.5 text-primary" />
                  <span>Thư viện ảnh tư liệu</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/m"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Smartphone className="h-3.5 w-3.5 text-accent" />
                  <span>Bản Mobile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Visual Storyteller. Xây dựng với TanStack Start, React 19 và Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span>Nguồn ảnh: Wikimedia Commons</span>
            <span>·</span>
            <span>Bảo tồn & Lan tỏa di sản</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
