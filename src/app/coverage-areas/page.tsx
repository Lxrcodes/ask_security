import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coverage Areas',
  description: 'ASK Security provides professional security services across Hertfordshire, Bedfordshire, North London, and Central London.',
};

const coverageAreas = [
  {
    region: 'Central London',
    areas: ['City of London', 'Westminster', 'Kensington & Chelsea', 'Camden', 'Islington'],
  },
  {
    region: 'North London',
    areas: ['Harrow', 'Enfield', 'Finchley', 'Northwood', 'Barnet'],
  },
  {
    region: 'Hertfordshire',
    areas: ['Watford', 'St Albans', 'Hemel Hempstead', 'Stevenage', 'Radlett'],
  },
  {
    region: 'Bedfordshire',
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
            <h1 className="text-2xl md:text-4xl font-bold mb-3 font-display uppercase tracking-wide">Our Coverage Areas</h1>
            <p className="text-base md:text-xl text-gray-300">
              Professional security services across Hertfordshire, Bedfordshire, North London, and Central London.
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
              <div key={area.region} className="bg-paper-2 rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">{area.region}</h3>
                <ul className="space-y-1">
                  {area.areas.map((place) => (
                    <li key={place} className="text-gray-700 text-xs md:text-sm">{place}</li>
                  ))}
                </ul>
              </div>
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
              <div className="text-xs text-muted-d">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">Central London</div>
            </div>
            <div className="bg-ink text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#e8821e] mb-1">20-30</div>
              <div className="text-xs text-muted-d">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">North London</div>
            </div>
            <div className="bg-ink text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#e8821e] mb-1">30-45</div>
              <div className="text-xs text-muted-d">min</div>
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
