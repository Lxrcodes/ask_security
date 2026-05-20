import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Residential Security Services | Home & Estate Security',
  description: 'Professional residential security services across Hertfordshire, Bedfordshire, North London, and Central London. SIA-licensed guards for homes, estates, and gated communities.',
};

export default function ResidentialSecurityPage() {
  return (
    <ServicePageTemplate
      title="Residential Security"
      heroDescription="Professional security services for homes, residential estates, and gated communities across Hertfordshire, Bedfordshire, North London, and Central London. Protecting your family and property with discreet, expert security."
      description="Your home should be your safest place. Our residential security service provides tailored protection for private homes, luxury residences, gated estates, and residential developments. SIA-licensed guards deliver discreet, professional security that protects your family and property without disrupting your lifestyle. Whether you need a permanent security presence, regular patrols, or enhanced protection for specific periods, we provide a solution that fits your needs."
      benefits={[
        'Discreet security tailored to residential environments',
        'Trained in protecting families and high-value homes',
        'Perimeter and access control for estates and gated communities',
        'Mobile patrols for residential developments',
        'Key holding and alarm response for your home',
        'Enhanced protection during high-risk periods',
      ]}
      whenYouNeed={[
        'You want professional security for your home or estate',
        'Your property or neighbourhood has experienced crime',
        'You require security during extended absences',
        'Your lifestyle or profile requires ongoing residential security',
      ]}
      approach={[
        'We begin with a thorough assessment of your property, identifying access points, vulnerabilities, and your specific security requirements. We develop a tailored plan that integrates with your daily routine and household needs.',
        'Our residential guards are selected for their discretion, professionalism, and ability to work within a home environment. They respect the privacy of your family while maintaining a vigilant security presence.',
        'Coverage can include perimeter patrols, gatehouse and access control, overnight static guarding, and liaison with your alarm and CCTV systems. We adapt our service to meet your requirements at any given time.',
        'Regular communication with you or your household manager ensures we remain aware of your schedule, expected visitors, and any specific concerns. We provide detailed reports on all security activity.',
      ]}
      faqs={[
        {
          question: 'Can you provide security while we are away from home?',
          answer: 'Yes, we offer comprehensive residential security during extended absences, including 24/7 static guarding, regular patrols, key holding, and alarm response to ensure your property is protected at all times.',
        },
        {
          question: 'How discreet are your residential security guards?',
          answer: 'Our guards understand the importance of discretion in residential settings. They dress and behave appropriately for the environment, maintaining vigilant protection without creating an obtrusive security presence.',
        },
        {
          question: 'Can you secure gated communities and residential estates?',
          answer: 'Absolutely. We provide gatehouse security, access control, and regular patrols for gated communities and residential estates. We work with residents management companies to integrate with existing security systems.',
        },
        {
          question: 'Do you offer family-friendly security?',
          answer: 'Yes, our residential guards are experienced in working within family environments. They are personable and approachable with children and family members while maintaining professional security standards.',
        },
        {
          question: 'Can your guards manage deliveries and contractors at my property?',
          answer: 'Absolutely. Our guards can manage all visitors to your property, verify contractor credentials, accept deliveries, and maintain a comprehensive log of all access — giving you full visibility and control.',
        },
      ]}
      relatedServices={[
        { name: 'Key Holding & Alarm Response', href: '/services/key-holding-alarm-response' },
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
      ]}
      heroImage="/images/Residential-Security-Guards.jpg"
    />
  );
}
