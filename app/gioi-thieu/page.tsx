import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Award, Users, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { value: '98%', label: 'Độ chính xác phiên âm tiếng Việt' },
    { value: '<300ms', label: 'Độ trễ dịch thuật realtime' },
    { value: '50+', label: 'Ngôn ngữ quốc tế được hỗ trợ' },
    { value: '100.000+', label: 'Giờ họp được xử lý an toàn' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Tập trung vào giá trị cốt lõi',
      desc: 'Giải phóng con người khỏi việc ghi chép thủ công tốn thời gian, để bạn toàn tâm toàn ý vào việc thảo luận và ra quyết định chiến lược.'
    },
    {
      icon: ShieldCheck,
      title: 'Bảo mật là nguyên tắc tiên quyết',
      desc: 'Chúng tôi xây dựng hệ thống với kiến trúc Zero-Trust. Dữ liệu của khách hàng không bao giờ được dùng để huấn luyện mô hình công cộng khi chưa có sự đồng ý.'
    },
    {
      icon: Award,
      title: 'Làm chủ công nghệ Voice AI bản địa',
      desc: 'Mô hình được tối ưu hoá sâu sắc cho ngữ âm tiếng Việt 3 miền Bắc - Trung - Nam, hiểu rõ tiếng lóng, thuật ngữ doanh nghiệp và từ viết tắt.'
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden min-h-screen bg-stone-50/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Về chúng tôi
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Blaze Note biến mỗi cuộc họp thành tri thức doanh nghiệp.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Chúng tôi là đội ngũ chuyên gia nghiên cứu công nghệ Voice AI tiên phong tại Việt Nam, mang đến giải pháp trợ lý thông minh giúp hàng nghìn doanh nghiệp nâng cao hiệu suất làm việc mỗi ngày.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-4 text-stone-600 font-medium leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              Nền tảng Voice AI đứng sau Blaze Note
            </h2>
            <p>
              Được thành lập với sứ mệnh xoá bỏ rào cản ngôn ngữ và giải phóng sức lao động trong các cuộc họp, Blaze Note kết hợp sức mạnh của các mô hình học sâu (Deep Learning) mới nhất cùng thuật toán nhận dạng giọng nói tiếng Việt chuyên biệt.
            </p>
            <p>
              Hệ thống không chỉ phiên âm chữ-từ-chữ một cách khô khan, mà còn hiểu ngữ cảnh, tự động phân tách từng người phát biểu, phát hiện các quyết định trọng yếu và tự động lên danh sách công việc cần làm một cách khoa học.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border border-emerald-100 p-8 sm:p-10 space-y-4">
            <h3 className="text-xl font-bold text-stone-900">
              Công nghệ tiên tiến & Tiêu chuẩn quốc tế
            </h3>
            <ul className="space-y-3 text-sm font-medium text-stone-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mô hình Voice Transformer tự phát triển tại Việt Nam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hạ tầng điện toán đám mây tốc độ cao đạt chuẩn SOC 2 Type II</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mã hoá đầu cuối và tuân thủ tuyệt đối quy định GDPR &amp; HIPAA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Giá trị chúng tôi theo đuổi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-stone-200 p-7 sm:p-8 shadow-sm"
              >
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit mb-5">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{val.title}</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-3xl bg-stone-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Sẵn sàng đồng hành cùng Blaze Note?
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base">
            Gia nhập cùng hàng trăm doanh nghiệp đang chuyển đổi quy trình họp thông minh hơn ngay hôm nay.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition"
            >
              <span>Xem các gói dịch vụ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
