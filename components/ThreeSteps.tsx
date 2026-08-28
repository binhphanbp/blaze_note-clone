import React from 'react';

export default function ThreeSteps() {
  const steps = [
    {
      num: '01',
      title: 'Ghi âm cuộc họp.',
      desc: 'Trực tiếp hoặc mời bot vào Zoom, Teams, Google Meet.'
    },
    {
      num: '02',
      title: 'AI phiên âm & phiên dịch.',
      desc: 'Chuyển giọng nói thành văn bản theo thời gian thực.'
    },
    {
      num: '03',
      title: 'Nhận biên bản & tóm tắt.',
      desc: 'Điểm chính và đầu việc, tạo trong vài giây.'
    }
  ];

  return (
    <section className="border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="px-6 sm:px-10 pt-12 pb-6 sm:pt-16 sm:pb-10 lg:py-24 flex items-center">
          <div className="max-w-md">
            <div className="h-px w-full bg-[var(--bz-rule)] mb-8" />
            <h2 className="text-2xl sm:text-3xl font-medium leading-[1.3] tracking-tight">
              <span className="text-stone-900 font-semibold block mb-2">
                Ba bước để có biên bản họp hoàn chỉnh
              </span>
              <span className="text-stone-500 font-normal">
                — không cần gõ tay một chữ.
              </span>
            </h2>
            <p className="mt-4 text-sm font-medium text-stone-600 leading-relaxed">
              Tất cả diễn ra tự động. Bạn chỉ cần tập trung trao đổi, phần ghi chép, dịch thuật và tổng hợp đầu việc đã có trợ lý AI lo.
            </p>
          </div>
        </div>

        {/* Right Stage with Green Blobs */}
        <div className="bz-stage relative overflow-hidden lg:border-l border-[var(--bz-rule)] p-6 sm:p-10 lg:py-16 flex flex-col gap-4 justify-center">
          <span className="bz-blob bz-blob-1" aria-hidden="true" />
          <span className="bz-blob bz-blob-3" aria-hidden="true" />
          <span className="bz-blob bz-blob-4" aria-hidden="true" />
          <span className="bz-sheen" aria-hidden="true" />
          <span className="bz-grain" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-xl ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(5,150,105,0.15)] px-6 py-5 flex items-center gap-5 hover:translate-x-1 hover:border-emerald-200 transition-all duration-200"
              >
                <span className="shrink-0 w-12 text-3xl font-bold text-emerald-500/60 tabular-nums text-center">
                  {step.num}
                </span>
                <div>
                  <div className="text-[17px] font-semibold text-stone-900">
                    {step.title}
                  </div>
                  <div className="text-base font-medium text-stone-500 mt-0.5">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
