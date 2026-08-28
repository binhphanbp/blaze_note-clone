import React from 'react';
import Image from 'next/image';

export default function TrustedBy() {
  const logos = [
    { src: '/customers/vneconomy.png', alt: 'VnEconomy', className: 'h-8 sm:h-9 max-w-[180px]' },
    { src: '/customers/vinasa.png', alt: 'VINASA', className: 'h-6 sm:h-7 max-w-[140px]' },
    { src: '/customers/viettel.svg', alt: 'Viettel', className: 'h-6 sm:h-7 max-w-[140px]' },
    { src: '/customers/mobifone.svg', alt: 'MobiFone', className: 'h-7 sm:h-8 max-w-[220px] -translate-y-[2px]' },
    { src: '/customers/techcombank.png', alt: 'Techcombank', className: 'h-8 sm:h-9 max-w-[280px] translate-y-[2px]' },
    { src: '/customers/cocacola.svg', alt: 'Coca‑Cola', className: 'h-6 sm:h-7 max-w-[140px]' },
  ];

  return (
    <section className="border-t border-[var(--bz-rule)] bg-stone-50/40">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)] px-6 sm:px-10 py-8 grid gap-6 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-center">
        <p className="text-base font-semibold text-stone-700 leading-snug">
          Được các đội nhóm tin dùng để không bỏ lỡ điều gì trong mỗi cuộc họp.
        </p>

        <div className="flex flex-nowrap items-center gap-x-8 sm:gap-x-10 overflow-hidden grayscale opacity-65 hover:opacity-90 transition-opacity sm:border-l sm:border-[var(--bz-rule)] sm:pl-8 [mask-image:linear-gradient(to_right,#000_82%,transparent)]">
          {logos.map((logo, idx) => (
            <div key={idx} className="shrink-0 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={160}
                height={40}
                className={`w-auto object-contain ${logo.className}`}
              />
            </div>
          ))}
          <div className="shrink-0">
            <span title="Valsea" className="text-lg sm:text-xl font-medium tracking-wide text-stone-400">
              Valsea
            </span>
          </div>
          <div className="shrink-0">
            <span title="ActableAI" className="text-lg sm:text-xl font-medium tracking-wide text-stone-400">
              ActableAI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
