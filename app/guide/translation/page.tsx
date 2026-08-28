'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Languages,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Headphones,
  Volume2,
  Layers,
  Sparkles
} from 'lucide-react';

export default function GuideTranslationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Chọn chế độ dịch (Một chiều hoặc Hai chiều)',
      desc: 'Chế độ một chiều phù hợp khi nghe bài giảng, hội thảo quốc tế. Chế độ hai chiều tối ưu cho cuộc hội thoại đàm phán trực tiếp giữa 2 bên.'
    },
    {
      num: '02',
      title: 'Thiết lập cặp ngôn ngữ nguồn & đích',
      desc: 'Chọn ngôn ngữ của bạn và đối tác từ hơn 50+ ngôn ngữ phổ biến (Tiếng Việt, English, Trung Quốc, Nhật Bản, Hàn Quốc, Pháp, Đức...).'
    },
    {
      num: '03',
      title: 'Bật phụ đề nổi (Caption Overlay)',
      desc: 'Nếu đang họp trên Zoom/Teams, mở cửa sổ Overlay trong suốt để vừa nhìn mặt đối tác vừa đọc phụ đề bản dịch chạy song song.'
    },
    {
      num: '04',
      title: 'Đọc bản dịch tự động (Text-to-Speech)',
      desc: 'Tuỳ chọn phát giọng đọc AI tự nhiên qua tai nghe riêng để nghe bản dịch ngay khi đối tác phát biểu mà không cần nhìn màn hình.'
    },
    {
      num: '05',
      title: 'Lưu trữ bản ghi song ngữ & Chia sẻ',
      desc: 'Sau khi kết thúc, hệ thống lưu trữ toàn bộ lịch sử đối thoại dạng song ngữ (kèm timestamp) và sẵn sàng xuất file PDF / Word.'
    }
  ];

  const faqs = [
    {
      q: 'Độ trễ của bản dịch thời gian thực là bao lâu?',
      a: 'Độ trễ xử lý trung bình dưới 500ms đối với các cặp ngôn ngữ chính như Việt — Anh, Việt — Trung, Việt — Nhật.'
    },
    {
      q: 'Có thể dịch được các từ ngữ chuyên ngành thương mại hoặc kỹ thuật không?',
      a: 'Có. Bạn có thể thêm từ vựng tuỳ chỉnh (Custom Glossary) vào cài đặt để AI luôn dịch chính xác tên sản phẩm và thuật ngữ chuyên ngành của công ty bạn.'
    }
  ];

  return (
    <div className="min-h-screen text-stone-800 selection:bg-emerald-500/15 overflow-x-clip pt-16 bg-white font-['Gilroy']">
      {/* 1. Header Section */}
      <section className="border-b border-[var(--bz-rule)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-400 hover:text-emerald-700 transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Trung tâm Hướng dẫn</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-stone-900 leading-tight">
            Hướng dẫn Phiên dịch trực tiếp đa ngôn ngữ
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Cách sử dụng trợ lý dịch thuật thời gian thực cho đàm phán kinh doanh, tiếp khách quốc tế và các cuộc họp đa quốc gia.
          </p>
        </div>
      </section>

      {/* 2. Step-by-Step Guide */}
      <section className="border-b border-[var(--bz-rule)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14 lg:py-20">
          <ol className="space-y-8 list-none">
            {steps.map((st) => (
              <li
                key={st.num}
                className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm flex flex-col sm:flex-row items-start gap-6"
              >
                <span className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 font-bold text-base grid place-items-center shrink-0">
                  {st.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="border-b border-[var(--bz-rule)] bg-stone-50/40">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14 lg:py-18">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-8 text-center">
            Câu hỏi thường gặp về Phiên dịch
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-stone-900 text-sm hover:text-emerald-700 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
