import { Sun, Battery, Network, Cpu, ArrowRight } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ABOUT_IMAGE, VALLEY_IMAGE } from '@/data/content';

type AboutPageProps = {
  onNavigate: (page: PageId) => void;
};

const WHAT_WE_DO = [
  {
    icon: Sun,
    title: 'Renewable Project Development',
    text: 'We originate, structure and develop solar PV projects in Kosovo, including land, permitting, grid connection and project partnerships.',
  },
  {
    icon: Battery,
    title: 'Battery Energy Storage',
    text: 'We develop BESS projects that can support grid stability, store renewable energy and participate in wholesale and balancing markets.',
  },
  {
    icon: Network,
    title: 'Grid & Market Integration',
    text: 'We work with grid operators, regulators, suppliers and market participants to unlock the role of storage in Kosovo\u2019s energy system.',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven Operation',
    text: 'Through optimization software and market intelligence, we aim to maximize asset value while supporting system reliability.',
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                About BESA Group
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Building the next generation of
              <br />
              <span className="font-medium">energy infrastructure</span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-graphite-500">
              <p>
                BESA Group is a Kosovo-focused energy infrastructure company developing
                renewable generation and battery energy storage projects. The company
                combines local market knowledge, land and grid development capabilities,
                international financing experience and advanced optimization technology.
              </p>
              <p>
                Our focus is on projects that strengthen the electricity system: solar PV,
                battery storage, grid flexibility, balancing services and commercial
                energy market participation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image band */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={ABOUT_IMAGE}
          alt="High-voltage electrical substation at dawn"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </section>

      {/* What we do */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Four capabilities, one platform"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-2">
            {WHAT_WE_DO.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i + 1) as 1 | 2 | 3 | 4}
                className="group bg-cream p-8 lg:p-10 transition-colors duration-500 hover:bg-offwhite"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-gold-400 transition-transform duration-500 group-hover:scale-105">
                  <item.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-graphite-500">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kosovo */}
      <section className="py-24 lg:py-32 bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Why Kosovo"
                  title={
                    <>
                      A system in
                      <br />
                      transition
                    </>
                  }
                  dark
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={1}>
                <p className="text-lg leading-relaxed text-navy-200">
                  Kosovo\u2019s electricity system is still heavily dependent on
                  lignite-fired generation. As solar capacity grows and the electricity
                  market becomes more dynamic, battery energy storage can play a key role
                  in managing volatility, improving flexibility and supporting security
                  of supply.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { value: 'Lignite', label: 'Dominant generation source' },
                    { value: 'Growing', label: 'Solar capacity pipeline' },
                    { value: 'Key role', label: 'For battery storage' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-white/10 p-6 transition-colors duration-300 hover:border-gold-400/30"
                    >
                      <div className="font-display text-xl font-medium text-gold-400">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm text-navy-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative h-[300px] lg:h-[400px] overflow-hidden">
        <img
          src={VALLEY_IMAGE}
          alt="Kosovo valley landscape"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Reveal className="text-center px-6">
            <h2 className="font-display font-light text-white text-display-lg text-balance">
              <span className="font-medium">Local commitment.</span> Long-term vision.
            </h2>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors duration-300 hover:bg-gold-300"
            >
              Work with us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
