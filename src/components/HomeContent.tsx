'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 2000 / steps);
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
  { name: 'SIA Approved', image: '/images/siaApprovedLogo.jpg' },
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

export default function HomeContent() {
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
            24/7 protection from ex-police and ex-military professionals across Hertfordshire, Bedfordshire, and London.
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
                <p className="text-muted-d text-sm leading-relaxed">{item.description}</p>
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
                  quote: "ASK Security has provided excellent service across all our sites. Their guards are professional, punctual, and proactive. We have full confidence in the protection they provide.",
                  name: 'Construction Company Director',
                  context: 'Multi-site client, 4 years',
                },
                {
                  quote: "Reliable, discreet, and exactly what we needed for our residential block. The key holding service alone has saved us several call-outs. Can't fault them.",
                  name: 'Property Management Director',
                  context: 'Residential portfolio, London',
                },
                {
                  quote: "We've used ASK Security for three consecutive annual events now. Their team is calm under pressure and keeps everything running smoothly. Wouldn't use anyone else.",
                  name: 'Events & Venue Manager',
                  context: 'Annual events contract',
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
                  <div className="flex gap-0.5 text-[#e8821e] mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic flex-grow mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-line">
                    <div className="w-9 h-9 rounded-full bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">{t.name}</div>
                      <div className="text-muted text-xs">{t.context}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                { label: 'Years Experience', value: 20, suffix: '+' },
                { label: 'Clients Protected', value: 500, suffix: '+' },
                { label: 'Hour Response', value: 24, suffix: '/7' },
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
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-d text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-custom"><hr className="border-white/10" /></div>

        <section className="py-16 md:py-24 relative">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-4 block">Get Started</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-wide uppercase">Ready to Secure What Matters?</h2>
              <p className="text-muted-d mb-10 text-base md:text-lg max-w-xl mx-auto">
                Free consultation · No obligation quote · 24/7 available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+447476058050"
                  className="bg-[#e8821e] text-white py-4 px-10 rounded font-semibold hover:bg-[#c96c12] transition-all inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#e8821e]/25 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 text-white py-4 px-10 rounded font-semibold hover:border-white hover:bg-white hover:text-black transition-all hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
