'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Users, Building, Check, X, ChevronDown } from 'lucide-react';
import AuthModal from '@/components/AuthModal';

export default function PricingPage() {
  const [segment, setSegment] = useState<'personal' | 'workspace' | 'enterprise'>('personal');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const personalPlans = [
    {
      code: 'free',
      name: 'Gói Miễn Phí',
      description: 'Dùng thử, cá nhân',
      price: 'Miễn phí',
      note: '',
      popular: false,
      isDark: false,
      cta: 'Bắt đầu miễn phí',
      features: [
        { text: '1 giờ mỗi phiên', included: true },
        { text: '1 giờ ghi âm / ngày', included: true },
        { text: '12 giờ ghi âm / kỳ', included: true },
        { text: 'Lưu trữ 14 ngày, 200 MB', included: true },
        { text: '100 tín dụng AI', included: true },
        { text: 'Phiên dịch & phiên dịch thời gian thực', included: true },
        { text: 'Biên bản tự động (cơ bản)', included: true },
        { text: 'Xuất PDF / DOCX', included: true },
        { text: 'AI Agent tự động hoá', included: false },
        { text: 'Phòng điều khiển operator', included: false }
      ]
    },
    {
      code: 'basic',
      name: 'Gói Cơ Bản',
      description: 'Cá nhân, nhu cầu cơ bản',
      price: billing === 'monthly' ? '39.000đ / tháng' : '390.000đ / năm',
      note: '',
      popular: true,
      isDark: true,
      cta: 'Đăng ký ngay',
      features: [
        { text: '6 giờ mỗi phiên', included: true },
        { text: 'Ghi âm không giới hạn / ngày', included: true },
        { text: '100 giờ ghi âm / kỳ', included: true },
        { text: 'Lưu trữ 1 năm, 10 GB', included: true },
        { text: '5.000 tín dụng AI', included: true },
        { text: 'Phiên dịch không giới hạn', included: true },
        { text: 'Nhận dạng đa người nói', included: true },
        { text: 'Biên bản nâng cao + mẫu', included: true },
        { text: 'AI Agent tự động hoá', included: false },
        { text: 'Phòng điều khiển operator', included: false }
      ]
    },
    {
      code: 'advanced',
      name: 'Gói Nâng Cao',
      description: 'Cá nhân, nhu cầu nâng cao',
      price: billing === 'monthly' ? '99.000đ / tháng' : '990.000đ / năm',
      note: '',
      popular: false,
      isDark: false,
      cta: 'Đăng ký ngay',
      features: [
        { text: '8 giờ mỗi phiên', included: true },
        { text: 'Ghi âm không giới hạn / ngày', included: true },
        { text: '500 giờ ghi âm / kỳ', included: true },
        { text: 'Lưu trữ 3 năm, 512 GB', included: true },
        { text: '10.000 tín dụng AI', included: true },
        { text: 'AI Agent tự động hoá', included: true },
        { text: 'Bảng điều khiển operator (sân khấu, cấu hình màn hình)', included: true },
        { text: 'Bot ghi họp Zoom / Teams / Meet', included: true },
        { text: 'API & tích hợp', included: true },
        { text: 'Hỗ trợ ưu tiên 24/7', included: true }
      ]
    }
  ];

  const workspacePlans = [
    {
      code: 'team',
      name: 'Gói Nhóm (Team)',
      description: 'Không gian làm việc nhóm, tính tiền theo từng thành viên',
      price: billing === 'monthly' ? '99.000đ / chỗ / tháng' : '990.000đ / chỗ / năm',
      note: 'Từ 2 chỗ',
      popular: true,
      isDark: true,
      cta: 'Tạo không gian nhóm',
      features: [
        { text: 'Không gian làm việc nhóm chung', included: true },
        { text: 'Tính tiền theo từng thành viên', included: true },
        { text: 'Quota & tín dụng AI dùng chung', included: true },
        { text: 'Bot ghi họp Zoom / Teams / Meet', included: true },
        { text: 'Phân quyền thành viên & Quản trị', included: true },
        { text: 'Chiết khấu theo số lượng (>10 người giảm 10%)', included: true },
        { text: 'Xuất báo cáo tổng hợp đội ngũ', included: true },
        { text: 'Hỗ trợ kỹ thuật chuyên biệt', included: true }
      ]
    }
  ];

  const enterprisePlans = [
    {
      code: 'enterprise_private_cloud',
      name: 'Doanh Nghiệp — Private Cloud',
      description: 'Tổ chức lớn cần dữ liệu đặt tại Việt Nam',
      price: 'Liên hệ',
      note: 'Từ 100 người dùng / instance',
      popular: false,
      isDark: false,
      cta: 'Liên hệ tư vấn',
      features: [
        { text: 'Dữ liệu đặt tại máy chủ Việt Nam', included: true },
        { text: 'Từ 100 người dùng / instance riêng', included: true },
        { text: 'Giới hạn tuỳ chỉnh theo nhu cầu', included: true },
        { text: 'SLA cam kết 99.9% & Hỗ trợ chuyên trách', included: true },
        { text: 'Không dùng dữ liệu để huấn luyện AI', included: true },
        { text: 'Tích hợp SSO SAML / Okta / Azure AD', included: true }
      ]
    },
    {
      code: 'enterprise_on_premise',
      name: 'Doanh Nghiệp — On-premise',
      description: 'Tập đoàn, khu vực công, BFSI, Ngân hàng',
      price: 'Liên hệ',
      note: 'Từ 500 người dùng / server',
      popular: true,
      isDark: true,
      cta: 'Liên hệ tư vấn',
      features: [
        { text: 'Triển khai trên hạ tầng máy chủ riêng', included: true },
        { text: 'Từ 500 người dùng / server', included: true },
        { text: 'License vĩnh viễn (tuỳ chọn)', included: true },
        { text: 'Audit log kiểm toán toàn diện', included: true },
        { text: 'Mã hoá đầu-cuối Zero-Trust', included: true },
        { text: 'Đào tạo & chuyển giao công nghệ', included: true }
      ]
    }
  ];

  const currentPlans =
    segment === 'personal'
      ? personalPlans
      : segment === 'workspace'
      ? workspacePlans
      : enterprisePlans;

  const comparisonRows = [
    { feature: 'Thời lượng mỗi phiên', free: '1 giờ', basic: '6 giờ', advanced: '8 giờ' },
    { feature: 'Hạn mức ghi âm / ngày', free: '1 giờ', basic: 'Không giới hạn', advanced: 'Không giới hạn' },
    { feature: 'Hạn mức ghi âm / kỳ', free: '12 giờ', basic: '100 giờ', advanced: '500 giờ' },
    { feature: 'Dung lượng & Thời gian lưu trữ', free: '14 ngày (200 MB)', basic: '1 năm (10 GB)', advanced: '3 năm (512 GB)' },
    { feature: 'Tín dụng AI', free: '100', basic: '5.000', advanced: '10.000' },
    { feature: 'Nhận dạng đa người nói (Diarization)', free: '—', basic: 'Có', advanced: 'Có' },
    { feature: 'Biên bản cuộc họp nâng cao', free: 'Cơ bản', basic: 'Có + Mẫu chuẩn', advanced: 'Có + Tuỳ biến sâu' },
    { feature: 'AI Agent tự động hoá công việc', free: '—', basic: '—', advanced: 'Có' },
    { feature: 'Bot họp Zoom, Teams, Google Meet', free: '—', basic: '—', advanced: 'Có' },
    { feature: 'Phòng điều khiển Operator (Sân khấu LED)', free: '—', basic: '—', advanced: 'Có' },
    { feature: 'Tích hợp Meeting API & Webhooks', free: '—', basic: '—', advanced: 'Có' }
  ];

  const faqs = [
    {
      q: 'Blaze Note tính số phút sử dụng như thế nào?',
      a: 'Số phút được tính dựa trên thời lượng thực tế của phiên ghi âm hoặc độ dài file âm thanh bạn tải lên. Các phiên thử nghiệm dưới 1 phút không bị trừ vào hạn mức.'
    },
    {
      q: 'Dữ liệu cuộc họp của tôi có được bảo mật không?',
      a: 'Tuyệt đối an toàn. Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế ISO 27001, SOC 2 Type II và GDPR. Dữ liệu được mã hoá ở cả hai trạng thái truyền tải (TLS 1.3) và lưu trữ (AES-256).'
    },
    {
      q: 'Tôi có thể huỷ hoặc thay đổi gói dịch vụ bất kỳ lúc nào không?',
      a: 'Có, bạn hoàn toàn có thể nâng cấp, hạ cấp hoặc huỷ gia hạn bất kỳ lúc nào trong trang Cài đặt tài khoản mà không phát sinh bất kỳ khoản phí phụ trợ nào.'
    },
    {
      q: 'Blaze Note có hỗ trợ xuất hoá đơn VAT cho doanh nghiệp không?',
      a: 'Có, chúng tôi cung cấp đầy đủ hoá đơn điện tử VAT hợp lệ theo quy định của pháp luật Việt Nam cho tất cả các gói dịch vụ trả phí.'
    },
    {
      q: 'Tôi có thể dùng bot AI tự động vào họp mà không cần ghi âm bằng tay không?',
      a: 'Được. Với các gói trả phí, bạn có thể kết nối lịch Google / Outlook để bot tự động tham gia các đường link Zoom, Teams, Google Meet đúng giờ.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-stone-800 selection:bg-emerald-500/15 overflow-x-hidden pt-16">
      {/* 1. Header Section */}
      <section className="px-4 sm:px-6 pt-16 sm:pt-20 pb-10 sm:pb-14 lg:pt-24 text-center">
        {/* Title matching note.blaze.vn/pricing */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-stone-900 leading-tight mb-7 sm:mb-9">
          Bảng giá
        </h1>

        {/* Segment Switcher Pills */}
        <div className="inline-flex max-w-full mx-auto items-center rounded-full border border-stone-200 bg-stone-50 p-1 mb-5 sm:mb-6 shadow-xs">
          <button
            type="button"
            onClick={() => setSegment('personal')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all whitespace-nowrap ${
              segment === 'personal'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <User size={14} className="hidden sm:block shrink-0" />
            <span>Cá nhân</span>
          </button>

          <button
            type="button"
            onClick={() => setSegment('workspace')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all whitespace-nowrap ${
              segment === 'workspace'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Users size={14} className="hidden sm:block shrink-0" />
            <span>Workspace</span>
          </button>

          <button
            type="button"
            onClick={() => setSegment('enterprise')}
            className={`flex items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-all whitespace-nowrap ${
              segment === 'enterprise'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Building size={14} className="hidden sm:block shrink-0" />
            <span>Doanh nghiệp</span>
          </button>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-1">
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={`text-sm font-medium tracking-wide transition-colors ${
              billing === 'monthly' ? 'text-stone-900 font-semibold' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            Theo tháng
          </button>

          <button
            type="button"
            onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-11 h-6 shrink-0 rounded-full transition-colors ${
              billing === 'yearly' ? 'bg-emerald-600' : 'bg-stone-200'
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                billing === 'yearly' ? 'translate-x-5' : ''
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={`text-sm font-medium tracking-wide transition-colors ${
              billing === 'yearly' ? 'text-stone-900 font-semibold' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            Theo năm
          </button>

          {billing === 'yearly' && (
            <span className="text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Tiết kiệm 20%
            </span>
          )}
        </div>
      </section>

      {/* 2. Cards Section */}
      <section className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto border-x border-stone-200 px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <div
            className={`mx-auto grid gap-6 items-stretch ${
              currentPlans.length === 1
                ? 'max-w-md'
                : currentPlans.length === 2
                ? 'sm:grid-cols-2 max-w-3xl'
                : 'sm:grid-cols-2 lg:grid-cols-3 max-w-5xl'
            }`}
          >
            {currentPlans.map((plan) => (
              <div
                key={plan.code}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 lg:p-9 overflow-hidden transition-all duration-300 ${
                  plan.isDark
                    ? 'bg-[#0a0a0a] text-white border border-stone-800 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]'
                    : 'bg-white border border-stone-200 shadow-xs hover:border-emerald-300'
                }`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Name & Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <h3
                      className={`text-lg sm:text-xl font-bold tracking-tight ${
                        plan.isDark ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span
                        className={`ml-auto shrink-0 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                          plan.isDark
                            ? 'bg-white text-stone-950'
                            : 'bg-stone-900 text-white'
                        }`}
                      >
                        PHỔ BIẾN
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <span
                      className={`block text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight leading-snug ${
                        plan.isDark ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  {/* Note / Subtitle */}
                  {plan.note ? (
                    <p
                      className={`text-xs font-semibold mb-3 ${
                        plan.isDark ? 'text-emerald-400' : 'text-emerald-700'
                      }`}
                    >
                      {plan.note}
                    </p>
                  ) : (
                    <div className="mb-2" />
                  )}

                  <p
                    className={`text-xs sm:text-sm font-normal leading-relaxed mb-6 ${
                      plan.isDark ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          feat.included ? '' : 'opacity-35'
                        }`}
                      >
                        {feat.included ? (
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.isDark ? 'text-emerald-400' : 'text-emerald-600'
                            }`}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <X
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.isDark ? 'text-stone-500' : 'text-stone-300'
                            }`}
                            strokeWidth={2}
                          />
                        )}
                        <span
                          className={`text-xs sm:text-sm font-normal leading-relaxed ${
                            feat.included
                              ? plan.isDark
                                ? 'text-stone-200'
                                : 'text-stone-700'
                              : plan.isDark
                              ? 'text-stone-500 line-through'
                              : 'text-stone-400 line-through'
                          }`}
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => setAuthModalOpen(true)}
                    className={`w-full py-3 text-center text-sm font-bold tracking-wide rounded-full transition-all active:scale-95 shadow-sm ${
                      plan.isDark
                        ? 'bg-white text-stone-950 hover:bg-emerald-400 hover:text-stone-950'
                        : 'bg-stone-900 text-white hover:bg-emerald-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comparison Table Section */}
      {segment === 'personal' && (
        <section className="border-t border-stone-200">
          <div className="max-w-6xl mx-auto border-x border-stone-200 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-center text-stone-900 mb-3 sm:mb-4">
              So sánh chi tiết các gói
            </h2>
            <p className="text-sm text-stone-500 text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              Đối chiếu chi tiết từng tính năng và quyền lợi giữa các gói dịch vụ cá nhân
            </p>

            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[580px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left font-semibold text-stone-500 py-3.5 pr-4 sticky left-0 bg-white w-[40%]">
                      Tính năng
                    </th>
                    <th className="text-center font-bold text-stone-900 py-3.5 px-3 min-w-[7rem]">
                      Gói Miễn Phí
                    </th>
                    <th className="text-center font-bold text-emerald-800 py-3.5 px-3 min-w-[7rem] bg-emerald-50/50 rounded-t-xl">
                      Gói Cơ Bản
                    </th>
                    <th className="text-center font-bold text-stone-900 py-3.5 px-3 min-w-[7rem]">
                      Gói Nâng Cao
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                      <td className="py-3.5 pr-4 text-stone-700 font-medium sticky left-0 bg-white">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3 text-center text-stone-600 font-medium">
                        {row.free}
                      </td>
                      <td className="py-3.5 px-3 text-center text-emerald-900 font-bold bg-emerald-50/30">
                        {row.basic}
                      </td>
                      <td className="py-3.5 px-3 text-center text-stone-800 font-semibold">
                        {row.advanced}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 4. FAQ Section */}
      <section className="border-t border-stone-200 bg-stone-50/30">
        <div className="max-w-4xl mx-auto border-x border-stone-200 px-6 sm:px-10 py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900 mb-3">
              Câu hỏi thường gặp
            </h2>
            <p className="text-sm text-stone-500 font-medium">
              Giải đáp nhanh các thắc mắc phổ biến về gói cước và thanh toán
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-stone-900 text-sm sm:text-base hover:text-emerald-700 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${
                      faqOpen === idx ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-sm text-stone-600 font-medium leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}
