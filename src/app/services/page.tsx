import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Services',
  description: 'Comprehensive security guard services in London & South East. Property security, business security, event security, and personal protection from SIA-licensed professionals.',
};

const serviceCategories = [
  {
    title: 'Property Security',
    description: 'Protect your property with professional security solutions',
    services: [
      {
        name: 'Key Holding & Alarm Response',
        description: '24/7 key holding and rapid alarm response services for your property.',
        href: '/services/key-holding-alarm-response',
      },
      {
        name: 'Mobile Patrols',
        description: 'Regular mobile security patrols to deter crime and ensure safety.',
        href: '/services/mobile-patrols',
      },
      {
        name: 'Vacant Property Security',
        description: 'Comprehensive protection for unoccupied properties and buildings.',
        href: '/services/vacant-property-security',
      },
    ],
  },
  {
    title: 'Business Security',
    description: 'Professional security solutions for businesses of all sizes',
    services: [
      {
        name: 'Corporate Security',
        description: 'Tailored security for offices, headquarters, and corporate environments.',
        href: '/services/corporate-security',
      },
      {
        name: 'Retail Security',
        description: 'Loss prevention and customer safety for retail establishments.',
        href: '/services/retail-security',
      },
      {
        name: 'Construction Site Security',
        description: 'Protect valuable equipment and materials on construction sites.',
        href: '/services/construction-site-security',
      },
      {
        name: 'Hotel Security',
        description: 'Discreet security services for hotels and hospitality venues.',
        href: '/services/hotel-security',
      },
      {
        name: 'Industrial Security',
        description: 'Security solutions for warehouses, factories, and industrial facilities.',
        href: '/services/industrial-security',
      },
    ],
  },
  {
    title: 'Event Security',
    description: 'Expert security for events of all sizes and types',
    services: [
      {
        name: 'Event Security',
        description: 'Comprehensive security planning and personnel for any event.',
        href: '/services/event-security',
      },
      {
        name: 'Door Supervisors',
        description: 'Professional door supervision for venues and establishments.',
        href: '/services/door-supervisors',
      },
      {
        name: 'Film TV & Theatre Security',
        description: 'Specialist security for film sets, TV productions, and theatres.',
        href: '/services/film-tv-theatre-security',
      },
      {
        name: 'Traffic Marshals',
        description: 'Professional traffic management for events and construction sites.',
        href: '/services/traffic-marshals',
      },
    ],
  },
  {
    title: 'Personal Protection',
    description: 'Close protection and personal security services',
    services: [
      {
        name: 'Close Protection Security',
        description: 'Professional bodyguard services for individuals and executives.',
        href: '/services/close-protection-security',
      },
      {
        name: 'Concierge Security',
        description: 'Front-of-house security with exceptional customer service.',
        href: '/services/concierge-security',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Services</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Security Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security solutions for properties, businesses, events, and personal protection.
              All services delivered by SIA-licensed, ex-police and ex-military professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+447476058050" className="btn-primary py-4 px-6">
                Call 24/7: +44 7476 058050
              </a>
              <Link href="/contact" className="btn-secondary bg-white text-black border-white hover:bg-transparent hover:text-white">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.title}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}`}
        >
          <div className="container-custom">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#FF8C00] transition-all group"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF8C00] transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FF8C00] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-[#FF8C00] font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose ASK Security</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide professional security services backed by decades of experience and industry-leading standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'SIA Licensed', description: 'All guards fully licensed and DBS checked' },
              { title: '24/7 Available', description: 'Round-the-clock emergency response' },
              { title: '20+ Years', description: 'Decades of experience protecting London' },
              { title: 'Fully Insured', description: '£10M public liability insurance' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Need a Custom Security Solution?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements. We offer tailored security packages for any situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447476058050" className="btn-primary py-4 px-8">
              Call: +44 7476 058050
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
