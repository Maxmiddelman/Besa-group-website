import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';

export type PageId =
  | 'home'
  | 'about'
  | 'projects'
  | 'battery-storage'
  | 'market-opportunity'
  | 'technology'
  | 'partners'
  | 'careers'
  | 'contact';

type NavbarProps = {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
};

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'battery-storage', label: 'Battery Storage' },
  { id: 'market-opportunity', label: 'Market Opportunity' },
  { id: 'technology', label: 'Technology' },
  { id: 'partners', label: 'Partners' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-premium ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-xl border-navy-900/10 shadow-sm'
            : 'bg-cream/90 backdrop-blur-md border-navy-900/8'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => handleNav('home')}
            className="group flex items-center transition-opacity duration-200 hover:opacity-80"
            aria-label="BESA Group home"
          >
            <Logo variant="horizontal" className="h-8 w-auto" />
          </button>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'text-navy-950'
                    : 'text-navy-600 hover:text-navy-950'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold-400" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="hidden bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800 lg:inline-flex"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-navy-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream transition-transform duration-500 ease-premium ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-navy-900/8">
            <Logo variant="horizontal" className="h-7 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-navy-900"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center justify-between px-3 py-3.5 text-left text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-navy-900 bg-navy-900/4'
                    : 'text-graphite-500 hover:text-navy-900'
                }`}
                style={{
                  animation: mobileOpen
                    ? `slideIn 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s forwards`
                    : undefined,
                  opacity: mobileOpen ? undefined : 0,
                }}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className={`mx-3 mt-2 bg-navy-900 px-4 py-3.5 text-left text-base font-semibold text-white transition-colors duration-200 hover:bg-navy-800 ${
                currentPage === 'contact' ? 'ring-1 ring-gold-400' : ''}`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
