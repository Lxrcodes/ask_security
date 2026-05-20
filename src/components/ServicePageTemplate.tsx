'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  heroDescription: string;
  benefits: string[];
  whenYouNeed: string[];
  approach: string[];
  faqs: FAQ[];
  relatedServices: { name: string; href: string }[];
  pricingFrom?: string;
  heroImage?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicePageTemplate({
  title,
  description,
  heroDescription,
  benefits,
  whenYouNeed,
  approach,
  faqs,
  relatedServices,
  heroImage,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-white py-16 md:py-28 overflow-hidden">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover saturate-[0.55] brightness-[0.85]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />
        )}
        <div className="container-custom relative z-10">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">{title}</li>
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
              className="font-display text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-xl text-gray-300 mb-8"
            >
              {heroDescription}
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
                Get Quote
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-4 uppercase tracking-wide">About This Service</h2>
            <p className="text-gray-700 leading-relaxed md:text-lg">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
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
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Benefits</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black uppercase tracking-wide">Key Benefits</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Ideal For</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-black mb-6 uppercase tracking-wide">When You Need This</h2>
              <ul className="space-y-4">
                {whenYouNeed.map((scenario, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#e8821e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base">{scenario}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="bg-ink text-white rounded-2xl p-8 md:p-10"
            >
              <div className="w-12 h-12 bg-[#e8821e]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#e8821e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 uppercase tracking-wide">Need Immediate Security?</h3>
              <p className="text-muted-d text-sm mb-6">24/7 emergency deployment available across our coverage areas.</p>
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

      {/* Our Approach */}
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
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">How We Work</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black uppercase tracking-wide">Our Approach</h2>
          </motion.div>
          <div className="space-y-6 max-w-4xl">
            {approach.map((paragraph, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#e8821e] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-1">{paragraph}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-ink text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
              />
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Pricing</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">Competitive Pricing</h2>
                  <p className="text-muted-d text-sm">Tailored quotes based on your specific requirements. No hidden fees.</p>
                </div>
                <div className="text-center md:text-right">
                  <Link
                    href="/contact"
                    className="bg-[#e8821e] text-white py-4 px-8 rounded font-semibold hover:bg-[#c96c12] transition-all inline-block hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8821e]/25"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black uppercase tracking-wide">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-white rounded-xl p-5 group cursor-pointer"
              >
                <summary className="font-semibold text-black flex items-center justify-between text-sm md:text-base list-none">
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

      {/* Related Services */}
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
            <span className="text-[#e8821e] font-semibold text-xs uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-black uppercase tracking-wide">Related Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-paper-2 rounded-xl p-6 hover:bg-ink transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="font-bold text-black text-sm md:text-base group-hover:text-[#e8821e] transition-colors mb-1">
                    {service.name}
                  </h3>
                  <span className="text-[#e8821e] text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">Ready to discuss your needs?</h2>
            <p className="text-muted-d mb-10 max-w-lg mx-auto">Free consultation and no-obligation quote within 24 hours.</p>
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
