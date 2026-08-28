'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import AuthModal from './AuthModal';

export default function CtaBanner() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <section className="bz-defer relative overflow-hidden border-t border-[var(--bz-rule)] bg-gradient-to-br from-emerald-100 via-teal-50 to-green-100 py-16 sm:py-20 lg:py-24">
        {/* Ambient mesh blobs */}
        <span className="bz-blob bz-blob-1" aria-hidden="true" />
        <span className="bz-blob bz-blob-3" aria-hidden="true" />
        <span className="bz-sheen" aria-hidden="true" />
        <span className="bz-grain" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 shadow-sm text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Bắt đầu trải nghiệm Voice AI ngay hôm nay
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.25]">
            Biến mọi cuộc họp thành tri thức có giá trị.
          </h2>

          <p className="text-base sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto leading-relaxed">
            Phiên âm, phiên dịch và tóm tắt realtime — đăng ký miễn phí, chạy thử chỉ trong vài phút.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white text-base font-bold hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/25 active:scale-95 transition-all duration-200"
            >
              <span>Đăng ký ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/80 border border-stone-300 text-stone-800 text-base font-semibold hover:bg-white hover:border-emerald-300 transition-colors"
            >
              Dùng thử không cần đăng ký
            </a>
          </div>

          {/* Quick perks */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-600">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Kích hoạt trong 60 giây</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Không yêu cầu thẻ tín dụng</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Tặng 120 phút dùng thử miễn phí</span>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </>
  );
}
