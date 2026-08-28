'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, Languages, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, Award, Cpu, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Mic,
      title: 'Nhận dạng giọng nói tự nhiên',
      desc: 'Mô hình AI nhận diện giọng nói bản địa tối ưu hoá đặc biệt cho tiếng Việt 3 miền Bắc — Trung — Nam, xử lý chính xác từ lóng, thuật ngữ chuyên ngành và từ mượn tiếng Anh.'
    },
    {
      icon: Languages,
      title: 'Phiên dịch thời gian thực',
      desc: 'Dịch thuật hai chiều tức thì giữa hơn 50+ ngôn ngữ quốc tế với độ trễ dưới 500ms, hỗ trợ đàm phán thương mại và hội nghị xuyên quốc gia liền mạch.'
    },
    {
      icon: Sparkles,
      title: 'Khai phóng tri thức cuộc họp',
      desc: 'Tự động trích xuất quyết định, việc cần làm, tóm tắt điều hành và soạn thảo biên bản họp theo hơn 1.200+ mẫu văn bản doanh nghiệp chuẩn mực.'
    },
    {
      icon: ShieldCheck,
      title: 'Bảo mật & Quyền riêng tư Zero-Trust',
      desc: 'Tuân thủ nghiêm ngặt ISO 27001, SOC 2 Type II, GDPR. Dữ liệu của khách hàng được mã hoá đa tầng và cam kết tuyệt đối không sử dụng để đào tạo mô hình công cộng.'
    }
  ];

  const stats = [
    { value: '98.6%', label: 'Độ chính xác giọng tiếng Việt' },
    { value: '< 500ms', label: 'Độ trễ phiên dịch thời gian thực' },
    { value: '50+', label: 'Ngôn ngữ quốc tế hỗ trợ' },
    { value: '10M+', label: 'Phút hội thoại được xử lý / tháng' }
  ];

  return (
    <div className="bg-white text-stone-800 selection:bg-emerald-500/15 overflow-x-hidden pt-16 min-h-screen">
      {/* 1. Hero Section */}
      <section className="border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 lg:py-28 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Về Blaze Note
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-stone-900">
            Biến mỗi cuộc họp thành tri thức doanh nghiệp.
          </h1>
          <p className="mt-6 text-base sm:text-lg font-light text-stone-500 leading-relaxed max-w-2xl mx-auto">
            Blaze Note phiên âm, phiên dịch và tóm tắt cuộc họp theo thời gian thực — để đội ngũ hoàn toàn tập trung vào cuộc trao đổi, phần ghi chép đã có Voice AI lo.
          </p>
        </div>
      </section>

      {/* 2. Core Values Grid */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900">
              Giá trị cốt lõi & Công nghệ nền tảng
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              Chúng tôi kết hợp nghiên cứu ngôn ngữ học bản địa chuyên sâu với hạ tầng AI điện toán hiệu năng cao.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-stone-200 bg-[#f7f4ee] p-8 flex flex-col justify-between hover:border-emerald-300 transition-all duration-200"
              >
                <div>
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white shadow-xs text-emerald-600 mb-5">
                    <v.icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-sm font-normal text-stone-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Numbers Section */}
      <section className="border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800 font-mono mb-2">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-stone-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lush CTA Banner */}
      <section>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-950 px-8 py-14 text-center text-white shadow-xl relative overflow-hidden">
            <span className="bz-blob bz-blob-1 opacity-20" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight relative z-10">
              Sẵn sàng tối ưu hoá mọi cuộc họp của bạn?
            </h2>
            <p className="mt-3 text-stone-300 font-light max-w-xl mx-auto text-sm sm:text-base relative z-10">
              Bắt đầu miễn phí ngay hôm nay. Không yêu cầu thẻ tín dụng, trải nghiệm đầy đủ tính năng trong 60 giây.
            </p>
            <div className="mt-8 flex justify-center relative z-10">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-emerald-900 text-sm font-bold hover:bg-emerald-50 active:scale-95 transition-all shadow-md"
              >
                <span>Xem bảng giá & Đăng ký</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
