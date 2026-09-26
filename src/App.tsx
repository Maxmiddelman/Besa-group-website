import { useState, useEffect } from 'react';
import { Navbar, type PageId } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics, trackPageView } from '@/components/Analytics';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { BatteryStoragePage } from '@/pages/BatteryStoragePage';
import { MarketOpportunityPage } from '@/pages/MarketOpportunityPage';
import { TechnologyPage } from '@/pages/TechnologyPage';
import { PartnersPage } from '@/pages/PartnersPage';
import { ContactPage } from '@/pages/ContactPage';
import { CareersPage } from '@/pages/CareersPage';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    trackPageView(`/${page === 'home' ? '' : page}`);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'about':
        return <AboutPage onNavigate={setPage} />;
      case 'projects':
        return <ProjectsPage onNavigate={setPage} />;
      case 'battery-storage':
        return <BatteryStoragePage onNavigate={setPage} />;
      case 'market-opportunity':
        return <MarketOpportunityPage onNavigate={setPage} />;
      case 'technology':
        return <TechnologyPage onNavigate={setPage} />;
      case 'partners':
        return <PartnersPage onNavigate={setPage} />;
      case 'careers':
        return <CareersPage onNavigate={setPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setPage} />
      <Analytics />
    </div>
  );
}
