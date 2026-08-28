'use client';

import React, { useState } from 'react';
import { Tag, Copy, Check, Sparkles, Gift, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PromosPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const promos = [
    {
      code: 'BLAZENEW30',
      discount: 'Giảm 30%',
      title: 'Ưu đãi chào đón thành viên mới',
      desc: 'Áp dụng cho gói Cá nhân (Pro) và Đội nhóm khi thanh toán chu kỳ năm đầu tiên.',
      expiry: 'Hạn dùng: 31/12/2026',
      badge: 'Phổ biến nhất'
    },
    {
      code: 'STARTUP50',
      discount: 'Tặng 3 Tháng',
      title: 'Đồng hành cùng Doanh nghiệp Khởi nghiệp',
      desc: 'Hỗ trợ các startup dưới 2 năm tuổi nâng cấp quy trình ghi chú và biên bản họp tự động.',
      expiry: 'Áp dụng cho doanh nghiệp SME',
      badge: 'Startup Exclusive'
    },
    {
      code: 'EDUPRO50',
      discount: 'Giảm 50%',
      title: 'Ưu đãi Giáo dục & Nghiên cứu',
      desc: 'Dành riêng cho giảng viên, sinh viên và nghiên cứu sinh sử dụng email tên miền .edu.vn.',
      expiry: 'Xác thực qua email giáo dục',
      badge: 'Education'
    },
    {
      code: 'INVITE300',
      discount: '+300 Phút',
      title: 'Giới thiệu bạn bè cùng dùng Blaze Note',
      desc: 'Mỗi người bạn đăng ký và kích hoạt tài khoản qua mã của bạn, cả hai đều nhận 300 phút miễn phí.',
      expiry: 'Không giới hạn số lần',
      badge: 'Referral'
    }
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Gift className="w-3.5 h-3.5 text-emerald-600" />
            Khuyến mãi & Quyền lợi
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Mã giảm giá &amp; Ưu đãi
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Thu thập các voucher giảm giá và chương trình tài trợ đặc biệt từ hệ sinh thái Blaze Note.
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-200 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                    {promo.badge}
                  </span>
                  <span className="text-2xl font-bold text-emerald-700">
                    {promo.discount}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  {promo.title}
                </h3>
                <p className="text-sm font-medium text-stone-600 leading-relaxed mb-4">
                  {promo.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-stone-400 font-medium">
                  {promo.expiry}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 font-mono font-bold text-xs">
                    {promo.code}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(promo.code)}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Đã lưu</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Lấy mã</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to use */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-8 sm:p-10 border border-emerald-100 text-stone-800">
          <h3 className="text-xl font-bold text-stone-900 mb-3">
            Cách nhập mã khuyến mãi khi thanh toán
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm font-medium text-stone-700 leading-relaxed">
            <li>Chọn gói dịch vụ phù hợp tại trang <Link href="/pricing" className="text-emerald-700 underline font-semibold">Bảng giá</Link>.</li>
            <li>Tại bước xác nhận đơn hàng, nhập mã voucher vào ô <strong>&ldquo;Mã giảm giá / Promo Code&rdquo;</strong>.</li>
            <li>Nhấn <strong>Áp dụng</strong> để hệ thống tự động trừ tiền vào tổng hoá đơn thanh toán.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
