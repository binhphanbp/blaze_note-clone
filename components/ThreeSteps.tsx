'use client';

import React from 'react';
import { useStagger, computeTransformStyle, useScrollReveal } from '@/lib/useScrollAnimation';

export default function ThreeSteps() {
  const leftHeadingRef = useScrollReveal({
    y: 40,
    minOpacity: 0.28,
    damp: 0.12
  });

  const [stepsContainerRef, stepProgressList] = useStagger(3, 0.11, 0.52, {
    start: 0.94,
    end: 0.38,
    damp: 0.12
  });

  const steps = [
    {
      n: '01',
      title: 'Bật ghi âm hoặc mời bot',
      desc: 'Mở ứng dụng khi họp trực tiếp, hoặc dán link Google Meet, Teams, Zoom để bot tự vào phòng.'
    },
    {
      n: '02',
      title: 'Xem phụ đề & dịch live',
      desc: 'Lời nói chuyển thành chữ ngay lập tức, hỗ trợ dịch hai chiều và hiển thị phụ đề nổi trên màn hình.'
    },
    {
      n: '03',
      title: 'Nhận biên bản hoàn chỉnh',
      desc: 'Cuộc họp kết thúc, AI tự động tổng hợp ý chính, quyết định và đầu việc cần làm.'
    }
  ];

  return (
    <section className="border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] grid lg:grid-cols-2">
        {/* Left Column: Heading */}
        <div
          ref={leftHeadingRef}
          className="px-6 sm:px-10 pt-12 pb-6 sm:pt-16 sm:pb-10 lg:py-24 flex items-center"
        >
          <div className="max-w-md">
            <div className="h-px w-full bg-[var(--bz-rule)] mb-8" />
            <h2 className="text-2xl sm:text-3xl font-medium leading-[1.3] tracking-tight">
              <span className="text-stone-900">
                Ba bước để có biên bản họp hoàn chỉnh
              </span>{' '}
              <span className="text-stone-500">
                — không cần gõ tay một chữ.
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column: Glowing Emerald Stage with Staggered Flying Cards */}
        <div className="bz-stage relative overflow-hidden lg:border-l border-[var(--bz-rule)] pl-6 sm:pl-10 pr-0 pt-4 pb-12 sm:py-12 lg:py-16 flex flex-col gap-4 justify-center">
          <span className="bz-blob bz-blob-1" aria-hidden="true" />
          <span className="bz-blob bz-blob-3" aria-hidden="true" />
          <span className="bz-blob bz-blob-4" aria-hidden="true" />
          <span className="bz-sheen" aria-hidden="true" />
          <span className="bz-grain" aria-hidden="true" />

          <div
            ref={stepsContainerRef}
            className="relative z-10 flex flex-col gap-4"
          >
            {steps.map((st, idx) => {
              const progress = stepProgressList[idx] ?? 1;
              const transformStyle = computeTransformStyle(progress, {
                y: 32,
                x: 0,
                minOpacity: 0.25,
                scaleFrom: 0.98
              });

              return (
                <div
                  key={st.n}
                  className="bg-white ring-1 ring-black/5 px-6 py-5 flex items-center gap-5 shadow-sm"
                  style={transformStyle}
                >
                  <span className="shrink-0 w-12 text-3xl font-medium text-stone-300 tabular-nums text-center">
                    {st.n}
                  </span>
                  <div>
                    <div className="text-[17px] font-semibold text-stone-900">
                      {st.title}
                    </div>
                    <div className="text-base font-medium text-stone-500">
                      {st.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
