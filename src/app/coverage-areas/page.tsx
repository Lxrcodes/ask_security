import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Guard Coverage Areas London & Home Counties',
  description: 'ASK Security provides professional 24/7 security guard services across Central London, North London, Hertfordshire and Bedfordshire. Based in Radlett — fast response across the region.',
};

const coverageAreas = [
  {
    region: 'Central London',
    href: '/coverage-areas/central-london',
    areas: ['City of London', 'Westminster', 'Kensington & Chelsea', 'Camden', 'Islington'],
  },
  {
    region: 'North London',
    href: '/coverage-areas/north-london',
    areas: ['Harrow', 'Enfield', 'Finchley', 'Northwood', 'Barnet'],
  },
  {
    region: 'Hertfordshire',
    href: '/coverage-areas/hertfordshire',
    areas: ['Watford', 'St Albans', 'Hemel Hempstead', 'Stevenage', 'Radlett'],
  },
  {
    region: 'Bedfordshire',
    href: '/coverage-areas/bedfordshire',
    areas: ['Bedford', 'Luton', 'Dunstable', 'Leighton Buzzard'],
  },
];

export default function CoverageAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#e8821e]">Coverage Areas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 font-display uppercase tracking-wide">Security Guard Services London & Home Counties</h1>
            <p className="text-base md:text-xl text-gray-300">
              SIA-licensed security guards available 24/7 across Central London, North London, Hertfordshire and Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 font-display uppercase tracking-wide">Areas We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {coverageAreas.map((area) => (
              <Link
                key={area.region}
                href={area.href}
                className="group bg-paper-2 rounded-lg p-3 md:p-4 hover:shadow-md hover:border-[#e8821e] border border-transparent transition-all block"
              >
                <h3 className="font-bold text-black mb-2 text-sm md:text-base group-hover:text-[#e8821e] transition-colors">{area.region}</h3>
                <ul className="space-y-1 mb-3">
                  {area.areas.map((place) => (
                    <li key={place} className="text-gray-700 text-xs md:text-sm">{place}</li>
                  ))}
                </ul>
                <span className="text-[#e8821e] text-xs font-semibold uppercase tracking-wider">View Area →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-8 md:py-16 bg-paper-2">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center font-display uppercase tracking-wide">Response Times</h2>
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-ink text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#e8821e] mb-1">15-20</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">Central London</div>
            </div>
            <div className="bg-ink text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#e8821e] mb-1">20-30</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">North London</div>
            </div>
            <div className="bg-ink text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#e8821e] mb-1">30-45</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">Herts &amp; Beds</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-ink text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 font-display uppercase tracking-wide">Need Security in Your Area?</h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Free consultation and no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#e8821e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c96c12] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
