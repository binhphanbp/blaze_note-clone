'use client';

import React, { useState } from 'react';
import { Check, HelpCircle, ChevronDown, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import AuthModal from '@/components/AuthModal';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const plans = [
    {
      name: 'Miễn phí',
      desc: 'Dành cho cá nhân trải nghiệm phiên âm và tóm tắt cơ bản.',
      monthlyPrice: '0đ',
      yearlyPrice: '0đ',
      period: '/tháng',
      popular: false,
      buttonText: 'Bắt đầu miễn phí',
      buttonVariant: 'secondary',
      features: [
        '120 phút phiên âm & dịch / tháng',
        'Phiên âm thời gian thực 50+ ngôn ngữ',
        'Tóm tắt cuộc họp cơ bản',
        'Lưu trữ dữ liệu trong 30 ngày',
        'Xuất định dạng TXT & PDF',
        'Hỗ trợ qua email'
      ]
    },
    {
      name: 'Cá nhân (Pro)',
      desc: 'Phù hợp cho quản lý, chuyên gia và người thường xuyên họp.',
      monthlyPrice: '249.000đ',
      yearlyPrice: '199.000đ',
      period: '/tháng',
      popular: true,
      buttonText: 'Dùng thử 14 ngày',
      buttonVariant: 'primary',
      features: [
        '1.200 phút phiên âm & dịch / tháng',
        'Tự động tách & nhận diện người nói',
        'AI Agent trích xuất biên bản & đầu việc',
        'Lưu trữ không giới hạn thời gian',
        'Tải lên file ghi âm dung lượng lớn',
        'Xuất file Word, PDF, Notion, Markdown',
        'Hỗ trợ ưu tiên 24/7'
      ]
    },
    {
      name: 'Đội nhóm (Business)',
      desc: 'Giải pháp tối ưu cho nhóm từ 5 - 20 người làm việc cộng tác.',
      monthlyPrice: '599.000đ',
      yearlyPrice: '499.000đ',
      period: '/người dùng/tháng',
      popular: false,
      buttonText: 'Đăng ký cho nhóm',
      buttonVariant: 'secondary',
      features: [
        '3.600 phút phiên âm / thành viên',
        'AI Bot tự động tham gia Zoom, Teams, Meet',
        'Không gian làm việc chung & Phân quyền',
        'Từ điển thuật ngữ chuyên ngành riêng',
        'Đồng bộ tự động sang Slack & Jira',
        'Quản trị viên & Báo cáo thống kê',
        'Cam kết chất lượng dịch vụ SLA 99.9%'
      ]
    },
    {
      name: 'Doanh nghiệp',
      desc: 'Dành cho tập đoàn cần bảo mật tối đa và tích hợp riêng.',
      monthlyPrice: 'Liên hệ',
      yearlyPrice: 'Liên hệ',
      period: '',
      popular: false,
      buttonText: 'Liên hệ tư vấn',
      buttonVariant: 'secondary',
      features: [
        'Không giới hạn phút sử dụng',
        'Huấn luyện mô hình Voice AI theo yêu cầu',
        'Triển khai On-Premise hoặc Private Cloud',
        'Tích hợp SSO SAML / Okta / Azure AD',
        'Audit log kiểm toán chi tiết',
        'Quản lý tài khoản chuyên trách riêng (CSM)',
        'Hợp đồng bảo mật NDA & Pháp lý đầy đủ'
      ]
    }
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
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Bảng giá minh bạch & Tối ưu
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Chọn gói phù hợp cho bạn hoặc doanh nghiệp
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Bắt đầu miễn phí hôm nay. Nâng cấp khi bạn cần thêm thời lượng và tính năng AI nâng cao.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-stone-200/70 border border-stone-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                billingCycle === 'monthly'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Thanh toán theo tháng
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 transition ${
                billingCycle === 'yearly'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>Thanh toán theo năm</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">
                Tiết kiệm 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-white border-2 border-emerald-500 shadow-[0_20px_50px_-15px_rgba(5,150,105,0.25)] ring-4 ring-emerald-500/10'
                  : 'bg-white border border-stone-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Được chọn nhiều nhất
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
                <p className="text-xs text-stone-500 font-medium mt-1.5 min-h-[32px] leading-snug">
                  {plan.desc}
                </p>

                <div className="mt-5 mb-6 pt-5 border-t border-stone-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                      {billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">{plan.period}</span>
                  </div>
                  {billingCycle === 'yearly' && plan.yearlyPrice !== '0đ' && plan.yearlyPrice !== 'Liên hệ' && (
                    <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                      Thanh toán theo năm (tiết kiệm 20%)
                    </span>
                  )}
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-5">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => setAuthModalOpen(true)}
                  className={`w-full py-3 rounded-full text-sm font-bold transition-all duration-200 active:scale-95 shadow-sm ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                      : 'bg-stone-900 hover:bg-emerald-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-stone-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Câu hỏi thường gặp
            </h2>
            <p className="text-sm text-stone-500 font-medium mt-2">
              Giải đáp các thắc mắc phổ biến về đăng ký và thanh toán
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
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}
