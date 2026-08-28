'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, Languages, Users, Mic, CheckCircle2, Play, QrCode, Sparkles, Volume2 } from 'lucide-react';

export default function SessionsShowcase() {
  const [activeSession, setActiveSession] = useState(0);

  const sessions = [
    {
      num: '01',
      key: 'meeting',
      title: 'Ghi chép & biên bản họp',
      desc: 'Tự động ghi âm, chuyển lời nói thành văn bản và soạn biên bản cho họp nội bộ, giao ban hay họp hội đồng.',
      icon: FileText,
      tags: ['Ghi âm', 'Bóc băng', 'Biên bản', 'Tóm tắt'],
      preview: {
        type: 'meeting',
        badge: 'Họp giao ban tuần · 4 người tham gia',
        items: [
          { speaker: 'Giám đốc', time: '09:02', text: 'Mục tiêu quý này là tăng trưởng 30% người dùng mới.' },
          { speaker: 'Trưởng nhóm Marketing', time: '09:04', text: 'Kế hoạch truyền thông trên các kênh số đã sẵn sàng triển khai.' },
          { speaker: 'Trưởng nhóm Kỹ thuật', time: '09:06', text: 'Hệ thống hạ tầng mới đảm bảo đáp ứng tải gấp 5 lần.' }
        ],
        actionItem: 'Biên bản & 3 đầu việc chính đã được gửi tới email tất cả thành viên.'
      }
    },
    {
      num: '02',
      key: 'comm',
      title: 'Phiên dịch đa ngôn ngữ',
      desc: 'Dịch hai chiều theo thời gian thực cho đàm phán, tiếp khách và làm việc với đối tác quốc tế.',
      icon: Languages,
      tags: ['Dịch hai chiều', 'Đa ngôn ngữ', 'Đọc bản dịch', 'Thời gian thực'],
      preview: {
        type: 'comm',
        badge: 'Đàm phán Việt – Anh · Live Translation',
        dialogue: [
          {
            speaker: 'Partner (US)',
            en: 'We are very impressed with your team’s delivery speed.',
            vi: 'Chúng tôi rất ấn tượng với tốc độ bàn giao của đội ngũ các bạn.'
          },
          {
            speaker: 'Đại diện (VN)',
            vi: 'Cảm ơn quý đối tác. Chúng tôi cam kết duy trì chất lượng cao nhất.',
            en: 'Thank you. We are committed to maintaining the highest quality.'
          }
        ]
      }
    },
    {
      num: '03',
      key: 'talkshow',
      title: 'Sự kiện & hội thảo',
      desc: 'Phụ đề và phiên dịch trực tiếp cho hội thảo, toạ đàm, đào tạo và các chương trình có nhiều diễn giả.',
      icon: Users,
      tags: ['Hội thảo', 'Toạ đàm', 'Đào tạo', 'Nhiều diễn giả'],
      preview: {
        type: 'event',
        badge: 'Hội thảo Quốc tế Voice AI Summit 2026',
        hostText: 'Diễn giả đang phát biểu: "Tương lai của công nghệ nhận dạng giọng nói..."',
        subtitles: [
          { lang: 'English', text: 'The future of speech recognition technology in enterprise...' },
          { lang: 'Tiếng Việt', text: 'Tương lai của công nghệ nhận diện giọng nói trong doanh nghiệp...' }
        ],
        viewers: '1.240 khán giả đang xem qua QR'
      }
    }
  ];

  return (
    <section id="sessions" className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto border-x border-[var(--bz-rule)]">
        {/* Section Heading */}
        <div className="px-6 sm:px-10 pt-12 pb-6 sm:pt-16 sm:pb-10 lg:pt-24 lg:pb-12 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-stone-900">
            Một nền tảng cho mọi loại cuộc họp và sự kiện
          </h2>
        </div>

        {/* 3 Alternating Split Rows matching note.blaze.vn mw() */}
        <div>
          {sessions.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={item.key}
                className={`border-t border-[var(--bz-rule)] grid lg:grid-cols-2 ${
                  idx === 0 ? 'border-t-0' : ''
                }`}
              >
                {/* Text Description Column */}
                <div
                  className={`px-6 sm:px-10 pt-10 pb-8 sm:py-12 lg:py-16 flex flex-col justify-center ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-semibold tabular-nums text-stone-400">
                      {item.num}
                    </span>
                    <span className="w-8 h-8 rounded-lg border border-[var(--bz-rule)] bg-white text-emerald-600 grid place-items-center shadow-xs">
                      <item.icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[16px] sm:text-[17px] font-medium text-stone-600 leading-relaxed max-w-md">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-700 border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media Preview Column */}
                <div
                  className={`relative min-h-[280px] sm:min-h-[320px] lg:min-h-0 border-t lg:border-t-0 bg-stone-50/70 p-5 sm:p-8 flex items-center justify-center overflow-hidden ${
                    isReversed ? 'lg:order-1 lg:border-r' : 'lg:border-l'
                  } border-[var(--bz-rule)]`}
                >
                  {/* Glowing background hint */}
                  <span className="bz-blob bz-blob-1 opacity-30" aria-hidden="true" />

                  {/* PREVIEW TYPE 1: MEETING RECORDING */}
                  {item.preview.type === 'meeting' && (
                    <div className="w-full max-w-md bg-white rounded-2xl p-5 shadow-lg shadow-emerald-600/5 ring-1 ring-black/5 space-y-3 z-10">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                        <span className="text-xs font-bold text-stone-700">
                          {item.preview.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Đang phiên âm
                        </span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-[13px]">
                        {item.preview.items?.map((line, lIdx) => (
                          <div key={lIdx} className="flex gap-2">
                            <span className="font-bold text-emerald-800 shrink-0">
                              {line.speaker}:
                            </span>
                            <span className="text-stone-700 font-medium">{line.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2.5 border-t border-stone-100 flex items-center gap-2 text-[11.5px] font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{item.preview.actionItem}</span>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW TYPE 2: BILINGUAL TRANSLATION */}
                  {item.preview.type === 'comm' && (
                    <div className="w-full max-w-md bg-white rounded-2xl p-5 shadow-lg shadow-emerald-600/5 ring-1 ring-black/5 space-y-3 z-10">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                        <span className="text-xs font-bold text-stone-700">
                          {item.preview.badge}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Real-time
                        </span>
                      </div>

                      <div className="space-y-3">
                        {item.preview.dialogue?.map((dlg, dIdx) => (
                          <div
                            key={dIdx}
                            className={`p-3 rounded-xl border text-xs space-y-1 ${
                              dIdx === 0 ? 'bg-stone-50 border-stone-200' : 'bg-emerald-50/60 border-emerald-200'
                            }`}
                          >
                            <span className="font-bold text-stone-500 uppercase text-[10px]">
                              {dlg.speaker}
                            </span>
                            <p className="text-stone-600 italic">{dlg.en}</p>
                            <p className="font-bold text-stone-900">↳ {dlg.vi}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PREVIEW TYPE 3: EVENT MODE & QR */}
                  {item.preview.type === 'event' && (
                    <div className="w-full max-w-md bg-stone-900 text-white rounded-2xl p-5 shadow-lg ring-1 ring-white/10 space-y-3 z-10">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
                        <span className="text-xs font-bold text-stone-300">
                          {item.preview.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          LED Display
                        </span>
                      </div>

                      <div className="space-y-2 py-1">
                        <p className="text-xs text-stone-400">{item.preview.hostText}</p>
                        <div className="p-2.5 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5">
                          {item.preview.subtitles?.map((sub, sIdx) => (
                            <div key={sIdx} className="text-xs">
                              <span className="text-[10px] font-bold uppercase text-emerald-400 mr-1.5">
                                [{sub.lang}]
                              </span>
                              <span className="text-stone-200 font-medium">{sub.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-medium text-stone-400">
                        <span className="flex items-center gap-1.5">
                          <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Quét mã QR để xem trên điện thoại</span>
                        </span>
                        <span className="text-emerald-400 font-semibold">{item.preview.viewers}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line Divider */}
        <div className="px-6 sm:px-10 py-6 sm:py-8 flex items-center gap-3 text-stone-400 border-t border-[var(--bz-rule)]">
          <span className="text-base font-semibold text-stone-500">
            Và nhiều tình huống làm việc khác...
          </span>
          <div className="h-px flex-1 bg-[var(--bz-rule)]" />
        </div>
      </div>
    </section>
  );
}
