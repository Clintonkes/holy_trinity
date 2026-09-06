import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Departments', href: '/departments' },
  { label: 'Our Team', href: '/team' },
  { label: 'Patient Information', href: '/patient-info' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book Appointment', href: '/appointments' },
  { label: 'Contact Us', href: '/contact' },
];

const departments = [
  'General Medicine',
  'Maternity & Obstetrics',
  'Paediatrics',
  'Surgery',
  'Laboratory Services',
  'Pharmacy',
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-[rgba(248,250,251,0.75)]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#0D7377] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="9" y="2" width="4" height="18" rx="1.5" fill="white"/>
                  <rect x="2" y="9" width="18" height="4" rx="1.5" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-semibold text-[#F8FAFB] text-sm leading-tight">
                  Holy Trinity Hospital
                </div>
                <div className="text-[10px] text-[#C9A84C] font-medium tracking-widest uppercase">
                  & Maternity Complex
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-[rgba(248,250,251,0.6)]">
              Delivering compassionate, expert healthcare to the people of Abakaliki and Ebonyi State since our founding.
            </p>
            <div className="flex items-center gap-2">
              <span className="pulse-dot"></span>
              <span className="text-xs text-green-400 font-medium">Emergency Services: 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F8FAFB] font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm text-[rgba(248,250,251,0.6)] hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0D7377] flex-shrink-0"></span>
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-[#F8FAFB] font-semibold text-sm uppercase tracking-widest mb-5">Departments</h4>
            <ul className="space-y-2.5">
              {departments?.map((dept) => (
                <li key={dept}>
                  <Link
                    href="/departments"
                    className="text-sm text-[rgba(248,250,251,0.6)] hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0D7377] flex-shrink-0"></span>
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F8FAFB] font-semibold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={16} className="text-[#0D7377] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[rgba(248,250,251,0.6)] leading-relaxed">
                  No 1 Eziowelle Street, Box 880,<br />Abakaliki, Ebonyi State
                </span>
              </li>
              <li>
                <a href="tel:08032763199" className="flex items-center gap-3 text-sm text-[rgba(248,250,251,0.6)] hover:text-[#C9A84C] transition-colors">
                  <Icon name="PhoneIcon" size={16} className="text-[#0D7377] flex-shrink-0" />
                  08032763199
                </a>
              </li>
              <li>
                <a href="tel:08059231822" className="flex items-center gap-3 text-sm text-[rgba(248,250,251,0.6)] hover:text-[#C9A84C] transition-colors">
                  <Icon name="PhoneIcon" size={16} className="text-[#0D7377] flex-shrink-0" />
                  08059231822
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[rgba(248,250,251,0.4)]">
            © {new Date()?.getFullYear()} Holy Trinity Hospital & Maternity Complex. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[rgba(248,250,251,0.4)]">
            <span>Medical Director:</span>
            <span className="text-[rgba(248,250,251,0.6)] font-medium ml-1">Dr. Onuorah Chester J.E. MBBS, MNMA, MAGPMP, KSM, JP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}