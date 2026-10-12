'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  name: string;
  href: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LocationPageTemplateProps {
  region: string;
  intro: string;
  overview: string;
  areas: string[];
  responseTime: string;
  services: Service[];
  highlights: string[];
  faqs: FAQ[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LocationPageTemplate({
  region, intro, overview, areas, responseTime, services, highlights, faqs,
}: LocationPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/coverage-areas" className="hover:text-white transition-colors">Coverage Areas</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">{region}</li>
            </ol>
          </motion.nav>
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-4 block"
            >
              ASK Security
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide"
            >
              Security Guard Services {region}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-xl text-gray-300 mb-8"
            >
              {intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+447476058050"
                className="bg-[#e8821e] text-white py-3 px-8 rounded font-semibold hover:bg-[#c96c12] transition-all hover:shadow-lg hover:shadow-[#e8821e]/25 hover:-translate-y-0.5 text-center"
              >
                Call 24/7
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/40 text-white py-3 px-8 rounded font-semibold hover:bg-white hover:text-black transition-all text-center hover:-translate-y-0.5"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Overview</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Security Services in {region}
            </h2>
            <p className="text-gray-700 leading-relaxed md:text-lg">{overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 bg-paper-2">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">What We Offer</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
              Services Available in {region}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={service.href}
                  className="group bg-white rounded-xl p-6 block hover:shadow-lg border border-line hover:border-[#e8821e] transition-all h-full"
                >
                  <h3 className="font-display font-bold text-gray-900 text-base md:text-lg mb-2 group-hover:text-[#e8821e] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                  <span className="text-[#e8821e] text-xs font-semibold uppercase tracking-wider">Learn More →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + Response Time */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Locations</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Areas We Cover in {region}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, i) => (
                  <motion.div
                    key={area}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="bg-ink rounded-2xl p-8 md:p-10"
            >
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Response</span>
              <h3 className="font-display font-bold text-white text-xl mb-3 uppercase tracking-wide">Emergency Response Time</h3>
              <div className="text-5xl md:text-6xl font-bold text-[#e8821e] mb-2">{responseTime}</div>
              <p className="text-gray-300 text-sm mb-6">Average response for {region}</p>
              <a
                href="tel:+447476058050"
                className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-all block text-center hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8821e]/25"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 md:py-20 bg-paper-2">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Why Choose Us</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
              Why Choose ASK Security in {region}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-paper-2 rounded-xl p-5 group cursor-pointer"
              >
                <summary className="font-semibold text-gray-900 flex items-center justify-between text-sm md:text-base list-none">
                  {faq.question}
                  <svg className="w-5 h-5 text-[#e8821e] flex-shrink-0 ml-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ink text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="container-custom text-center relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-4 block">Get Started</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
              Need Security in {region}?
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto">Free consultation and no-obligation quote within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447476058050"
                className="bg-[#e8821e] text-white py-4 px-10 rounded font-semibold hover:bg-[#c96c12] transition-all hover:shadow-lg hover:shadow-[#e8821e]/25 hover:-translate-y-0.5"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white py-4 px-10 rounded font-semibold hover:border-white hover:bg-white hover:text-black transition-all hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
