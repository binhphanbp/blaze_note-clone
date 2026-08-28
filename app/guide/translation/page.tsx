import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Languages, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Volume2, Globe, Laptop } from 'lucide-react';

export default function GuideTranslationPage() {
  const steps = [
    {
      num: '01',
      title: 'Tạo phiên phiên dịch mới',
      desc: 'Đăng nhập vào Blaze Note và chọn tính năng "Phiên dịch" từ màn hình chính hoặc nhấn phím tắt trên ứng dụng Desktop.'
    },
    {
      num: '02',
      title: 'Chọn cặp ngôn ngữ nguồn → đích',
      desc: 'Thiết lập ngôn ngữ người nói (ví dụ: Tiếng Việt, Tiếng Anh, Tiếng Trung, Tiếng Hàn, Tiếng Nhật...) và ngôn ngữ hiển thị bản dịch.'
    },
    {
      num: '03',
      title: 'Tuỳ chọn chế độ một chiều / hai chiều',
      desc: 'Bật chế độ hai chiều nếu bạn đang trò chuyện song ngữ với đối tác nước ngoài để cả hai bên đều đọc được bản dịch đồng thời.'
    },
    {
      num: '04',
      title: 'Bắt đầu nói và quan sát phụ đề realtime',
      desc: 'Âm thanh sẽ được chuyển thành văn bản và dịch theo thời gian thực với độ trễ dưới 300ms, hiển thị rõ ràng từng câu hoàn chỉnh.'
    },
    {
      num: '05',
      title: 'Chia sẻ đường link / mã QR cho người tham gia',
      desc: 'Khách mời có thể mở link trên điện thoại hoặc trình duyệt để đọc phụ đề trực tiếp bằng ngôn ngữ họ mong muốn.'
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Back Link */}
        <Link
          href="/guide"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-emerald-700 transition mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại danh mục hướng dẫn</span>
        </Link>

        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Languages className="w-3.5 h-3.5 text-emerald-600" />
            Hướng dẫn sử dụng
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Hướng dẫn phiên dịch trực tiếp (Live Translation)
          </h1>
          <p className="mt-4 text-base text-stone-600 font-medium leading-relaxed">
            Cách thiết lập phiên dịch realtime song ngữ cho cuộc họp quốc tế, đàm phán thương mại và trao đổi đa quốc gia.
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-stone-200 shadow-md mb-12 bg-stone-100">
          <Image
            src="/usecases/translation.jpg"
            alt="Phiên dịch trực tiếp"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Quy trình 5 bước thực hiện
          </h2>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 flex gap-5 items-start shadow-sm"
            >
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-lg flex items-center justify-center shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Topic */}
        <div className="pt-8 border-t border-stone-200 flex items-center justify-between">
          <Link
            href="/guide"
            className="text-sm font-semibold text-stone-600 hover:text-emerald-700 transition"
          >
            ← Tổng quan hướng dẫn
          </Link>
          <Link
            href="/guide/transcription"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>Hướng dẫn bóc băng cuộc họp</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
