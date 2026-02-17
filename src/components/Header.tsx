'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="ASK Security London"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-black font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black font-medium">
              About Us
            </Link>
            <Link href="/coverage-areas" className="text-gray-700 hover:text-black font-medium">
              Coverage Areas
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+447476058050"
              className="text-black font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              24/7: +44 7476 058050
            </a>
            <Link href="/contact" className="bg-[#FF8C00] text-white px-6 py-3 rounded font-semibold hover:bg-[#E67E00] transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button & Phone */}
          <div className="flex lg:hidden items-center space-x-4">
            <a
              href="tel:+447476058050"
              className="p-2 text-[#FF8C00]"
              aria-label="Call us"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                href="/services"
                className="block text-gray-700 hover:text-[#FF8C00] font-medium py-3 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-[#FF8C00] font-medium py-3 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/coverage-areas"
                className="block text-gray-700 hover:text-[#FF8C00] font-medium py-3 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coverage Areas
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-[#FF8C00] font-medium py-3 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+447476058050"
                  className="block w-full text-center bg-[#FF8C00] text-white py-4 rounded font-semibold"
                >
                  Call 24/7: +44 7476 058050
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center border-2 border-black text-black py-4 rounded font-semibold hover:bg-black hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
