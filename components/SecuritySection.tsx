import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Eye, Lock, ArrowRight } from 'lucide-react';

export default function SecuritySection() {
  const securityPoints = [
    {
      icon: ShieldCheck,
      title: 'Bảo mật cấp doanh nghiệp.',
      desc: 'Người dùng chỉ thấy dữ liệu được cấp quyền.'
    },
    {
      icon: Eye,
      title: 'Minh bạch & kiểm toán.',
      desc: 'Ghi lại mọi truy cập, thao tác và chia sẻ.'
    },
    {
      icon: Lock,
      title: 'Quản trị dữ liệu chặt chẽ.',
      desc: 'Cô lập theo tổ chức, chia sẻ khi bạn cho phép.'
    }
  ];

  const certs = [
    { src: '/certs/iso27001.svg', label: 'ISO/IEC 27001' },
    { src: '/certs/soc2.svg', label: 'SOC 2 Type II' },
    { src: '/certs/gdpr.svg', label: 'GDPR' },
    { src: '/certs/hipaa.svg', label: 'HIPAA' }
  ];

  return (
    <section className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)]">
        <div className="grid lg:grid-cols-2">
          {/* Security Features */}
          <div className="px-6 sm:px-10 pt-12 pb-4 sm:pt-16 sm:pb-8 lg:py-24 space-y-2">
            {securityPoints.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-5 py-5 sm:py-6 ${
                  idx > 0 ? 'border-t border-[var(--bz-rule)]' : ''
                }`}
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[17px] font-semibold text-stone-900">
                    {item.title}
                  </div>
                  <div className="text-base font-medium text-stone-500 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Message & CTA */}
          <div className="px-6 sm:px-10 pt-0 pb-12 sm:pt-6 sm:pb-16 lg:py-24 lg:border-l border-[var(--bz-rule)] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-medium leading-[1.3] tracking-tight">
              <span className="text-stone-900 font-semibold block mb-2">
                Bảo mật ngay từ ngày đầu.
              </span>{' '}
              <span className="text-stone-500 font-normal">
                Dữ liệu của bạn được mã hoá, cô lập theo tổ chức và chỉ hiển thị cho người được cấp quyền.
              </span>
            </h2>

            <div className="mt-8">
              <Link
                href="/gioi-thieu#security"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white text-base font-semibold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200"
              >
                <span>Tìm hiểu về bảo mật</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Certification Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--bz-rule)] bg-stone-50/50">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center gap-3.5 py-10 px-4 text-center ${
                idx % 2 === 0 ? 'border-r' : 'border-r-0 lg:border-r'
              } ${idx < 2 ? 'border-b lg:border-b-0' : ''} border-[var(--bz-rule)] hover:bg-white transition-colors`}
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
              <span className="text-sm font-semibold text-stone-700 leading-tight">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
