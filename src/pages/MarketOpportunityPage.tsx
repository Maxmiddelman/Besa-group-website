import { Flame, Sun, Globe, ArrowRight } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { GRID_IMAGE, SOLAR_IMAGE, SUBSTATION_IMAGE_2 } from '@/data/content';

type MarketOpportunityPageProps = {
  onNavigate: (page: PageId) => void;
};

const SECTIONS = [
  {
    icon: Flame,
    number: '01',
    title: 'From baseload dependency to flexibility',
    text: 'Kosovo\u2019s electricity system has historically relied heavily on lignite-fired generation. This creates a system where flexibility, reserve capacity and fast-response assets can become increasingly valuable as renewable energy is added.',
    image: SUBSTATION_IMAGE_2,
  dark: false,
  reversed: false,
  },
  {
    icon: Sun,
    number: '02',
    title: 'Solar growth creates storage demand',
    text: 'New solar PV capacity can reduce daytime electricity prices and increase the need for storage during periods of high generation. Battery systems can shift energy, reduce curtailment risk and create value from intraday and day-ahead price spreads.',
    image: SOLAR_IMAGE,
    dark: true,
    reversed: true,
  },
  {
    icon: Globe,
    number: '03',
    title: 'Regional market integration',
    text: 'Kosovo is connected to regional electricity flows and is influenced by market dynamics in neighboring countries. As market coupling, cross-border trading and balancing frameworks develop further, storage can become a strategic asset class.',
    image: GRID_IMAGE,
    dark: false,
    reversed: false,
  },
];

export function MarketOpportunityPage({ onNavigate }: MarketOpportunityPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Market Opportunity
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Kosovo is entering a new phase of
              <br />
              <span className="font-medium">energy market development</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              As renewable capacity grows across Southeast Europe, electricity markets are
              becoming more volatile and more dependent on flexible assets. Kosovo has the
              opportunity to use battery storage to support system reliability, integrate
              solar power and participate in emerging market mechanisms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three sections */}
      {SECTIONS.map((section, i) => {
        const bgClass = section.dark ? 'bg-navy-950 text-white' : 'bg-cream';
        const textColor = section.dark ? 'text-navy-200' : 'text-graphite-500';
        const headingColor = section.dark ? 'text-white' : 'text-navy-900';
        const eyebrowColor = section.dark ? 'text-gold-400' : 'text-gold-600';
        const iconBg = section.dark ? 'bg-white/8 text-gold-400' : 'bg-navy-900 text-gold-400';
        const numberColor = section.dark ? 'text-gold-400/30' : 'text-navy-900/8';

        return (
          <section key={section.number} className={`${bgClass} overflow-hidden`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Content */}
                <Reveal
                  className={`py-20 lg:py-32 ${section.reversed ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}
                >
                  <div className="relative">
                    <span
                      className={`absolute -top-12 -left-2 font-display text-7xl font-light ${numberColor} select-none`}
                    >
                      {section.number}
                    </span>
                    <div className="relative">
                      <div className={`flex items-center gap-3 mb-6`}>
                        <span className={`h-px w-8 bg-gold-400`} />
                        <span className={`text-xs font-medium uppercase tracking-[0.2em] ${eyebrowColor}`}>
                          Section {section.number}
                        </span>
                      </div>
                      <div className={`flex h-14 w-14 items-center justify-center ${iconBg} mb-8`}>
                        <section.icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                      <h2 className={`font-display text-display-md font-medium ${headingColor} text-balance`}>
                        {section.title}
                      </h2>
                      <p className={`mt-6 text-lg leading-relaxed ${textColor}`}>
                        {section.text}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Image */}
                <Reveal
                  delay={2}
                  className={`relative h-[300px] lg:h-[500px] overflow-hidden ${section.reversed ? 'lg:order-1' : ''}`}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {section.dark && <div className="absolute inset-0 bg-navy-950/20" />}
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-400">
              Our Commitment
            </span>
            <h2 className="mt-6 font-display font-light text-white text-display-lg text-balance">
              Storage projects that are
              <br />
              <span className="font-medium">commercially viable and technically robust</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
              BESA Group aims to develop storage projects that are commercially viable,
              technically robust and aligned with Kosovo\u2019s long-term energy transition.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-10 inline-flex items-center gap-2 bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-gold-300"
            >
              Discuss Partnership Opportunities
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
