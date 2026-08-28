'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  Languages,
  Users,
  Code2,
  BookOpen,
  ArrowRight,
  Mic,
  Bot,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Settings,
  Share2,
  Check
} from 'lucide-react';
import AuthModal from './AuthModal';

const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: '/flags/vn.svg' },
  { code: 'en', label: 'English', flag: '/flags/us.svg' },
  { code: 'zh', label: '中文', flag: '/flags/cn.svg' },
  { code: 'km', label: 'ភាសាខ្មែរ', flag: '/flags/kh.svg' }
];

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const solutionsRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (guidesRef.current && !guidesRef.current.contains(event.target as Node)) {
        setGuidesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    {
      href: '/guide/transcription',
      title: 'Bóc băng (gỡ băng)',
      desc: 'Audio/ghi âm sang văn bản, tự tách người nói',
      icon: FileText
    },
    {
      href: '/guide/translation',
      title: 'Phiên dịch trực tiếp',
      desc: 'Dịch hai chiều realtime hơn 50 ngôn ngữ',
      icon: Languages
    },
    {
      href: '/guide/conference',
      title: 'Hội thảo & Sự kiện',
      desc: 'Phụ đề & dịch trực tiếp cho hàng nghìn người xem',
      icon: Users
    },
    {
      href: '/meeting-api',
      title: 'Meeting API',
      desc: 'Tích hợp phiên âm, dịch & biên bản qua API',
      icon: Code2
    },
    {
      href: '/meeting-api#docs',
      title: 'Developer Docs',
      desc: 'Tài liệu tích hợp SDK, REST API & Webhooks',
      icon: BookOpen
    }
  ];

  const guideGroups = [
    {
      heading: 'Bắt đầu nhanh',
      items: [
        { href: '/guide', title: 'Tổng quan Blaze Note', icon: Sparkles },
        { href: '/login', title: 'Tạo tài khoản & Đăng nhập', icon: CheckCircle2 },
        { href: '/guide#create', title: 'Tạo phiên họp đầu tiên', icon: Mic }
      ]
    },
    {
      heading: 'Tính năng AI',
      items: [
        { href: '/guide/transcription', title: 'Ghi âm & Bóc băng', icon: Mic },
        { href: '/guide/translation', title: 'Phiên dịch realtime', icon: Languages },
        { href: '/guide#bot', title: 'Mời AI Bot vào Zoom/Teams/Meet', icon: Bot },
        { href: '/guide#summary', title: 'Tự động tạo tóm tắt & biên bản', icon: FileText }
      ]
    },
    {
      heading: 'Quản lý & Tích hợp',
      items: [
        { href: '/guide#calendar', title: 'Đồng bộ Google & Outlook Calendar', icon: Calendar },
        { href: '/guide#share', title: 'Chia sẻ biên bản & Phân quyền', icon: Share2 },
        { href: '/meeting-api', title: 'Tích hợp API & Không gian làm việc', icon: Layers }
      ]
    }
  ];

  const navLinks = [
    { href: '/pricing', label: 'Bảng giá' },
    { href: '/uu-dai', label: 'Ưu đãi' },
    { href: '/tai-ve', label: 'Tải ứng dụng' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/lien-he', label: 'Liên hệ' }
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-4 h-16 lg:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0 group">
            <div className="relative flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src="/blaze-icon.png"
                  alt="Blaze Note"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
              <span className="text-2xl font-['Gilroy'] font-medium tracking-normal text-stone-800">
                Note
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200/80">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              ref={solutionsRef}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`text-[15px] font-semibold tracking-wide transition-colors inline-flex items-center gap-1 py-2 ${
                  solutionsOpen ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Giải pháp
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? 'rotate-180 text-emerald-600' : 'text-stone-400'
                  }`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[620px]">
                  <div className="rounded-2xl bg-white border border-stone-200/90 shadow-[0_20px_50px_-20px_rgba(5,150,105,0.18)] p-4 grid grid-cols-12 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-7 space-y-1">
                      <p className="px-3 py-1 text-xs font-bold text-stone-400 uppercase tracking-wider">
                        Theo nhu cầu
                      </p>
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-stone-100 text-stone-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors shrink-0 mt-0.5">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Featured side card */}
                    <div className="col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 rounded-xl p-4 flex flex-col justify-between border border-emerald-100/80">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[11px] font-bold text-emerald-700 bg-white/80 rounded-full border border-emerald-200">
                          Bảng giá linh hoạt
                        </span>
                        <h4 className="text-[15px] font-semibold text-stone-900 mt-2.5 leading-snug">
                          Dành cho cá nhân & Doanh nghiệp
                        </h4>
                        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                          Bắt đầu miễn phí, nâng cấp khi cần với chi phí tối ưu theo phút sử dụng thực tế.
                        </p>
                      </div>
                      <Link
                        href="/pricing"
                        onClick={() => setSolutionsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors mt-4 group"
                      >
                        Xem bảng giá chi tiết
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div
              className="relative"
              ref={guidesRef}
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setGuidesOpen(!guidesOpen)}
                className={`text-[15px] font-semibold tracking-wide transition-colors inline-flex items-center gap-1 py-2 ${
                  guidesOpen ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Hướng dẫn
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    guidesOpen ? 'rotate-180 text-emerald-600' : 'text-stone-400'
                  }`}
                />
              </button>

              {guidesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px]">
                  <div className="rounded-2xl bg-white border border-stone-200/90 shadow-[0_20px_50px_-20px_rgba(5,150,105,0.18)] p-5 grid grid-cols-3 gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {guideGroups.map((group) => (
                      <div key={group.heading} className="space-y-1.5">
                        <p className="px-2 text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                          {group.heading}
                        </p>
                        {group.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setGuidesOpen(false)}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-emerald-50/70 transition-colors group"
                          >
                            <item.icon className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                            <span className="text-[13.5px] font-medium text-stone-700 group-hover:text-emerald-700 transition-colors">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setAuthMode('register');
                  setAuthModalOpen(true);
                }}
                className="px-5 py-2 text-[15px] font-semibold rounded-full bg-stone-900 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200"
              >
                Trải nghiệm ngay
              </button>

              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-full border border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50 transition"
                  title={currentLang.label}
                >
                  <Image
                    src={currentLang.flag}
                    alt={currentLang.label}
                    width={18}
                    height={18}
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                  />
                  <span className="uppercase">{currentLang.code}</span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 rounded-xl bg-white border border-stone-200 shadow-xl py-1 z-50 min-w-[160px] animate-in fade-in duration-150">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition ${
                          currentLang.code === lang.code
                            ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                            : 'text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.label}
                          width={18}
                          height={18}
                          className="w-4 h-4 rounded-full object-cover shrink-0"
                        />
                        <span className="flex-1 text-left">{lang.label}</span>
                        {currentLang.code === lang.code && (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Lang */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 p-1.5 text-stone-600 hover:text-stone-800"
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                />
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 rounded-xl bg-white border border-stone-200 shadow-xl py-1 z-50 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium ${
                        currentLang.code === lang.code
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-stone-600'
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={18}
                        height={18}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-1 rounded-lg text-stone-700 hover:bg-stone-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto px-5 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
            {/* Accordion Solutions */}
            <div className="border-b border-stone-100 pb-2">
              <button
                type="button"
                onClick={() =>
                  setMobileAccordion(mobileAccordion === 'solutions' ? null : 'solutions')
                }
                className="w-full flex items-center justify-between py-2 text-[15px] font-semibold text-stone-900"
              >
                <span>Giải pháp</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    mobileAccordion === 'solutions' ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {mobileAccordion === 'solutions' && (
                <div className="pl-2 pr-1 py-2 space-y-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-1.5 text-sm font-medium text-stone-700 hover:text-emerald-700"
                    >
                      <item.icon className="w-4 h-4 text-emerald-600" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion Guides */}
            <div className="border-b border-stone-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileAccordion(mobileAccordion === 'guides' ? null : 'guides')}
                className="w-full flex items-center justify-between py-2 text-[15px] font-semibold text-stone-900"
              >
                <span>Hướng dẫn</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    mobileAccordion === 'guides' ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {mobileAccordion === 'guides' && (
                <div className="pl-2 pr-1 py-2 space-y-3">
                  {guideGroups.map((grp) => (
                    <div key={grp.heading}>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                        {grp.heading}
                      </div>
                      <div className="space-y-1 pl-1">
                        {grp.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-sm text-stone-700 hover:text-emerald-700"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-2 border-b border-stone-100 pb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[15px] font-semibold text-stone-800 hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthMode('register');
                  setAuthModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-stone-900 text-white text-center font-semibold text-sm hover:bg-emerald-600 transition"
              >
                Trải nghiệm ngay
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
