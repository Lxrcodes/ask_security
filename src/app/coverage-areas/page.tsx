import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coverage Areas',
  description: 'ASK Security provides professional security services across London & South East England. Covering all London boroughs, Surrey, Kent, Essex & Hertfordshire.',
};

const londonAreas = [
  { region: 'Central London', areas: ['City of London', 'Westminster', 'Kensington & Chelsea', 'Camden', 'Islington'] },
  { region: 'North London', areas: ['Barnet', 'Enfield', 'Haringey', 'Waltham Forest'] },
  { region: 'South London', areas: ['Southwark', 'Lambeth', 'Lewisham', 'Greenwich', 'Bromley', 'Croydon'] },
  { region: 'East London', areas: ['Tower Hamlets', 'Hackney', 'Newham', 'Barking & Dagenham', 'Redbridge'] },
  { region: 'West London', areas: ['Hammersmith & Fulham', 'Brent', 'Ealing', 'Hounslow', 'Hillingdon'] },
];

const southEastAreas = [
  { county: 'Surrey', areas: ['Guildford', 'Woking', 'Epsom', 'Reigate', 'Staines'] },
  { county: 'Kent', areas: ['Dartford', 'Sevenoaks', 'Maidstone', 'Rochester'] },
  { county: 'Essex', areas: ['Romford', 'Brentwood', 'Chelmsford', 'Basildon'] },
  { county: 'Hertfordshire', areas: ['Watford', 'St Albans', 'Hemel Hempstead', 'Stevenage'] },
];

export default function CoverageAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-10 md:py-20">
        <div className="container-custom">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><span>/</span></li>
              <li className="text-[#FF8C00]">Coverage Areas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Our Coverage Areas</h1>
            <p className="text-base md:text-xl text-gray-300">
              Professional security services across London and South East England.
            </p>
          </div>
        </div>
      </section>

      {/* London Coverage */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6">London Boroughs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {londonAreas.map((region) => (
              <div key={region.region} className="bg-[#F5F5F5] rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">{region.region}</h3>
                <ul className="space-y-1">
                  {region.areas.map((area) => (
                    <li key={area} className="text-gray-700 text-xs md:text-sm">{area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* South East Coverage */}
      <section className="py-8 md:py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6">South East England</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {southEastAreas.map((county) => (
              <div key={county.county} className="bg-white rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-black mb-2 text-sm md:text-base">{county.county}</h3>
                <ul className="space-y-1">
                  {county.areas.map((area) => (
                    <li key={area} className="text-gray-700 text-xs md:text-sm">{area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 text-center">Response Times</h2>
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-black text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#FF8C00] mb-1">15-20</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">Central London</div>
            </div>
            <div className="bg-black text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#FF8C00] mb-1">20-30</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">Greater London</div>
            </div>
            <div className="bg-black text-white rounded-lg p-3 md:p-6 text-center">
              <div className="text-xl md:text-4xl font-bold text-[#FF8C00] mb-1">30-45</div>
              <div className="text-xs text-gray-400">min</div>
              <div className="font-medium text-xs md:text-sm mt-1">South East</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3">Need Security in Your Area?</h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Free consultation and no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+447476058050" className="bg-[#FF8C00] text-white py-3 px-6 rounded font-semibold hover:bg-[#E67E00] transition-colors">
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
