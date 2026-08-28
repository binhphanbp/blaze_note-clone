'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  QrCode,
  Monitor,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sliders,
  Maximize2
} from 'lucide-react';

export default function GuideConferencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Tạo phiên Sự kiện & Chọn vai trò Host',
      desc: 'Người phụ trách kỹ thuật hoặc Ban tổ chức đăng nhập vào tài khoản, tạo phiên Sự kiện mới và thiết lập micro của diễn giả chính.'
    },
    {
      num: '02',
      title: 'Kết nối đầu ra Màn hình LED sân khấu',
      desc: 'Mở chế độ Operator / Sân khấu trên màn hình thứ hai (kết nối HDMI/DisplayPort đến màn hình LED), tuỳ chỉnh kích thước font chữ, màu nền tương phản cao.'
    },
    {
      num: '03',
      title: 'Tạo mã QR cho Khán giả (Viewer Mode)',
      desc: 'Trình chiếu mã QR trên màn hình hoặc in trên standee tại cửa ra vào để hàng trăm/hàng ngàn khách tham dự quét mã và theo dõi bản dịch trên điện thoại cá nhân.'
    },
    {
      num: '04',
      title: 'Phân quyền Diễn giả & Điều hành viên',
      desc: 'Điều phối viên kỹ thuật có thể hiệu đính từ ngữ, chuyển đổi ngôn ngữ dịch hoặc tạm dừng phụ đề khi diễn giả nghỉ giải lao.'
    },
    {
      num: '05',
      title: 'Xuất toàn bộ biên bản hội thảo & Kỷ yếu',
      desc: 'Sau khi sự kiện kết thúc, xuất toàn bộ dữ liệu phiên âm, bản dịch và báo cáo tóm tắt nội dung hội thảo cho khách mời và cơ quan báo chí.'
    }
  ];

  const faqs = [
    {
      q: 'Hệ thống có chịu tải được khi có hơn 1.000 khán giả cùng quét QR không?',
      a: 'Hoàn toàn được. Chế độ Viewer được tối ưu hoá qua mạng phân phối CDN WebSocket chịu tải phân tán, hỗ trợ lên tới hơn 10.000 khán giả truy cập đồng thời.'
    },
    {
      q: 'Khán giả quét QR có cần phải tải app hay đăng ký tài khoản không?',
      a: 'Không cần. Khán giả chỉ cần quét mã QR bằng camera điện thoại là trang phụ đề sẽ mở ngay trên trình duyệt web di động một cách nhanh chóng.'
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
            Hướng dẫn Sự kiện, Hội thảo & Màn hình LED
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Quy trình vận hành phụ đề sân khấu trực tiếp và chia sẻ mã QR cho hàng ngàn khán giả theo dõi bản dịch trên điện thoại.
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
            Câu hỏi thường gặp về Sự kiện & Hội thảo
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
