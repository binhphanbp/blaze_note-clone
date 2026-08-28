'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('enterprise');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const inputStyle =
    'w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all';

  return (
    <div className="bg-white text-stone-800 selection:bg-emerald-500/15 overflow-x-hidden pt-16 min-h-screen">
      {/* 1. Header Section */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light tracking-tight text-stone-900 leading-tight">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-4 text-[15px] sm:text-base font-normal text-stone-500 max-w-2xl leading-relaxed">
            Đội ngũ Blaze Note luôn sẵn sàng hỗ trợ tư vấn giải pháp, tích hợp API và giải đáp mọi yêu cầu triển khai của doanh nghiệp.
          </p>
        </div>
      </section>

      {/* 2. Content 2-column Grid */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">
            {/* Left: Contact Info & Offices */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-4">
                  Kênh liên hệ trực tiếp
                </h2>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:contact@blaze.vn"
                      className="flex items-start gap-3.5 rounded-2xl border border-stone-200 bg-white p-4 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all"
                    >
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 text-emerald-600 shrink-0">
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block text-[12px] font-semibold text-stone-400">
                          Hợp tác & Đối tác
                        </span>
                        <span className="block text-[15px] font-bold text-stone-900 break-all">
                          contact@blaze.vn
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:sales@blaze.vn"
                      className="flex items-start gap-3.5 rounded-2xl border border-stone-200 bg-white p-4 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all"
                    >
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 text-emerald-600 shrink-0">
                        <Building className="w-5 h-5" />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block text-[12px] font-semibold text-stone-400">
                          Tư vấn Doanh nghiệp & API
                        </span>
                        <span className="block text-[15px] font-bold text-stone-900 break-all">
                          sales@blaze.vn
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-lg font-bold text-stone-900 mb-4">
                  Văn phòng làm việc
                </h2>
                <div className="space-y-3.5">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>Trụ sở Hà Nội</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                      Tầng 6, Tòa nhà Detech, Số 8 Tôn Thất Thuyết, Phường Mỹ Đình 2, Quận Nam Từ Liêm, TP. Hà Nội
                    </p>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>Văn phòng Đà Nẵng</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                      Tầng 4, Tòa nhà ACB, 218 Bạch Đằng, Phường Phước Ninh, Quận Hải Châu, TP. Đà Nẵng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900 mb-2">
                Gửi yêu cầu tư vấn
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mb-6">
                Điền thông tin bên dưới, chuyên viên của Blaze Note sẽ liên hệ lại trong vòng 2 giờ làm việc.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Gửi yêu cầu thành công!
                  </h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    Cảm ơn bạn đã quan tâm. Chúng tôi sẽ phản hồi qua email hoặc số điện thoại sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Email công việc *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912 345 678"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Tên công ty / Tổ chức
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Công ty Cổ phần ABC"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Nhu cầu cần hỗ trợ
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputStyle}
                    >
                      <option value="enterprise">Tư vấn gói Doanh nghiệp (Private Cloud / On-premise)</option>
                      <option value="api">Tích hợp Meeting API & Voice SDK</option>
                      <option value="workspace">Đăng ký gói Workspace cho Nhóm</option>
                      <option value="partnership">Đề xuất hợp tác kinh doanh</option>
                      <option value="other">Hỗ trợ kỹ thuật khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Nội dung chi tiết *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mô tả số lượng người dùng dự kiến, nhu cầu tính năng hoặc yêu cầu bảo mật..."
                      className={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-full bg-stone-900 text-white text-sm font-bold hover:bg-emerald-600 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <span>Gửi thông tin liên hệ</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
