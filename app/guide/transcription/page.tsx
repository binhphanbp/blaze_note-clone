'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Mic,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  Share2,
  HelpCircle,
  Play,
  ArrowLeft
} from 'lucide-react';

export default function GuideTranscriptionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const valueCards = [
    {
      title: 'Tiết kiệm 80% thời gian ghi chép',
      desc: 'Không cần ghi chép thủ công, toàn bộ nội dung thảo luận được chuyển thành văn bản tức thì theo thời gian thực.'
    },
    {
      title: 'Tự động phân tách từng người nói',
      desc: 'Hệ thống nhận diện giọng nói và gán nhãn chính xác người phát biểu trong các cuộc họp có nhiều thành viên tham gia.'
    },
    {
      title: 'Trích xuất tóm tắt & việc cần làm',
      desc: 'AI tự động trích xuất các ý chính, quyết định đã thống nhất và phân chia việc cần làm (Action items) rõ ràng.'
    },
    {
      title: 'Xuất văn bản đa định dạng',
      desc: 'Dễ dàng tải về file PDF, Word (.docx) hoặc đồng bộ sang Notion, Slack, Google Drive chỉ với 1 cú nhấp chuột.'
    }
  ];

  const phases = [
    {
      id: 'phase-before',
      badge: '01',
      title: 'Trước cuộc họp · Chuẩn bị & Thiết lập',
      desc: 'Đảm bảo môi trường ghi âm tốt nhất để đạt độ chính xác trên 98%',
      steps: [
        'Kiểm tra microphone và đảm bảo khoảng cách nói từ 30 - 50cm.',
        'Chọn ngôn ngữ tiếng Việt (hoặc tự động phát hiện) trong mục Cài đặt phiên.',
        'Nếu họp online (Zoom, Teams, Google Meet), nhập link phòng họp để bot tự động tham gia.'
      ]
    },
    {
      id: 'phase-during',
      badge: '02',
      title: 'Trong cuộc họp · Ghi âm & Bóc băng trực tiếp',
      desc: 'Theo dõi dòng văn bản hiển thị theo thời gian thực',
      steps: [
        'Nhấn nút "Bắt đầu ghi âm" trên ứng dụng web hoặc máy tính.',
        'Quan sát phụ đề trực tiếp chạy mượt mà theo từng câu phát biểu.',
        'Sử dụng tính năng đánh dấu nhanh (Bookmark) các đoạn quan trọng để AI chú trọng khi tóm tắt.'
      ]
    },
    {
      id: 'phase-after',
      badge: '03',
      title: 'Sau cuộc họp · Tóm tắt & Biên bản tự động',
      desc: 'Hoàn tất và lưu trữ tri thức doanh nghiệp',
      steps: [
        'Nhấn "Kết thúc phiên", AI sẽ hoàn thiện bóc băng trong 5 giây.',
        'Xem bản tóm tắt điều hành và danh sách đầu việc được trích xuất tự động.',
        'Xuất file PDF / Word hoặc gửi link chia sẻ bảo mật tới các thành viên.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Blaze Note có bóc băng được file âm thanh ghi âm từ trước không?',
      a: 'Có, bạn có thể tải lên các file định dạng MP3, M4A, WAV, MP4... Hệ thống sẽ tự động bóc băng và phân tách người nói với tốc độ gấp 10 lần thời gian thực.'
    },
    {
      q: 'Độ chính xác đối với giọng địa phương hoặc tiếng lóng như thế nào?',
      a: 'Mô hình Voice AI của Blaze Note được đào tạo chuyên sâu trên hàng trăm ngàn giờ dữ liệu giọng nói 3 miền Bắc — Trung — Nam và các thuật ngữ chuyên ngành tài chính, công nghệ, y tế.'
    },
    {
      q: 'Tôi có thể chỉnh sửa lại văn bản sau khi bóc băng không?',
      a: 'Hoàn toàn được. Trình soạn thảo trực quan cho phép bạn nghe lại từng đoạn âm thanh tương ứng với từng câu chữ và chỉnh sửa dễ dàng.'
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
            Hướng dẫn Ghi âm & Bóc băng tự động
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Quy trình hoàn chỉnh từ lúc bắt đầu ghi âm, phân tách người nói đến lúc trích xuất biên bản họp tóm tắt bằng AI.
          </p>
        </div>
      </section>

      {/* 2. Value Grid */}
      <section className="border-b border-[var(--bz-rule)] bg-stone-50/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-8">
            Bóc băng tự động giúp bạn điều gì
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-xs"
              >
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 3-Phase Step-by-Step */}
      <section className="border-b border-[var(--bz-rule)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900 mb-12 text-center">
            3 Giai đoạn làm việc với Blaze Note
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-stone-900 text-white font-bold text-sm grid place-items-center shrink-0">
                    {phase.badge}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-medium">{phase.desc}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6 pt-6 border-t border-stone-100">
                  {phase.steps.map((st, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="border-b border-[var(--bz-rule)] bg-stone-50/40">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14 lg:py-18">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-8 text-center">
            Câu hỏi thường gặp về Bóc băng
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
