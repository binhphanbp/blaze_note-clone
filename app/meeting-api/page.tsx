'use client';

import React, { useState } from 'react';
import { Code2, Terminal, Copy, Check, Sparkles, ArrowRight, Zap, Shield, Key } from 'lucide-react';
import AuthModal from '@/components/AuthModal';

const codeExamples = {
  curl: `curl -X POST https://api.blaze.vn/v1/meetings/transcribe \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@meeting-recording.mp3" \\
  -F "language=vi" \\
  -F "diarization=true" \\
  -F "summarize=true"`,
  python: `import requests

url = "https://api.blaze.vn/v1/meetings/transcribe"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
files = {"file": open("meeting-recording.mp3", "rb")}
data = {
    "language": "vi",
    "diarization": True,
    "summarize": True
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())`,
  nodejs: `import { BlazeNoteClient } from '@blaze-ai/note-sdk';

const client = new BlazeNoteClient({
  apiKey: process.env.BLAZE_API_KEY
});

const result = await client.meetings.transcribe({
  file: './meeting-recording.mp3',
  language: 'vi',
  diarization: true,
  summarize: true
});

console.log(result.transcript);
console.log(result.actionItems);`
};

export default function MeetingApiPage() {
  const [activeLang, setActiveLang] = useState<'curl' | 'python' | 'nodejs'>('curl');
  const [copied, setCopied] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/v1/meetings/transcribe',
      desc: 'Bóc băng file âm thanh, nhận diện người nói và tạo tóm tắt biên bản'
    },
    {
      method: 'WSS',
      path: '/v1/meetings/live-stream',
      desc: 'Kết nối WebSocket để truyền âm thanh và nhận phụ đề dịch trực tiếp realtime'
    },
    {
      method: 'POST',
      path: '/v1/bot/join',
      desc: 'Gửi bot AI tham gia phòng họp Zoom, MS Teams hoặc Google Meet theo URL'
    },
    {
      method: 'GET',
      path: '/v1/meetings/{id}/summary',
      desc: 'Lấy báo cáo phân tích, điểm chính và danh sách đầu việc được trích xuất'
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Code2 className="w-3.5 h-3.5 text-emerald-600" />
            Developer Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Meeting API — đưa AI họp vào sản phẩm của bạn.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-medium">
            Tích hợp toàn bộ vòng đời cuộc họp: phiên âm trực tiếp, dịch thuật hơn 50 ngôn ngữ và tự động hoá công việc với vài dòng mã lệnh.
          </p>

          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center gap-2 transition"
            >
              <Key className="w-4 h-4" />
              <span>Tạo API Key miễn phí</span>
            </button>
            <a
              href="#endpoints"
              className="px-6 py-3 rounded-full bg-white border border-stone-200 text-stone-700 font-semibold text-sm hover:border-emerald-500 hover:text-emerald-700 transition"
            >
              Xem API Endpoints
            </a>
          </div>
        </div>

        {/* Code Snippet Showcase Card */}
        <div className="rounded-3xl bg-stone-950 text-stone-200 border border-stone-800 shadow-2xl overflow-hidden mb-20">
          {/* Code Window Topbar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-stone-800 bg-stone-900/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-stone-400 ml-2">transcribe_meeting.sh</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveLang('curl')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition ${
                    activeLang === 'curl' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  cURL
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLang('python')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition ${
                    activeLang === 'python' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Python
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLang('nodejs')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition ${
                    activeLang === 'nodejs' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Node.js
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition"
                title="Sao chép code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Code Content */}
          <pre className="p-6 sm:p-8 font-mono text-xs sm:text-sm overflow-x-auto text-emerald-400 leading-relaxed">
            <code>{codeExamples[activeLang]}</code>
          </pre>
        </div>

        {/* Endpoints List */}
        <div id="endpoints" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Các API Endpoints cốt lõi
            </h2>
            <p className="text-sm text-stone-500 font-medium mt-1">
              Chuẩn RESTful API và WebSocket độ trễ thấp
            </p>
          </div>

          <div className="space-y-3">
            {endpoints.map((ep, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-emerald-300 transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                      ep.method === 'POST'
                        ? 'bg-blue-100 text-blue-800'
                        : ep.method === 'WSS'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-800'
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span className="font-mono font-semibold text-stone-900 text-sm sm:text-base">
                    {ep.path}
                  </span>
                </div>

                <span className="text-xs sm:text-sm text-stone-600 font-medium">
                  {ep.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border border-emerald-100 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-stone-900">
            Sẵn sàng tích hợp Meeting API?
          </h3>
          <p className="text-sm font-medium text-stone-600 max-w-lg mx-auto">
            Đăng ký tài khoản nhà phát triển ngay hôm nay để nhận 1.000 request API miễn phí.
          </p>
          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-stone-900 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition active:scale-95"
          >
            Bắt đầu tích hợp ngay
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode="register"
      />
    </div>
  );
}
