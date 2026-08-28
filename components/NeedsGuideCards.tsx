import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function NeedsGuideCards() {
  const cards = [
    {
      title: 'Phiên dịch trực tiếp',
      desc: 'Nói một ngôn ngữ, đọc bản dịch ngay — 50+ ngôn ngữ.',
      image: '/usecases/translation.jpg',
      href: '/guide/translation'
    },
    {
      title: 'Bóc băng (gỡ băng)',
      desc: 'Audio/ghi âm → văn bản, tự tách và nhận diện người nói.',
      image: '/usecases/transcription.jpg',
      href: '/guide/transcription'
    },
    {
      title: 'Hội thảo & Sự kiện',
      desc: 'Phụ đề & dịch trực tiếp cho hàng nghìn người xem qua QR code.',
      image: '/usecases/conference.jpg',
      href: '/guide/conference'
    }
  ];

  return (
    <section className="bz-defer border-t border-[var(--bz-rule)] bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 block">
            Hướng dẫn từng bước
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 leading-[1.3]">
            Bạn muốn làm gì?
          </h2>
          <p className="text-base text-stone-600 font-medium mt-2">
            Chọn nhu cầu để xem hướng dẫn chi tiết, kèm hình ảnh minh hoạ thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="rounded-3xl border border-[var(--bz-rule)] bg-white overflow-hidden flex flex-col hover:shadow-xl hover:shadow-emerald-600/10 hover:border-emerald-200 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Xem hướng dẫn chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
