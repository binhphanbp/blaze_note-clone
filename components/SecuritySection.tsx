'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Lock, Building, ArrowRight } from 'lucide-react';
import { useStagger, computeTransformStyle, useScrollReveal } from '@/lib/useScrollAnimation';

export default function SecuritySection() {
  const [itemsRef, itemProgressList] = useStagger(3, 0.11, 0.5, {
    damp: 0.12
  });

  const rightColRef = useScrollReveal({
    y: 36,
    minOpacity: 0.28,
    damp: 0.12
  });

  const [certsRef, certProgressList] = useStagger(4, 0.09, 0.48, {
    damp: 0.12
  });

  const securityItems = [
    {
      icon: Lock,
      key: 'encrypt',
      title: 'Mã hoá đầu-cuối (End-to-End)',
      desc: 'Dữ liệu được mã hoá khi truyền tải (TLS 1.3) và khi lưu trữ (AES-256).'
    },
    {
      icon: Building,
      key: 'isolate',
      title: 'Cô lập dữ liệu theo tổ chức',
      desc: 'Mỗi doanh nghiệp sở hữu không gian lưu trữ riêng biệt, hỗ trợ Private Cloud & On-premise.'
    },
    {
      icon: ShieldCheck,
      key: 'training',
      title: 'Cam kết không dùng dữ liệu huấn luyện AI',
      desc: 'Nội dung cuộc họp của bạn không bao giờ được sử dụng để đào tạo các mô hình AI công cộng.'
    }
  ];

  const certs = [
    { src: '/certs/iso27001.svg', label: 'ISO/IEC 27001' },
    { src: '/certs/soc2.svg', label: 'SOC 2 Type II' },
    { src: '/certs/gdpr.svg', label: 'GDPR Compliant' },
    { src: '/certs/hipaa.svg', label: 'HIPAA Ready' }
  ];

  return (
    <section className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)]">
        {/* Top 2 Columns */}
        <div className="grid lg:grid-cols-2">
          {/* Left: 3 Security Points */}
          <div
            ref={itemsRef}
            className="px-6 sm:px-10 pt-12 pb-4 sm:pt-16 sm:pb-8 lg:py-24"
          >
            {securityItems.map((item, idx) => {
              const progress = itemProgressList[idx] ?? 1;
              const transformStyle = computeTransformStyle(progress, {
                y: 24,
                x: 0,
                minOpacity: 0.25
              });

              return (
                <div
                  key={item.key}
                  className={`flex items-center gap-5 py-5 sm:py-6 ${
                    idx > 0 ? 'border-t border-[var(--bz-rule)]' : ''
                  }`}
                  style={transformStyle}
                >
                  <item.icon
                    className="w-7 h-7 shrink-0 text-emerald-600"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-[17px] font-semibold text-stone-900">
                      {item.title}
                    </div>
                    <div className="text-base font-medium text-stone-500">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Statement & CTA */}
          <div
            ref={rightColRef}
            className="px-6 sm:px-10 pt-0 pb-12 sm:pt-6 sm:pb-16 lg:py-24 lg:border-l border-[var(--bz-rule)] flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl font-medium leading-[1.3] tracking-tight">
              <span className="text-stone-900">
                Bảo mật ngay từ ngày đầu.
              </span>{' '}
              <span className="text-stone-500">
                Dữ liệu của bạn được mã hoá, cô lập theo tổ chức và chỉ hiển thị cho người được cấp quyền.
              </span>
            </h2>

            <div className="mt-8">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white text-base font-semibold hover:bg-emerald-600 active:scale-95 transition-all shadow-sm"
              >
                <span>Tìm hiểu về bảo mật</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 4 Certificates with Staggered Elevation */}
        <div
          ref={certsRef}
          className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--bz-rule)]"
        >
          {certs.map((cert, idx) => {
            const progress = certProgressList[idx] ?? 1;
            const transformStyle = computeTransformStyle(progress, {
              y: 22,
              x: 0,
              minOpacity: 0.28,
              scaleFrom: 0.96
            });

            return (
              <div
                key={cert.label}
                className="flex flex-col items-center justify-center gap-3.5 py-10 px-4 text-center border-r border-b border-[var(--bz-rule)] last:border-r-0"
                style={transformStyle}
              >
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <Image
                    src={cert.src}
                    alt={cert.label}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-stone-600 leading-tight">
                  {cert.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
