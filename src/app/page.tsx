import Link from 'next/link';
import Image from 'next/image';

// Service card icons as simple SVG components
const ShieldIcon = () => (
  <svg className="w-16 h-16 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-16 h-16 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-16 h-16 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-16 h-16 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const services = [
  {
    title: 'Property Security',
    description: 'Vacant Property, Key Holding & Alarm Response, Mobile Patrols',
    icon: <ShieldIcon />,
    href: '/services/key-holding-alarm-response',
  },
  {
    title: 'Business Security',
    description: 'Corporate, Retail, Hotel, Construction Site',
    icon: <BuildingIcon />,
    href: '/services/corporate-security',
  },
  {
    title: 'Event Security',
    description: 'Events, Film/TV, Traffic Marshals, Door Supervisors',
    icon: <CalendarIcon />,
    href: '/services/event-security',
  },
  {
    title: 'Personal Protection',
    description: 'Close Protection, Concierge Security',
    icon: <UserIcon />,
    href: '/services/close-protection-security',
  },
];

const whyChooseUs = [
  {
    title: 'SIA-Licensed & DBS Checked Guards',
    description: 'All security personnel are fully licensed by the Security Industry Authority and have passed enhanced DBS background checks.',
    icon: (
      <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '24/7 Emergency Response',
    description: 'Our team of ex-police and ex-military professionals are available around the clock for immediate security deployment.',
    icon: (
      <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Insured to £10M & BS7984 Compliant',
    description: 'Comprehensive public liability insurance and full compliance with British Standard requirements for key holding services.',
    icon: (
      <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const certifications = [
  { name: 'SIA Approved', description: 'Security Industry Authority Licensed', image: '/images/siaApprovedLogo.jpg' },
  { name: 'ACT Certified', description: 'Action Counters Terrorism', image: '/images/ACTAwarenessTrainedLogo.jpg' },
  { name: 'Safe Contractor', description: 'Safe Contractor Approved', image: '/images/safeContractorApprovedLogo.jpg' },
  { name: 'Fully Trained', description: 'Fully Trained & Insured', image: '/images/fullyTrainedLogo.jpg' },
  { name: 'Areas Covered', description: 'London & South East', image: '/images/areasCoveredLogo.jpg' },
];

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Reach out via phone or our online form to discuss your security needs.',
  },
  {
    number: '02',
    title: 'Free Assessment',
    description: 'We conduct a comprehensive security assessment within 24 hours.',
  },
  {
    number: '03',
    title: 'Custom Quote',
    description: 'Receive a detailed, no-obligation quote tailored to your requirements.',
  },
  {
    number: '04',
    title: 'Guards Deployed',
    description: 'Professional security personnel deployed within 48 hours.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <Image
          src="/images/Residential-Security-Guards.jpg"
          alt="Professional security guard services in London"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF8C00]/20 text-[#FF8C00] px-4 py-2 rounded-full text-sm font-medium mb-6">
              SIA Licensed • 20+ Years • Fully Insured
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Security Guard Services in London & South East
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              24/7 protection from SIA-licensed, ex-police and ex-military security professionals.
              Trusted by businesses across London since 2004.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447476058050"
                className="bg-[#FF8C00] text-white text-xl py-5 px-8 rounded font-semibold hover:bg-[#E67E00] transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 24/7: +44 7476 058050
              </a>
              <Link href="/contact" className="bg-white text-black text-xl py-5 px-8 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions for properties, businesses, events, and personal protection across London and South East England.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-[#F5F5F5] rounded-lg p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose ASK Security</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With 20+ years of experience protecting London businesses, we deliver professional security you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Fully Trained, Licensed & Certified</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications and standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-24 mb-3">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-sm text-black">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How We Protect Your Property</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with ASK Security is simple. Here&apos;s our streamlined process to secure your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm h-full">
                  <div className="text-4xl font-bold text-[#FF8C00] mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Trusted by Businesses Across London</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stats */}
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF8C00] mb-2">20+</div>
              <div className="text-lg text-gray-600">Years Protecting London</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF8C00] mb-2">500+</div>
              <div className="text-lg text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF8C00] mb-2">24/7</div>
              <div className="text-lg text-gray-600">Emergency Response</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="flex text-[#FF8C00] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;ASK Security has provided excellent service for our construction sites. Their guards are professional, punctual, and have prevented numerous incidents. Highly recommended.&rdquo;
              </p>
              <p className="font-semibold text-black">Construction Company Director</p>
              <p className="text-gray-500 text-sm">London</p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="flex text-[#FF8C00] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;We&apos;ve used ASK Security for multiple corporate events. Their team is always well-presented, discreet, and handles any situation with professionalism. A trusted partner.&rdquo;
              </p>
              <p className="font-semibold text-black">Event Manager</p>
              <p className="text-gray-500 text-sm">Central London</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free security assessment and no-obligation quote.
            Our team is available 24/7 for emergency security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447476058050"
              className="bg-[#FF8C00] text-white text-xl py-5 px-8 rounded font-semibold hover:bg-[#E67E00] transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +44 7476 058050
            </a>
            <Link href="/contact" className="bg-white text-black text-xl py-5 px-8 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Get a Free Quote
            </Link>
          </div>
          <p className="text-gray-400 mt-6">Available 24/7 for emergency security needs</p>
        </div>
      </section>
    </>
  );
}
