'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, Languages, Sparkles, Check, FileText, ArrowRight, Download, Share2, CheckCircle2, RotateCw } from 'lucide-react';

const transcripts = [
  'Chốt phát hành bản beta vào thứ Sáu này,',
  'nhớ gửi báo cáo doanh thu trước cuộc họp,',
  'tuần sau mình review lại toàn bộ thiết kế,',
  'và bổ sung tính năng xuất file PDF',
  'theo đúng yêu cầu của khách hàng.'
];

const summaryPoints = [
  'Phát hành bản beta vào thứ Sáu tuần này.',
  'Gửi báo cáo doanh thu trước cuộc họp kế tiếp.',
  'Review lại toàn bộ thiết kế trong tuần sau.',
  'Bổ sung tính năng xuất file PDF cho khách hàng.'
];

const summaryIntro = 'Cuộc họp thống nhất kế hoạch phát hành và các đầu việc chính:';

export default function HeroStage() {
  const [stageState, setStageState] = useState<'idle' | 'recording' | 'summary' | 'export'>('idle');
  const [transcriptIndex, setTranscriptIndex] = useState(0);
  const [summaryIndex, setSummaryIndex] = useState(0);
  const [recordedDone, setRecordedDone] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [isTapping, setIsTapping] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'in' | 'travel'>('in');
  const [timerSeconds, setTimerSeconds] = useState(0);

  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  const runSimulation = () => {
    clearAllTimers();
    setStageState('idle');
    setTranscriptIndex(0);
    setSummaryIndex(0);
    setRecordedDone(false);
    setShowCursor(false);
    setIsTapping(false);
    setTimerSeconds(0);

    const timeouts: NodeJS.Timeout[] = [];

    // Step 1: Idle -> Show cursor moving to "Ghi chép" button
    timeouts.push(
      setTimeout(() => {
        setShowCursor(true);
        setCursorVariant('in');
        setCursorPos({ x: -140, y: 25 });
      }, 700)
    );

    // Click "Ghi chép"
    timeouts.push(
      setTimeout(() => {
        setIsTapping(true);
      }, 1400)
    );
    timeouts.push(
      setTimeout(() => {
        setIsTapping(false);
        setStageState('recording');
        setShowCursor(false);
      }, 1800)
    );

    // Step 2: Stream recording transcripts word by word
    for (let i = 1; i <= transcripts.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setTranscriptIndex(i);
          setTimerSeconds(i * 3);
        }, 2200 + (i - 1) * 600)
      );
    }

    const recDoneTime = 2200 + transcripts.length * 600 + 400;

    // Recording finished -> Show "Tạo tóm tắt" button & move cursor
    timeouts.push(
      setTimeout(() => {
        setRecordedDone(true);
        setShowCursor(true);
        setCursorVariant('travel');
        setCursorPos({ x: 0, y: 35 });
      }, recDoneTime)
    );

    // Click "Tạo tóm tắt"
    timeouts.push(
      setTimeout(() => {
        setIsTapping(true);
      }, recDoneTime + 800)
    );
    timeouts.push(
      setTimeout(() => {
        setIsTapping(false);
        setStageState('summary');
        setShowCursor(false);
      }, recDoneTime + 1200)
    );

    // Step 3: Stream summary points
    const sumStartTime = recDoneTime + 1600;
    for (let i = 1; i <= summaryPoints.length + 1; i++) {
      timeouts.push(
        setTimeout(() => {
          setSummaryIndex(i);
        }, sumStartTime + (i - 1) * 450)
      );
    }

    // Step 4: Export phase
    const exportTime = sumStartTime + (summaryPoints.length + 1) * 450 + 1200;
    timeouts.push(
      setTimeout(() => {
        setStageState('export');
      }, exportTime)
    );

    // Step 5: Loop back to idle
    timeouts.push(
      setTimeout(() => {
        runSimulation();
      }, exportTime + 4500)
    );

    timerRef.current = timeouts;
  };

  useEffect(() => {
    runSimulation();
    return () => clearAllTimers();
  }, []);

  return (
    <div className="relative mt-14 -mx-6 sm:mx-auto max-w-6xl">
      <div className="bz-hero-stage relative overflow-hidden aspect-[16/12] sm:aspect-[3/1] min-h-[380px] sm:min-h-[420px]">
        {/* Animated Green Glowing Blobs */}
        <span className="bz-blob bz-blob-1" aria-hidden="true" />
        <span className="bz-blob bz-blob-2" aria-hidden="true" />
        <span className="bz-blob bz-blob-3" aria-hidden="true" />
        <span className="bz-blob bz-blob-4" aria-hidden="true" />
        <span className="bz-sheen" aria-hidden="true" />
        <span className="bz-grain" aria-hidden="true" />

        {/* Floating Card Container */}
        <div className="absolute inset-0 grid place-items-center p-3 sm:p-5 z-10">
          <div className="bz-card-in w-full max-w-3xl rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-black/5 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.25)] overflow-hidden font-['Gilroy']">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-5 h-8 sm:h-9 border-b border-stone-100 bg-stone-50/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-100" />
              </div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Blaze Note · Meeting Workspace</span>
              </div>
              <button
                type="button"
                onClick={() => runSimulation()}
                className="text-[11px] font-medium text-stone-400 hover:text-emerald-700 transition flex items-center gap-1"
                title="Chạy lại mô phỏng"
              >
                <RotateCw className="w-3 h-3" />
                <span className="hidden sm:inline">Phát lại</span>
              </button>
            </div>

            {/* Window Body with Simulated States */}
            <div className="px-5 py-5 sm:px-8 sm:py-6 relative min-h-[190px] sm:min-h-[220px] flex flex-col justify-center">
              {/* Virtual Cursor */}
              {showCursor && (
                <div
                  className={`absolute z-30 pointer-events-none transition-all duration-500 ease-out ${
                    cursorVariant === 'travel' ? 'bz-cursor-travel' : 'bz-cursor-in'
                  }`}
                  style={{
                    left: `calc(50% + ${cursorPos.x}px)`,
                    top: `calc(50% + ${cursorPos.y}px)`
                  }}
                >
                  <div className="relative">
                    {isTapping && (
                      <span className="bz-tap absolute -left-2 -top-2 w-8 h-8 rounded-full bg-emerald-500/30 animate-ping" />
                    )}
                    <svg
                      className="w-5 h-5 text-stone-900 drop-shadow-md"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* STATE 1: IDLE */}
              {stageState === 'idle' && (
                <div className="bz-fade grid place-items-center py-4">
                  <div>
                    <div className="mb-6 text-center text-base sm:text-lg font-semibold text-stone-800">
                      Chọn tính năng để bắt đầu
                    </div>
                    <div className="flex items-start justify-center gap-14 sm:gap-20">
                      <div className="relative flex flex-col items-center gap-2.5 cursor-pointer">
                        <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 ring-2 ring-emerald-200">
                          <Mic className="w-7 h-7" strokeWidth={1.75} />
                        </div>
                        <span className="text-[13px] font-semibold text-stone-900">
                          Ghi chép
                        </span>
                      </div>

                      <div className="relative flex flex-col items-center gap-2.5 opacity-50 cursor-pointer">
                        <div className="p-3 rounded-2xl bg-stone-100 text-stone-400">
                          <Languages className="w-7 h-7" strokeWidth={1.75} />
                        </div>
                        <span className="text-[13px] font-medium text-stone-400">
                          Dịch thuật
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STATE 2: RECORDING */}
              {stageState === 'recording' && (
                <div className="bz-zoom flex flex-col justify-between h-full py-1">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-stone-900">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          recordedDone ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'
                        }`}
                      />
                      <span>{recordedDone ? 'Đã ghi xong' : 'Đang ghi âm'}</span>
                      <span className="text-stone-400 font-normal tabular-nums">
                        · 00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
                      </span>
                    </div>

                    {/* Equalizer Audio Bar */}
                    <div className="flex items-center gap-1 h-4">
                      {[40, 90, 60, 100, 75, 45, 85, 30].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full transition-all duration-200 ${
                            recordedDone ? 'bg-stone-300 h-1' : 'bg-emerald-500 animate-pulse'
                          }`}
                          style={{
                            height: recordedDone ? '3px' : `${h}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Streaming Transcript */}
                  <div className="my-3 sm:my-4 min-h-[60px]">
                    <p className="text-[14.5px] sm:text-[16px] font-medium leading-relaxed">
                      {transcripts.slice(0, transcriptIndex).map((sentence, idx) => {
                        const isLatest = idx === transcriptIndex - 1;
                        return (
                          <span
                            key={idx}
                            className={`transition-colors duration-500 ${
                              isLatest ? 'text-emerald-700 font-semibold' : 'text-stone-800'
                            }`}
                          >
                            {idx > 0 ? ' ' : ''}
                            {sentence}
                          </span>
                        );
                      })}
                      {transcriptIndex < transcripts.length && !recordedDone && (
                        <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-500 animate-pulse" />
                      )}
                    </p>
                  </div>

                  {/* Action bottom button */}
                  {recordedDone && (
                    <div className="relative flex justify-center pt-2">
                      <button
                        type="button"
                        className="bz-slide inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-stone-900 text-white text-[13px] font-semibold hover:bg-emerald-600 transition shadow-md"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tạo tóm tắt & Biên bản AI</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* STATE 3: AI SUMMARY */}
              {stageState === 'summary' && (
                <div className="bz-zoom space-y-3 py-1">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-bold text-stone-900">
                        Tóm tắt cuộc họp (AI Summary)
                      </span>
                    </div>

                    {summaryIndex <= summaryPoints.length && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <Sparkles className="w-3 h-3 animate-spin" />
                        Đang trích xuất...
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs sm:text-sm text-stone-500 font-medium transition-all duration-300 ${
                      summaryIndex >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
                  >
                    {summaryIntro}
                  </p>

                  <ul className="space-y-2">
                    {summaryPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 font-medium leading-snug transition-all duration-300 ${
                          summaryIndex >= idx + 2
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-1'
                        }`}
                      >
                        <span className="mt-0.5 grid place-items-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* STATE 4: EXPORT */}
              {stageState === 'export' && (
                <div className="bz-zoom flex flex-col items-center justify-center gap-4 py-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-base font-bold text-stone-900">
                      Đã tạo biên bản họp hoàn tất!
                    </h4>
                    <p className="text-xs text-stone-500 font-medium mt-1">
                      Tự động lưu trữ và đồng bộ sang các công cụ quản trị của bạn
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1.5 border border-stone-200">
                      <FileText className="w-3.5 h-3.5 text-red-500" />
                      Xuất PDF
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1.5 border border-stone-200">
                      <FileText className="w-3.5 h-3.5 text-blue-500" />
                      Xuất Word
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold flex items-center gap-1.5 border border-stone-200">
                      <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                      Gửi sang Slack / Notion
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
