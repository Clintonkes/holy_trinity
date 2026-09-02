'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body?.classList?.add('mobile-menu-open');
    } else {
      document.body?.classList?.remove('mobile-menu-open');
    }
    return () => document.body?.classList?.remove('mobile-menu-open');
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-500 ${
              scrolled ? 'glass-nav shadow-lg py-3' : 'py-2'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <AppLogo
                size={36}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-semibold text-lg tracking-tight text-foreground">
                Stel LLC
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground underline-grow transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/quote" className="btn-primary text-sm py-2.5 px-5">
                Get a Quote
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-card shadow-2xl transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              className="btn-primary justify-center mt-6"
            >
              Get a Free Quote
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}