import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, ZoomIn, ArrowRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, BASE_TU_LIEU_ANH_DATA, type TuLieuAnhItem } from "@/lib/content-db";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import chanDung from "@/assets/chandung-1946.jpg";
import thucTienVn from "@/assets/thuctien-vn.jpg";
import thucTienTg from "@/assets/thuctien-tg.jpg";
import lyLuan from "@/assets/lyluan.jpg";
import tk1911 from "@/assets/tk-1911.jpg";
import tk1920 from "@/assets/tk-1920.jpg";
import tk1941 from "@/assets/tk-1941.jpg";
import tk1945 from "@/assets/tk-1945.jpg";
import leParia from "@/assets/le-paria-1922.jpg";
import truongDucThanh from "@/assets/truong-duc-thanh.jpg";
import dienBienPhu from "@/assets/dien-bien-phu-1954.jpg";
import duongKachMenh from "@/assets/duong-kach-menh-1927.jpg";
import banAnThucDan from "@/assets/ban-an-thuc-dan-1925.jpg";
import chienDichBienGioi from "@/assets/chien-dich-bien-gioi-1950.jpg";
import loiKeuGoi from "@/assets/loi-keu-goi-khang-chien-1946.jpg";
import benNhaRong from "@/assets/ben-nha-rong.jpg";
import bacHoThieuNhi from "@/assets/bac-ho-thieu-nhi.jpg";
import cauLongBien from "@/assets/cau-long-bien-paul-doumer.jpg";
import nhaTuHoaLo from "@/assets/nha-tu-hoa-lo.jpg";
import nhaTuConDao from "@/assets/nha-tu-con-dao.jpg";
import cayDaTanTrao from "@/assets/cay-da-tan-trao.jpg";
import dinhTanTrao from "@/assets/dinh-tan-trao.jpg";
import nguyenAiQuocLienXo from "@/assets/nguyen-ai-quoc-lien-xo-1923.jpg";
import nguyenAiQuocQuocTe from "@/assets/nguyen-ai-quoc-quoc-te-cong-san-1924.jpg";
import baoThanhNien from "@/assets/bao-thanh-nien-1925.jpg";
import mitTinhNhaHatLon from "@/assets/mit-tinh-nha-hat-lon-1945.jpg";
import hoiNghiGeneva from "@/assets/hoi-nghi-geneva-1954.jpg";
import diChucHoChiMinh from "@/assets/di-chuc-ho-chi-minh.png";

export const Route = createFileRoute("/tu-lieu-anh")({
  head: () => ({
    meta: [
      { title: "Kho tư liệu ảnh lịch sử & Nguồn gốc · Visual Storyteller" },
      {
        name: "description",
        content:
          "Bộ sưu tập hình ảnh tư liệu lịch sử có giá trị về Chủ tịch Hồ Chí Minh kèm thông tin xuất xứ.",
      },
    ],
  }),
  component: TuLieuAnhPage,
});

interface PhotoDoc extends TuLieuAnhItem {
  src: string;
}

const PHOTO_ASSETS: Record<number, string> = {
  1: tk1941,
  2: thucTienVn,
  3: thucTienTg,
  4: lyLuan,
  5: tk1911,
  6: tk1920,
  7: tk1945,
  8: chanDung,
  9: leParia,
  10: truongDucThanh,
  11: dienBienPhu,
  12: duongKachMenh,
  13: banAnThucDan,
  14: chienDichBienGioi,
  15: loiKeuGoi,
  16: benNhaRong,
  17: bacHoThieuNhi,
  18: cauLongBien,
  19: nhaTuHoaLo,
  20: nhaTuConDao,
  21: cayDaTanTrao,
  22: dinhTanTrao,
  23: nguyenAiQuocLienXo,
  24: nguyenAiQuocQuocTe,
  25: baoThanhNien,
  26: mitTinhNhaHatLon,
  27: hoiNghiGeneva,
  28: diChucHoChiMinh,
};

const PHOTOS: PhotoDoc[] = BASE_TU_LIEU_ANH_DATA.map((item) => ({
  ...item,
  src: PHOTO_ASSETS[item.id] || tk1941,
}));

function TuLieuAnhPage() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoDoc | null>(null);
  const [filterCategory, setFilterCategory] = React.useState<string>("all");

  // Nạp dữ liệu ảnh động theo yêu cầu (on-demand loading) từ Database
  const { data: dbResult } = useQuery({
    queryKey: ["tu-lieu-anh-content", filterCategory],
    queryFn: () => contentDatabase.getTuLieuAnhContent(),
    staleTime: 1000 * 60 * 5,
  });

  const rawPhotos: TuLieuAnhItem[] =
    dbResult?.data || (contentDatabase as any).memoryCache?.get("tu-lieu-anh") || BASE_TU_LIEU_ANH_DATA;

  const photos: PhotoDoc[] = (rawPhotos || []).map((p) => ({
    ...p,
    src: PHOTO_ASSETS[p.id] || tk1941,
  }));

  const categories = [
    "all",
    "Địa danh lịch sử",
    "Bối cảnh xã hội",
    "Bối cảnh thời đại",
    "Tiền đề lý luận",
    "Hành trình cứu nước",
    "Mốc son lịch sử",
    "Chân dung lãnh tụ",
  ];

  const filteredPhotos =
    filterCategory === "all" ? photos : photos.filter((p) => p.category === filterCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold text-xs">Kho lưu trữ số</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
          Thư viện tư liệu ảnh lịch sử
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Bộ sưu tập các bức ảnh tư liệu lịch sử có giá trị cao, được chú thích bối cảnh, tác giả và
          đường dẫn tra cứu trực tiếp nguồn mở trên Wikipedia và Wikimedia Commons.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full touch-pan-x">
        {categories.map((cat) => {
          const count = cat === "all" ? photos.length : photos.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors shrink-0 flex items-center gap-1.5 ${
                filterCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <span>{cat === "all" ? "Tất cả tư liệu" : cat}</span>
              <span
                className={`text-[0.65rem] px-1.5 py-0.2 rounded-full ${
                  filterCategory === cat
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div
                className="relative aspect-4/3 overflow-hidden cursor-pointer bg-secondary"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 photo-frame"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <ZoomIn className="h-5 w-5" />
                  <span className="text-xs font-semibold">Xem chi tiết</span>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <Badge
                    variant="secondary"
                    className="bg-card/90 text-foreground backdrop-blur-sm text-[0.65rem] font-mono"
                  >
                    {photo.year}
                  </Badge>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <Badge variant="outline" className="text-[0.68rem] text-primary border-primary/30">
                  {photo.category}
                </Badge>
                <h3 className="font-display text-base font-bold text-foreground leading-snug line-clamp-2">
                  {photo.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between border-t border-border mt-3 text-xs">
              <span className="text-[0.7rem] text-muted-foreground italic truncate max-w-[150px]">
                {photo.author}
              </span>
              <button
                onClick={() => setSelectedPhoto(photo)}
                className="flex items-center gap-1 text-primary font-medium hover:underline text-[0.75rem]"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Xem ảnh</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        {selectedPhoto && (
          <DialogContent className="w-[94vw] max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-2xl">
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {selectedPhoto.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  Năm {selectedPhoto.year}
                </span>
              </div>
              <DialogTitle className="font-display text-lg sm:text-2xl font-bold text-foreground break-words leading-snug">
                {selectedPhoto.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Mã tư liệu: #{selectedPhoto.id} · Xuất bản trên Wikimedia Commons
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[420px] object-contain bg-black/5"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Nội dung & Bối cảnh lịch sử
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">Tác giả / Lưu trữ:</span>
                  <span className="italic text-muted-foreground">{selectedPhoto.author}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">Bản quyền & Nguồn:</span>
                  <a
                    href={selectedPhoto.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <span>
                      {selectedPhoto.sourceLabel ||
                        (selectedPhoto.sourceUrl.includes("vi.wikipedia.org")
                          ? "Wikipedia tiếng Việt"
                          : selectedPhoto.sourceUrl.includes("wikipedia.org")
                          ? "Wikipedia"
                          : "Wikimedia Commons")}
                    </span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/luan-ban">
            <span>← Quay lại: Luận bàn Thời thế</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/">
            <span>Trở về Trang chủ</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
