'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Copy, Check, RotateCcw, Volume2, Sparkles, Languages } from 'lucide-react';
import AuthModal from './AuthModal';

const sampleTranscripts = {
  transcribe: [
    { speaker: 'Bạn', text: 'Chào mọi người, hôm nay chúng ta sẽ thảo luận về lộ trình phát triển sản phẩm quý 4 và tích hợp tính năng AI mới.' },
    { speaker: 'Bạn', text: 'Mục tiêu chính là tối ưu độ chính xác của mô hình phiên âm tiếng Việt và tăng tốc độ dịch thuật xuống dưới 300 mili-giây.' },
    { speaker: 'Bạn', text: 'Xin mời đội ngũ kỹ thuật trình bày kết quả thử nghiệm hiệu năng mới nhất.' }
  ],
  oneway: [
    {
      source: '“Welcome everyone to our product roadmap sync. We are excited to announce our next-gen Voice AI model.”',
      target: '“Chào mừng mọi người đến với buổi đồng bộ lộ trình sản phẩm. Chúng tôi rất hào hứng công bố mô hình Voice AI thế hệ mới.”'
    },
    {
      source: '“The real-time translation latency has been reduced to under 300 milliseconds with 98% accuracy.”',
      target: '“Độ trễ phiên dịch thời gian thực đã được giảm xuống dưới 300 mili-giây với độ chính xác đạt 98%.”'
    }
  ],
  twoway: [
    {
      speaker: 'Alex (EN)',
      source: 'Can we integrate this meeting bot directly into our existing Zoom and Google Meet infrastructure?',
      target: 'Chúng ta có thể tích hợp bot họp này trực tiếp vào hệ thống Zoom và Google Meet hiện tại không?'
    },
    {
      speaker: 'Minh (VI)',
      source: 'Hoàn toàn được. Blaze Note cung cấp webhook và meeting API để tự động hoá 100% luồng làm việc.',
      target: 'Absolutely. Blaze Note provides webhooks and meeting APIs to 100% automate the workflow.'
    }
  ]
};

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'transcribe' | 'oneway' | 'twoway'>('oneway');
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(60);
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer countdown and text reveal when recording
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsRecording(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);

      // Advance simulated transcript
      const textInterval = setInterval(() => {
        setDisplayedTextIndex((prev) => (prev + 1) % 3);
      }, 3500);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
        clearInterval(textInterval);
      };
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setTimer(60);
    }
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setDisplayedTextIndex(0);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="bz-defer border-t border-[var(--bz-rule)] bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Live Interactive Playground
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900">
              Nói thử một câu, xem bản dịch hiện ra ngay lập tức.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="shrink-0 px-6 py-3 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200"
          >
            Đăng ký tài khoản
          </button>
        </div>

        {/* Interactive Workspace Card */}
        <div className="rounded-3xl bg-white border border-stone-200 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.18)] overflow-hidden">
          {/* Top Mode Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-stone-100 bg-stone-50/60">
            <div className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('transcribe');
                  setDisplayedTextIndex(0);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'transcribe'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Phiên âm
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('oneway');
                  setDisplayedTextIndex(0);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'oneway'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Một chiều (EN → VI)
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('twoway');
                  setDisplayedTextIndex(0);
                }}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'twoway'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Hai chiều (Song ngữ)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Đã sao chép' : 'Sao chép kết quả'}</span>
              </button>
            </div>
          </div>

          {/* Transcript Display Box */}
          <div className="p-6 sm:p-10 min-h-[260px] sm:min-h-[300px] flex flex-col justify-center">
            {!isRecording && displayedTextIndex === 0 ? (
              <div className="text-center py-8 text-stone-400 space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Mic className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-stone-600">
                  Nhấn nút &ldquo;Bắt đầu nói&rdquo; bên dưới để thử nghiệm AI phiên âm &amp; dịch thuật
                </p>
                <p className="text-xs text-stone-400">
                  Hoặc bạn có thể bấm để nghe đoạn mô phỏng hội thoại mẫu
                </p>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                {activeTab === 'transcribe' && (
                  <div className="space-y-3">
                    {sampleTranscripts.transcribe.slice(0, displayedTextIndex + 1).map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
                        <span className="shrink-0 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-xs">
                          {item.speaker}
                        </span>
                        <p className="text-sm sm:text-base font-medium text-stone-800 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'oneway' && (
                  <div className="space-y-4">
                    {sampleTranscripts.oneway.slice(0, displayedTextIndex + 1).map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                            English (Gốc)
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-500 font-medium italic">
                          {item.source}
                        </p>
                        <div className="pt-2 border-t border-stone-200">
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                            Tiếng Việt (Bản dịch AI Realtime)
                          </span>
                          <p className="text-sm sm:text-base font-bold text-stone-900 mt-0.5">
                            {item.target}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'twoway' && (
                  <div className="space-y-3">
                    {sampleTranscripts.twoway.slice(0, displayedTextIndex + 1).map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-700">
                            {item.speaker}
                          </span>
                          <span className="text-[11px] font-semibold text-stone-400">
                            Real-time sync
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 font-medium">
                          {item.source}
                        </p>
                        <p className="text-sm sm:text-base font-bold text-emerald-900 pt-1 border-t border-stone-200/60">
                          ↳ {item.target}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Audio Controller Bar */}
          <div className="p-6 border-t border-stone-100 bg-emerald-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Waveform / Visualizer */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 h-6">
                {[40, 70, 95, 60, 85, 100, 45, 80, 50, 75, 90, 65].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isRecording
                        ? 'bg-emerald-500 animate-pulse'
                        : 'bg-stone-300'
                    }`}
                    style={{
                      height: isRecording ? `${h}%` : '20%',
                      animationDelay: `${i * 0.08}s`
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-stone-500 tabular-nums ml-2">
                00:{timer < 10 ? `0${timer}` : timer}
              </span>
            </div>

            {/* Record Action Button */}
            <div className="flex items-center gap-3">
              {isRecording && (
                <button
                  type="button"
                  onClick={() => {
                    setIsRecording(false);
                    setDisplayedTextIndex(0);
                  }}
                  className="p-2.5 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 transition"
                  title="Dừng và xoá"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={toggleRecording}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 active:scale-95 shadow-md ${
                  isRecording
                    ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-4 h-4" />
                    <span>Dừng ghi âm</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    <span>Bắt đầu nói</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </section>
  );
}
