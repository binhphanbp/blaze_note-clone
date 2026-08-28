import React from 'react';
import { FileText, Languages, Users, CheckCircle } from 'lucide-react';

export default function SessionsShowcase() {
  const sessions = [
    {
      num: '01',
      title: 'Ghi chép & biên bản họp',
      desc: 'Tự động ghi âm, chuyển lời nói thành văn bản và soạn biên bản cho họp nội bộ, giao ban hay họp hội đồng.',
      icon: FileText,
      tags: ['Ghi âm', 'Bóc băng', 'Biên bản', 'Tóm tắt']
    },
    {
      num: '02',
      title: 'Phiên dịch đa ngôn ngữ',
      desc: 'Dịch hai chiều realtime với hơn 50 ngôn ngữ, hiển thị phụ đề trực tiếp và hỗ trợ tai nghe thông minh.',
      icon: Languages,
      tags: ['Dịch hai chiều', 'Phụ đề', 'Tai nghe', '50+ Ngôn ngữ']
    },
    {
      num: '03',
      title: 'Sự kiện & Hội thảo quy mô lớn',
      desc: 'Chia sẻ màn hình Host sang hàng nghìn Viewer qua quét mã QR, hiển thị song ngữ trên màn hình LED.',
      icon: Users,
      tags: ['Host & Viewer', 'QR Code', 'Màn hình LED', 'Đa màn hình']
    }
  ];

  return (
    <section id="sessions" className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 block">
            Linh hoạt & Toàn diện
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 leading-[1.3]">
            Một nền tảng cho mọi loại cuộc họp và sự kiện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sessions.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[var(--bz-rule)] bg-white p-7 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-200 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-emerald-500/60 tabular-nums">
                    {item.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
