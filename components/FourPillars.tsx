'use client';

import React from 'react';
import { Mic, Languages, Sparkles, ShieldCheck } from 'lucide-react';
import {
  useScrollProgress,
  useStagger,
  interpolateScrollColor,
  computeTransformStyle
} from '@/lib/useScrollAnimation';

export default function FourPillars() {
  const [statementRef, statementProgress] = useScrollProgress({
    start: 0.95,
    end: 0.32,
    damp: 0.12
  });

  const [cardsRef, cardProgressList] = useStagger(4, 0.13, 0.48, {
    start: 0.92,
    end: 0.36,
    damp: 0.12
  });

  const statementLead = 'Mỗi cuộc họp trôi qua là kiến thức trôi đi.';
  const statementTail = 'Blaze Note giữ lại từng lời — phiên âm, phiên dịch và tóm tắt theo thời gian thực, để không ý tưởng nào bị bỏ lỡ.';
  const statementWords = `${statementLead} ${statementTail}`.split(/\s+/).filter(Boolean);
  const totalWords = statementWords.length;

  const pillars = [
    {
      icon: Mic,
      key: 'capture',
      title: 'Ghi âm & phiên âm',
      desc: 'Giữ lại từng lời từ micro hoặc cuộc họp online, nhận dạng chính xác tiếng Việt 3 miền và hơn 50+ ngôn ngữ.'
    },
    {
      icon: Languages,
      key: 'translate',
      title: 'Phiên dịch trực tiếp',
      desc: 'Dịch thuật hai chiều theo thời gian thực với độ trễ dưới 500ms, phụ đề phủ trên Zoom, Teams, Meet.'
    },
    {
      icon: Sparkles,
      key: 'summarize',
      title: 'Tóm tắt & biên bản AI',
      desc: 'Trích xuất quyết định, việc cần làm và tạo biên bản theo hơn 1.200+ mẫu văn bản doanh nghiệp.'
    },
    {
      icon: ShieldCheck,
      key: 'security',
      title: 'Bảo mật tuyệt đối',
      desc: 'Mã hoá dữ liệu đa tầng, tuân thủ ISO 27001, SOC 2 Type II và cam kết không dùng dữ liệu để huấn luyện AI.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] px-6 sm:px-10 py-16 lg:py-24">
      {/* 1. Dynamic Scroll-Coloring Statement Heading */}
      <h2
        ref={statementRef}
        className="max-w-3xl text-lg sm:text-2xl lg:text-[1.75rem] font-medium leading-[1.5] tracking-tight"
      >
        {statementWords.map((word, idx) => {
          // Progress for this specific word
          const wordFactor = Math.max(0, Math.min(1, statementProgress * totalWords - idx));
          const color = interpolateScrollColor(wordFactor, [185, 180, 175], [28, 25, 23]);

          return (
            <span
              key={idx}
              style={{ color, transition: 'color 0.1s ease-out' }}
            >
              {word}{idx < totalWords - 1 ? ' ' : ''}
            </span>
          );
        })}
      </h2>

      {/* 2. 4 Pillar Cards with Staggered Scroll Elevation */}
      <div
        ref={cardsRef}
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8"
      >
        {pillars.map((item, idx) => {
          const itemProgress = cardProgressList[idx] ?? 1;
          const transformStyle = computeTransformStyle(itemProgress, {
            y: 20,
            x: 0,
            minOpacity: 0.25,
            scaleFrom: 1
          });

          return (
            <div
              key={item.key}
              className="flex flex-col"
              style={transformStyle}
            >
              <div className="flex items-center h-8 mb-6">
                <item.icon className="w-7 h-7 text-stone-400" strokeWidth={1.5} />
              </div>

              <div className="border-t border-[var(--bz-rule)] pt-6">
                <p className="text-[17px] font-medium leading-relaxed text-stone-600">
                  <span className="font-semibold text-stone-900">{item.title}.</span>{' '}
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
