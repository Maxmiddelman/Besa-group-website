import {
  Battery,
  ArrowRight,
  TrendingUp,
  Scale,
  Activity,
  Zap,
  Cpu,
  Monitor,
  ShieldCheck,
  Boxes,
} from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import {
  BATTERY_IMAGE,
  SUBSTATION_IMAGE_2,
  SOLAR_IMAGE,
  CONTROL_ROOM_IMAGE,
  TRANSMISSION_IMAGE,
} from '@/data/content';

type BatteryStoragePageProps = {
  onNavigate: (page: PageId) => void;
};

const SUBSTATION_DUSK_IMAGE = TRANSMISSION_IMAGE;

const USE_CASES = [
  {
    icon: TrendingUp,
    title: 'Energy Arbitrage',
    text: 'Charging during low-price periods and discharging when market prices are higher.',
  },
  {
    icon: Scale,
    title: 'Imbalance Optimization',
    text: 'Using storage flexibility to respond to real-time system imbalance and price signals.',
  },
  {
    icon: Activity,
    title: 'Ancillary Services',
    text: 'Supporting frequency control, reserves and other grid services where market rules allow.',
  },
  {
    icon: Zap,
    title: 'Grid Support',
    text: 'Providing fast-response flexibility that can help improve resilience in a power system with growing renewable generation.',
  },
];

const TECH_PRINCIPLES = [
  { icon: Boxes, text: 'Modular containerized battery systems' },
  { icon: Zap, text: 'Grid-connected power conversion systems' },
  { icon: Cpu, text: 'Energy management and optimization software' },
  { icon: Monitor, text: 'Remote monitoring and operational control' },
  { icon: ShieldCheck, text: 'Safety, compliance and bankability as core design principles' },
];

export function BatteryStoragePage({ onNavigate }: BatteryStoragePageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Battery Storage
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Battery storage for a
              <br />
              <span className="font-medium">flexible power system</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              Battery Energy Storage Systems are becoming essential infrastructure in
              electricity markets with increasing renewable generation, price volatility
              and grid balancing needs. BESA Group develops BESS projects designed to
              support both commercial market participation and system flexibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image band — battery containers */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={BATTERY_IMAGE}
          alt="Industrial battery storage facility"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </section>

      {/* Use cases */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="How battery storage creates value"
              description="A single BESS asset can serve multiple functions — depending on market design, grid needs and dispatch strategy."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-2">
            {USE_CASES.map((item, i) => (
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

      {/* Why BESS in Kosovo — dark section with substation image */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <img
            src={SUBSTATION_DUSK_IMAGE}
            alt="Electrical substation at sunset"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Why BESS in Kosovo"
                  title={
                    <>
                      Bridging variable
                      <br />
                      generation and demand
                    </>
                  }
                  dark
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={1}>
                <p className="text-lg leading-relaxed text-navy-200">
                  Kosovo\u2019s power system is characterized by a high dependence on
                  thermal generation, increasing renewable ambitions and a developing
                  electricity market framework. Battery storage can help bridge the gap
                  between variable renewable production and real-time electricity demand.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { value: 'Thermal', label: 'High generation dependence' },
                    { value: 'Growing', label: 'Renewable ambitions' },
                    { value: 'Developing', label: 'Market framework' },
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

      {/* Technical principles — image split with control room */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Control room image */}
            <Reveal delay={2} className="relative min-h-[400px] lg:min-h-[560px] order-2 lg:order-1">
              <img
                src={CONTROL_ROOM_IMAGE}
                alt="Control room with monitoring screens for battery storage operations"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            {/* Technical principles content */}
            <Reveal className="flex items-center py-20 lg:py-28 lg:pl-16 order-1 lg:order-2">
              <div>
                <SectionHeading
                  eyebrow="Technical Principles"
                  title="Built on proven engineering"
                />
                <div className="mt-8 space-y-5">
                  {TECH_PRINCIPLES.map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-navy-900 text-gold-400">
                        <item.icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <span className="mt-1.5 text-base leading-relaxed text-graphite-600">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solar-plus-storage visual band */}
      <section className="relative h-[300px] lg:h-[400px] overflow-hidden">
        <img
          src={SOLAR_IMAGE}
          alt="Solar PV field — solar-plus-storage asset"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <Reveal>
              <p className="font-display text-2xl font-light text-white text-balance max-w-2xl lg:text-3xl">
                Solar generation and battery storage are
                <span className="font-medium text-gold-300"> complementary infrastructure</span> —
                one produces, the other provides flexibility.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex h-14 w-14 items-center justify-center bg-navy-900 text-gold-400">
                <Battery className="h-7 w-7" strokeWidth={1.8} />
              </div>
            </div>
            <h2 className="font-display font-light text-navy-900 text-display-md text-balance">
              Storage is the <span className="font-medium">flexibility layer</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-500">
              As Kosovo's renewable capacity grows, battery storage becomes essential
              infrastructure for managing volatility and enabling market participation.
            </p>
            <button
              onClick={() => onNavigate('technology')}
              className="group mt-8 inline-flex items-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
            >
              See our optimization technology
              <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
