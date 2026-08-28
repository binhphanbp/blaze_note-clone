'use client';

import React, { useState } from 'react';
import { Mic, Languages, Sparkles, ArrowRight, Play, Volume2, CheckCircle2 } from 'lucide-react';

export default function HeroStage() {
  const [activeTab, setActiveTab] = useState<'record' | 'translate'>('record');

  return (
    <div className="relative mt-14 -mx-6 sm:mx-auto max-w-6xl">
      <div className="bz-hero-stage relative overflow-hidden aspect-[16/12] sm:aspect-[3/1] min-h-[360px] sm:min-h-[400px]">
        {/* Animated Green Glowing Blobs */}
        <span className="bz-blob bz-blob-1" aria-hidden="true" />
        <span className="bz-blob bz-blob-2" aria-hidden="true" />
        <span className="bz-blob bz-blob-3" aria-hidden="true" />
        <span className="bz-blob bz-blob-4" aria-hidden="true" />
        <span className="bz-sheen" aria-hidden="true" />
        <span className="bz-grain" aria-hidden="true" />

        {/* Floating Card Container */}
        <div className="absolute inset-0 grid place-items-center p-3 sm:p-5 z-10">
          <div className="bz-card-in w-full max-w-3xl rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-black/5 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.22)] overflow-hidden font-['Gilroy']">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-5 h-9 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-100" />
              </div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                Blaze Note Workspace
              </div>
              <div className="w-10" />
            </div>

            {/* Window Body */}
            <div className="px-5 py-5 sm:px-8 sm:py-6">
              <div className="min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center">
                <div className="mb-5 text-center text-base sm:text-lg font-semibold text-stone-800">
                  Chọn tính năng để bắt đầu
                </div>

                {/* Switcher Buttons */}
                <div className="flex items-start justify-center gap-12 sm:gap-20">
                  {/* Option 1: Ghi chép */}
                  <button
                    type="button"
                    onClick={() => setActiveTab('record')}
                    className="group relative flex flex-col items-center gap-2.5 transition-transform hover:scale-105"
                  >
                    <div
                      className={`p-3.5 rounded-2xl transition-all duration-300 ${
                        activeTab === 'record'
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-100'
                          : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600'
                      }`}
                    >
                      <Mic className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span
                      className={`text-[13.5px] font-semibold transition-colors ${
                        activeTab === 'record' ? 'text-emerald-900' : 'text-stone-500'
                      }`}
                    >
                      Ghi chép
                    </span>
                    {activeTab === 'record' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </button>

                  {/* Option 2: Dịch thuật */}
                  <button
                    type="button"
                    onClick={() => setActiveTab('translate')}
                    className="group relative flex flex-col items-center gap-2.5 transition-transform hover:scale-105"
                  >
                    <div
                      className={`p-3.5 rounded-2xl transition-all duration-300 ${
                        activeTab === 'translate'
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-100'
                          : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600'
                      }`}
                    >
                      <Languages className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span
                      className={`text-[13.5px] font-semibold transition-colors ${
                        activeTab === 'translate' ? 'text-emerald-900' : 'text-stone-500'
                      }`}
                    >
                      Dịch thuật
                    </span>
                    {activeTab === 'translate' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </button>
                </div>

                {/* Subtext info */}
                <div className="mt-5 text-center text-xs font-medium text-stone-500 flex items-center gap-1.5 bg-emerald-50/60 px-3 py-1.5 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {activeTab === 'record'
                    ? 'Tự động nhận diện người nói, lọc tiếng ồn và tạo tóm tắt biên bản'
                    : 'Phiên dịch song song 50+ ngôn ngữ với phụ đề trực tiếp realtime'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
