import Link from 'next/link';
import Image from 'next/image';

const services = [
  { title: 'Property', description: 'Key Holding, Patrols, Vacant Property', href: '/services' },
  { title: 'Business', description: 'Corporate, Retail, Construction', href: '/services' },
  { title: 'Events', description: 'Events, Door Staff, Film & TV', href: '/services' },
  { title: 'Personal', description: 'Close Protection, Concierge', href: '/services' },
];

const certifications = [
  { name: 'SIA Approved', image: '/images/siaApprovedLogo.jpg' },
  { name: 'ACT Certified', image: '/images/ACTAwarenessTrainedLogo.jpg' },
  { name: 'Safe Contractor', image: '/images/safeContractorApprovedLogo.jpg' },
  { name: 'Fully Trained', image: '/images/fullyTrainedLogo.jpg' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 md:py-24">
        <Image
          src="/images/Residential-Security-Guards.jpg"
          alt="Professional security guard services in London"
          fill
          className="object-cover object-center md:object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#FF8C00]/20 text-[#FF8C00] px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4">
              SIA Licensed • 20+ Years • Fully Insured
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Professional Security Services in London
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-6">
              24/7 protection from ex-police and ex-military professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+447476058050"
                className="bg-[#FF8C00] text-white text-base md:text-lg py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 24/7
              </a>
              <Link href="/contact" className="bg-white text-black text-base md:text-lg py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Compact Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-[#F5F5F5] rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-base md:text-lg font-bold text-black mb-1">{service.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/services" className="text-[#FF8C00] font-semibold hover:underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 md:py-10 bg-black text-white">
        <div className="container-custom">
          <div className="flex justify-around items-center">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#FF8C00]">20+</div>
              <div className="text-xs md:text-sm text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#FF8C00]">500+</div>
              <div className="text-xs md:text-sm text-gray-400">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#FF8C00]">24/7</div>
              <div className="text-xs md:text-sm text-gray-400">Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Compact */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 md:p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">SIA Licensed</h3>
                <p className="text-sm text-gray-600">All guards fully licensed & DBS checked</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">24/7 Available</h3>
                <p className="text-sm text-gray-600">Emergency deployment any time</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Fully Insured</h3>
                <p className="text-sm text-gray-600">£10M liability, BS7984 compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Compact Row */}
      <section className="py-6 md:py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-lg md:text-2xl font-bold text-black mb-4 text-center">Certified & Accredited</h2>
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative w-16 h-16 md:w-24 md:h-24">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Single on Mobile */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 md:p-8 text-center">
              <div className="flex justify-center text-[#FF8C00] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;ASK Security has provided excellent service for our sites. Their guards are professional and punctual. Highly recommended.&rdquo;
              </p>
              <p className="font-semibold text-black">Construction Company Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Compact */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Free consultation • No obligation quote • 24/7 available
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+447476058050"
              className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
