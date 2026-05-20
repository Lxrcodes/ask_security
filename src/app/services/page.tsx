import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Services',
  description: 'Comprehensive security guard services across Hertfordshire, Bedfordshire, North London, and Central London. Property, business, event, and personal protection from SIA-licensed professionals.',
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
      {
        name: 'Residential Security',
        description: 'Professional security for homes, estates, and gated communities.',
        href: '/services/residential-security',
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
      {
        name: 'Private Investigation',
        description: 'Discreet, lawful investigation services for individuals and businesses.',
        href: '/services/private-investigation',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">Services</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 font-display uppercase tracking-wide">
              Our Security Services
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-8">
              Comprehensive security solutions for properties, businesses, events, and personal protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors text-center">
                Call 24/7
              </a>
              <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors text-center">
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
          className={`py-8 md:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-paper-2'}`}
        >
          <div className="container-custom">
            <div className="mb-6 md:mb-10">
              <h2 className="text-xl md:text-3xl font-bold text-black mb-2 font-display uppercase tracking-wide">{category.title}</h2>
              <p className="text-sm md:text-lg text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {category.services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="bg-white border border-line rounded-lg p-4 md:p-6 hover:shadow-lg hover:border-[#e8821e] transition-all group"
                >
                  <h3 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2 group-hover:text-[#e8821e] transition-colors font-display">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 md:mb-4">{service.description}</p>
                  <span className="text-[#e8821e] font-medium inline-flex items-center text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 bg-ink text-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center font-display uppercase tracking-wide">Why Choose ASK Security</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'SIA Licensed', description: 'Fully licensed & DBS checked' },
              { title: '24/7 Available', description: 'Emergency response' },
              { title: '20+ Years', description: 'Protecting London' },
              { title: 'Fully Insured', description: '£10M liability' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-base md:text-lg text-[#e8821e] mb-1 font-display">{item.title}</h3>
                <p className="text-muted-d text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-paper-2">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-3 font-display uppercase tracking-wide">
            Need a Custom Security Solution?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-ink text-white py-3 px-6 rounded font-semibold hover:bg-ink-2 transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
