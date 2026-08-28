'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Building2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            Kết nối với chúng tôi
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Liên hệ &amp; Tư vấn giải pháp
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Đội ngũ chuyên gia Blaze Note luôn sẵn sàng hỗ trợ giải đáp mọi nhu cầu về Voice AI và tích hợp doanh nghiệp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-white border border-stone-200 p-7 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
                Kênh liên hệ trực tiếp
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase">Hợp tác & Kinh doanh</div>
                    <a href="mailto:contact@blaze.vn" className="font-semibold text-stone-800 hover:text-emerald-700 transition">
                      contact@blaze.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase">Hỗ trợ Kỹ thuật & API</div>
                    <a href="mailto:manhp@actable.ai" className="font-semibold text-stone-800 hover:text-emerald-700 transition">
                      manhp@actable.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase">Thời gian làm việc</div>
                    <p className="font-semibold text-stone-800">
                      Thứ Hai – Thứ Sáu (08:30 – 18:00)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="rounded-3xl bg-white border border-stone-200 p-7 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
                Văn phòng đại diện
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Trụ sở Hà Nội</h4>
                    <p className="text-stone-600 mt-0.5 leading-relaxed text-xs">
                      Tầng 10, Tòa nhà VET, số 98 Hoàng Quốc Việt, Quận Cầu Giấy, Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Chi nhánh Đà Nẵng</h4>
                    <p className="text-stone-600 mt-0.5 leading-relaxed text-xs">
                      Tầng 4, Tòa nhà 10B, Công viên phần mềm số 2, Đường Như Nguyệt, Quận Hải Châu, Đà Nẵng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                Gửi lời nhắn cho chúng tôi
              </h3>
              <p className="text-sm text-stone-500 font-medium mb-8">
                Điền thông tin bên dưới và chuyên viên tư vấn của Blaze Note sẽ liên hệ lại trong vòng 2 giờ làm việc.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">
                    Cảm ơn bạn đã liên hệ!
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Chúng tôi đã tiếp nhận thông tin từ bạn ({formData.email}) và sẽ phản hồi qua email/số điện thoại trong thời gian sớm nhất.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition"
                  >
                    Gửi lời nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email công việc *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="a.nguyen@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Tên doanh nghiệp / Tổ chức
                      </label>
                      <input
                        type="text"
                        placeholder="Tập đoàn ABC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Nhu cầu hoặc câu hỏi của bạn *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Mô tả số lượng người dùng cần triển khai, nhu cầu tích hợp API, hoặc thắc mắc cần hỗ trợ..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition active:scale-95"
                    >
                      <span>Gửi yêu cầu tư vấn</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
