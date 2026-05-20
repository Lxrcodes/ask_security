'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  'Key Holding & Alarm Response', 'Mobile Patrols', 'Vacant Property Security',
  'Corporate Security', 'Retail Security', 'Construction Site Security',
  'Event Security', 'Door Supervisors', 'Close Protection Security',
  'Hotel Security', 'Film TV & Theatre Security', 'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch {
      setError('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 font-display uppercase tracking-wide">
              Contact ASK Security
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              Free security consultation and no-obligation quote. Available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 font-display uppercase tracking-wide">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent</h3>
                  <p className="text-green-700 text-sm mb-3">
                    We will respond within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setError(''); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="text-[#e8821e] font-medium hover:underline text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                        placeholder="+44 7000 000000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                      <select
                        id="service" name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none bg-white text-sm"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => <option key={service} value={service}>{service}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none resize-none text-sm"
                      placeholder="Tell us about your security requirements..."
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    By submitting, you agree to our <Link href="/privacy-policy" className="text-[#e8821e] hover:underline">Privacy Policy</Link>.
                  </p>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors w-full md:w-auto disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-ink text-white rounded-lg p-4">
                <h3 className="font-bold mb-2 font-display uppercase tracking-wide">24/7 Emergency</h3>
                <a href="tel:+447476058050" className="text-[#e8821e] text-lg font-bold hover:underline">
                  +44 7476 058050
                </a>
              </div>

              <div className="bg-paper-2 rounded-lg p-4">
                <h3 className="font-bold text-black mb-2 text-sm">Contact Details</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-[#e8821e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+447476058050" className="hover:text-[#e8821e]">+44 7476 058050</a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-[#e8821e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@asksecurity.co.uk" className="hover:text-[#e8821e]">contact@asksecurity.co.uk</a>
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61576186452339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e8821e] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/asksecurityltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e8821e] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-paper-2 rounded-lg p-4">
                <h3 className="font-bold text-black mb-2 text-sm">Response Times</h3>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li className="flex justify-between"><span>Business hours:</span><span className="font-medium">2 hours</span></li>
                  <li className="flex justify-between"><span>Overnight:</span><span className="font-medium">4 hours</span></li>
                  <li className="flex justify-between"><span>Emergency:</span><span className="font-medium">Immediate</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
