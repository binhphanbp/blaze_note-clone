import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Mic, Bot, Share2 } from 'lucide-react';

export default function GuideTranscriptionPage() {
  const steps = [
    {
      num: '01',
      title: 'Tải lên file hoặc bắt đầu ghi âm',
      desc: 'Hỗ trợ các định dạng âm thanh và video phổ biến như MP3, WAV, M4A, MP4, AAC... hoặc bạn có thể cắm micro và bấm ghi trực tiếp.'
    },
    {
      num: '02',
      title: 'Chọn số lượng người nói dự kiến',
      desc: 'Thuật toán Diarization tự động phát hiện các giọng nói khác nhau, phân đoạn câu thoại và gán nhãn Người nói A, Người nói B...'
    },
    {
      num: '03',
      title: 'Xử lý bóc băng & Lọc tạp âm',
      desc: 'Mô hình AI nhận diện giọng nói chuẩn tiếng Việt 3 miền, tự động sửa chính tả, dấu câu và thuật ngữ chuyên môn.'
    },
    {
      num: '04',
      title: 'Đổi tên người phát biểu & Biên tập nhanh',
      desc: 'Nhấp đúp vào tên Người nói để đổi thành tên thật (ví dụ: Giám đốc, Kế toán trưởng) — tất cả các đoạn thoại tương ứng sẽ tự động cập nhật.'
    },
    {
      num: '05',
      title: 'Tạo tóm tắt tự động & Xuất tài liệu',
      desc: 'Nhấn "Tạo biên bản AI" để nhận bản tóm tắt điều hành, các quyết định chính và danh sách đầu việc được phân bổ cụ thể.'
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
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            Hướng dẫn sử dụng
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Hướng dẫn bóc băng &amp; gỡ băng cuộc họp (Transcription)
          </h1>
          <p className="mt-4 text-base text-stone-600 font-medium leading-relaxed">
            Chuyển toàn bộ nội dung âm thanh thành văn bản hoàn chỉnh, phân tách người nói và tự động soạn biên bản họp trong vài giây.
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-stone-200 shadow-md mb-12 bg-stone-100">
          <Image
            src="/usecases/transcription.jpg"
            alt="Bóc băng cuộc họp"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Quy trình bóc băng tự động
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
            href="/guide/translation"
            className="text-sm font-semibold text-stone-600 hover:text-emerald-700 transition"
          >
            ← Hướng dẫn phiên dịch trực tiếp
          </Link>
          <Link
            href="/guide/conference"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>Hướng dẫn hội thảo &amp; sự kiện</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
