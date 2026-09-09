import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, ZoomIn, ArrowRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contentDatabase, type TuLieuAnhItem } from "@/lib/content-db";
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

interface PhotoDoc {
  id: number;
  title: string;
  category: string;
  year: string;
  src: string;
  caption: string;
  author: string;
  sourceUrl: string;
}

const PHOTOS: PhotoDoc[] = [
  {
    id: 1,
    title: "Suối Lênin và Hang Cốc Bó (Pác Bó, Cao Bằng)",
    category: "Địa danh lịch sử",
    year: "1941",
    src: tk1941,
    caption:
      "Khu di tích Pác Bó (hang Cốc Bó), huyện Hà Quảng, Cao Bằng — nơi đồng chí Nguyễn Ái Quốc vượt biên giới trở về trực tiếp chỉ đạo cách mạng sau 30 năm xa cách Tổ quốc.",
    author: "Tycho (shansov.net)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C%E1%BB%91c_B%C3%B3.jpg",
  },
  {
    id: 2,
    title: "Phố Hàng Buồm, Hà Nội đầu thế kỷ XX",
    category: "Bối cảnh xã hội",
    year: "Đầu TK XX",
    src: thucTienVn,
    caption:
      "Phố Hàng Buồm (rue des Pavillons Noirs), Hà Nội đầu thế kỷ XX — phản ánh xã hội thuộc địa nửa phong kiến với nỗi thống khổ và áp bức đè nặng lên các tầng lớp nhân dân.",
    author: "Nhiếp ảnh gia vô danh thời Pháp thuộc",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hano%C3%AF_-_Rue_des_Pavillons_Noirs.jpg",
  },
  {
    id: 3,
    title: "Cung điện Mùa Đông sau Cách mạng Tháng Mười Nga",
    category: "Bối cảnh thời đại",
    year: "10-1917",
    src: thucTienTg,
    caption:
      "Petrograd sau khi Cung điện Mùa Đông bị chiếm ngày 26-10-1917 — biểu tượng thắng lợi của Cách mạng Tháng Mười Nga, mở ra thời đại quá độ lên chủ nghĩa xã hội trên toàn thế giới.",
    author: "Tư liệu lưu trữ Liên Xô",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:After_the_capture_of_the_Winter_Palace_26_October_1917.jpg",
  },
  {
    id: 4,
    title: "V. I. Lênin tại Mát-xcơ-va năm 1920",
    category: "Tiền đề lý luận",
    year: "1920",
    src: lyLuan,
    caption:
      "Chân dung Vladimir Ilyich Lenin năm 1920 — tác giả của bản 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa' đã định hướng con đường cứu nước cho Nguyễn Ái Quốc.",
    author: "Pavel Zhukov",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lenin_in_1920.jpg",
  },
  {
    id: 5,
    title: "Tàu Amiral Latouche-Tréville",
    category: "Hành trình cứu nước",
    year: "05-06-1911",
    src: tk1911,
    caption:
      "Con tàu buôn của hãng vận tải Chargeurs Réunis — nơi người thanh niên Nguyễn Tất Thành nhận làm phụ bếp dưới tên Văn Ba để rời cảng Sài Gòn sang phương Tây.",
    author: "Hãng vận tải biển Chargeurs Réunis",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:M_128_10_descente_de_l%27Himalaya_et_du_Latouche_Tr%C3%A9ville.jpg",
  },
  {
    id: 6,
    title: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours (Pháp)",
    category: "Hành trình cứu nước",
    year: "12-1920",
    src: tk1920,
    caption:
      "Nguyễn Ái Quốc đứng trên diễn đàn Đại hội toàn quốc lần thứ XVIII Đảng Xã hội Pháp tại thành phố Tours, bỏ phiếu tán thành Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp.",
    author: "Tư liệu Đảng Cộng sản Pháp",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Comrade_Nguyen_Ai_Quoc_at_the_national_congress_of_the_Socialist_Party_of_France_in_the_city_of_Tous,_France_in_December_1920.jpg",
  },
  {
    id: 7,
    title: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình",
    category: "Mốc son lịch sử",
    year: "02-09-1945",
    src: tk1945,
    caption:
      "Chủ tịch Hồ Chí Minh đứng trên lễ đài tại Quảng trường Ba Đình, Hà Nội đọc bản Tuyên ngôn Độc lập lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa trước quốc dân và thế giới.",
    author: "Việt Nam Độc lập Đồng minh Hội",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pr%C3%A9sident_Ho-chi-Minh_lit_la_Proclamation-d%27ind%C3%A9pendance_sur_la_place_Ba-dinh_le_2nd_Sep_1945.jpg",
  },
  {
    id: 8,
    title: "Chân dung Chủ tịch Hồ Chí Minh năm 1946",
    category: "Chân dung lãnh tụ",
    year: "1946",
    src: chanDung,
    caption:
      "Chân dung Chủ tịch Hồ Chí Minh năm 1946 trong những ngày đầu non sông vừa giành độc lập, thể hiện phong thái ung dung, ánh mắt sáng ngời và bản lĩnh phi thường.",
    author: "Nhiếp ảnh gia vô danh",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_1946.jpg",
  },
];

const PHOTO_ASSETS: Record<number, string> = {
  1: tk1941,
  2: thucTienVn,
  3: tk1911,
  4: tk1920,
  5: thucTienTg,
  6: lyLuan,
  7: tk1945,
  8: chanDung,
};

function TuLieuAnhPage() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoDoc | null>(null);
  const [filterCategory, setFilterCategory] = React.useState<string>("all");

  // Nạp dữ liệu ảnh động theo yêu cầu (on-demand loading) từ Database
  const { data: dbResult, isLoading } = useQuery({
    queryKey: ["tu-lieu-anh-content", filterCategory],
    queryFn: () => contentDatabase.getTuLieuAnhContent(),
    staleTime: 1000 * 60 * 5,
  });

  const rawPhotos: TuLieuAnhItem[] =
    dbResult?.data || (contentDatabase as any).memoryCache?.get("tu-lieu-anh") || PHOTOS;

  const photos: PhotoDoc[] = (rawPhotos || []).map((p) => ({
    ...p,
    src: PHOTO_ASSETS[p.id] || tk1941,
  }));

  const categories = [
    "all",
    "Bối cảnh xã hội",
    "Hành trình cứu nước",
    "Địa danh lịch sử",
    "Mốc son lịch sử",
    "Tiền đề lý luận",
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
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Thư viện tư liệu ảnh lịch sử
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Bộ sưu tập các bức ảnh tư liệu lịch sử có giá trị cao, được chú thích bối cảnh, tác giả và
          đường dẫn tra cứu trực tiếp nguồn mở trên Wikimedia Commons.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors shrink-0 ${
              filterCategory === cat
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            }`}
          >
            {cat === "all" ? "Tất cả tư liệu" : cat}
          </button>
        ))}
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
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {selectedPhoto.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  Năm {selectedPhoto.year}
                </span>
              </div>
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
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
                    <span>Xem trên Wikimedia</span>
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
