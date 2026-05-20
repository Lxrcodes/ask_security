import Link from 'next/link';

const services = [
  { name: 'Key Holding & Alarm Response', href: '/services/key-holding-alarm-response' },
  { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
  { name: 'Vacant Property Security', href: '/services/vacant-property-security' },
  { name: 'Corporate Security', href: '/services/corporate-security' },
  { name: 'Residential Security', href: '/services/residential-security' },
  { name: 'Event Security', href: '/services/event-security' },
  { name: 'Close Protection', href: '/services/close-protection-security' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Coverage Areas', href: '/coverage-areas' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Pricing', href: '/pricing' },
];

const serviceAreas = [
  'Central London',
  'North London',
  'Hertfordshire',
  'Bedfordshire',
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">ASK</span>
              <span className="text-2xl font-bold text-[#e8821e] ml-1">Security</span>
            </div>
            <p className="text-muted-d mb-4">
              Professional 24/7 security guard services across Hertfordshire, Bedfordshire, North London, and Central London.
              SIA-licensed, fully insured, and trusted by businesses since 2004.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576186452339"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-d hover:text-[#e8821e]"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-d hover:text-[#e8821e] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-d hover:text-[#e8821e] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-muted-d">
              <p>
                <strong className="text-white">Phone:</strong><br />
                <a href="tel:+447476058050" className="hover:text-[#e8821e]">
                  +44 7476 058050
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:contact@asksecurity.co.uk" className="hover:text-[#e8821e]">
                  contact@asksecurity.co.uk
                </a>
              </p>
              <p className="text-[#e8821e] font-semibold">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-line-d">
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-ink-2 text-muted-d px-3 py-1 rounded text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-line-d">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-d text-sm">
            <div className="mb-4 md:mb-0">
              <p>Ask Prime Security Ltd | Company #16436890</p>
              <p>&copy; {new Date().getFullYear()} ASK Security London. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-[#e8821e]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#e8821e]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
