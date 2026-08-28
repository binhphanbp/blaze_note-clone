'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Sparkles, Languages, FileText, Users, ArrowRight, CheckCircle2, Shield, Bot, Layers } from 'lucide-react';

export default function GuideOverviewPage() {
  const guideCategories = [
    {
      title: 'Bóc băng (gỡ băng) cuộc họp',
      desc: 'Hướng dẫn chuyển file âm thanh, video hoặc bản ghi âm trực tiếp thành văn bản có phân tách người nói.',
      icon: FileText,
      href: '/guide/transcription',
      steps: ['Chuẩn bị file hoặc ghi âm trực tiếp', 'Tách người nói & hiệu chỉnh tên', 'Tạo biên bản tóm tắt tự động']
    },
    {
      title: 'Phiên dịch trực tiếp hai chiều',
      desc: 'Hướng dẫn thiết lập phiên dịch realtime song ngữ hơn 50 ngôn ngữ, hiển thị phụ đề và phát âm thanh dịch.',
      icon: Languages,
      href: '/guide/translation',
      steps: ['Chọn ngôn ngữ nguồn & đích', 'Bật chế độ một chiều / hai chiều', 'Chia sẻ đường link cho người nghe']
    },
    {
      title: 'Hội thảo & Sự kiện quy mô lớn',
      desc: 'Hướng dẫn phát phụ đề trực tiếp lên màn hình LED hội trường và cấp mã QR cho hàng nghìn khán giả xem trên điện thoại.',
      icon: Users,
      href: '/guide/conference',
      steps: ['Cài đặt phòng sự kiện (Host)', 'Tạo mã QR chia sẻ cho khán giả (Viewer)', 'Tuỳ biến giao diện phụ đề LED']
    }
  ];

  const quickFeatures = [
    { title: 'Mời AI Bot vào Zoom/Teams/Meet', href: '/guide#bot', icon: Bot },
    { title: 'Tự động tạo biên bản & trích xuất đầu việc', href: '/guide#summary', icon: Sparkles },
    { title: 'Đồng bộ lịch Google & Outlook', href: '/guide#calendar', icon: Layers },
    { title: 'Xuất file Word, PDF, Notion, Markdown', href: '/guide#export', icon: FileText }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            Tài liệu hướng dẫn
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Hướng dẫn sử dụng Blaze Note
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Khám phá toàn bộ tính năng và hướng dẫn chi tiết từng bước để khai thác tối đa sức mạnh của trợ lý Voice AI.
          </p>
        </div>

        {/* 3 Core Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guideCategories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="rounded-3xl border border-stone-200 bg-white p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-200 transition-all duration-300 group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-700 w-fit mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed mb-6">
                  {cat.desc}
                </p>

                <div className="space-y-2 border-t border-stone-100 pt-4">
                  {cat.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-stone-500">
                      <span className="w-4 h-4 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Xem chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Topics */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Chủ đề phổ biến
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-stone-100 bg-stone-50/70 hover:bg-emerald-50/60 hover:border-emerald-200 transition-colors cursor-pointer group"
              >
                <feat.icon className="w-5 h-5 text-stone-500 group-hover:text-emerald-600 mb-2 transition-colors" />
                <h4 className="text-sm font-semibold text-stone-800 group-hover:text-emerald-900 leading-snug">
                  {feat.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
