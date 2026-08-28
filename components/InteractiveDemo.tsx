'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Copy,
  Check,
  RotateCcw,
  Volume2,
  Sparkles,
  Languages,
  Maximize2,
  Minimize2,
  Download,
  ArrowRightLeft,
  ChevronDown,
  AlertCircle
} from 'lucide-react';
import AuthModal from './AuthModal';

interface TranscriptRow {
  speaker: string;
  sourceText: string;
  translatedText?: string;
  timestamp: string;
  lang: string;
}

const availableLangs = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'ja', label: '日本語 (Japanese)', flag: '🇯🇵' },
  { code: 'ko', label: '한국어 (Korean)', flag: '🇰🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

const mockSimulatedPhrases = [
  {
    vi: 'Chào mừng các bạn đến với phiên thử nghiệm trợ lý giọng nói AI của Blaze Note.',
    en: 'Welcome to the AI voice assistant live demo session by Blaze Note.'
  },
  {
    vi: 'Hệ thống đang phiên âm trực tiếp với độ trễ cực thấp và độ chính xác cao.',
    en: 'The system is transcribing in real-time with ultra-low latency and high accuracy.'
  },
  {
    vi: 'Biên bản và các đầu việc cần làm sẽ được tự động trích xuất ngay sau khi kết thúc.',
    en: 'Minutes and action items will be automatically extracted right after completion.'
  },
  {
    vi: 'Bạn có thể xuất bản ghi này sang định dạng Word, PDF hoặc Notion bất cứ lúc nào.',
    en: 'You can export this transcript to Word, PDF, or Notion format at any time.'
  }
];

export default function InteractiveDemo() {
  const [mode, setMode] = useState<'transcription' | 'one_way' | 'two_way'>('two_way');
  const [langA, setLangA] = useState('vi');
  const [langB, setLangB] = useState('en');
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(60);
  const [rows, setRows] = useState<TranscriptRow[]>([]);
  const [partialText, setPartialText] = useState('');
  const [partialTrans, setPartialTrans] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState(2); // 1 to 4
  const [copied, setCopied] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const [dropdownAOpen, setDropdownAOpen] = useState(false);
  const [dropdownBOpen, setDropdownBOpen] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const simIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);

  // Stop recording helper
  const stopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (simIntervalRef.current) clearInterval(simIntervalRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
  };

  // Start recording with Web Speech API or Simulation fallback
  const startRecording = () => {
    setRows([]);
    setPartialText('');
    setPartialTrans('');
    setTimer(60);
    setIsRecording(true);

    // Try Web Speech API if supported
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    let useSimulation = true;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = langA === 'vi' ? 'vi-VN' : 'en-US';

        recognition.onresult = (event: any) => {
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              const text = event.results[i][0].transcript.trim();
              if (text) {
                const now = new Date();
                const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                setRows((prev) => [
                  ...prev,
                  {
                    speaker: 'Bạn',
                    sourceText: text,
                    translatedText: `(AI Dịch) ${text}`,
                    timestamp: ts,
                    lang: langA
                  }
                ]);
              }
            } else {
              interim += event.results[i][0].transcript;
            }
          }
          setPartialText(interim);
          setPartialTrans(interim ? `(Đang dịch...) ${interim}` : '');
        };

        recognition.onerror = () => {
          // Fallback to smooth simulation
        };

        recognition.start();
        recognitionRef.current = recognition;
        useSimulation = false;
      } catch {
        useSimulation = true;
      }
    }

    // Always run simulation if Web Speech API isn't delivering or as demo stream
    let phraseIdx = 0;
    simIntervalRef.current = setInterval(() => {
      if (phraseIdx < mockSimulatedPhrases.length) {
        const p = mockSimulatedPhrases[phraseIdx];
        const now = new Date();
        const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        const speaker = phraseIdx % 2 === 0 ? 'Người nói 1' : 'Người nói 2';
        const source = langA === 'vi' ? p.vi : p.en;
        const target = langB === 'en' ? p.en : p.vi;

        setRows((prev) => [
          ...prev,
          {
            speaker,
            sourceText: source,
            translatedText: target,
            timestamp: ts,
            lang: langA
          }
        ]);
        phraseIdx++;
      }
    }, 3200);

    // Timer countdown 60s
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          stopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (simIntervalRef.current) clearInterval(simIntervalRef.current);
    };
  }, []);

  const handleSwapLangs = () => {
    const temp = langA;
    setLangA(langB);
    setLangB(temp);
  };

  const handleCopy = () => {
    const text = rows
      .map((r) => `[${r.timestamp}] ${r.speaker}: ${r.sourceText} \n-> ${r.translatedText || ''}`)
      .join('\n\n');
    navigator.clipboard.writeText(text || 'Bản ghi Blaze Note.');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const content = rows
      .map((r) => `[${r.timestamp}] ${r.speaker} (${r.lang}):\n${r.sourceText}\n${r.translatedText ? '-> ' + r.translatedText + '\n' : ''}`)
      .join('\n');
    const blob = new Blob([content || 'Blaze Note Transcript Demo'], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blaze-note-transcript-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const fontSizes = ['text-xs sm:text-sm', 'text-sm sm:text-base', 'text-base sm:text-lg', 'text-lg sm:text-xl'];

  return (
    <section id="demo" className="bz-defer border-t border-[var(--bz-rule)] bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Live Demo Playground
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

        {/* Interactive Workspace Container matching Uc() */}
        <div
          className={`rounded-3xl bg-white border border-stone-200 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.22)] overflow-hidden transition-all duration-300 ${
            isFullscreen
              ? 'fixed inset-4 z-50 rounded-2xl shadow-2xl flex flex-col justify-between'
              : ''
          }`}
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-b border-stone-100 bg-stone-50/80">
            {/* Mode Pills */}
            <div className="flex items-center gap-1 bg-stone-200/80 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setMode('transcription');
                  stopRecording();
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  mode === 'transcription'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Phiên âm
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('one_way');
                  stopRecording();
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  mode === 'one_way'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Một chiều
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('two_way');
                  stopRecording();
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  mode === 'two_way'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Hai chiều
              </button>
            </div>

            {/* Language dropdowns & Tool buttons */}
            <div className="flex items-center gap-2">
              {/* Lang A Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownAOpen(!dropdownAOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:border-emerald-300 transition"
                >
                  <span>{availableLangs.find((l) => l.code === langA)?.flag}</span>
                  <span>{availableLangs.find((l) => l.code === langA)?.label}</span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>
                {dropdownAOpen && (
                  <div className="absolute left-0 top-full mt-1 w-44 rounded-xl bg-white border border-stone-200 shadow-xl py-1 z-30">
                    {availableLangs.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLangA(l.code);
                          setDropdownAOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-left text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {mode !== 'transcription' && (
                <>
                  <button
                    type="button"
                    onClick={handleSwapLangs}
                    className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-emerald-700 transition"
                    title="Đổi chiều ngôn ngữ"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                  </button>

                  {/* Lang B Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownBOpen(!dropdownBOpen)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:border-emerald-300 transition"
                    >
                      <span>{availableLangs.find((l) => l.code === langB)?.flag}</span>
                      <span>{availableLangs.find((l) => l.code === langB)?.label}</span>
                      <ChevronDown className="w-3 h-3 text-stone-400" />
                    </button>
                    {dropdownBOpen && (
                      <div className="absolute right-0 top-full mt-1 w-44 rounded-xl bg-white border border-stone-200 shadow-xl py-1 z-30">
                        {availableLangs.map((l) => (
                          <button
                            key={l.code}
                            type="button"
                            onClick={() => {
                              setLangB(l.code);
                              setDropdownBOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-left text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                          >
                            <span>{l.flag}</span>
                            <span>{l.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Font Resizing */}
              <div className="hidden sm:flex items-center gap-1 border-l border-stone-200 pl-2">
                <button
                  type="button"
                  onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 text-xs font-bold"
                  title="Thu nhỏ chữ"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontSizeLevel((prev) => Math.min(3, prev + 1))}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 text-xs font-bold"
                  title="Phóng to chữ"
                >
                  A+
                </button>
              </div>

              {/* Fullscreen toggle */}
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-emerald-700 transition"
                title={isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Transcript Panels (Split View) */}
          <div className="p-5 sm:p-8 min-h-[300px] sm:min-h-[360px] flex-1 overflow-y-auto">
            {rows.length === 0 && !partialText ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-stone-400 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-stone-700">
                    Bắt đầu nói để xem kết quả…
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 max-w-sm">
                    Nhấn nút &ldquo;Bắt đầu nói&rdquo; bên dưới để kích hoạt micro hoặc quan sát mô phỏng AI dịch thuật theo thời gian thực.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {rows.map((r, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                        {r.speaker}
                      </span>
                      <span className="text-stone-400 font-mono">{r.timestamp}</span>
                    </div>

                    <div className={fontSizes[fontSizeLevel]}>
                      <p className="font-medium text-stone-800 leading-relaxed">
                        {r.sourceText}
                      </p>
                      {mode !== 'transcription' && r.translatedText && (
                        <p className="font-bold text-emerald-900 mt-1.5 pt-1.5 border-t border-stone-200/60 leading-relaxed">
                          ↳ {r.translatedText}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Real-time typing partial */}
                {partialText && (
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5 animate-pulse">
                    <span className="text-xs font-bold text-emerald-700">Đang lắng nghe...</span>
                    <p className={`font-medium text-stone-800 ${fontSizes[fontSizeLevel]}`}>
                      {partialText}
                    </p>
                    {partialTrans && (
                      <p className="font-bold text-emerald-800 text-sm">↳ {partialTrans}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Audio Visualizer & Action Controls Bar */}
          <div className="px-6 py-4 border-t border-stone-100 bg-emerald-50/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Waveform Equalizer */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 h-5">
                {[35, 75, 95, 60, 85, 100, 45, 90, 55, 80, 70, 40].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isRecording ? 'bg-emerald-600 animate-pulse' : 'bg-stone-300'
                    }`}
                    style={{
                      height: isRecording ? `${h}%` : '20%',
                      animationDelay: `${i * 0.08}s`
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-stone-600 tabular-nums">
                00:{timer < 10 ? `0${timer}` : timer}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {rows.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadTxt}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải TXT</span>
                  </button>
                </>
              )}

              {isRecording ? (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-md shadow-rose-500/20 active:scale-95 transition"
                >
                  <MicOff className="w-4 h-4" />
                  <span>Dừng</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startRecording}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 active:scale-95 transition"
                >
                  <Mic className="w-4 h-4" />
                  <span>Bắt đầu nói</span>
                </button>
              )}
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
