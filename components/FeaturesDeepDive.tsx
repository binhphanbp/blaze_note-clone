import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

export default function FeaturesDeepDive() {
  const integrationLogos = [
    { src: '/zoom-logo.png', alt: 'Zoom', name: 'Zoom' },
    { src: '/ms-teams-logo.svg', alt: 'Teams', name: 'Microsoft Teams' },
    { src: '/google-meet.svg', alt: 'Google Meet', name: 'Google Meet' },
    { src: '/slack-icon.svg', alt: 'Slack', name: 'Slack' },
    { src: '/notion.svg', alt: 'Notion', name: 'Notion' },
    { src: '/jira.svg', alt: 'Jira', name: 'Jira' },
    { src: '/google-drive.svg', alt: 'Google Drive', name: 'Google Drive' },
    { src: '/microsoft-sharepoint.svg', alt: 'SharePoint', name: 'SharePoint' }
  ];

  return (
    <section id="features" className="bz-defer border-t border-[var(--bz-rule)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-12 sm:py-16 lg:py-24">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-row items-end justify-between gap-3 sm:gap-6">
          <div className="max-w-2xl min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3] text-stone-900">
              Mọi thứ bạn cần cho trọn vòng đời cuộc họp.
            </h2>
          </div>
          <a
            href="#demo"
            className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-stone-900 text-white text-[13px] sm:text-[15px] font-semibold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-200"
          >
            <span>Khám phá tính năng</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-6 lg:space-y-8">
          {/* Card 1: Phiên âm & Phiên dịch */}
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-4 sm:gap-6 items-stretch">
            <div className="rounded-2xl border border-[var(--bz-rule)] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                Real-time Translation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                Phiên âm & phiên dịch.
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] text-stone-600 font-medium leading-relaxed">
                Nghe một ngôn ngữ, đọc bản dịch hiện ra ngay tức thì — hỗ trợ hơn 50 ngôn ngữ, chính xác cao với tiếng Việt.
              </p>
            </div>

            <div className="bz-mini bz-mini-a rounded-2xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] border border-emerald-100 p-4 sm:p-6 flex items-center justify-end">
              <span className="bz-blob bz-blob-1" aria-hidden="true" />
              <span className="bz-blob bz-blob-2" aria-hidden="true" />
              <span className="bz-sheen" aria-hidden="true" />
              <span className="bz-grain" aria-hidden="true" />

              <div className="relative z-10 w-full max-w-[560px] bg-white/95 backdrop-blur-md rounded-xl ring-1 ring-black/[0.06] shadow-[0_20px_45px_-15px_rgba(5,150,105,0.22)] p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-stone-600">
                    EN → VI · Trực tiếp
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Đang dịch
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex gap-3">
                    <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300">
                      A
                    </span>
                    <div className="min-w-0">
                      <p className="text-stone-400 font-normal">“Let&apos;s ship the beta this Friday.”</p>
                      <p className="font-semibold text-stone-800 mt-0.5">
                        “Chốt phát hành bản beta vào thứ Sáu này.”
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full text-xs font-bold bg-teal-100 text-teal-800 ring-1 ring-teal-300">
                      B
                    </span>
                    <div className="min-w-0">
                      <p className="text-stone-400 font-normal">“I&apos;ll send the revenue report first.”</p>
                      <p className="font-semibold text-stone-800 mt-0.5">
                        “Tôi sẽ gửi báo cáo doanh thu trước.”
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full text-xs font-bold bg-green-100 text-green-800 ring-1 ring-green-300">
                      C
                    </span>
                    <div className="min-w-0">
                      <p className="text-stone-400 font-normal">“Let&apos;s sync the design docs next week.”</p>
                      <p className="font-semibold text-stone-800 mt-0.5">
                        “Tuần sau mình đồng bộ tài liệu thiết kế nhé.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Nhận diện người nói */}
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-6 items-stretch">
            <div className="bz-mini bz-mini-c rounded-2xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] border border-emerald-100 p-6 flex flex-col justify-center gap-3">
              <span className="bz-blob bz-blob-3" aria-hidden="true" />
              <span className="bz-blob bz-blob-4" aria-hidden="true" />
              <span className="bz-sheen" aria-hidden="true" />
              <span className="bz-grain" aria-hidden="true" />

              <div className="relative z-10 space-y-3">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 ring-1 ring-black/[0.06] shadow-[0_12px_30px_-10px_rgba(5,150,105,0.18)] max-w-sm flex items-center gap-3">
                  <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300">
                    A
                  </span>
                  <div>
                    <span className="text-xs font-bold text-stone-400">Anna</span>
                    <p className="text-sm font-semibold text-stone-800">
                      Chúng ta chốt lịch phát hành nhé.
                    </p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 ring-1 ring-black/[0.06] shadow-[0_12px_30px_-10px_rgba(5,150,105,0.18)] max-w-sm ml-auto flex items-center gap-3">
                  <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full text-xs font-bold bg-teal-100 text-teal-800 ring-1 ring-teal-300">
                    M
                  </span>
                  <div>
                    <span className="text-xs font-bold text-stone-400">Minh</span>
                    <p className="text-sm font-semibold text-stone-800">
                      Tuần sau mình review lại thiết kế.
                    </p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 ring-1 ring-black/[0.06] shadow-[0_12px_30px_-10px_rgba(5,150,105,0.18)] max-w-sm flex items-center gap-3">
                  <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full text-xs font-bold bg-green-100 text-green-800 ring-1 ring-green-300">
                    H
                  </span>
                  <div>
                    <span className="text-xs font-bold text-stone-400">Hà</span>
                    <p className="text-sm font-semibold text-stone-800">
                      Ok, em gửi báo cáo trước cuộc họp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--bz-rule)] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                Diarization
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                Nhận diện người nói.
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] text-stone-600 font-medium leading-relaxed">
                Tự động tách và gán tên cho từng giọng nói, để biên bản luôn rõ ai đã nói điều gì.
              </p>
            </div>
          </div>

          {/* Card 3: Tự động hoá bằng AI Agent */}
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-4 sm:gap-6 items-stretch">
            <div className="rounded-2xl border border-[var(--bz-rule)] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                AI Automation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                Tự động hoá bằng AI Agent.
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] text-stone-600 font-medium leading-relaxed">
                AI Agent biến quyết định trong cuộc họp thành công việc cụ thể — tự động giao cho đúng người và đồng bộ sang công cụ quản lý của bạn.
              </p>
            </div>

            <div className="bz-mini bz-mini-b rounded-2xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] border border-emerald-100 p-4 sm:p-8 flex items-center justify-center">
              <div className="relative z-10 w-full max-w-[540px] bg-white/95 backdrop-blur-md rounded-xl ring-1 ring-black/[0.06] shadow-[0_20px_45px_-15px_rgba(5,150,105,0.22)] overflow-hidden">
                <div className="px-5 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-stone-700">
                    AI Agent · Tự động hoá sau họp
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Auto-sync
                  </span>
                </div>

                <ul className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                  {/* Task 1 */}
                  <li className="flex items-center gap-2.5 py-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-stone-400 font-medium shrink-0">Nhiệm vụ 1:</span>
                    <span className="flex-1 text-stone-600 line-through decoration-stone-300 truncate">
                      Soạn email báo cáo doanh thu
                    </span>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-[11px]">
                      Hoàn thành
                    </span>
                  </li>

                  {/* Task 2 */}
                  <li className="flex items-center gap-2.5 py-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-stone-400 font-medium shrink-0">Nhiệm vụ 2:</span>
                    <span className="flex-1 text-stone-600 line-through decoration-stone-300 truncate">
                      Cập nhật tài liệu thiết kế
                    </span>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-[11px]">
                      Hoàn thành
                    </span>
                  </li>

                  {/* Task 3 */}
                  <li className="flex items-center gap-2.5 py-1">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    </span>
                    <span className="text-stone-400 font-medium shrink-0">Nhiệm vụ 3:</span>
                    <span className="flex-1 text-stone-800 font-medium truncate animate-pulse">
                      Xuất &amp; gửi PDF cho khách hàng...
                    </span>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-[11px] flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Đang chạy
                    </span>
                  </li>

                  {/* Task 4 */}
                  <li className="flex items-center gap-2.5 py-1 opacity-60">
                    <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0">
                      •
                    </span>
                    <span className="text-stone-400 font-medium shrink-0">Nhiệm vụ 4:</span>
                    <span className="flex-1 text-stone-500 truncate">
                      Lên lịch cuộc họp tiếp theo
                    </span>
                    <span className="shrink-0 text-stone-400 font-medium text-[11px]">
                      Chờ
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4: Tích hợp hệ sinh thái */}
          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-6 items-stretch">
            <div className="bz-mini bz-mini-d rounded-2xl overflow-hidden relative min-h-[260px] sm:min-h-[300px] border border-emerald-100 p-6 sm:p-10 flex flex-col justify-center">
              <span className="bz-blob bz-blob-1" aria-hidden="true" />
              <span className="bz-blob bz-blob-2" aria-hidden="true" />
              <span className="bz-sheen" aria-hidden="true" />

              <div className="relative z-10 grid grid-cols-4 gap-4 sm:gap-6 place-items-center">
                {integrationLogos.map((app, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-[0_10px_25px_-8px_rgba(5,150,105,0.18)] ring-1 ring-black/[0.05] p-2.5 sm:p-3 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    title={app.name}
                  >
                    <Image
                      src={app.src}
                      alt={app.alt}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--bz-rule)] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                Ecosystem
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                Tích hợp liền mạch.
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] text-stone-600 font-medium leading-relaxed">
                Tự động mời bot vào Zoom, Teams, Google Meet hoặc xuất biên bản sang Notion, Slack, Jira và SharePoint chỉ trong một chạm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
