'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Languages,
  Users,
  Mic,
  Bot,
  Sparkles,
  ArrowRight,
  Shield,
  HelpCircle,
  Mail,
  Share2,
  Sliders,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function GuideIndexPage() {
  const quickstarts = [
    {
      href: '/guide/transcription',
      icon: FileText,
      tag: 'Cơ bản',
      title: 'Ghi âm & Bóc băng',
      desc: 'Từ giọng nói trực tiếp hoặc file ghi âm chuyển thành văn bản, tự động nhận dạng người phát biểu và tạo biên bản tóm tắt.',
      badge: '5 bước nhanh'
    },
    {
      href: '/guide/translation',
      icon: Languages,
      tag: 'Nâng cao',
      title: 'Phiên dịch trực tiếp',
      desc: 'Dịch thuật hai chiều theo thời gian thực cho tiếp khách quốc tế, đàm phán thương mại và hội thảo đa ngôn ngữ.',
      badge: 'Real-time 50+ ngôn ngữ'
    },
    {
      href: '/guide/conference',
      icon: Users,
      tag: 'Doanh nghiệp',
      title: 'Sự kiện & Hội thảo',
      desc: 'Thiết lập phụ đề màn hình LED sân khấu, chia sẻ mã QR cho hàng ngàn khán giả xem bản dịch trên điện thoại.',
      badge: 'Host & Viewer'
    }
  ];

  const deeperTopics = [
    {
      title: 'Quản lý & Gán nhãn mẫu giọng người nói',
      desc: 'Đăng ký mẫu giọng nói để AI tự động nhận dạng danh tính từng đại biểu trong toàn bộ các buổi họp tiếp theo.',
      icon: Mic,
      tag: 'Voice Profile'
    },
    {
      title: 'Mẫu biên bản cuộc họp & Trợ lý AI Agents',
      desc: 'Sử dụng hơn 1.200+ mẫu biên bản họp chuyên nghiệp, tự động trích xuất đầu việc cần làm và phân công nhân sự.',
      icon: Bot,
      tag: 'AI Agents'
    },
    {
      title: 'Tích hợp Bot họp Google Meet, Teams, Zoom',
      desc: 'Mời trợ lý AI tự động tham gia các đường link phòng họp trực tuyến để ghi âm và soạn thảo biên bản tự động.',
      icon: Calendar,
      tag: 'Integrations'
    },
    {
      title: 'Tích hợp Meeting API & Voice SDK',
      desc: 'Nhúng khả năng nhận dạng giọng nói và phiên dịch trực tiếp vào ứng dụng web/mobile của doanh nghiệp.',
      icon: Sliders,
      tag: 'Developer API'
    }
  ];

  return (
    <div className="min-h-screen text-stone-800 selection:bg-emerald-500/15 overflow-x-clip pt-16 bg-white font-['Gilroy']">
      {/* 1. Breadcrumbs & Header Section */}
      <section className="border-b border-[var(--bz-rule)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <p className="text-[13px] font-semibold text-stone-400 mb-4">
            <span>Hướng dẫn sử dụng</span>
            <span className="mx-2 text-stone-300">/</span>
            <span className="text-emerald-700 font-bold">Tổng quan trung tâm</span>
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-stone-900 leading-tight">
            Trung tâm Hướng dẫn Blaze Note
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Khám phá tài liệu chi tiết, các bước thiết lập từ cơ bản đến nâng cao để khai phóng tối đa hiệu suất làm việc với trợ lý Voice AI.
          </p>
        </div>
      </section>

      {/* 2. Quickstart Section */}
      <section id="quickstart" className="border-b border-[var(--bz-rule)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Bắt đầu nhanh theo tình huống
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-500 font-medium">
                Chọn hướng dẫn phù hợp với nhu cầu cuộc họp của bạn
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickstarts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-3xl border border-stone-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="grid place-items-center w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-6 h-6" strokeWidth={1.75} />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2.5 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Xem hướng dẫn chi tiết</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deeper Topics Section */}
      <section id="deeper" className="border-b border-[var(--bz-rule)] bg-stone-50/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
            Tìm hiểu sâu hơn về các tính năng
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed mb-8">
            Nắm vững các thiết lập chuyên sâu để tối ưu hoá quy trình làm việc của đội nhóm
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deeperTopics.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 flex items-start gap-4 hover:border-emerald-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <topic.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-stone-900 truncate">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Support & Community Footer */}
      <section className="border-t border-[var(--bz-rule)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                Cần thêm sự trợ giúp từ đội ngũ kỹ thuật?
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-500 font-medium">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn qua email, hotline và các kênh cộng đồng chính thức.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/lien-he"
                className="px-6 py-3 rounded-full bg-stone-900 text-white font-bold text-xs sm:text-sm hover:bg-emerald-600 active:scale-95 transition-all shadow-sm"
              >
                Liên hệ hỗ trợ 24/7
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
