import { MapPin, Sun, Battery, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SOLAR_IMAGE } from '@/data/content';

type ProjectsPageProps = {
  onNavigate: (page: PageId) => void;
};

const PROJECT_HIGHLIGHTS = [
  'Existing PV generation base',
  'Available grid connection capacity',
  'Potential for BESS expansion',
  'Suitable for day-ahead, imbalance and ancillary service strategies',
  'Opportunity for phased development',
];

const PROJECT_INFO = [
  { label: 'Location', value: 'Near Ferizaj, Kosovo' },
  { label: 'Existing solar PV', value: 'Approximately 3 MWp' },
  { label: 'Available grid connection', value: 'Approximately 6 MW' },
  { label: 'Expansion concept', value: 'Additional solar PV combined with utility-scale battery energy storage' },
];

const DEVELOPMENT_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Existing PV and grid assessment',
    text: 'Evaluation of the existing solar generation base, available grid capacity and interconnection conditions.',
  },
  {
    phase: 'Phase 2',
    title: 'Battery storage feasibility and market modelling',
    text: 'Technical feasibility studies for BESS integration, including market revenue modelling and dispatch scenario analysis.',
  },
  {
    phase: 'Phase 3',
    title: 'Permitting, grid alignment and financing',
    text: 'Securing permits, aligning grid connection arrangements and structuring project financing with partners.',
  },
  {
    phase: 'Phase 4',
    title: 'Construction, commissioning and operation',
    text: 'EPC delivery, commissioning and long-term operation with optimization technology for market participation.',
  },
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Projects
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Projects with real
              <br />
              <span className="font-medium">grid relevance</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              BESA Group focuses on energy infrastructure projects where renewable
              generation, storage and grid access come together. Our development pipeline
              is centered around Kosovo, with an initial focus on the Ferizaj region.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured project */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Featured Project
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Project image */}
            <Reveal delay={1} className="lg:col-span-7 relative h-[300px] lg:h-[500px] overflow-hidden group">
              <img
                src={SOLAR_IMAGE}
                alt="Solar PV field near Ferizaj, Kosovo"
                className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-navy-950/80 backdrop-blur-sm px-4 py-2">
                <Sun className="h-4 w-4 text-gold-400" strokeWidth={2} />
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Solar & BESS Hub
                </span>
              </div>
            </Reveal>

            {/* Project content */}
            <Reveal delay={2} className="lg:col-span-5">
              <div className="flex items-center gap-2 text-sm text-graphite-400">
                <MapPin className="h-4 w-4" />
                <span>Near Ferizaj, Kosovo</span>
                <span className="mx-2 text-graphite-200">&middot;</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold-400" />
                  Development concept
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 lg:text-3xl">
                Ferizaj Solar & Battery Storage Hub
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-500">
                The Ferizaj site is positioned as a potential solar and battery storage
                hub. The location combines existing solar generation, available grid
                capacity and the opportunity to develop battery storage for energy
                shifting, balancing and grid support.
              </p>

              {/* Project info table */}
              <div className="mt-8 space-y-px bg-navy-900/8">
                {PROJECT_INFO.map((item) => (
                  <div key={item.label} className="bg-cream px-5 py-4">
                    <div className="text-xs font-medium uppercase tracking-wider text-graphite-400">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-navy-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic relevance */}
              <div className="mt-6 border-l-2 border-gold-400 pl-4">
                <div className="text-xs font-medium uppercase tracking-wider text-gold-600">
                  Strategic relevance
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-500">
                  Located in a region suitable for renewable generation, storage and grid
                  flexibility services.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Project highlights */}
          <Reveal delay={3}>
            <div className="mt-16 border-t border-navy-900/8 pt-12">
              <h3 className="font-display text-xl font-medium text-navy-900">
                Project highlights
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECT_HIGHLIGHTS.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 border border-navy-900/8 bg-white p-5 transition-colors duration-300 hover:border-gold-400/40"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" strokeWidth={1.8} />
                    <span className="text-sm leading-relaxed text-graphite-600">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Development approach */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Development Approach"
              title="A phased, stage-gate process"
              description="Each phase is completed before the next is committed — advancing only when technical, regulatory and commercial conditions are met."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-4">
            {DEVELOPMENT_PHASES.map((step, i) => (
              <Reveal
                key={step.phase}
                delay={(i + 1) as 1 | 2 | 3 | 4}
                className="bg-offwhite p-8 lg:p-10"
              >
                <div className="font-display text-3xl font-light text-gold-400">
                  {step.phase}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite-500">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline note */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-l-2 border-gold-400 pl-6">
              <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-gold-400">
                <Zap className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-navy-900">
                  A growing pipeline
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite-500">
                  The Ferizaj Solar & Battery Storage Hub is our initial development
                  focus. We continue to evaluate additional sites across Kosovo where
                  renewable generation, grid capacity and storage potential align. Each
                  opportunity is assessed against the same technical, regulatory and
                  commercial criteria before entering the development pipeline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display font-light text-white text-display-md text-balance">
              Interested in our <span className="font-medium">project pipeline?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-navy-200">
              We welcome discussions with investors, grid stakeholders and partners
              interested in Kosovo's energy infrastructure development.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-gold-300"
            >
              Request project briefing
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
