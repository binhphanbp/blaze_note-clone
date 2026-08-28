# Blaze Note Clone — Voice AI Meeting Assistant (Green Theme)

Một phiên bản tái hiện 100% giao diện và tính năng tương tác của **Blaze Note** ([note.blaze.vn](https://note.blaze.vn/)) được xây dựng bằng **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, và **Lucide Icons** với phong cách thiết kế **Hệ màu Xanh Lá Cây (Emerald / Mint / Forest Green)** hiện đại và sang trọng.

---

## 🌟 Tính Năng Nổi Bật

- **Trang chủ đầy đủ 10 Sections**:
  - **Mega Menu Dropdown**: 2 cấp độ cho *Giải pháp* và *Hướng dẫn*, hỗ trợ chọn ngôn ngữ đa quốc gia (VI, EN, ZH, KM) và Menu Mobile dạng ngăn kéo (Drawer).
  - **Hero Stage Animated**: Tiêu đề xuất hiện từng chữ (*word-by-word*), nền *Emerald Mesh Blobs* phát sáng huyền ảo, và bộ chọn tính năng tương tác.
  - **Khách hàng tin dùng**: Logo các đối tác và doanh nghiệp hàng đầu (*Viettel, Techcombank, MobiFone, VnEconomy, VINASA, Coca-Cola*).
  - **Live Interactive Playground (`#demo`)**: Bộ mô phỏng ghi âm thời gian thực với sóng âm thanh (*audio wave visualizer*), đồng hồ đếm ngược `01:00`, dòng chữ dịch chạy realtime và nút sao chép kết quả 1-chạm.
  - **AI Agent Automation**: Mô phỏng phân tách người nói và checklist công việc tự động với trạng thái động (*Hoàn thành, Đang chạy có spinner, Chờ*).
  - **Bảo mật & Chứng chỉ**: Hiển thị 4 chứng chỉ bảo mật quốc tế (*ISO/IEC 27001, SOC 2 Type II, GDPR, HIPAA*).

- **Hệ thống các Trang con hoàn chỉnh**:
  - `/pricing`: Bảng giá linh hoạt với bộ chuyển đổi Tháng / Năm (-20%), 4 gói cước và FAQ Accordion.
  - `/uu-dai`: Mã giảm giá, voucher độc quyền và nút sao chép mã tự động.
  - `/tai-ve`: Tải ứng dụng Desktop cho macOS (*Apple Silicon M1-M4 & Intel*) và Windows (*x64*).
  - `/gioi-thieu`: Giới thiệu công nghệ Voice AI bản địa, số liệu và triết lý bảo mật Zero-Trust.
  - `/lien-he`: Form gửi yêu cầu tư vấn với tương tác phản hồi và địa chỉ văn phòng Hà Nội & Đà Nẵng.
  - `/meeting-api`: Tài liệu và code mẫu tích hợp Meeting API (*cURL, Python, Node.js*).
  - `/guide`, `/guide/translation`, `/guide/transcription`, `/guide/conference`: Hệ thống tài liệu hướng dẫn chi tiết từng bước.
  - `/login`: Trang đăng nhập / đăng ký độc lập với Google SSO và Magic Link.

---

## 🛠 Công Nghệ Sử Dụng

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Gilroy, Geist Variable, Be Vietnam Pro

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev)
```bash
npm run dev
```
Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

### 3. Build bản Production
```bash
npm run build
npm run start
```

---

## 📂 Cấu Trúc Dự Án

```
├── app/
│   ├── layout.tsx                # Global layout, metadata & fonts
│   ├── globals.css               # Design system tokens & green mesh keyframes
│   ├── page.tsx                  # Trang chủ (10 full sections)
│   ├── pricing/page.tsx          # Trang Bảng giá
│   ├── uu-dai/page.tsx           # Trang Mã giảm giá & Ưu đãi
│   ├── tai-ve/page.tsx           # Trang Tải ứng dụng Desktop
│   ├── gioi-thieu/page.tsx       # Trang Giới thiệu
│   ├── lien-he/page.tsx          # Trang Liên hệ & Bản đồ
│   ├── meeting-api/page.tsx      # Trang Meeting API
│   ├── guide/                    # Hệ thống tài liệu hướng dẫn
│   └── login/page.tsx            # Trang Đăng nhập
├── components/
│   ├── Navbar.tsx                # Mega menu dropdowns & Mobile Drawer
│   ├── Footer.tsx                # Footer thông tin văn phòng & links
│   ├── HeroStage.tsx             # Sân khấu Hero với Green Mesh Blobs
│   ├── TrustedBy.tsx             # Logo marquee khách hàng
│   ├── FourPillars.tsx           # 4 cột giá trị cốt lõi
│   ├── ThreeSteps.tsx            # 3 bước workflow tự động
│   ├── SecuritySection.tsx       # Bảo mật & 4 chứng chỉ quốc tế
│   ├── FeaturesDeepDive.tsx      # Live cards hội thoại & AI Agent checklist
│   ├── InteractiveDemo.tsx       # Live Voice Playground (#demo)
│   ├── SessionsShowcase.tsx      # 3 showcase phiên họp
│   ├── NeedsGuideCards.tsx       # Cards hướng dẫn nhu cầu
│   ├── CtaBanner.tsx             # Banner CTA xanh lá cao cấp
│   └── AuthModal.tsx             # Modal đăng nhập / đăng ký nhanh
└── public/                       # Toàn bộ vector logos, icons, certs, fonts
```

---

## 📄 Bản Quyền

Dự án được xây dựng phục vụ mục đích nghiên cứu, học tập và triển khai giao diện theo thiết kế Blaze Note với chuẩn chất lượng cao.
