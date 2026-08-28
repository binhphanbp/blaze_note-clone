'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import HeroStage from '@/components/HeroStage';
import TrustedBy from '@/components/TrustedBy';
import FourPillars from '@/components/FourPillars';
import ThreeSteps from '@/components/ThreeSteps';
import SecuritySection from '@/components/SecuritySection';
import FeaturesDeepDive from '@/components/FeaturesDeepDive';
import InteractiveDemo from '@/components/InteractiveDemo';
import SessionsShowcase from '@/components/SessionsShowcase';
import NeedsGuideCards from '@/components/NeedsGuideCards';
import CtaBanner from '@/components/CtaBanner';
import AuthModal from '@/components/AuthModal';

export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const heroWords = [
    { text: 'Blaze', delay: '0.00s' },
    { text: 'Note', delay: '0.07s' },
    { text: 'tự', delay: '0.14s' },
    { text: 'động', delay: '0.21s' },
    { text: 'chuyển', delay: '0.28s' },
    { text: 'hoá', delay: '0.35s' },
    { text: 'cuộc', delay: '0.42s' },
    { text: 'hội', delay: '0.49s' },
    { text: 'thoại', delay: '0.56s' }
  ];

  const heroWordsLine2 = [
    { text: 'thành', delay: '0.63s' },
    { text: 'tri', delay: '0.70s' },
    { text: 'thức', delay: '0.77s' },
    { text: 'có', delay: '0.84s' },
    { text: 'giá', delay: '0.91s' },
    { text: 'trị.', delay: '0.98s' }
  ];

  return (
    <div className="min-h-screen text-stone-800 selection:bg-emerald-500/20 overflow-x-hidden pt-16">
      {/* 1. Hero Section */}
      <section className="relative px-6 lg:px-4 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200/80 animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Trợ lý Voice AI thế hệ mới
          </div>

          {/* Main Title with word-by-word animation */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-stone-900 leading-[1.25] max-w-4xl mx-auto">
            {heroWords.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="bz-word" style={{ animationDelay: word.delay }}>
                  {word.text}
                </span>{' '}
              </React.Fragment>
            ))}
            <span className="block mt-2 sm:mt-3 text-emerald-800">
              {heroWordsLine2.map((word, idx) => (
                <React.Fragment key={idx}>
                  <span className="bz-word" style={{ animationDelay: word.delay }}>
                    {word.text}
                  </span>{' '}
                </React.Fragment>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-stone-600 font-medium max-w-2xl mx-auto leading-relaxed bz-pop-in" style={{ animationDelay: '1.05s' }}>
            Phiên âm thời gian thực, phiên dịch 50+ ngôn ngữ, tự động tạo biên bản và trích xuất danh sách việc cần làm cho Zoom, Teams, Google Meet.
          </p>

          {/* Call to Actions */}
          <div
            className="bz-pop-in mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: '1.15s' }}
          >
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="group inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-stone-900 text-white text-base font-bold hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/25 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <span>Bắt đầu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 rounded-full border border-stone-300 bg-white text-base font-semibold text-stone-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
              <span>Xem cách hoạt động</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Stage with Green Mesh */}
        <HeroStage />
      </section>

      {/* 2. Customer Logos */}
      <TrustedBy />

      {/* 3. Four Value Pillars */}
      <FourPillars />

      {/* 4. Three-Step Workflow */}
      <ThreeSteps />

      {/* 5. Enterprise Security & Certifications */}
      <SecuritySection />

      {/* 6. Features Deep Dive */}
      <FeaturesDeepDive />

      {/* 7. Live Interactive Playground */}
      <InteractiveDemo />

      {/* 8. Sessions Showcase */}
      <SessionsShowcase />

      {/* 9. Needs Guide Cards */}
      <NeedsGuideCards />

      {/* 10. Final Call to Action */}
      <CtaBanner />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}
