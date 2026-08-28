'use client';

import React, { useState } from 'react';
import { Download, Monitor, Laptop, CheckCircle2, ShieldCheck, Zap, Command, Layers } from 'lucide-react';

export default function DownloadPage() {
  const [downloadingPlatform, setDownloadingPlatform] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const builds = [
    {
      platform: 'mac-arm64',
      name: 'macOS · Apple Silicon',
      sub: 'M1 / M2 / M3 / M4 chip',
      filename: 'BlazeNote-2.4.0-arm64.dmg',
      size: '84.2 MB',
      isRecommended: true
    },
    {
      platform: 'mac-x64',
      name: 'macOS · Intel',
      sub: 'Intel x64 chip',
      filename: 'BlazeNote-2.4.0-x64.dmg',
      size: '88.6 MB',
      isRecommended: false
    },
    {
      platform: 'win-x64',
      name: 'Windows 10/11 · 64-bit',
      sub: 'x64 installer (.exe)',
      filename: 'BlazeNote-Setup-2.4.0.exe',
      size: '76.4 MB',
      isRecommended: true
    }
  ];

  const handleDownload = (b: typeof builds[0]) => {
    setDownloadingPlatform(b.platform);
    setDownloadSuccess(`Đang tải ${b.filename} (${b.size})...`);
    setTimeout(() => {
      setDownloadingPlatform(null);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1200);
  };

  const featureCards = [
    {
      icon: Zap,
      title: 'Lưu ngay trên máy',
      desc: 'Toàn bộ dữ liệu ghi âm và biên bản được xử lý với độ trễ cực thấp, lưu trữ an toàn trong bộ nhớ đệm cục bộ và đồng bộ khi có kết nối mạng.'
    },
    {
      icon: Layers,
      title: 'Caption phủ toàn màn hình',
      desc: 'Cửa sổ phụ đề nổi (Floating overlay) hiển thị trên đầu Zoom, Teams, Google Meet, YouTube hay bất kỳ ứng dụng nào khác.'
    },
    {
      icon: Command,
      title: 'Mở nhanh như ứng dụng thật',
      desc: 'Kích hoạt ngay bằng phím tắt toàn hệ thống Cmd+Shift+Space (macOS) hoặc Ctrl+Shift+Space (Windows) để ghi âm trong 1 giây.'
    }
  ];

  return (
    <div className="bg-white text-stone-800 selection:bg-emerald-500/15 overflow-x-hidden pt-16 min-h-screen">
      {/* 1. Header Section */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light tracking-tight text-stone-900 leading-tight">
            Tải ứng dụng máy tính
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Bản cài đặt cho macOS và Windows: ghi âm, phiên dịch và biên bản ngay trên máy, kèm caption overlay phủ lên mọi cuộc họp.
          </p>

          {/* Download Toast Notification */}
          {downloadSuccess && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-600 text-white font-medium text-sm flex items-center gap-3 shadow-lg shadow-emerald-600/20 max-w-md animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {/* Download Platform Buttons Grid */}
          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-3.5">
              {builds.map((b) => (
                <button
                  key={b.platform}
                  type="button"
                  onClick={() => handleDownload(b)}
                  disabled={downloadingPlatform !== null}
                  className={`inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 active:scale-98 ${
                    b.isRecommended
                      ? 'bg-stone-900 text-white hover:bg-emerald-600 shadow-sm'
                      : 'border border-stone-200 bg-white text-stone-700 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{b.name}</span>
                  <span className={`text-xs font-normal ${b.isRecommended ? 'text-stone-400' : 'text-stone-400'}`}>
                    {b.size}
                  </span>
                </button>
              ))}
            </div>

            {/* Version and Integrity Note */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-stone-400 font-medium">
              <span>Phiên bản v2.4.0</span>
              <span>Cập nhật ngày: 24/08/2026</span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Đã ký số an toàn (Apple Notarized & Microsoft Certified)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Cards Section */}
      <section className="border-b border-stone-200 bg-stone-50/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featureCards.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-stone-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-normal text-stone-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
