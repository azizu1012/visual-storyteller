import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers,
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  RotateCcw,
  Tag,
  Calendar,
  BookOpen,
  BarChart3,
  LayoutGrid,
  Table as TableIcon,
  Check,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { AnimatedTabs } from "@/components/AnimatedTabs";
import { ProjectContribution } from "@/components/ProjectContribution";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getStoredStories,
  createStory,
  updateStory,
  deleteStory,
  resetStoriesToDefault,
  CATEGORY_MAP,
  type StoryItem,
  type StoryCategory,
} from "@/lib/storage";

export const Route = createFileRoute("/quan-ly")({
  head: () => ({
    meta: [
      { title: "Hệ thống số hóa tư liệu · Visual Storyteller" },
      {
        name: "description",
        content:
          "Hệ thống lưu trữ và quản trị các tư liệu, câu chuyện lịch sử được số hóa.",
      },
    ],
  }),
  component: QuanLyPage,
});

function QuanLyPage() {
  const [stories, setStories] = React.useState<StoryItem[]>([]);
  const [activeTab, setActiveTab] = React.useState<string>("danh-sach");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("grid");

  // Detail Modal State
  const [viewItem, setViewItem] = React.useState<StoryItem | null>(null);

  // Edit Modal State
  const [editingItem, setEditingItem] = React.useState<StoryItem | null>(null);

  // Delete Alert State
  const [deletingId, setDeletingId] = React.useState<string | null>(null);

  // Reset Confirm State
  const [isResetConfirmOpen, setIsResetConfirmOpen] = React.useState<boolean>(false);

  // Form State for Creating New Item
  const [newTitle, setNewTitle] = React.useState("");
  const [newCategory, setNewCategory] = React.useState<StoryCategory>("thoi-ky");
  const [newPeriod, setNewPeriod] = React.useState("");
  const [newContent, setNewContent] = React.useState("");
  const [newSource, setNewSource] = React.useState("");
  const [newImageUrl, setNewImageUrl] = React.useState("");
  const [newTags, setNewTags] = React.useState("");

  // Load items on mount
  React.useEffect(() => {
    setStories(getStoredStories());
  }, []);

  // Filtered stories
  const filteredStories = React.useMemo(() => {
    return stories.filter((item) => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.period.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [stories, selectedCategory, searchQuery]);

  // Handle Create
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPeriod.trim() || !newContent.trim()) {
      toast.error("Vui lòng điền đầy đủ tiêu đề, mốc thời gian và nội dung!");
      return;
    }

    const tagsArray = newTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const created = createStory({
      title: newTitle.trim(),
      category: newCategory,
      period: newPeriod.trim(),
      content: newContent.trim(),
      source: newSource.trim() || "Tư liệu nghiên cứu",
      imageUrl: newImageUrl.trim() || undefined,
      tags: tagsArray.length > 0 ? tagsArray : ["Lịch sử", "Tư tưởng"],
    });

    setStories(getStoredStories());
    toast.success(`Đã thêm tư liệu: "${created.title}" thành công!`);

    // Reset Form
    setNewTitle("");
    setNewPeriod("");
    setNewContent("");
    setNewSource("");
    setNewImageUrl("");
    setNewTags("");
    setActiveTab("danh-sach");
  };

  // Handle Update
  const handleUpdate = () => {
    if (!editingItem) return;
    if (!editingItem.title.trim() || !editingItem.period.trim() || !editingItem.content.trim()) {
      toast.error("Tiêu đề, mốc thời gian và nội dung không được để trống!");
      return;
    }

    updateStory(editingItem.id, {
      title: editingItem.title.trim(),
      category: editingItem.category,
      period: editingItem.period.trim(),
      content: editingItem.content.trim(),
      source: editingItem.source.trim(),
      imageUrl: editingItem.imageUrl?.trim() || undefined,
      tags: editingItem.tags,
    });

    setStories(getStoredStories());
    toast.success("Cập nhật thông tin tư liệu thành công!");
    setEditingItem(null);
  };

  // Handle Delete
  const handleDelete = () => {
    if (!deletingId) return;
    const ok = deleteStory(deletingId);
    if (ok) {
      setStories(getStoredStories());
      toast.success("Đã xóa tư liệu khỏi danh sách!");
    } else {
      toast.error("Không tìm thấy tư liệu để xóa!");
    }
    setDeletingId(null);
  };

  // Handle Reset to Default
  const handleReset = () => {
    const res = resetStoriesToDefault();
    setStories(res);
    toast.success("Đã khôi phục dữ liệu tư liệu mẫu ban đầu!");
    setIsResetConfirmOpen(false);
  };

  // Stats calculation
  const categoryStats = React.useMemo(() => {
    const stats: Record<string, number> = {};
    for (const [key, label] of Object.entries(CATEGORY_MAP)) {
      stats[label] = stories.filter((s) => s.category === key).length;
    }
    return stats;
  }, [stories]);

  const tabs = [
    {
      id: "danh-sach",
      label: "Danh sách tư liệu",
      icon: <Layers className="h-4 w-4" />,
      badge: stories.length,
    },
    {
      id: "them-moi",
      label: "Thêm tư liệu mới",
      icon: <Plus className="h-4 w-4" />,
    },
    {
      id: "thong-ke",
      label: "Báo cáo thống kê",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      id: "contribution",
      label: "Phân công & Đóng góp",
      icon: <Users className="h-4 w-4" />,
      badge: "Team & AI",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold text-xs">Quản trị nội dung</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Quản lý tư liệu & Câu chuyện lịch sử
          </h1>
          <p className="text-sm text-muted-foreground">
            Lưu trữ, tra cứu và quản lý các mẩu chuyện, tài liệu lịch sử được số hóa.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsResetConfirmOpen(true)}
            className="gap-2 text-xs border-dashed text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Khôi phục dữ liệu mẫu</span>
          </Button>

          <Button
            size="sm"
            onClick={() => setActiveTab("them-moi")}
            className="gap-2 bg-primary text-primary-foreground text-xs shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Tạo tư liệu mới</span>
          </Button>
        </div>
      </div>

      {/* Animated Tabs */}
      <AnimatedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab}>
        {/* Tab 1: Danh sách tư liệu (Read, Update, Delete) */}
        {activeTab === "danh-sach" && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm tư liệu, sự kiện, từ khóa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 text-xs sm:text-sm bg-background"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] text-xs bg-background">
                    <SelectValue placeholder="Tất cả danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả danh mục ({stories.length})</SelectItem>
                    {Object.entries(CATEGORY_MAP).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label} ({stories.filter((s) => s.category === key).length})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-border rounded-lg p-0.5 bg-secondary/50">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-md text-xs transition-colors ${
                      viewMode === "grid"
                        ? "bg-card text-foreground shadow-xs font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="Dạng lưới thẻ bài"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`p-1.5 rounded-md text-xs transition-colors ${
                      viewMode === "table"
                        ? "bg-card text-foreground shadow-xs font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="Dạng bảng dữ liệu"
                  >
                    <TableIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results counter */}
            <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
              <span>
                Hiển thị <strong>{filteredStories.length}</strong> / {stories.length} tư liệu
              </span>
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-primary hover:underline">
                  Xóa bộ lọc tìm kiếm
                </button>
              )}
            </div>

            {/* Empty state */}
            {filteredStories.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center space-y-3">
                <BookOpen className="h-10 w-10 text-muted-foreground/50 mx-auto" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Không tìm thấy tư liệu nào
                </h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Không có bản ghi nào khớp với điều kiện tìm kiếm hoặc bộ lọc danh mục hiện tại.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-2 text-xs"
                >
                  Xem tất cả tư liệu
                </Button>
              </div>
            )}

            {/* Grid View Mode */}
            {viewMode === "grid" && filteredStories.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredStories.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <Badge
                          variant="outline"
                          className="text-[0.68rem] text-primary border-primary/30"
                        >
                          {item.categoryName}
                        </Badge>
                        <span className="flex items-center gap-1 text-[0.7rem] font-mono text-muted-foreground font-semibold">
                          <Calendar className="h-3 w-3 text-gold" />
                          {item.period}
                        </span>
                      </div>

                      {item.imageUrl && (
                        <div className="overflow-hidden rounded-xl aspect-16/10 bg-secondary">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}

                      <h3 className="font-display text-base font-bold text-foreground leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {item.content}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                          >
                            <Tag className="h-2.5 w-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border pt-3 flex items-center justify-between gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewItem(item)}
                        className="h-8 gap-1 text-xs text-muted-foreground hover:text-foreground"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Xem</span>
                      </Button>

                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingItem(item)}
                          className="h-8 gap-1 text-xs border-border hover:border-primary hover:text-primary"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          <span>Sửa</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeletingId(item.id)}
                          className="h-8 p-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                          title="Xóa tư liệu"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table View Mode */}
            {viewMode === "table" && filteredStories.length > 0 && (
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-secondary/60 text-muted-foreground uppercase text-[0.68rem] tracking-wider border-b border-border">
                      <tr>
                        <th className="px-4 py-3.5 font-bold">Mốc thời gian</th>
                        <th className="px-4 py-3.5 font-bold">Tiêu đề tư liệu</th>
                        <th className="px-4 py-3.5 font-bold">Danh mục</th>
                        <th className="px-4 py-3.5 font-bold">Nguồn / Tác giả</th>
                        <th className="px-4 py-3.5 font-bold text-right">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredStories.map((item) => (
                        <tr key={item.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="px-4 py-3 font-mono font-semibold text-foreground whitespace-nowrap">
                            {item.period}
                          </td>
                          <td className="px-4 py-3 font-medium text-foreground max-w-xs truncate">
                            {item.title}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <Badge
                              variant="outline"
                              className="text-[0.68rem] text-primary border-primary/30"
                            >
                              {item.categoryName}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground italic max-w-xs truncate">
                            {item.source}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setViewItem(item)}
                                className="h-7 w-7 p-0"
                                title="Xem chi tiết"
                              >
                                <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingItem(item)}
                                className="h-7 w-7 p-0"
                                title="Chỉnh sửa"
                              >
                                <Edit2 className="h-3.5 w-3.5 text-primary" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDeletingId(item.id)}
                                className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10"
                                title="Xóa"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Thêm mới tư liệu (Create) */}
        {activeTab === "them-moi" && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-1">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Thêm tư liệu / câu chuyện mới
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Điền thông tin bên dưới để tạo bản ghi tư liệu mới vào hệ thống lưu trữ.
              </p>
            </div>

            <form onSubmit={handleCreate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-xs font-semibold">
                  Tiêu đề tư liệu / sự kiện <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Ví dụ: Hội nghị thành lập Đảng Cộng sản Việt Nam"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="text-xs sm:text-sm"
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-xs font-semibold">
                    Chuyên mục phân loại <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={newCategory}
                    onValueChange={(val) => setNewCategory(val as StoryCategory)}
                  >
                    <SelectTrigger id="category" className="text-xs sm:text-sm">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CATEGORY_MAP).map(([k, label]) => (
                        <SelectItem key={k} value={k}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="period" className="text-xs font-semibold">
                    Mốc thời gian / Năm <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="period"
                    placeholder="Ví dụ: 03-02-1930 hoặc 1945"
                    value={newPeriod}
                    onChange={(e) => setNewPeriod(e.target.value)}
                    className="text-xs sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-xs font-semibold">
                  Nội dung tóm tắt & Ý nghĩa lịch sử <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="content"
                  rows={4}
                  placeholder="Mô tả bối cảnh, diễn biến và ý nghĩa của sự kiện lịch sử..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="text-xs sm:text-sm leading-relaxed"
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="source" className="text-xs font-semibold">
                    Nguồn tư liệu / Tác giả / Nơi lưu trữ
                  </Label>
                  <Input
                    id="source"
                    placeholder="Ví dụ: Bảo tàng Hồ Chí Minh"
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl" className="text-xs font-semibold">
                    Đường dẫn hình ảnh (URL hoặc asset)
                  </Label>
                  <Input
                    id="imageUrl"
                    placeholder="Ví dụ: /src/assets/chandung-1946.jpg hoặc link web"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-xs font-semibold">
                  Thẻ phân loại (cách nhau bởi dấu phẩy)
                </Label>
                <Input
                  id="tags"
                  placeholder="Ví dụ: Đảng, 1930, Cương lĩnh, Hương Cảng"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="text-xs sm:text-sm"
                />
              </div>

              <div className="border-t border-border pt-6 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTab("danh-sach")}
                  className="text-xs"
                >
                  Hủy bỏ
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="gap-2 text-xs bg-primary text-primary-foreground shadow-sm"
                >
                  <Check className="h-4 w-4" />
                  <span>Lưu tư liệu vào hệ thống</span>
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Báo cáo thống kê */}
        {activeTab === "thong-ke" && (
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
                <span className="eyebrow text-xs text-muted-foreground">Tổng số bản ghi</span>
                <div className="font-display text-4xl font-extrabold text-primary">
                  {stories.length}
                </div>
                <p className="text-xs text-muted-foreground">Tư liệu đã được số hóa và lưu trữ</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
                <span className="eyebrow text-xs text-muted-foreground">Chuyên mục</span>
                <div className="font-display text-4xl font-extrabold text-gold">
                  {Object.keys(CATEGORY_MAP).length}
                </div>
                <p className="text-xs text-muted-foreground">Nhóm chủ đề nghiên cứu</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
                <span className="eyebrow text-xs text-muted-foreground">Ảnh tư liệu</span>
                <div className="font-display text-4xl font-extrabold text-accent">
                  {stories.filter((s) => !!s.imageUrl).length}
                </div>
                <p className="text-xs text-muted-foreground">Bản ghi có đính kèm ảnh lịch sử</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
                <span className="eyebrow text-xs text-muted-foreground">Trạng thái lưu trữ</span>
                <div className="font-display text-2xl font-bold text-emerald-600 mt-2">
                  Đồng bộ tốt
                </div>
                <p className="text-xs text-muted-foreground">
                  Lưu trữ trên LocalStorage trình duyệt
                </p>
              </div>
            </div>

            {/* Category breakdown cards */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground">
                Phân bố tư liệu theo chuyên mục
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(categoryStats).map(([name, count]) => {
                  const percent =
                    stories.length > 0 ? Math.round((count / stories.length) * 100) : 0;
                  return (
                    <div
                      key={name}
                      className="rounded-xl border border-border/80 bg-secondary/30 p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-foreground">{name}</span>
                        <span className="font-mono text-primary font-bold">{count} tư liệu</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="text-right text-[0.68rem] text-muted-foreground">
                        {percent}% tổng số
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Phân công đóng góp (Human-AI Collaboration) */}
        {activeTab === "contribution" && <ProjectContribution />}
      </AnimatedTabs>

      {/* View Detail Dialog */}
      <Dialog open={!!viewItem} onOpenChange={(open) => !open && setViewItem(null)}>
        {viewItem && (
          <DialogContent className="sm:max-w-xl p-6">
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {viewItem.categoryName}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  Thời gian: {viewItem.period}
                </span>
              </div>
              <DialogTitle className="font-display text-xl font-bold text-foreground">
                {viewItem.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Mã định danh: #{viewItem.id} · Cập nhật lần cuối:{" "}
                {new Date(viewItem.updatedAt).toLocaleDateString("vi-VN")}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              {viewItem.imageUrl && (
                <div className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={viewItem.imageUrl}
                    alt={viewItem.title}
                    className="w-full max-h-60 object-cover"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Nội dung tóm tắt & Diễn biến
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {viewItem.content}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-4 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Nguồn tư liệu:</span>
                  <span className="italic text-muted-foreground">{viewItem.source}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-medium text-foreground">Thẻ phân loại:</span>
                  <span className="text-primary font-medium">{viewItem.tags.join(", ")}</span>
                </div>
              </div>
            </div>

            <DialogFooter className="pt-2">
              <Button size="sm" variant="outline" onClick={() => setViewItem(null)}>
                Đóng
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!editingItem} onOpenChange={(open) => !open && setEditingItem(null)}>
        {editingItem && (
          <DialogContent className="sm:max-w-2xl p-6">
            <DialogHeader className="space-y-1">
              <DialogTitle className="font-display text-xl font-bold text-foreground">
                Chỉnh sửa thông tin tư liệu
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Thay đổi các trường dữ liệu dưới đây và bấm Lưu để cập nhật.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="space-y-1.5">
                <Label className="text-xs">Tiêu đề</Label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="text-xs"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-xs">Danh mục</Label>
                  <Select
                    value={editingItem.category}
                    onValueChange={(val) =>
                      setEditingItem({
                        ...editingItem,
                        category: val as StoryCategory,
                        categoryName: CATEGORY_MAP[val as StoryCategory],
                      })
                    }
                  >
                    <SelectTrigger className="text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CATEGORY_MAP).map(([k, label]) => (
                        <SelectItem key={k} value={k}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs">Mốc thời gian</Label>
                  <Input
                    value={editingItem.period}
                    onChange={(e) => setEditingItem({ ...editingItem, period: e.target.value })}
                    className="text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs">Nội dung</Label>
                <Textarea
                  rows={4}
                  value={editingItem.content}
                  onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                  className="text-xs leading-relaxed"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-xs">Nguồn tư liệu</Label>
                  <Input
                    value={editingItem.source}
                    onChange={(e) => setEditingItem({ ...editingItem, source: e.target.value })}
                    className="text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs">URL ảnh</Label>
                  <Input
                    value={editingItem.imageUrl ?? ""}
                    onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                    className="text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs">Thẻ (cách nhau dấu phẩy)</Label>
                <Input
                  value={editingItem.tags.join(", ")}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      tags: e.target.value
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean),
                    })
                  }
                  className="text-xs"
                />
              </div>
            </div>

            <DialogFooter className="pt-2">
              <Button variant="outline" size="sm" onClick={() => setEditingItem(null)}>
                Hủy
              </Button>
              <Button
                size="sm"
                onClick={handleUpdate}
                className="bg-primary text-primary-foreground"
              >
                Lưu thay đổi
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Delete Confirmation Alert */}
      <AlertDialog open={!!deletingId} onOpenChange={(open) => !open && setDeletingId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa tư liệu này?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này sẽ xóa tư liệu vĩnh viễn khỏi danh sách lưu trữ trên trình duyệt của
              bạn. Bạn có chắc chắn muốn xóa?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Xác nhận xóa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reset Confirmation Alert */}
      <AlertDialog open={isResetConfirmOpen} onOpenChange={setIsResetConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Khôi phục toàn bộ dữ liệu mẫu?</AlertDialogTitle>
            <AlertDialogDescription>
              Thao tác này sẽ đặt lại kho dữ liệu về trạng thái mẫu ban đầu của chuyên đề. Mọi dữ
              liệu tự tạo thêm sẽ bị hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction onClick={handleReset} className="bg-primary text-primary-foreground">
              Đồng ý khôi phục
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-border pt-8 flex-wrap gap-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/tu-lieu-anh">
            <span>← Quay lại: Kho tư liệu ảnh</span>
          </Link>
        </Button>
        <Button asChild className="gap-2" size="sm">
          <Link to="/">
            <span>Trở về Trang chủ</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
