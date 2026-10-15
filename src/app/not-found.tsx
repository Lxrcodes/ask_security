import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: false },
};

const links = [
  { label: 'Security Services', href: '/services' },
  { label: 'Coverage Areas', href: '/coverage-areas' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-ink flex items-center">
      <div className="container-custom py-20 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-8xl md:text-9xl font-black text-[#e8821e]/20 font-display leading-none mb-2">
            404
          </div>
          <h1 className="font-display text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 mb-10 text-sm md:text-base">
            The page you were looking for doesn&apos;t exist. It may have been moved or removed.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-white/20 text-gray-300 hover:border-[#e8821e] hover:text-white px-5 py-2.5 rounded text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-[#e8821e] text-white py-3 px-8 rounded font-semibold hover:bg-[#c96c12] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8821e]/25"
            >
              Back to Homepage
            </Link>
            <a
              href="tel:+447476058050"
              className="border-2 border-white/30 text-white py-3 px-8 rounded font-semibold hover:border-white hover:bg-white hover:text-black transition-all hover:-translate-y-0.5"
            >
              Call 24/7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
