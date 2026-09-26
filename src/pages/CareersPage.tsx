import { useState } from 'react';
import { MapPin, Briefcase, Clock, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import type { PageId } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

type CareersPageProps = {
  onNavigate: (page: PageId) => void;
};

type JobPosting = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

const JOBS: JobPosting[] = [
  {
    id: 'lead-electrical-engineer',
    title: 'Lead Electrical Engineer',
    department: 'Engineering',
    location: 'Prishtina, Kosovo',
    type: 'Full-time',
    salary: '€3,800 – €5,200 / month',
    summary:
      'Lead the electrical design and technical specification of our solar PV and battery energy storage projects, from early-stage feasibility through construction and commissioning.',
    responsibilities: [
      'Own the single-line diagrams, protection coordination and equipment specifications for solar PV and BESS projects',
      'Define grid connection requirements and interface with the transmission system operator and regulator',
      'Review and approve EPC contractor designs, drawings and as-built documentation',
      'Lead factory acceptance testing, site acceptance testing and commissioning oversight',
      'Establish and maintain technical standards, design basis and equipment vendor pre-qualification',
    ],
    requirements: [
      'MSc or BSc in Electrical Engineering, with a focus on power systems',
      '8+ years of experience in electrical design of HV/MV/LV systems, ideally in renewables or grid infrastructure',
      'Strong knowledge of IEC standards, protection coordination and grid code compliance',
      'Experience managing EPC contractors and design review processes',
      'Fluent in English and Albanian; Serbian is a plus',
    ],
    niceToHave: [
      'Experience with battery energy storage systems and power conversion equipment',
      'Familiarity with Kosovo or Western Balkans grid codes and permitting processes',
      'Chartered Engineer status or equivalent professional registration',
    ],
  },
  {
    id: 'field-service-engineer',
    title: 'Field Service Engineer',
    department: 'Operations',
    location: 'Prishtina, Kosovo',
    type: 'Full-time',
    salary: '€2,400 – €3,400 / month',
    summary:
      'Be our hands-on presence on site — commissioning, maintaining and troubleshooting solar and battery storage assets to keep them performing safely and reliably.',
    responsibilities: [
      'Carry out commissioning, preventive maintenance and corrective maintenance on solar PV and BESS sites',
      'Perform inspections, diagnostic testing and root-cause analysis of equipment faults',
      'Coordinate with OEMs and service partners for warranty and repair work',
      'Maintain service records, HSE compliance and site documentation',
      'Support performance monitoring and respond to alarms and site visits as needed',
    ],
    requirements: [
      'BSc or vocational degree in Electrical Engineering, Electronics or a related field',
      '3+ years of field service experience with electrical or energy systems',
      'Strong practical knowledge of MV/LV electrical safety, including LOTO procedures',
      'Willingness to travel across Kosovo and occasionally the region',
      'Valid driving licence',
      'Conversational English; Albanian native',
    ],
    niceToHave: [
      'Experience with lithium-ion battery systems or power conversion systems',
      'Thermography, vibration analysis or partial-discharge testing certification',
      'Familiarity with SCADA and energy management systems',
    ],
  },
  {
    id: 'legal-counsel',
    title: 'Legal Counsel',
    department: 'Legal & Compliance',
    location: 'Prishtina, Kosovo',
    type: 'Full-time',
    salary: '€3,000 – €4,200 / month',
    summary:
      'Provide legal guidance across project development, corporate, contracting and regulatory matters — keeping our projects, partnerships and company on solid legal ground.',
    responsibilities: [
      'Draft and negotiate EPC, O&M, PPA, land lease and equipment supply agreements',
      'Advise on corporate matters, governance, joint ventures and shareholder agreements',
      'Manage regulatory and permitting processes, including grid connection and environmental approvals',
      'Coordinate with external counsel on financing, M&A and cross-border transactions',
      'Monitor legal and regulatory developments affecting the energy sector in Kosovo',
    ],
    requirements: [
      'Qualified lawyer in Kosovo with a Master of Laws (LL.M.) or equivalent',
      '6+ years of legal practice, ideally with energy, infrastructure or project finance exposure',
      'Strong contract drafting and negotiation skills in English and Albanian',
      'Solid understanding of Kosovo corporate, energy and land law',
      'Experience working with international investors, banks or development institutions',
    ],
    niceToHave: [
      'Experience with renewable energy projects, PPAs or project finance transactions',
      'Familiarity with EU and Western Balkans energy market regulation',
      'Serbian language skills',
    ],
  },
  {
    id: 'senior-project-manager',
    title: 'Senior Project Manager',
    department: 'Project Delivery',
    location: 'Prishtina, Kosovo',
    type: 'Full-time',
    salary: '€3,400 – €4,800 / month',
    summary:
      'Drive the end-to-end delivery of solar and battery storage projects — managing scope, schedule, budget and stakeholders from development through construction and handover to operations.',
    responsibilities: [
      'Lead project planning, scheduling, budgeting and risk management across the project lifecycle',
      'Manage EPC contractors, consultants and internal teams to deliver on time and on budget',
      'Coordinate land, permitting, grid connection and financing workstreams',
      'Report to the executive team, investors and lenders on project progress and key decisions',
      'Ensure HSE, quality and contractual compliance throughout construction and commissioning',
    ],
    requirements: [
      'BSc or MSc in Engineering, Construction Management or a related discipline',
      '10+ years of project management experience in energy, infrastructure or heavy industry',
      'Demonstrated track record delivering large-scale projects from FID to commissioning',
      'Strong leadership, communication and stakeholder management skills',
      'Fluent in English and Albanian',
      'PMP, PRINCE2 or equivalent certification is a plus',
    ],
    niceToHave: [
      'Experience with solar PV and/or battery storage projects',
      'Familiarity with project finance and lender requirements',
      'Experience working in Kosovo or the Western Balkans',
    ],
  },
  {
    id: 'asset-manager',
    title: 'Asset Manager',
    department: 'Asset Management',
    location: 'Prishtina, Kosovo',
    type: 'Full-time',
    salary: '€2,800 – €4,000 / month',
    summary:
      'Maximize the long-term value and performance of our operating portfolio — overseeing technical, commercial and financial performance of our solar and storage assets.',
    responsibilities: [
      'Own the operational performance of the asset portfolio against budget, availability and revenue targets',
      'Manage O&M contracts, warranties and service provider relationships',
      'Monitor production, availability and market revenue, and drive performance improvement initiatives',
      'Prepare investor and lender reporting, including variance analysis and forecasts',
      'Coordinate insurance, HSE and regulatory compliance for operating assets',
    ],
    requirements: [
      'BSc or MSc in Engineering, Finance, Business or a related field',
      '5+ years of experience in asset management, O&M or commercial operations for energy or infrastructure assets',
      'Strong analytical and financial modelling skills',
      'Experience managing service contracts and vendor relationships',
      'Fluent in English and Albanian',
    ],
    niceToHave: [
      'Experience with renewable energy or battery storage assets',
      'Familiarity with energy markets, PPAs and balancing services',
      'Experience with asset management or SCADA platforms',
    ],
  },
];

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [activeJob, setActiveJob] = useState<JobPosting | null>(null);

  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Careers
              </span>
            </div>
            <h1 className="font-display font-light text-navy-900 text-display-xl text-balance max-w-4xl">
              Build Kosovo's
              <br />
              <span className="font-medium">energy future</span> with us
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-graphite-500">
              <p>
                BESA Group is assembling a team of engineers, project leaders and
                specialists to develop, build and operate renewable energy and
                battery storage infrastructure in Kosovo and the wider region.
              </p>
              <p>
                We offer meaningful work on projects that matter, a collaborative and
                ambitious culture, and the opportunity to grow with a company building
                critical energy infrastructure for the energy transition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 lg:py-32 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Open Positions"
              title="Five roles, one mission"
              description="We are hiring across engineering, operations, legal and project delivery. All positions are based in Prishtina, Kosovo."
            />
          </Reveal>

          <div className="mt-16 divide-y divide-navy-900/8 border-y border-navy-900/8">
            {JOBS.map((job, i) => (
              <Reveal
                key={job.id}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="group"
              >
                <button
                  onClick={() => setActiveJob(job)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left transition-colors duration-300 hover:bg-navy-900/[0.02] lg:py-10"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy-900 text-gold-400 transition-transform duration-500 group-hover:scale-105">
                      <Briefcase className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-navy-900 lg:text-2xl">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-graphite-500">
                        <span className="font-medium text-gold-600">{job.department}</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="hidden text-sm font-medium text-navy-900 sm:block">
                      {job.salary}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-navy-900/15 text-navy-900 transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-24 lg:py-32 bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Why BESA Group"
                  title={
                    <>
                      Work that
                      <br />
                      matters
                    </>
                  }
                  dark
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={1}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: 'Impact',
                      text: 'Develop the infrastructure that powers Kosovo\u2019s energy transition.',
                    },
                    {
                      title: 'Growth',
                      text: 'Grow with a company at an early, ambitious stage of its journey.',
                    },
                    {
                      title: 'Culture',
                      text: 'A collaborative, high-performance team with European ambitions.',
                    },
                    {
                      title: 'Compensation',
                      text: 'Competitive salaries and benefits aligned with the regional market.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border border-white/10 p-6 transition-colors duration-300 hover:border-gold-400/30"
                    >
                      <div className="font-display text-lg font-medium text-gold-400">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-600">
              Don't see your role?
            </span>
            <h2 className="mt-6 font-display font-light text-navy-900 text-display-lg text-balance">
              Send us your <span className="font-medium">CV</span> and we'll be in touch
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite-500">
              We are always interested in hearing from talented people who want to
              contribute to Kosovo\u2019s energy future.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Job detail modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm"
            onClick={() => setActiveJob(null)}
          />
          <div className="relative my-8 w-full max-w-3xl bg-cream px-6 py-8 shadow-2xl sm:px-10 sm:py-10 lg:my-16">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-navy-900 transition-colors duration-200 hover:text-gold-600"
              aria-label="Close job details"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                {activeJob.department}
              </span>
            </div>
            <h2 className="font-display text-2xl font-medium text-navy-900 lg:text-3xl">
              {activeJob.title}
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-graphite-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-500" strokeWidth={1.8} />
                {activeJob.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold-500" strokeWidth={1.8} />
                {activeJob.type}
              </span>
              <span className="font-semibold text-navy-900">{activeJob.salary}</span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-graphite-500">
              {activeJob.summary}
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-navy-900">
                  Key Responsibilities
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeJob.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite-500">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-navy-900">
                  Requirements
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeJob.requirements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite-500">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-navy-900">
                  Nice to Have
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeJob.niceToHave.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite-500">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-navy-900/10 pt-6">
              <button
                onClick={() => {
                  setActiveJob(null);
                  onNavigate('contact');
                }}
                className="group inline-flex items-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
              >
                Apply for this role
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
