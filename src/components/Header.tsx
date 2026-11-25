import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../data/siteData';
import { Atomize360Logo } from './Logo';

interface HeaderProps {
  onNavigate: (targetId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (targetId: string) => {
    setMobileOpen(false);
    onNavigate(targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(46,91,255,0.06)]'
          : 'py-3 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shrink-0 flex items-center cursor-pointer"
          aria-label="Atomize360 Home"
        >
          <Atomize360Logo />
        </button>

        <nav className="hidden lg:flex items-center relative" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleLinkClick(item.targetId)}
              className="relative px-4 py-2 text-sm font-['Inter'] font-medium text-[#374151] hover:text-[#2E5BFF] transition-colors duration-200 group cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#2E5BFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`mailto:${CONTACT_INFO.salesEmail}`}
            className="text-sm font-['Inter'] font-medium text-[#374151] hover:text-[#2E5BFF] transition-colors"
          >
            {CONTACT_INFO.salesEmail}
          </a>
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="relative group flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,91,255,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span className="absolute inset-0 brand-gradient-animated" />
            <span className="relative z-10">Get in Touch</span>
            <ArrowUpRight size={14} className="relative z-10" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(0,0,0,0.08)] text-[#374151] hover:text-[#2E5BFF] transition-colors bg-white/80 cursor-pointer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-5 mt-2 mb-3 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden p-3 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleLinkClick(item.targetId)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-left text-[#374151] hover:bg-[#f1f5ff] hover:text-[#2E5BFF] transition-all font-['Inter'] font-medium cursor-pointer"
            >
              <span>{item.label}</span>
              <ChevronDown size={14} className="-rotate-90 opacity-40" />
            </button>
          ))}
          <div className="pt-2 mt-1 border-t border-black/5">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="relative w-full flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 brand-gradient-bg" />
              <span className="relative z-10">Get in Touch</span>
              <ArrowUpRight size={14} className="relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
