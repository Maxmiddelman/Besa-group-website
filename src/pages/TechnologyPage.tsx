import {
  Cpu,
  BarChart3,
  Activity,
  Layers,
  ArrowRight,
  TrendingUp,
  Battery,
  Sun,
  Zap,
  Gauge,
  DollarSign,
} from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

type TechnologyPageProps = {
  onNavigate: (page: PageId) => void;
};

const OPTIMIZATION_STACK = [
  {
    icon: BarChart3,
    title: 'Energy market optimization',
    text: 'Battery dispatch can be optimized across day-ahead prices, intraday opportunities, imbalance signals and ancillary service markets, depending on local market access and regulatory conditions.',
  },
  {
    icon: Activity,
    title: 'Asset monitoring',
    text: 'Battery systems require continuous monitoring of availability, state of charge, state of health, alarms, performance and safety parameters.',
  },
  {
    icon: Layers,
    title: 'Revenue stacking',
    text: 'A storage asset can create value from multiple sources, including energy arbitrage, balancing, grid services and contracted flexibility. The optimal strategy depends on market design, technical constraints and risk appetite.',
  },
];

// Simulated market price data for the chart (€/MWh across 24h)
const PRICE_DATA = [
  45, 38, 32, 28, 26, 30, 42, 68, 95, 110, 125, 138, 142, 135, 128, 140, 155, 168, 172,
  158, 130, 98, 72, 55,
];
const PRICE_MIN = 20;
const PRICE_MAX = 180;

// Simulated state of charge across 24h (%)
const SOC_DATA = [
  60, 72, 85, 92, 95, 88, 70, 45, 30, 25, 20, 35, 50, 65, 72, 68, 55, 40, 28, 35, 52, 68,
  80, 65,
];

// Solar forecast across 24h (MW)
const SOLAR_DATA = [
  0, 0, 0, 0, 0, 0.5, 2, 5, 9, 13, 16, 18, 19, 18, 16, 13, 8, 4, 1, 0, 0, 0, 0, 0,
];

// Dispatch schedule: charge (1), discharge (-1), idle (0)
const DISPATCH_DATA = [
  1, 1, 1, 1, 0, 0, 0, -1, -1, -1, -1, 1, 1, 0, 0, -1, -1, -1, -1, 1, 1, 0, 1, 1,
];

// Revenue stack breakdown
const REVENUE_STACK = [
  { label: 'Energy arbitrage', value: 42, color: 'bg-gold-400' },
  { label: 'Balancing', value: 28, color: 'bg-blue-400' },
  { label: 'Grid services', value: 18, color: 'bg-teal-400' },
  { label: 'Contracted flexibility', value: 12, color: 'bg-navy-300' },
];

function PriceChart() {
  const chartH = 140;
  const points = PRICE_DATA.map((v, i) => {
    const x = (i / (PRICE_DATA.length - 1)) * 100;
    const y = chartH - ((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * chartH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const areaPoints = `0,${chartH} ${points} 100,${chartH}`;

  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            Market Price
          </span>
        </div>
        <span className="text-xs text-navy-400">€/MWh</span>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 100 140" preserveAspectRatio="none" className="h-32 w-full">
          <defs>
            <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(251 191 36)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="rgb(251 191 36)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill="url(#priceGrad)" />
          <polyline
            points={points}
            fill="none"
            stroke="rgb(251 191 36)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-navy-400">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

function SocChart() {
  const chartH = 120;
  const points = SOC_DATA.map((v, i) => {
    const x = (i / (SOC_DATA.length - 1)) * 100;
    const y = chartH - (v / 100) * chartH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const areaPoints = `0,${chartH} ${points} 100,${chartH}`;

  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            State of Charge
          </span>
        </div>
        <span className="text-xs text-navy-400">%</span>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 100 120" preserveAspectRatio="none" className="h-28 w-full">
          <defs>
            <linearGradient id="socGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(96 165 250)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="rgb(96 165 250)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill="url(#socGrad)" />
          <polyline
            points={points}
            fill="none"
            stroke="rgb(96 165 250)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-navy-400">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

function SolarForecast() {
  const chartH = 100;
  const maxSolar = 20;
  const points = SOLAR_DATA.map((v, i) => {
    const x = (i / (SOLAR_DATA.length - 1)) * 100;
    const y = chartH - (v / maxSolar) * chartH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const areaPoints = `0,${chartH} ${points} 100,${chartH}`;

  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            Solar Forecast
          </span>
        </div>
        <span className="text-xs text-navy-400">MW</span>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-24 w-full">
          <defs>
            <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(251 191 36)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(251 191 36)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill="url(#solarGrad)" />
          <polyline
            points={points}
            fill="none"
            stroke="rgb(251 191 36)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-navy-400">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

function DispatchSchedule() {
  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            Dispatch Schedule
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-navy-400">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 bg-gold-400" /> Charge
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 bg-teal-400" /> Discharge
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-end gap-px h-24">
        {DISPATCH_DATA.map((d, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col justify-center items-center gap-px"
            style={{ height: '100%' }}
          >
            {d === 1 && (
              <div
                className="w-full bg-gold-400/70 rounded-sm"
                style={{ height: '60%' }}
              />
            )}
            {d === -1 && (
              <div
                className="w-full bg-teal-400/70 rounded-sm"
                style={{ height: '60%', marginTop: 'auto' }}
              />
            )}
            {d === 0 && (
              <div className="w-full bg-white/5 rounded-sm" style={{ height: '4%' }} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-navy-400">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

function AvailabilityKpi() {
  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            Asset Availability
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-light text-white">99.2</span>
        <span className="text-lg text-navy-300">%</span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/8">
        <div className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300" style={{ width: '99.2%' }} />
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-navy-400">
        <span>Uptime</span>
        <span className="text-gold-400">Nominal</span>
      </div>
    </div>
  );
}

function RevenueStack() {
  return (
    <div className="rounded-lg border border-white/10 bg-navy-900/60 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
          <span className="text-xs font-medium uppercase tracking-wider text-navy-300">
            Revenue Stack
          </span>
        </div>
        <span className="text-xs text-navy-400">% of total</span>
      </div>
      <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full">
        {REVENUE_STACK.map((s) => (
          <div
            key={s.label}
            className={s.color}
            style={{ width: `${s.value}%` }}
          />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {REVENUE_STACK.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-navy-200">
              <span className={`h-2 w-2 rounded-full ${s.color}`} />
              {s.label}
            </span>
            <span className="font-medium text-white">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechnologyPage({ onNavigate }: TechnologyPageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Technology & Optimization
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Optimized operation
              <br />
              <span className="font-medium">from day one</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              The value of battery storage depends not only on the hardware, but also on
              how the asset is operated. BESA Group combines project development with
              advanced optimization capabilities to improve dispatch, revenue stacking and
              operational control.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Optimization stack */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Optimization Stack"
              title="Three layers of operational intelligence"
              description="From market signals to asset health — each layer addresses a different dimension of how a battery storage asset creates and protects value."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIMIZATION_STACK.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i + 1) as 1 | 2 | 3}
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

      {/* Dashboard visuals — dark navy section */}
      <section className="py-24 lg:py-32 bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Operational Dashboard"
              title="A unified view of asset performance"
              description="Market signals, asset state, forecasts and dispatch decisions brought together — illustrating how optimization translates into operational control."
              dark
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Row 1 */}
            <Reveal delay={1} className="lg:col-span-2">
              <PriceChart />
            </Reveal>
            <Reveal delay={2}>
              <AvailabilityKpi />
            </Reveal>

            {/* Row 2 */}
            <Reveal delay={1}>
              <SocChart />
            </Reveal>
            <Reveal delay={2}>
              <SolarForecast />
            </Reveal>
            <Reveal delay={3}>
              <RevenueStack />
            </Reveal>

            {/* Row 3 — full width dispatch */}
            <Reveal delay={1} className="lg:col-span-3">
              <DispatchSchedule />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technology partner — EnerSim */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Technology Partner"
                  title="Optimization powered by EnerSim"
                />
              </Reveal>
              <Reveal delay={1}>
                <div className="mt-8 inline-flex items-center gap-3 border border-navy-900/10 bg-white px-6 py-4">
                  <Cpu className="h-8 w-8 text-navy-900" strokeWidth={1.5} />
                  <span className="font-display text-2xl font-medium text-navy-900">
                    EnerSim
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={2}>
                <p className="text-lg leading-relaxed text-graphite-500">
                  BESA Group works with advanced optimization concepts and energy software
                  capabilities, including EnerSim, to model, monitor and optimize renewable
                  and battery assets.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    'Market modelling and dispatch simulation for project feasibility',
                    'Real-time asset monitoring and performance analytics',
                    'Revenue optimization across multiple market streams',
                    'Operational reporting for investors and stakeholders',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 border-l-2 border-gold-400 pl-5">
                      <span className="text-base leading-relaxed text-graphite-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display font-light text-navy-900 text-display-md text-balance">
              Operation is where <span className="font-medium">value is captured</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-500">
              Developing the right project is only the beginning. How it is operated
              determines whether that potential is realized.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
            >
              Discuss technology partnership
              <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
