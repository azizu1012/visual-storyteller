import * as React from "react";
import {
  Home,
  Landmark,
  Milestone,
  Award,
  Scale,
  Image as ImageIcon,
} from "lucide-react";

export interface NavItem {
  to: string;
  label: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    to: "/",
    label: "Trang chủ",
    title: "Trang chủ & Tổng quan",
    desc: "Bối cảnh lịch sử, tinh hoa thời đại và điểm xuất phát của người thanh niên yêu nước",
    icon: Home,
    tag: "Khởi đầu",
  },
  {
    to: "/co-so-hinh-thanh",
    label: "Cơ sở hình thành",
    title: "Cơ sở hình thành tư tưởng",
    desc: "Thực tiễn Việt Nam & thế giới, tiền đề lý luận và nhân tố chủ quan Hồ Chí Minh",
    icon: Landmark,
    tag: "Nền tảng",
  },
  {
    to: "/qua-trinh-phat-trien",
    label: "Quá trình phát triển",
    title: "Quá trình hình thành & phát triển (1911 – 1969)",
    desc: "Dòng thời gian 5 thời kỳ lịch sử từ ngày ra đi tìm đường cứu nước đến bản Di chúc",
    icon: Milestone,
    tag: "Dòng thời gian",
  },
  {
    to: "/gia-tri-tu-tuong",
    label: "Giá trị tư tưởng",
    title: "Giá trị đối với dân tộc & thời đại",
    desc: "Ngọn cờ dẫn dắt cách mạng Việt Nam và phong trào giải phóng dân tộc trên thế giới",
    icon: Award,
    tag: "Tầm vóc",
  },
  {
    to: "/luan-ban",
    label: "Luận bàn lịch sử",
    title: "Luận bàn: Thời thế và Anh hùng",
    desc: "Phân tích biện chứng 2 mặt của thời đại và góc nhìn học giả quốc tế có link dẫn nguồn",
    icon: Scale,
    tag: "Chuyên sâu",
  },
  {
    to: "/tu-lieu-anh",
    label: "Tư liệu ảnh",
    title: "Thư viện tư liệu ảnh lịch sử",
    desc: "Bộ sưu tập ảnh tư liệu quý qua các giai đoạn lịch sử kèm nguồn gốc và bản quyền",
    icon: ImageIcon,
    tag: "Tư liệu",
  },
];
