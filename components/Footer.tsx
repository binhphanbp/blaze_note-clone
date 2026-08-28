import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bz-rule)] bg-stone-50/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/blaze-icon.png"
                alt="Blaze Note"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-['Gilroy'] font-medium tracking-normal text-stone-800">
                Note
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                Voice AI
              </span>
            </Link>
            <p className="text-sm font-medium text-stone-600 leading-relaxed max-w-sm">
              Trợ lý AI phiên âm, phiên dịch và tóm tắt cuộc họp theo thời gian thực — giúp bạn tập trung trao đổi, còn biên bản và việc cần làm đã có AI lo.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Được phát triển bởi BlazeAI
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
              Sản phẩm
            </h4>
            <ul className="space-y-2 text-sm font-medium text-stone-600">
              <li>
                <Link href="/pricing" className="hover:text-emerald-700 transition">
                  Bảng giá & Chi phí
                </Link>
              </li>
              <li>
                <Link href="/uu-dai" className="hover:text-emerald-700 transition">
                  Mã giảm giá & Ưu đãi
                </Link>
              </li>
              <li>
                <Link href="/tai-ve" className="hover:text-emerald-700 transition">
                  Tải ứng dụng Desktop
                </Link>
              </li>
              <li>
                <Link href="/meeting-api" className="hover:text-emerald-700 transition">
                  Meeting API
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-emerald-700 transition">
                  Tài liệu Hướng dẫn
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides / Use cases */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
              Giải pháp
            </h4>
            <ul className="space-y-2 text-sm font-medium text-stone-600">
              <li>
                <Link href="/guide/transcription" className="hover:text-emerald-700 transition">
                  Bóc băng cuộc họp
                </Link>
              </li>
              <li>
                <Link href="/guide/translation" className="hover:text-emerald-700 transition">
                  Phiên dịch đa ngôn ngữ
                </Link>
              </li>
              <li>
                <Link href="/guide/conference" className="hover:text-emerald-700 transition">
                  Hội thảo & Sự kiện
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="hover:text-emerald-700 transition">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-emerald-700 transition">
                  Liên hệ hợp tác
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
              Liên hệ & Văn phòng
            </h4>
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Hợp tác:</span>{' '}
                  <a href="mailto:contact@blaze.vn" className="hover:text-emerald-700 underline">
                    contact@blaze.vn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Kỹ thuật:</span>{' '}
                  <a href="mailto:manhp@actable.ai" className="hover:text-emerald-700 underline">
                    manhp@actable.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-stone-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Hà Nội:</span> Tầng 10, Tòa VET, 98 Hoàng Quốc Việt
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Đà Nẵng:</span> Tầng 4, 10B, CVPM số 2, Như Nguyệt
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[var(--bz-rule)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-500">
          <div>
            © 2026 <span className="font-semibold text-stone-800">Blaze Note</span>. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://blaze.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-700 transition"
            >
              <span>Phát triển bởi blaze.vn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
