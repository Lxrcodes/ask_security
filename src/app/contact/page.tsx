'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  'Key Holding & Alarm Response',
  'Mobile Patrols',
  'Vacant Property Security',
  'Corporate Security',
  'Retail Security',
  'Construction Site Security',
  'Event Security',
  'Door Supervisors',
  'Close Protection Security',
  'Hotel Security',
  'Film TV & Theatre Security',
  'Traffic Marshals',
  'Concierge Security',
  'Industrial Security',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    source: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact ASK Security
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch for a free security consultation and no-obligation quote.
              Our team is available 24/7 for emergency security needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting ASK Security. We will respond to your inquiry within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '', source: '' });
                    }}
                    className="text-[#FF8C00] font-medium hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none"
                        placeholder="+44 7000 000000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your security requirements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Please select</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Referral</option>
                      <option value="social">Social Media</option>
                      <option value="previous">Previous Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex items-start">
                    <p className="text-sm text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-[#FF8C00] hover:underline">Privacy Policy</Link>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4">Office Address</h3>
                <address className="text-gray-700 not-italic">
                  3rd Floor<br />
                  86-90 Paul Street<br />
                  London<br />
                  EC2A 4NE
                </address>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#FF8C00] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+447476058050" className="hover:text-[#FF8C00]">
                      +44 7476 058050
                    </a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#FF8C00] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@asksecurity.co.uk" className="hover:text-[#FF8C00]">
                      contact@asksecurity.co.uk
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Available 24/7</h3>
                    <p className="text-gray-400 text-sm">Emergency Response</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Need immediate security? Call now for 24/7 emergency response. Our team is ready to deploy.
                </p>
                <a
                  href="tel:+447476058050"
                  className="btn-primary w-full justify-center"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4">Response Times</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between">
                    <span>Business hours:</span>
                    <span className="font-medium">Within 2 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Overnight:</span>
                    <span className="font-medium">Within 4 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Emergency calls:</span>
                    <span className="font-medium">Immediate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F5F5F5] py-12">
        <div className="container-custom">
          <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Map Location</p>
              <p className="text-sm text-gray-500">3rd Floor, 86-90 Paul Street, London EC2A 4NE</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
