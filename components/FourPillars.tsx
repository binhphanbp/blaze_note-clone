import React from 'react';
import { Mic, Languages, Brain, ShieldCheck } from 'lucide-react';

export default function FourPillars() {
  const pillars = [
    {
      icon: Mic,
      title: 'Ghi chép mọi nơi.',
      desc: 'Cuộc họp, cuộc gọi, hội thảo — trực tiếp hoặc qua bot.'
    },
    {
      icon: Languages,
      title: 'Phiên dịch tức thì.',
      desc: 'Nói một ngôn ngữ, đọc bản dịch ngay — hơn 50 ngôn ngữ.'
    },
    {
      icon: Brain,
      title: 'Tóm tắt & việc cần làm.',
      desc: 'Biên bản, điểm chính và đầu việc, tạo trong vài giây.'
    },
    {
      icon: ShieldCheck,
      title: 'Riêng tư & an toàn.',
      desc: 'Dữ liệu cô lập theo tổ chức, chia sẻ khi bạn cho phép.'
    }
  ];

  return (
    <section className="border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] px-6 sm:px-10 py-16 lg:py-24">
        <div>
          <h2 className="max-w-3xl text-lg sm:text-2xl lg:text-[1.75rem] font-medium leading-[1.5] tracking-tight text-stone-900">
            Mỗi cuộc họp trôi qua là kiến thức trôi đi.{' '}
            <span className="text-emerald-700 font-semibold">Blaze Note</span> giữ lại từng lời —
            phiên âm, phiên dịch và tóm tắt theo thời gian thực, để không ý tưởng nào bị bỏ lỡ.
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {pillars.map((item, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="flex items-center h-8 mb-6">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="border-t border-[var(--bz-rule)] pt-6">
                  <p className="text-[17px] font-medium leading-relaxed text-stone-600">
                    <span className="font-semibold text-stone-900 block mb-1">
                      {item.title}
                    </span>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
