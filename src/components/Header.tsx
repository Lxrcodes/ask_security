'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  { name: 'Property Security', href: '/services', items: [
    { name: 'Key Holding & Alarm Response', href: '/services/key-holding-alarm-response' },
    { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
    { name: 'Vacant Property Security', href: '/services/vacant-property-security' },
  ]},
  { name: 'Business Security', href: '/services', items: [
    { name: 'Corporate Security', href: '/services/corporate-security' },
    { name: 'Retail Security', href: '/services/retail-security' },
    { name: 'Construction Site Security', href: '/services/construction-site-security' },
    { name: 'Hotel Security', href: '/services/hotel-security' },
    { name: 'Industrial Security', href: '/services/industrial-security' },
  ]},
  { name: 'Event Security', href: '/services', items: [
    { name: 'Event Security', href: '/services/event-security' },
    { name: 'Door Supervisors', href: '/services/door-supervisors' },
    { name: 'Film TV & Theatre Security', href: '/services/film-tv-theatre-security' },
    { name: 'Traffic Marshals', href: '/services/traffic-marshals' },
  ]},
  { name: 'Personal Protection', href: '/services', items: [
    { name: 'Close Protection Security', href: '/services/close-protection-security' },
    { name: 'Concierge Security', href: '/services/concierge-security' },
  ]},
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center text-gray-700 hover:text-black font-medium"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border p-6"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-semibold text-black mb-2">{category.name}</h3>
                        <ul className="space-y-1">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-gray-600 hover:text-[#FF8C00] text-sm block py-1"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href="/services"
                      className="text-[#FF8C00] font-medium hover:underline"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            <div className="space-y-4">
              {services.map((category) => (
                <div key={category.name} className="border-b pb-4">
                  <h3 className="font-semibold text-black mb-2">{category.name}</h3>
                  <ul className="space-y-2 pl-4">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-[#FF8C00] text-sm block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/about"
                className="block text-gray-700 hover:text-black font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/coverage-areas"
                className="block text-gray-700 hover:text-black font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coverage Areas
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-black font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+447476058050"
                  className="btn-primary w-full text-center"
                >
                  Call 24/7: +44 7476 058050
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center"
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
