import { Mail, Linkedin } from 'lucide-react';
import type { PageId } from './Navbar';
import { LogoWhite } from '@/components/Logo';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

const FOCUS_AREAS = [
  'Solar PV',
  'Battery Energy Storage',
  'Grid Flexibility',
  'Market Optimization',
];

const COMPANY_LINKS: { id: PageId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'partners', label: 'Partners' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1 — Brand */}
          <div>
            <button
              onClick={() => handleNav('home')}
              className="group flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <LogoWhite variant="horizontal" className="h-8 w-auto" />
            </button>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-300">
              Developing renewable energy and battery storage infrastructure in Kosovo.
            </p>
          </div>

          {/* Column 2 — Focus Areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              Focus Areas
            </h3>
            <ul className="mt-5 space-y-3">
              {FOCUS_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-sm text-navy-300 transition-colors duration-200 hover:text-white">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              Contact
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-navy-300">
              Kosovo / Netherlands
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:info@besagroup.com"
                className="flex items-center gap-2.5 text-sm text-navy-300 transition-colors duration-200 hover:text-white"
              >
                <Mail className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
                <span>Email</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 text-sm text-navy-300 transition-colors duration-200 hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-white/8 pt-8">
          <p className="text-xs text-navy-400">
            &copy; BESA Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
