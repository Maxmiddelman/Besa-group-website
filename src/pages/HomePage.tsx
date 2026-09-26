import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Zap, Battery, BarChart3, MapPin } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import {
  HERO_VIDEO,
  HERO_POSTER,
  HERO_IMAGE,
  SUBSTATION_IMAGE,
  STATS,
  PILLARS,
  VALUE_CARDS,
  TRANSMISSION_IMAGE,
} from '@/data/content';

type HomePageProps = {
  onNavigate: (page: PageId) => void;
};

const VALUE_ICONS = [MapPin, Battery, BarChart3];

export function HomePage({ onNavigate }: HomePageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          const heroHeight = rect.height;
          const offset = Math.min(Math.max(-rect.top, 0), heroHeight);
          setScrollY(offset * 0.3);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      {/* Hero with video background and subtle parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background layer */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${scrollY}px)` }}
        >
          <div className="absolute inset-0 h-[120%]">
            <img
              src={HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover"
              aria-hidden
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-8 pt-32 pb-28">
          <div className="max-w-3xl">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-300">
                Kosovo Energy Infrastructure
              </span>
            </div>
            <h1
              className="font-display font-light text-white text-display-2xl text-balance animate-fade-up"
              style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
            >
              BESA Group
            </h1>
            <p
              className="mt-4 font-display text-2xl font-light text-gold-200 lg:text-3xl animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Renewable Energy. Battery Storage. Grid Flexibility.
            </p>
            <p
              className="mt-8 max-w-xl text-lg leading-relaxed text-navy-100 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Developing bankable solar and battery energy storage projects in Kosovo —
              built for a more flexible, resilient and market-driven power system.
            </p>
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-center justify-center gap-2 bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-500 ease-premium hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/10"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-premium hover:bg-white/5 hover:border-white/30"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
            <div className="h-2 w-1 rounded-full bg-gold-400/70" />
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="relative z-10 -mt-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-navy-950/8 shadow-2xl shadow-navy-950/10 md:grid-cols-3">
            {VALUE_CARDS.map((card, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal
                  key={card.title}
                  delay={(i + 1) as 1 | 2 | 3}
                  className="group bg-cream p-8 lg:p-10 transition-colors duration-500 ease-premium hover:bg-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-navy-950 text-gold-400 transition-transform duration-500 ease-premium group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-navy-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-graphite-500">
                    {card.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Our Mission"
                  title={
                    <>
                      Accelerating Kosovo's
                      <br />
                      energy transition
                    </>
                  }
                />
              </Reveal>
              <Reveal delay={1}>
                <p className="mt-6 text-lg leading-relaxed text-graphite-500">
                  From a coal-dominated electricity system toward a more flexible mix of
                  solar generation, battery storage, and intelligent energy market
                  participation.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={2}>
                <p className="text-lg leading-relaxed text-graphite-600">
                  BESA Group is focused on accelerating Kosovo's transition from a
                  coal-dominated electricity system toward a more flexible mix of solar
                  generation, battery storage and intelligent energy market
                  participation. We combine local project development, grid access,
                  energy market expertise and optimization technology to build
                  infrastructure that is technically credible, commercially structured,
                  and built to operate for decades.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-10 flex flex-wrap gap-3">
                  {['Solar PV', 'Battery Storage', 'Grid Infrastructure', 'Market Optimization'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="border border-navy-950/10 px-4 py-2 text-sm font-medium text-navy-700 transition-colors duration-300 hover:border-gold-400 hover:text-navy-950"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px bg-white/6 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={(i + 1) as 1 | 2 | 3 | 4}
                className="bg-navy-950 px-6 py-8 lg:px-8 lg:py-10"
              >
                <div className="font-display text-4xl font-medium text-white lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-navy-300">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Four disciplines, one integrated platform"
              description="Each capability reinforces the others — from site identification to real-time market dispatch."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-navy-950/8 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => {
              const icons = [Zap, MapPin, BarChart3, Battery];
              const Icon = icons[i];
              return (
                <Reveal
                  key={pillar.title}
                  delay={(i + 1) as 1 | 2 | 3 | 4}
                  className="group bg-offwhite p-8 lg:p-10 transition-colors duration-500 ease-premium hover:bg-cream"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-navy-950 text-gold-400 transition-transform duration-500 ease-premium group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-graphite-500">
                    {pillar.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature image split */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Reveal className="flex items-center py-20 lg:py-28 lg:pr-16">
              <div>
                <SectionHeading
                  eyebrow="Infrastructure"
                  title="Grid-connected, built to last"
                  description="Our projects are designed around grid interconnection from the earliest stage — ensuring each asset can deliver value the moment it enters operation."
                />
                <div className="mt-8 space-y-4">
                  {[
                    'Early-stage grid studies and KOSTT coordination',
                    'Substation siting and interconnection design',
                    'Permitting and environmental impact assessment',
                    'Long-term asset management strategy',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" />
                      <span className="text-base text-graphite-600">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('battery-storage')}
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-950"
                >
                  Battery storage approach
                  <ArrowRight className="h-4 w-4 text-gold-500 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
            <Reveal delay={2} className="relative min-h-[400px] lg:min-h-[600px]">
              <img
                src="/besa-control-room.png"
                alt="BESA Group operators monitoring energy storage and grid dashboards in a control room"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA with transmission line background */}
      <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={TRANSMISSION_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-15"
            aria-hidden
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-400">
              Partner with us
            </span>
            <h2 className="mt-6 font-display font-light text-white text-display-lg text-balance">
              Let's build Kosovo's
              <br />
              <span className="font-medium">energy future together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              We work with investors, technology partners, and offtakers to develop
              and operate energy infrastructure that delivers measurable returns and
              measurable impact.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-500 ease-premium hover:bg-gold-300"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('market-opportunity')}
                className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-premium hover:bg-white/5 hover:border-white/25"
              >
                Market opportunity
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
