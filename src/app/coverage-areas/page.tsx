import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coverage Areas',
  description: 'ASK Security provides professional security services across London & South East England. Covering all London boroughs, Surrey, Kent, Essex & Hertfordshire.',
};

const londonAreas = [
  {
    region: 'Central London',
    areas: ['City of London', 'Westminster', 'Kensington & Chelsea', 'Camden', 'Islington'],
  },
  {
    region: 'North London',
    areas: ['Barnet', 'Enfield', 'Haringey', 'Waltham Forest'],
  },
  {
    region: 'South London',
    areas: ['Southwark', 'Lambeth', 'Lewisham', 'Greenwich', 'Bromley', 'Croydon', 'Merton', 'Sutton', 'Wandsworth'],
  },
  {
    region: 'East London',
    areas: ['Tower Hamlets', 'Hackney', 'Newham', 'Barking & Dagenham', 'Redbridge', 'Havering'],
  },
  {
    region: 'West London',
    areas: ['Hammersmith & Fulham', 'Brent', 'Ealing', 'Hounslow', 'Hillingdon', 'Harrow', 'Richmond'],
  },
];

const southEastAreas = [
  {
    county: 'Surrey',
    areas: ['Guildford', 'Woking', 'Epsom', 'Reigate', 'Dorking', 'Staines', 'Weybridge', 'Esher'],
  },
  {
    county: 'Kent',
    areas: ['Dartford', 'Bromley', 'Sevenoaks', 'Tonbridge', 'Maidstone', 'Rochester', 'Gravesend'],
  },
  {
    county: 'Essex',
    areas: ['Romford', 'Ilford', 'Brentwood', 'Chelmsford', 'Basildon', 'Southend', 'Grays'],
  },
  {
    county: 'Hertfordshire',
    areas: ['Watford', 'St Albans', 'Hemel Hempstead', 'Stevenage', 'Welwyn Garden City', 'Barnet'],
  },
];

export default function CoverageAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Coverage Areas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Coverage Areas
            </h1>
            <p className="text-xl text-gray-300">
              ASK Security provides professional security services across London and the South East of England.
              Our team is strategically positioned to deliver rapid response across our coverage area.
            </p>
          </div>
        </div>
      </section>

      {/* London Coverage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">London Boroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {londonAreas.map((region) => (
              <div key={region.region} className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <svg className="w-5 h-5 text-[#FF8C00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {region.region}
                </h3>
                <ul className="space-y-2">
                  {region.areas.map((area) => (
                    <li key={area} className="text-gray-700 flex items-center">
                      <svg className="w-4 h-4 text-[#FF8C00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* South East Coverage */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">South East England</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {southEastAreas.map((county) => (
              <div key={county.county} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-black mb-4 flex items-center">
                  <svg className="w-5 h-5 text-[#FF8C00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {county.county}
                </h3>
                <ul className="space-y-2">
                  {county.areas.map((area) => (
                    <li key={area} className="text-gray-700 text-sm flex items-center">
                      <svg className="w-3 h-3 text-[#FF8C00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Response Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black text-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#FF8C00] mb-2">15-20</div>
                <div className="text-sm text-gray-400 mb-1">minutes</div>
                <div className="font-medium">Central London</div>
              </div>
              <div className="bg-black text-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#FF8C00] mb-2">20-30</div>
                <div className="text-sm text-gray-400 mb-1">minutes</div>
                <div className="font-medium">Greater London</div>
              </div>
              <div className="bg-black text-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#FF8C00] mb-2">30-45</div>
                <div className="text-sm text-gray-400 mb-1">minutes</div>
                <div className="font-medium">South East Areas</div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Response times are typical for alarm response and emergency callouts. Actual times may vary based on traffic and location.
            </p>
          </div>
        </div>
      </section>

      {/* Not in Our Area? */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Not in Our Area?</h2>
            <p className="text-gray-600 mb-8">
              If your location isn&apos;t listed above, please contact us anyway. We may still be able to provide services in your area, or can recommend trusted partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+447476058050" className="btn-primary py-4 px-8">
                Call: +44 7476 058050
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Security in Your Area?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and no-obligation quote for your location.
          </p>
          <Link href="/contact" className="btn-primary py-4 px-8">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
