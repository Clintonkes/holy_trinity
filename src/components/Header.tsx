'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Departments', href: '/departments' },
  { label: 'Our Team', href: '/team' },
  { label: 'Patient Info', href: '/patient-info' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body?.classList?.add('overflow-hidden');
    } else {
      document.body?.classList?.remove('overflow-hidden');
    }
    return () => document.body?.classList?.remove('overflow-hidden');
  }, [menuOpen]);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-[#0B1F3A] border-b border-[rgba(13,115,119,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-[rgba(248,250,251,0.65)]">
            <span className="flex items-center gap-1.5">
              <Icon name="MapPinIcon" size={12} />
              No 1 Eziowelle Street, Abakaliki, Ebonyi State
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="ClockIcon" size={12} />
              Emergency: 24/7 Available
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-[rgba(248,250,251,0.65)]">
            <a href="tel:08032763199" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Icon name="PhoneIcon" size={12} />
              08032763199
            </a>
            <a href="tel:08059231822" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
              <Icon name="PhoneIcon" size={12} />
              08059231822
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'shadow-xl' : ''
        } glass-nav`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#0D7377] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="9" y="2" width="4" height="18" rx="1.5" fill="white"/>
                  <rect x="2" y="9" width="18" height="4" rx="1.5" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-semibold text-[#F8FAFB] text-base leading-tight tracking-tight">
                  Holy Trinity Hospital
                </div>
                <div className="text-[10px] text-[#C9A84C] font-medium tracking-widest uppercase">
                  & Maternity Complex
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="px-3.5 py-2 text-sm font-medium text-[rgba(248,250,251,0.75)] hover:text-[#C9A84C] underline-teal transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden xl:block">
              <Link href="/appointments" className="btn-gold text-sm py-2.5 px-5">
                <Icon name="CalendarDaysIcon" size={16} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] text-[#F8FAFB] transition-colors hover:bg-[rgba(255,255,255,0.08)]"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 xl:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0B1F3A]/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-[#0B1F3A] border-l border-[rgba(13,115,119,0.3)] shadow-2xl transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <div className="mb-6 pb-6 border-b border-[rgba(255,255,255,0.1)]">
              <div className="text-xs text-[rgba(248,250,251,0.5)] uppercase tracking-widest mb-3">Emergency</div>
              <a href="tel:08032763199" className="flex items-center gap-2 text-[#C9A84C] font-semibold text-lg">
                <Icon name="PhoneIcon" size={18} />
                08032763199
              </a>
            </div>
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-lg text-[rgba(248,250,251,0.8)] font-medium hover:bg-[rgba(255,255,255,0.06)] hover:text-[#C9A84C] transition-colors"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/appointments"
              onClick={() => setMenuOpen(false)}
              className="btn-gold justify-center mt-6"
            >
              <Icon name="CalendarDaysIcon" size={16} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}