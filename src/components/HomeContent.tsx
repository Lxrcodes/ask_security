'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(target); // SSR-safe: renders final value

  useEffect(() => {
    if (!isInView) return;
    // Parent is opacity-0 when this fires, so the reset to 0 is invisible
    let current = 0;
    setCount(0);
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const serviceNames = [
  'Corporate Security', 'Residential Security', 'Car Park Security',
  'Close Protection', 'Mobile Patrols', 'Key Holding',
  'Private Investigation', 'Hotel Security', 'Construction Security',
  'Film & TV Security', 'Traffic Marshals', 'Concierge Security',
];

const services = [
  {
    title: 'Property',
    description: 'Key holding, mobile patrols, vacant property and residential protection.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Business',
    description: 'Corporate, construction site, hotel and retail security solutions.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Car Park',
    description: 'Car park security management, access control and vehicle monitoring.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-1 14H9a2 2 0 01-2-2v-3m0 0h10a2 2 0 002-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v7z" />
      </svg>
    ),
  },
  {
    title: 'Personal',
    description: 'Close protection, concierge security and private investigation.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const certifications = [
  { name: 'SIA Qualified', image: '/images/sia.jpg' },
  { name: 'ACT Certified', image: '/images/ACTAwarenessTrainedLogo.jpg' },
  { name: 'Safe Contractor', image: '/images/safeContractorApprovedLogo.jpg' },
  { name: 'Fully Trained', image: '/images/fullyTrainedLogo.jpg' },
];

const differenceItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'SIA Licensed',
    description: 'Every guard carries a valid SIA licence and has passed enhanced DBS checks. No exceptions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Available',
    description: "Round-the-clock cover with rapid emergency deployment. We're always on call when you need us.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Fully Insured',
    description: '£10M public liability insurance as standard. BS7984 compliant key holding and response services.',
  },
];

const enquiryServices = [
  'Key Holding & Alarm Response', 'Mobile Patrols', 'Corporate Security',
  'Retail Security', 'Construction Site Security', 'Close Protection',
  'Hotel Security', 'Film & TV Security', 'Car Park Security', 'Other',
];

export default function HomeContent() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setFormError('Failed to send. Please call us directly on +44 7476 058050.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-ink overflow-hidden pt-12 pb-20 md:pt-24 md:pb-28">
        <Image
          src="/images/car-castle.jpg"
          alt="Professional security guard services in London"
          fill
          className="object-cover md:object-[center_90%] saturate-[0.55] brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-[#e8821e]/20 border border-[#e8821e]/40 text-[#e8821e] px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#e8821e] animate-pulse" />
            SIA Licensed · 20+ Years · Fully Insured
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 max-w-3xl"
          >
            Professional<br />
            Security<br />
            <span className="relative inline-block">
              Services
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#e8821e] rounded-full" aria-hidden="true" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg"
          >
            SIA-licensed security guard services across London, Hertfordshire and Bedfordshire. 24/7 cover from ex-police and ex-military professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+447476058050"
              className="bg-[#e8821e] text-white px-8 py-4 rounded font-semibold hover:bg-[#c96c12] transition-all inline-flex items-center justify-center gap-2 text-base md:text-lg hover:shadow-lg hover:shadow-[#e8821e]/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 24/7
            </a>
            <Link
              href="/contact"
              className="text-white/60 hover:text-white font-medium self-center flex items-center gap-1.5 transition-colors text-base md:text-lg"
            >
              Get Free Quote <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Diagonal bleed into dark marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden h-12">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,48 1440,0 1440,48" fill="#14110e" />
          </svg>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-ink py-3 overflow-hidden border-b border-white/5">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
        >
          {[...serviceNames, ...serviceNames].map((name, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap px-8 text-white/60 font-semibold text-sm uppercase tracking-widest"
            >
              {name}
              <span className="ml-8 text-[#e8821e]/50 text-base">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-white border-b border-line">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-3 py-3.5 text-sm divide-x divide-line">
            <a
              href="https://share.google/S9P2zelsMbILA9cFA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 first:pl-0 hover:opacity-70 transition-opacity"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#e8821e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-black">5.0</span>
              <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-gray-500">9 Google reviews</span>
            </a>
            {[
              'SIA Qualified',
              'Ex-Police & Ex-Military',
              '20+ Years Experience',
            ].map(item => (
              <div key={item} className="flex items-center gap-1.5 px-4 sm:px-6">
                <svg className="w-3.5 h-3.5 text-[#e8821e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── white */}
      <section className="bg-white pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-wide uppercase">Our Security Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group relative block bg-white border border-gray-150 rounded-xl p-6 hover:shadow-xl hover:border-transparent hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full"
                >
                  <span className="absolute left-0 inset-y-0 w-[3px] bg-[#e8821e] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-xl" aria-hidden="true" />
                  <div className="w-11 h-11 bg-[#e8821e]/10 group-hover:bg-[#e8821e] rounded-xl flex items-center justify-center text-[#e8821e] group-hover:text-white transition-all duration-300 mb-5 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-black text-lg tracking-wide mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-[#e8821e] text-xs font-semibold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-[#e8821e] font-semibold hover:gap-4 transition-all duration-300 text-sm md:text-base">
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── COVERAGE AREAS ── light */}
      <section className="bg-paper-2 py-10 md:py-16 border-y border-line">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7"
          >
            <div>
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Where We Work</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-wide uppercase">Coverage Areas</h2>
            </div>
            <Link href="/coverage-areas" className="text-[#e8821e] text-sm font-semibold hover:underline shrink-0">
              View all coverage areas →
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { region: 'Central London', href: '/coverage-areas/central-london', time: '15–20 min', areas: 'City · Westminster · Kensington' },
              { region: 'North London',   href: '/coverage-areas/north-london',   time: '20–30 min', areas: 'Harrow · Enfield · Barnet' },
              { region: 'Hertfordshire',  href: '/coverage-areas/hertfordshire',  time: '30–45 min', areas: 'Watford · St Albans · Radlett' },
              { region: 'Bedfordshire',   href: '/coverage-areas/bedfordshire',   time: '30–45 min', areas: 'Bedford · Luton · Dunstable' },
            ].map((area, i) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={area.href}
                  className="group bg-white rounded-xl p-4 md:p-5 flex flex-col gap-1 border border-line hover:border-[#e8821e] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="font-display font-bold text-black text-sm md:text-base group-hover:text-[#e8821e] transition-colors">{area.region}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{area.areas}</div>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-[#e8821e] text-xs font-semibold">{area.time}</span>
                    <span className="text-gray-400 text-xs group-hover:text-[#e8821e] transition-colors">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── dark */}
      <section className="bg-ink py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Why Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">The ASK Security Difference</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differenceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-ink-2 border border-line-d rounded-xl p-8 hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#e8821e]/15 rounded-xl flex items-center justify-center text-[#e8821e] mb-6 group-hover:bg-[#e8821e] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS + TESTIMONIAL ── white, bleeds into dark stats */}
      <div className="bg-white relative">

        {/* Certifications */}
        <section className="py-12 md:py-16 bg-paper-2 border-y border-line">
          <div className="container-custom">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-xs uppercase tracking-widest text-muted mb-10 font-semibold"
            >
              Industry Certified &amp; Fully Accredited
            </motion.p>
            <div className="flex justify-center items-center gap-10 md:gap-20 flex-wrap">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-50 group-hover:opacity-100">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain" />
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-gray-400 font-semibold">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pt-14 md:pt-16 pb-28 md:pb-36">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Client Feedback</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-wide uppercase">Trusted by London Businesses</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  quote: "ASK SECURITY provided outstanding security services. Their professionalism and expertise were evident from the start, offering personalised security solutions tailored to our needs.",
                  name: 'Sandra Kalaydzhieva',
                  initials: 'SK',
                },
                {
                  quote: "Very reliable service — always felt extremely safe. All the operatives were very polite and very reassuring.",
                  name: 'David Fogel',
                  initials: 'DF',
                },
                {
                  quote: "They did security for me at short notice and Asen did an amazing job. Professional and straight to the point. I'll definitely use them again on my next project.",
                  name: 'Del Lucas',
                  initials: 'DL',
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="border border-line rounded-2xl p-7 shadow-sm flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5 text-[#e8821e]">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Google G icon */}
                    <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic flex-grow mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-line">
                    <div className="w-9 h-9 rounded-full bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#e8821e] text-xs font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">{t.name}</div>
                      <div className="text-muted text-xs">Verified Google Review</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <a
                href="https://share.google/S9P2zelsMbILA9cFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors border border-line rounded-full px-5 py-2.5 hover:border-gray-400"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Read all our reviews on Google
              </a>
            </motion.div>
          </div>
        </section>

        {/* Diagonal bleed into dark stats */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 pointer-events-none">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,64 1440,0 1440,64" fill="#14110e" />
          </svg>
        </div>
      </div>

      {/* ── STATS + CTA ── dark */}
      <div className="bg-ink text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <section className="pt-20 md:pt-28 pb-12 md:pb-16 relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { label: 'Years Experience', value: 20, suffix: '+', static: false },
                { label: 'Clients Protected', value: 500, suffix: '+', static: false },
                { label: 'Hour Response', value: null, display: '24/7', static: true },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="py-8 md:py-0"
                >
                  <div className="text-6xl md:text-7xl font-bold text-[#e8821e] mb-3 tabular-nums">
                    {stat.static
                      ? stat.display
                      : <Counter target={stat.value!} suffix={stat.suffix} />
                    }
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-custom"><hr className="border-white/10" /></div>

        <section className="py-16 md:py-24 relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start">

              {/* Left: copy + contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-4 block">Get Started</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide uppercase">Get a Free Quote</h2>
                <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
                  Free security consultation with no obligation. We respond within 2 hours during business hours, 24/7 for emergencies.
                </p>
                <div className="space-y-4">
                  <a href="tel:+447476058050" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#e8821e]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8821e]/30 transition-colors">
                      <svg className="w-4 h-4 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Call 24/7</div>
                      <div className="text-white font-bold text-lg group-hover:text-[#e8821e] transition-colors">+44 7476 058050</div>
                    </div>
                  </a>
                  <a href="mailto:contact@asksecurity.co.uk" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#e8821e]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8821e]/30 transition-colors">
                      <svg className="w-4 h-4 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                      <div className="text-white text-sm group-hover:text-[#e8821e] transition-colors">contact@asksecurity.co.uk</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/40"
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-black mb-2">Message Sent</h3>
                    <p className="text-gray-500 text-sm">We&apos;ll be in touch within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-display font-bold text-black text-lg uppercase tracking-wide mb-5">Request a Callback</h3>
                    {formError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">{formError}</div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hq-name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Name <span className="text-red-500">*</span></label>
                        <input type="text" id="hq-name" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="hq-phone" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone</label>
                        <input type="tel" id="hq-phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                          placeholder="+44 7000 000000" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hq-email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="hq-email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none text-sm"
                          placeholder="your@email.com" />
                      </div>
                      <div>
                        <label htmlFor="hq-service" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Service</label>
                        <select id="hq-service" name="service" value={formData.service} onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none bg-white text-sm">
                          <option value="">Select a service</option>
                          {enquiryServices.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="hq-message" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message <span className="text-red-500">*</span></label>
                      <textarea id="hq-message" name="message" required rows={3} value={formData.message} onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e8821e] focus:border-transparent outline-none resize-none text-sm"
                        placeholder="Tell us about your security requirements..." />
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="w-full bg-[#e8821e] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#c96c12] transition-all disabled:opacity-50 hover:shadow-lg hover:shadow-[#e8821e]/25 hover:-translate-y-0.5">
                      {isSubmitting ? 'Sending...' : 'Get Free Quote →'}
                    </button>
                    <p className="text-xs text-gray-400 text-center">Free consultation · No obligation · Response within 2 hours</p>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
