# Visual Storyteller — Hệ Thống Nghiên Cứu & Trực Quan Hóa Tư Tưởng Hồ Chí Minh

<div align="center">

[![GitHub Repo](https://img.shields.io/badge/GitHub-azizu1012%2Fvisual--storyteller-181717?style=for-the-badge&logo=github)](https://github.com/azizu1012/visual-storyteller)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start%20%26%20Router-FF4154?style=for-the-badge&logo=tanstack)](https://tanstack.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-14%2F14%20Passing-brightgreen?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>Trang tư liệu nghiên cứu trực quan, chuyên sâu về cơ sở hình thành, quá trình phát triển (1911 – 1969) và giá trị thời đại của Tư tưởng Hồ Chí Minh.</strong>
</p>

[Khám phá dự án](https://github.com/azizu1012/visual-storyteller) • [Tính năng nổi bật](#-tính-năng-nổi-bật) • [Kiến trúc & Bảo mật](#-kiến-trúc-csdl--bảo-mật) • [Cài đặt & Vận hành](#-cài-đặt--vận-hành)

</div>

---

## 📖 Giới thiệu tổng quan

**Visual Storyteller** là nền tảng web trực quan hóa tư liệu học tập và nghiên cứu lịch sử theo phong cách hiện đại (*editorial historical storytelling*). Dự án số hóa toàn diện các chuyên đề trọng tâm:

1. **Cơ sở hình thành tư tưởng:** Bối cảnh thực tiễn Việt Nam & thế giới cuối TK XIX – đầu TK XX, 3 trụ cột tiền đề lý luận và nhân tố chủ quan thiên tài.
2. **Quá trình phát triển (1911 – 1969):** Tiến trình 5 thời kỳ lịch sử, 12 mốc son tiêu biểu từ bến Nhà Rồng đến Tuyên ngôn Độc lập 1945 và Di chúc lịch sử 1969.
3. **Giá trị tư tưởng Hồ Chí Minh:** Tầm vóc di sản đối với sự nghiệp cách mạng Việt Nam và phong trào tiến bộ nhân loại, cùng Nghị quyết UNESCO vinh danh năm 1987.
4. **Chuyên đề luận bàn: Thời thế & Anh hùng:** Phân tích biện chứng 2 mặt của một thời đại (*"Thời thế tạo anh hùng"* vs *"Anh hùng tạo thời thế"*) và tổng hợp nhận định của 9 học giả, danh nhân quốc tế kèm trích dẫn nguồn chính thống.
5. **Kho lưu trữ tư liệu ảnh lịch sử:** Bộ sưu tập ảnh tư liệu quý báu, chế độ xem phóng to chi tiết (Lightbox), đầy đủ thông tin bối cảnh, tác giả và giấy phép nguồn mở (Wikimedia Commons).

---

## ✨ Tính năng nổi bật

* **Giao diện học thuật trang nhã (Historical Editorial Aesthetic):** Gam màu parchment, đỏ trầm và vàng đồng tượng trưng cho lịch sử và cách mạng; tối ưu typography dễ đọc cho nghiên cứu.
* **Hệ thống điều hướng chuyên nghiệp:** URL rõ ràng theo chuẩn web hiện đại (`/co-so-hinh-thanh`, `/qua-trinh-phat-trien`, `/gia-tri-tu-tuong`, `/luan-ban`, `/tu-lieu-anh`), hỗ trợ Drawer Menu linh hoạt trên cả Desktop và Mobile.
* **Hiệu ứng chuyển tab mượt mà:** Sử dụng `AnimatedTabs` với Framer Motion / Motion for React, chuyển cảnh tinh tế giữa các nội dung con.
* **Góc nhìn học giả quốc tế có nguồn tra cứu:** 9 nhận định từ William J. Duiker, David Halberstam, UNESCO, Charles de Gaulle, Fidel Castro, v.v., kèm hyperlink mở trực tiếp bài viết gốc trên Wikipedia, Báo Nhân Dân.
* **Tự động nhận diện thiết bị:** Tự động thích ứng tối ưu giữa màn hình máy tính để bàn (Desktop) và di động (Mobile).

---

## 🛡️ Kiến trúc CSDL & Bảo mật máy chủ

### 1. Cơ sở dữ liệu nạp động theo yêu cầu (Dynamic On-Demand DB)
* Hệ thống tách biệt hoàn toàn giữa giao diện và dữ liệu, quản lý tập trung tại module `src/lib/content-db.ts`.
* Sử dụng công nghệ **IndexedDB** của trình duyệt (`VisualStorytellerContentDB`) kết hợp Local Storage Cache.
* Tích hợp cơ chế bất đồng bộ thông qua **TanStack React Query**: Bấm tới chuyên đề hay tab nào, dữ liệu tương ứng mới được truy vấn và nạp ra màn hình, tiết kiệm băng thông và tối ưu hiệu năng tối đa.

### 2. Bảo mật chống DDoS & Chống sập Server (Server Crash Protection)
Mặc dù ứng dụng không lưu thông tin người dùng (không lưu mật khẩu, không tài khoản cá nhân), máy chủ vẫn được trang bị lớp bảo vệ chống tấn công làm tê liệt hệ thống tại `src/lib/server-security.ts`:

* **IP Sliding-Window Rate Limiting:** Giới hạn tối đa 150 request / 10 giây trên mỗi địa chỉ IP. Ngắt ngay các đợt HTTP flood hoặc bot spam bằng phản hồi `429 Too Many Requests`.
* **Payload Size Limiter (Chống Payload Bomb / OOM Crash):** Từ chối mọi request có body > 256KB bằng mã `413 Payload Too Large`, ngăn chặn tình trạng tràn RAM máy chủ.
* **Auto Cache Garbage Collection:** Tự động dọn dẹp bộ đếm IP mỗi 60 giây, chống rò rỉ bộ nhớ (Memory Leak).
* **SSR Error Boundary & Try/Catch Guard:** Bao bọc tiến trình render phía máy chủ, ngăn chặn unhandled exception làm sập tiến trình Node.js.
* **Bộ HTTP Security Headers:** Đính kèm `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy`.
* **Khuyến nghị triển khai:** Kết hợp với **Cloudflare CDN (Free)** phía trước để hấp thụ toàn bộ các cuộc tấn công DDoS tầng mạng (Layer 3/4) và bộ nhớ đệm Edge Caching.

---

## 🛠️ Công nghệ sử dụng

| Phân hệ | Công nghệ | Mục đích |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + TypeScript | Nền tảng xây dựng ứng dụng hiện đại |
| **Meta Framework** | TanStack Start + Nitro | Server-side rendering (SSR), tối ưu SEO |
| **Routing** | TanStack Router | Định tuyến file-based routing mạnh mẽ |
| **Data Fetching** | TanStack React Query | Quản lý state server, caching & nạp động |
| **Styling** | Tailwind CSS v4 | Thiết kế giao diện utility-first hiện đại |
| **UI Components** | Radix UI + Lucide Icons | Bộ linh kiện chuẩn trợ năng Accessible UI |
| **Animation** | Motion (`motion/react`) | Hiệu ứng chuyển động tinh tế, mượt mà |
| **Testing** | Vitest + Testing Library | Bộ kiểm thử tự động toàn diện |

---

## 📁 Cấu trúc thư mục dự án

```text
visual-storyteller-main/
├── src/
│   ├── assets/              # Hình ảnh tư liệu lịch sử (1911, 1920, 1941, 1945, 1946...)
│   ├── components/          # Component tái sử dụng (AnimatedTabs, Navigation, UI Kit)
│   ├── lib/
│   │   ├── content-db.ts       # Động cơ CSDL IndexedDB & Dữ liệu 5 chuyên đề
│   │   ├── server-security.ts  # Bộ lọc chống DDoS, Rate Limiter & Security Headers
│   │   └── utils.ts            # Hàm tiện ích dùng chung
│   ├── routes/
│   │   ├── index.tsx                # Trang chủ tổng quan & Mốc son tiêu biểu
│   │   ├── co-so-hinh-thanh.tsx     # Chuyên đề 1: Cơ sở hình thành tư tưởng
│   │   ├── qua-trinh-phat-trien.tsx # Chuyên đề 2: Quá trình phát triển 1911-1969
│   │   ├── gia-tri-tu-tuong.tsx     # Chuyên đề 3: Giá trị tư tưởng Hồ Chí Minh
│   │   ├── luan-ban.tsx             # Chuyên đề 4: Luận bàn Thời thế & Anh hùng
│   │   ├── tu-lieu-anh.tsx          # Chuyên đề 5: Thư viện tư liệu ảnh lịch sử
│   │   └── m.tsx                    # Giao diện tối ưu chuyên biệt cho Mobile
│   ├── tests/               # Bộ test tự động (CRUD, Database, Routing)
│   ├── server.ts            # Entrypoint máy chủ SSR tích hợp bảo mật
│   └── app.css              # Typography & CSS Variables
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Cài đặt & Vận hành

### 1. Yêu cầu môi trường
* **Node.js**: Phiên bản 18.x hoặc 20.x trở lên.
* **npm** (hoặc `pnpm` / `yarn`).

### 2. Cài đặt các thư viện phụ thuộc
```bash
git clone https://github.com/azizu1012/visual-storyteller.git
cd visual-storyteller
npm install
```

### 3. Khởi chạy máy chủ phát triển (Dev Server)
```bash
npm run dev
```
Mở trình duyệt truy cập: [http://localhost:5173](http://localhost:5173).

### 4. Chạy kiểm thử tự động (Unit Tests)
```bash
npm test
```
*Tất cả 14 bài kiểm thử kiểm tra tính toàn vẹn dữ liệu gốc và động cơ CSDL sẽ được thực thi tự động.*

### 5. Đóng gói triển khai sản phẩm (Production Build)
```bash
npm run build
```
Hệ thống sẽ biên dịch bundle client và runtime Nitro Node server tại thư mục `.output/`.

Để chạy thử bản build sản xuất:
```bash
node .output/server/index.mjs
```

---

## 🔗 Liên kết & Thông tin tác giả

* **Repository:** [https://github.com/azizu1012/visual-storyteller](https://github.com/azizu1012/visual-storyteller)
* **GitHub User:** [@azizu1012](https://github.com/azizu1012)
* **Dự án:** Visual Storyteller — Di sản & Tư tưởng Hồ Chí Minh
* **Giấy phép:** [MIT License](LICENSE)
