import * as React from "react";
import {
  Code2,
  Sparkles,
  Bot,
  UserCheck,
  CheckCircle2,
  FileCheck2,
  Search,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Smartphone,
  Check,
  Users,
  GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectContribution() {
  return (
    <div className="space-y-10 animate-in fade-in-50 duration-300">
      {/* Intro Header */}
      <div className="rounded-2xl border border-gold/30 bg-card p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-4" />
            </span>
            <span className="eyebrow text-gold text-xs font-bold uppercase tracking-wider">
              Minh bạch học thuật & Phân vai dự án · Project Attribution
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-gold/40 text-gold font-mono text-[11px]">
              Human-AI Collaboration
            </Badge>
          </div>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Bảng phân công & Đóng góp xây dựng website
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-4xl">
          Dự án <strong>Visual Storyteller — Tư tưởng Hồ Chí Minh</strong> được phát triển trên nguyên tắc
          kết hợp hài hòa giữa <strong>năng lực làm chủ kỹ thuật, tư duy tổ chức và nghiên cứu nội dung của con người</strong>{" "}
          với <strong>sức mạnh trợ lực của Trí tuệ nhân tạo (AI Pair Programming)</strong> trong thiết kế giao diện,
          làm mịn chuyển động và tự động hóa kiểm thử.
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
          <span className="text-[11px] font-semibold text-muted-foreground mr-1">Công nghệ:</span>
          {["TanStack Start (React 19)", "Tailwind CSS", "Framer Motion", "Vitest Testing", "TypeScript Strict"].map((t) => (
            <Badge key={t} variant="secondary" className="text-[11px] font-mono px-2 py-0.5">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* 2 Main Columns: Lead Developer (Human) & AI Pair Programmer */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Column 1: Lead Developer / Human Project Lead */}
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-all relative">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <UserCheck className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Chủ đạo dự án & Lập trình viên chính
                  </h3>
                  <p className="text-xs font-mono text-primary font-semibold">
                    Lead Developer & Project Architect
                  </p>
                </div>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground text-[10px] uppercase font-bold shrink-0">
              Trực tiếp chủ đạo
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-3">
            Định hướng tổng thể, nắm quyền chủ đạo toàn bộ kiến trúc mã nguồn theo framework hiện đại,
            trực tiếp viết code tính năng CRUD và chịu trách nhiệm kiểm soát chất lượng kỹ thuật.
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Code2 className="size-4 text-primary" />
              <span>Nhiệm vụ & Đóng góp kỹ thuật:</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Chủ đạo kiến trúc framework:</strong> Định hướng, khởi tạo
                  và cấu trúc toàn bộ dự án trên nền tảng <em>TanStack Start</em>, <em>React 19</em> và <em>Tailwind CSS</em>.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Lập trình CRUD tư liệu:</strong> Trực tiếp phát triển hệ thống
                  quản trị nội dung (trang <code>/quan-ly</code>), xây dựng các tác vụ Thêm, Đọc, Sửa, Xóa và khôi phục tư liệu lịch sử.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Debug & Rà soát mã nguồn:</strong> Trực tiếp kiểm tra, debug,
                  tối ưu luồng dữ liệu, xử lý các cảnh báo hệ thống và bảo đảm chất lượng triển khai.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Chủ trì kiểm thử thủ công (Lead Manual Testing):</strong> Đóng vai trò
                  người kiểm thử chính, nghiệm thu thực tế toàn bộ các trang, kiểm tra tương thích màn hình và luồng thao tác.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: AI Pair Programmer */}
        <div className="rounded-2xl border-2 border-accent/40 bg-card p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-all relative">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
                  <Bot className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Trợ lý Lập trình AI
                  </h3>
                  <p className="text-xs font-mono text-accent font-semibold">
                    AI Pair Programmer (Antigravity)
                  </p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="border-accent text-accent text-[10px] uppercase font-bold shrink-0">
              AI Support
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/50 pl-3">
            Đóng vai trò trợ lý thông minh hỗ trợ Lead Developer hiện thực hóa thiết kế thị giác,
            tối ưu chuyển động mượt mà và tự động hóa các công đoạn kiểm thử liên kết & mã nguồn.
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Sparkles className="size-4 text-accent" />
              <span>Nhiệm vụ & Đóng góp kỹ thuật:</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Thiết kế & Tinh chỉnh giao diện Web:</strong> Xây dựng giao diện
                  chuẩn bảo tàng (Parchment, Ink, Gold), tối ưu hóa tỷ lệ hiển thị linh hoạt (Auto-scale Responsive) cho cả Desktop và Mobile.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Cải thiện & Làm mịn Animation:</strong> Cấu hình hiệu ứng Framer Motion,
                  thanh trượt chuyển tab sinh động, micro-interactions, modal phóng to ảnh tương tác và hiệu ứng hover mượt mà.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Kiểm thử link tự động (URL Scanner):</strong> Viết và chạy kịch bản
                  quét tự động rà soát toàn bộ liên kết (Wikipedia, báo chí), loại bỏ link 404, redirect hoặc lệch nội dung.
                </div>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl bg-secondary/30 p-3 border border-border/50">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Tự động hóa kiểm thử (Auto Testing):</strong> Thiết lập và chạy
                  bộ test tự động Vitest (16/16 test suites passed) cùng TypeScript type safety kiểm soát toàn diện logic hệ thống.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Editorial & Research Team */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs font-bold uppercase tracking-wider">
            Đội ngũ biên soạn & Thẩm định nội dung
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
          Nội dung tư liệu & Nghiên cứu khoa học
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl">
          Toàn bộ hệ thống văn bản, sự kiện lịch sử, trích dẫn danh nhân và tư liệu ảnh được tuyển chọn
          và thẩm định kỹ lưỡng bởi các thành viên trong nhóm:
        </p>

        <div className="grid gap-5 sm:grid-cols-3 pt-2">
          {/* Gia An */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-3 shadow-xs hover:border-gold/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                GA
              </span>
              <Badge variant="outline" className="text-[10px] border-border font-mono">
                Biên soạn tư tưởng
              </Badge>
            </div>
            <h4 className="font-display text-lg font-bold text-foreground">
              Gia An
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Soạn thảo, tra cứu và tổng hợp các chuyên đề tư tưởng Hồ Chí Minh; hệ thống hóa cơ sở thực tiễn và tiền đề lý luận Mác – Lênin.
            </p>
            <div className="pt-2 border-t border-border/60 text-[11px] text-primary font-medium flex items-center gap-1.5">
              <FileCheck2 className="size-3.5" />
              <span>Chuyên đề lý luận & Tư tưởng</span>
            </div>
          </div>

          {/* Ming Đức (Minh Đức) */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-3 shadow-xs hover:border-gold/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs">
                MĐ
              </span>
              <Badge variant="outline" className="text-[10px] border-accent/40 text-accent font-mono">
                Nội dung & Manual Test
              </Badge>
            </div>
            <h4 className="font-display text-lg font-bold text-foreground">
              Ming Đức <span className="text-muted-foreground text-xs font-normal">(Minh Đức)</span>
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Soạn thảo nội dung lịch sử các thời kỳ; trực tiếp tham gia kiểm thử thủ công (Manual Testing) cùng Lead Dev để thẩm định trải nghiệm đọc.
            </p>
            <div className="pt-2 border-t border-border/60 text-[11px] text-accent font-medium flex items-center gap-1.5">
              <Activity className="size-3.5" />
              <span>Soạn thảo & Manual Testing</span>
            </div>
          </div>

          {/* Duy Khánh */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-3 shadow-xs hover:border-gold/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gold/10 text-gold font-bold text-xs">
                DK
              </span>
              <Badge variant="outline" className="text-[10px] border-gold/40 text-gold font-mono">
                Nghiên cứu tư liệu
              </Badge>
            </div>
            <h4 className="font-display text-lg font-bold text-foreground">
              Duy Khánh
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Nghiên cứu tư liệu, chọn lọc văn kiện và sự kiện lịch sử; kiểm chứng các nguồn trích dẫn học giả quốc tế và xuất xứ 28 tư liệu ảnh quý.
            </p>
            <div className="pt-2 border-t border-border/60 text-[11px] text-gold font-medium flex items-center gap-1.5">
              <Search className="size-3.5" />
              <span>Thẩm định văn kiện & Trích dẫn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Workflow Matrix: Auto Test vs Manual Test */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <span className="eyebrow text-gold text-xs font-bold uppercase tracking-wider">
              Quy trình bảo đảm chất lượng (QA & Testing Workflow)
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            Phân định rõ ràng: Auto Test và Manual Test
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Để đảm bảo website hoạt động ổn định và chính xác 100% nội dung lẫn liên kết,
            quy trình kiểm thử được phân chia chuyên biệt giữa tự động hóa và thực tế:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 pt-2">
          {/* Auto Testing Box */}
          <div className="rounded-xl border border-accent/40 bg-accent/5 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="size-4 text-accent" />
                <h4 className="font-display font-bold text-foreground text-sm sm:text-base">
                  Auto Testing (Kiểm thử tự động)
                </h4>
              </div>
              <Badge className="bg-accent text-accent-foreground text-[10px]">
                Do AI phụ trách
              </Badge>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Vitest Test Suite:</strong> Tự động kiểm thử tính nhất quán của cơ sở dữ liệu (Content DB),
                  các chức năng quản lý CRUD và bộ chỉ mục điều hướng (Navigation).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Automated Link Scanner:</strong> Kịch bản tự động quét toàn bộ hơn 90 liên kết web,
                  bảo đảm tất cả trả về mã HTTP 200 OK và không có liên kết ảo/lệch nguồn.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>TypeScript Validation:</strong> Kiểm tra nghiêm ngặt kiểu dữ liệu toàn trang,
                  không phát sinh lỗi runtime hoặc bất đồng bộ.
                </span>
              </li>
            </ul>
          </div>

          {/* Manual Testing Box */}
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="size-4 text-primary" />
                <h4 className="font-display font-bold text-foreground text-sm sm:text-base">
                  Manual Testing (Kiểm thử thủ công)
                </h4>
              </div>
              <Badge className="bg-primary text-primary-foreground text-[10px]">
                Lead Dev (Chính) & Ming Đức
              </Badge>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Tester chính (Lead Developer):</strong> Trực tiếp trải nghiệm, kiểm tra độ co giãn trên thiết bị di động thực tế,
                  thực hiện các thao tác thêm/sửa/xóa tư liệu mẫu và nghiệm thu tổng thể.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Tester phối hợp (Ming Đức):</strong> Trực tiếp đọc và rà soát từng đoạn trích lịch sử,
                  đối chiếu chú thích ảnh với văn bản và báo cáo các điểm bất thường.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Trải nghiệm đa nền tảng:</strong> Kiểm thử trên Chrome, Safari, Firefox,
                  cả màn hình cảm ứng điện thoại lẫn màn hình máy tính để bàn độ phân giải cao.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
