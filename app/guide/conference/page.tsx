import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, QrCode, Monitor, Tv } from 'lucide-react';

export default function GuideConferencePage() {
  const steps = [
    {
      num: '01',
      title: 'Tạo phòng hội thảo & Sự kiện (Event Mode)',
      desc: 'Chọn chế độ Sự kiện, đặt tên chương trình, thiết lập danh sách diễn giả và các cặp ngôn ngữ cần phát sóng.'
    },
    {
      num: '02',
      title: 'Kết nối nguồn âm thanh sân khấu',
      desc: 'Cắm line-in từ bàn mixer âm thanh của hội trường vào máy tính Host để đảm bảo chất lượng thu âm trong trẻo nhất.'
    },
    {
      num: '03',
      title: 'Hiển thị phụ đề lên màn hình LED hội trường',
      desc: 'Mở cửa sổ Fullscreen LED Caption với nền trong suốt hoặc phông chữ lớn, tương phản cao để khán giả ngồi xa cũng đọc rõ.'
    },
    {
      num: '04',
      title: 'Chiếu mã QR cho khán giả quét tại chỗ',
      desc: 'Khán giả chỉ cần quét mã QR bằng camera điện thoại để vào trang Viewer, tự do chọn ngôn ngữ và theo dõi phụ đề trực tiếp.'
    },
    {
      num: '05',
      title: 'Xuất toàn bộ biên bản hội thảo sau sự kiện',
      desc: 'Khi sự kiện kết thúc, toàn bộ nội dung diễn văn và phiên dịch được đóng gói thành file PDF, Word song ngữ chuyên nghiệp.'
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
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            Hướng dẫn sử dụng
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Hướng dẫn hội thảo &amp; sự kiện quy mô lớn (Conference)
          </h1>
          <p className="mt-4 text-base text-stone-600 font-medium leading-relaxed">
            Giải pháp phát phụ đề trực tiếp lên màn hình LED và truyền trực tuyến đa ngôn ngữ tới hàng nghìn khán giả qua mã QR.
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-stone-200 shadow-md mb-12 bg-stone-100">
          <Image
            src="/usecases/conference.jpg"
            alt="Hội thảo và sự kiện"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Quy trình vận hành sự kiện trực tiếp
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
            href="/guide/transcription"
            className="text-sm font-semibold text-stone-600 hover:text-emerald-700 transition"
          >
            ← Hướng dẫn bóc băng cuộc họp
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>Xem bảng giá gói Sự kiện</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
