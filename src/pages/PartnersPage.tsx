import { Building2, Handshake, Landmark, Globe, ArrowRight } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { PARTNERS, SOLAR_IMAGE_2 } from '@/data/content';

type PartnersPageProps = {
  onNavigate: (page: PageId) => void;
};

export function PartnersPage({ onNavigate }: PartnersPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Partners
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Built on collaboration
              <br />
              <span className="font-medium">with the right institutions</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              We work with public institutions, financing partners, and technology
              providers to ensure our projects meet the highest standards of compliance,
              bankability, and performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partner categories */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: 'Public Sector',
                text: 'Regulatory bodies, system operators, and government institutions that shape Kosovo\'s energy framework.',
              },
              {
                icon: Building2,
                title: 'Financial Partners',
                text: 'International development finance institutions and commercial lenders that provide project capital.',
              },
              {
                icon: Globe,
                title: 'Technology & Industry',
                text: 'Equipment suppliers, EPC contractors, and technology providers that enable project delivery.',
              },
            ].map((cat, i) => (
              <Reveal
                key={cat.title}
                delay={(i + 1) as 1 | 2 | 3}
                className="bg-cream p-8 lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-gold-400">
                  <cat.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-navy-900">
                  {cat.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-graphite-500">
                  {cat.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional partners grid */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Key Relationships"
              title="Institutions we work with"
              description="Our projects are developed in coordination with the institutions that govern, finance, and enable Kosovo's energy system."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal
                key={partner.name}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="group bg-offwhite p-8 lg:p-10 transition-colors duration-500 hover:bg-cream"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-navy-900/12 text-navy-700 transition-colors duration-300 group-hover:border-gold-400 group-hover:text-gold-500">
                    <Handshake className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-navy-900">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-sm text-graphite-400">{partner.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image band with overlay */}
      <section className="relative h-[300px] lg:h-[400px] overflow-hidden">
        <img
          src={SOLAR_IMAGE_2}
          alt="Solar farm aerial view"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display font-light text-white text-display-md text-balance max-w-2xl">
                Strong partnerships build <span className="font-medium text-gold-300">bankable projects</span>
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-600">
              Join us
            </span>
            <h2 className="mt-6 font-display font-light text-navy-900 text-display-md text-balance">
              Become a <span className="font-medium">partner</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-500">
              We welcome conversations with investors, technology providers, EPC
              contractors, and offtakers who share our commitment to building Kosovo's
              energy infrastructure.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
