'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Coverage Areas', href: '/coverage-areas' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">

            {/* Logo + Wordmark */}
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={scrolled ? '/images/ask-logo-black.svg' : '/images/ask-logo-white.svg'}
                alt="ASK Security"
                className="h-14 w-auto flex-shrink-0 transition-opacity duration-300"
              />
              <div className="block leading-none">
                <div className={`text-[1.1rem] font-black tracking-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
                  ASK SECURITY
                </div>
                <div className={`text-[0.6rem] font-semibold tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                  Protection you can trust
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-5">
              <a
                href="tel:+447476058050"
                className={`font-semibold flex items-center transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
              >
                <svg className="w-4 h-4 mr-2 text-[#e8821e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                24/7: +44 7476 058050
              </a>
              <Link
                href="/contact"
                className={`px-5 py-2.5 rounded font-semibold text-sm border transition-all duration-300 ${
                  scrolled
                    ? 'border-gray-300 text-black hover:border-black hover:bg-black hover:text-white'
                    : 'border-white/40 text-white hover:bg-white/10'
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile: hamburger only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="w-7 h-7"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="w-7 h-7"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — full-screen overlay, sits below header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col ${
              scrolled ? 'bg-white' : 'bg-[#14110e]'
            }`}
          >
            <div className="container-custom flex flex-col h-full py-6 overflow-y-auto">

              {/* Nav Links */}
              <nav className="flex-grow" aria-label="Mobile navigation">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.06 + i * 0.07 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group relative flex items-center justify-between py-5 border-b font-display text-2xl font-bold uppercase tracking-wide transition-colors active:text-[#e8821e] ${
                        scrolled
                          ? 'border-gray-100 text-black hover:text-[#e8821e]'
                          : 'border-white/10 text-white hover:text-[#e8821e]'
                      }`}
                    >
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-[#e8821e] transition-all duration-300 group-hover:h-8 group-active:h-8"
                        style={{ height: 0 }}
                        aria-hidden="true"
                      />
                      <span className="pl-5">{label}</span>
                      <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.34 }}
                className="pt-8 space-y-3"
              >
                <a
                  href="tel:+447476058050"
                  className="flex items-center justify-center gap-2 w-full bg-[#e8821e] text-white py-4 rounded font-semibold text-base hover:bg-[#c96c12] active:bg-[#c96c12] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 24/7
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-center py-3.5 rounded font-medium text-sm transition-colors ${
                    scrolled
                      ? 'border border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700'
                      : 'border border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
                  }`}
                >
                  Get a Free Quote
                </Link>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.44 }}
                className="pt-6 pb-2"
              >
                <div className={`flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-widest ${
                  scrolled ? 'text-gray-400' : 'text-white/30'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8821e] flex-shrink-0" aria-hidden="true" />
                  SIA Licensed · 20+ Years · Fully Insured
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
