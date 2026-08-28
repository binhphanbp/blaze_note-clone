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
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const heroWords1 = 'Ghi chép, phiên dịch & tóm tắt'.split(' ');
  const heroWords2 = 'cuộc họp bằng AI'.split(' ');

  let wordIndex = 0;
  const staggerTime = 0.07;

  return (
    <div className="min-h-screen text-stone-800 selection:bg-emerald-500/15 overflow-x-hidden font-['Gilroy']">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 lg:px-2 pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Animated Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-medium tracking-tight text-stone-900 leading-[1.3]">
            {heroWords1.map((w, idx) => (
              <span
                key={`l1-${idx}`}
                className="bz-word"
                style={{ animationDelay: `${(wordIndex++ * staggerTime).toFixed(2)}s` }}
              >
                {w}&nbsp;
              </span>
            ))}
            <span className="block mt-2">
              {heroWords2.map((w, idx) => (
                <span
                  key={`l2-${idx}`}
                  className="bz-word"
                  style={{ animationDelay: `${(wordIndex++ * staggerTime).toFixed(2)}s` }}
                >
                  {w}&nbsp;
                </span>
              ))}
            </span>
          </h1>

          {/* Action CTAs */}
          <div
            className="bz-pop-in mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: '1.15s' }}
          >
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="group inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-stone-900 text-white text-base font-semibold hover:bg-emerald-600 active:scale-95 transition-all whitespace-nowrap shadow-md"
            >
              <span>Bắt đầu miễn phí</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#demo"
              className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-3.5 rounded-full border border-stone-300 text-base font-semibold text-stone-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors whitespace-nowrap bg-white/80 backdrop-blur-xs"
            >
              Xem cách hoạt động
            </a>
          </div>
        </div>

        {/* Hero Interactive Stage with Green Blobs */}
        <HeroStage />
      </section>

      {/* 2. TRUSTED BY CLIENTS */}
      <ScrollReveal y={24} minOpacity={0.4}>
        <TrustedBy />
      </ScrollReveal>

      {/* 3. FOUR PILLARS */}
      <ScrollReveal y={36} minOpacity={0.28}>
        <FourPillars />
      </ScrollReveal>

      {/* 4. THREE STEPS */}
      <ScrollReveal y={40} minOpacity={0.28}>
        <ThreeSteps />
      </ScrollReveal>

      {/* 5. ENTERPRISE SECURITY & CERTS */}
      <ScrollReveal y={28} minOpacity={0.35}>
        <SecuritySection />
      </ScrollReveal>

      {/* 6. FEATURES DEEP DIVE */}
      <ScrollReveal y={36} minOpacity={0.3}>
        <FeaturesDeepDive />
      </ScrollReveal>

      {/* 7. LIVE PLAYGROUND DEMO (#demo) */}
      <InteractiveDemo />

      {/* 8. SESSIONS SHOWCASE (#sessions) */}
      <SessionsShowcase />

      {/* 9. NEEDS GUIDE CARDS */}
      <ScrollReveal y={28} minOpacity={0.35}>
        <NeedsGuideCards />
      </ScrollReveal>

      {/* 10. CTA BANNER */}
      <ScrollReveal y={24} minOpacity={0.4} scaleFrom={0.99}>
        <CtaBanner />
      </ScrollReveal>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}
