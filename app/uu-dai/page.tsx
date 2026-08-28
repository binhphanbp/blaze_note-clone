'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Check, Copy, Clock, Gift, Sparkles } from 'lucide-react';

interface Promo {
  code: string;
  title: string;
  percentage: number;
  firstPeriodOnly: boolean;
  expiresAt: string;
  remaining: number;
  desc: string;
}

export default function PromosPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const promos: Promo[] = [
    {
      code: 'BLAZE2026',
      title: 'Ưu đãi trải nghiệm đầu năm 2026',
      percentage: 20,
      firstPeriodOnly: true,
      expiresAt: '31/12/2026',
      remaining: 85,
      desc: 'Giảm 20% cho chu kỳ thanh toán đầu tiên của gói Cá nhân Cơ bản hoặc Nâng cao.'
    },
    {
      code: 'STARTUPVN',
      title: 'Hỗ trợ doanh nghiệp & startup Việt Nam',
      percentage: 30,
      firstPeriodOnly: false,
      expiresAt: '30/09/2026',
      remaining: 42,
      desc: 'Áp dụng cho gói Workspace Nhóm từ 5 thành viên trở lên.'
    },
    {
      code: 'EDUCATION50',
      title: 'Tài trợ Giáo dục & Nghiên cứu khoa học',
      percentage: 50,
      firstPeriodOnly: true,
      expiresAt: '31/10/2026',
      remaining: 19,
      desc: 'Dành riêng cho giảng viên, sinh viên và viện nghiên cứu sử dụng email tên miền .edu.vn.'
    }
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 1800);
  };

  return (
    <div className="bg-[#0b0f17] text-white selection:bg-emerald-500/20 min-h-screen pt-16 font-['Gilroy']">
      <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Blaze Note Promos</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-3">
            Mã giảm giá
          </h1>

          <p className="text-stone-400 text-sm sm:text-[15px] max-w-xl mx-auto leading-relaxed">
            Các mã đang được công bố công khai. Sao chép và nhập khi đăng ký / thanh toán gói dịch vụ.
          </p>
        </div>

        {/* Voucher Cards List */}
        <div className="space-y-4">
          {promos.map((promo) => (
            <div
              key={promo.code}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white/90">
                    {promo.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    −{promo.percentage}%
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {promo.desc}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1 font-medium">
                  <span className="font-mono text-base font-bold text-emerald-400 tracking-wider">
                    {promo.code}
                  </span>
                  <span>·</span>
                  <span>Hết hạn: {promo.expiresAt}</span>
                  <span>·</span>
                  <span>Còn lại: {promo.remaining} lượt</span>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(promo.code)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-200 active:scale-95"
                >
                  {copiedCode === promo.code ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Sao chép mã</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-semibold"
          >
            Xem bảng giá và áp dụng mã ngay →
          </Link>
        </div>
      </section>
    </div>
  );
}
