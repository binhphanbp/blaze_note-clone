'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Languages, FileText, Users } from 'lucide-react';
import { useStagger, computeTransformStyle, useScrollReveal } from '@/lib/useScrollAnimation';

export default function NeedsGuideCards() {
  const headingRef = useScrollReveal({
    y: 28,
    minOpacity: 0.32,
    damp: 0.12
  });

  const [cardsRef, cardProgressList] = useStagger(3, 0.11, 0.5, {
    damp: 0.12
  });

  const cards = [
    {
      href: '/guide/translation',
      title: 'Phiên dịch',
      desc: 'Nói một ngôn ngữ, đọc bản dịch ngay — 50+ ngôn ngữ.',
      image: '/usecases/translation.jpg',
      icon: Languages
    },
    {
      href: '/guide/transcription',
      title: 'Bóc băng',
      desc: 'Audio/ghi âm → văn bản, tự tách người nói.',
      image: '/usecases/transcription.jpg',
      icon: FileText
    },
    {
      href: '/guide/conference',
      title: 'Hội thảo',
      desc: 'Phụ đề & dịch trực tiếp cho cả khán phòng.',
      image: '/usecases/conference.jpg',
      icon: Users
    }
  ];

  return (
    <section className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] px-6 sm:px-10 py-16 lg:py-24">
        {/* Section Heading */}
        <div ref={headingRef} className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
            Khám phá theo nhu cầu sử dụng của bạn
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-normal">
            Chọn giải pháp phù hợp nhất để nâng cao hiệu suất làm việc cho cá nhân và tổ chức.
          </p>
        </div>

        {/* 3 Staggered Usecase Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((item, idx) => {
            const progress = cardProgressList[idx] ?? 1;
            const transformStyle = computeTransformStyle(progress, {
              y: 28,
              x: 0,
              minOpacity: 0.28,
              scaleFrom: 0.98
            });

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-xs hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-600/10 transition-all duration-300"
                style={transformStyle}
              >
                {/* Illustrated Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <span className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-xs text-emerald-800 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>Xem chi tiết tính năng</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
