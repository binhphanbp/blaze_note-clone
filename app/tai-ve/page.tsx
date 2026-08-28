'use client';

import React, { useState } from 'react';
import { Download, Monitor, Laptop, CheckCircle2, ShieldCheck, Sparkles, Command, Zap } from 'lucide-react';

export default function DownloadPage() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (osName: string) => {
    setDownloadSuccess(`Đang chuẩn bị tải bản cài đặt cho ${osName}...`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const platforms = [
    {
      os: 'macOS',
      icon: Laptop,
      version: 'Phiên bản 2.4.0 (Universal)',
      requires: 'macOS 12.0 (Monterey) trở lên',
      options: [
        { label: 'Tải cho Apple Silicon (M1/M2/M3/M4)', file: 'BlazeNote-mac-arm64.dmg' },
        { label: 'Tải cho Intel Chip', file: 'BlazeNote-mac-x64.dmg' }
      ]
    },
    {
      os: 'Windows',
      icon: Monitor,
      version: 'Phiên bản 2.4.0 (x64 / ARM64)',
      requires: 'Windows 10 hoặc Windows 11 (64-bit)',
      options: [
        { label: 'Tải bản cài đặt chuẩn (.exe)', file: 'BlazeNote-Setup-x64.exe' },
        { label: 'Tải bản Doanh nghiệp (.msi)', file: 'BlazeNote-Enterprise.msi' }
      ]
    }
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Lưu ngay trên máy',
      desc: 'Tốc độ phản hồi tức thì, bộ nhớ đệm an toàn và đồng bộ mượt mà khi có mạng.'
    },
    {
      icon: Sparkles,
      title: 'Caption phủ toàn màn hình',
      desc: 'Cửa sổ phụ đề nổi (Floating overlay) hiển thị trên đầu Zoom, Google Meet hay video YouTube.'
    },
    {
      icon: Command,
      title: 'Phím tắt toàn hệ thống',
      desc: 'Bắt đầu ghi âm hoặc dịch thuật ngay lập tức với phím tắt Cmd+Shift+Space (macOS) hoặc Ctrl+Shift+Space (Windows).'
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            Desktop App
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Tải ứng dụng máy tính (macOS &amp; Windows)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Trải nghiệm ghi âm và dịch thuật đỉnh cao với ứng dụng native, độ trễ cực thấp và phụ đề nổi thông minh.
          </p>
        </div>

        {/* Download Alert toast */}
        {downloadSuccess && (
          <div className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-emerald-600 text-white font-medium text-sm flex items-center gap-3 shadow-lg shadow-emerald-600/20 animate-in fade-in zoom-in-95">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-700">
                    <p.icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-semibold text-xs">
                    {p.version}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 mb-1">{p.os}</h3>
                <p className="text-xs text-stone-500 font-medium mb-6">{p.requires}</p>

                <div className="space-y-3">
                  {p.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => handleDownload(`${p.os} (${opt.label})`)}
                      className={`w-full py-3.5 px-4 rounded-2xl font-semibold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 active:scale-98 ${
                        oIdx === 0
                          ? 'bg-stone-900 hover:bg-emerald-600 text-white shadow-md'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <Download className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Đã quét virus &amp; Chữ ký số an toàn
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
          {highlights.map((h, idx) => (
            <div key={idx} className="rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-sm">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 w-fit mb-4">
                <h.icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">{h.title}</h4>
              <p className="text-sm text-stone-600 font-medium leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
