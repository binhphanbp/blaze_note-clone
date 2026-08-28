'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, CheckCircle2, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-50/50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-emerald-700 transition mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Về trang chủ</span>
        </Link>

        {/* Card */}
        <div className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.22)]">
          {/* Logo */}
          <div className="flex flex-col items-center text-center mb-6">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/blaze-icon.png"
                alt="Blaze Note"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-2xl font-['Gilroy'] font-bold text-stone-800">
                Note
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-stone-900">
              {mode === 'register' ? 'Đăng ký tài khoản miễn phí' : 'Đăng nhập vào Blaze Note'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 font-medium">
              {mode === 'register'
                ? 'Nhận ngay 120 phút phiên âm và dịch thuật AI miễn phí'
                : 'Tiếp tục quản lý và xem lại các phiên họp của bạn'}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">Kiểm tra hộp thư đến!</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Chúng tôi đã gửi đường dẫn đăng nhập an toàn tới <strong className="text-stone-900">{email}</strong>. Vui lòng mở email để kích hoạt.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition"
              >
                Nhập lại email khác
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Google Button */}
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-sm shadow-sm transition active:scale-98"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.4s.2-1.7.4-2.4L1.6 7c-.8 1.6-1.3 3.4-1.3 5.3 0 1.9.5 3.7 1.3 5.3l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"
                  />
                </svg>
                <span>Tiếp tục với Google</span>
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-stone-200" />
                <span className="text-xs font-semibold uppercase text-stone-400">Hoặc email</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Email công việc của bạn
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <span>{mode === 'register' ? 'Đăng ký tài khoản' : 'Đăng nhập an toàn'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Switch Mode */}
              <p className="text-center text-xs text-stone-500 pt-3">
                {mode === 'register' ? (
                  <>
                    Đã có tài khoản?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      Đăng nhập
                    </button>
                  </>
                ) : (
                  <>
                    Chưa có tài khoản?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('register')}
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      Đăng ký miễn phí
                    </button>
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Security badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-stone-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Bảo mật theo tiêu chuẩn ISO 27001 &amp; SOC 2 Type II</span>
        </div>
      </div>
    </div>
  );
}
