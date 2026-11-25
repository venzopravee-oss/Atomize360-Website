import { ArrowUpRight, Mail } from 'lucide-react';
import { FOOTER_DATA, CONTACT_INFO, PARTNERS_DATA } from '../data/siteData';
import { Atomize360Logo } from './Logo';

interface FooterProps {
  onNavigate: (targetId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0c1120] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="font-['Outfit'] font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
            >
              {FOOTER_DATA.ctaTitle}
            </h2>
            <p className="mt-2 text-sm font-['Inter'] text-white/60">
              {FOOTER_DATA.ctaSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="relative group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,91,255,0.4)] hover:scale-[1.03] cursor-pointer"
            >
              <span className="absolute inset-0 brand-gradient-animated" />
              <span className="relative z-10">{FOOTER_DATA.ctaPrimary}</span>
              <ArrowUpRight size={15} className="relative z-10" />
            </button>
            <a
              href={`mailto:${CONTACT_INFO.salesEmail}`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium font-['Inter'] border border-white/10 text-white/70 hover:border-white/25 hover:text-white transition-all duration-300"
            >
              <Mail size={14} />
              {FOOTER_DATA.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer mb-5 block"
            >
              <Atomize360Logo inverted />
            </button>
            <p className="text-sm font-['Inter'] text-white/50 leading-relaxed max-w-sm mb-5">
              {FOOTER_DATA.bio}
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href={`mailto:${CONTACT_INFO.salesEmail}`}
                className="text-sm font-['Inter'] text-white/50 hover:text-white transition-colors"
              >
                {CONTACT_INFO.salesEmail}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.careersEmail}`}
                className="text-sm font-['Inter'] text-white/50 hover:text-white transition-colors"
              >
                {CONTACT_INFO.careersEmail}
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_DATA.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-['Inter'] font-semibold tracking-[0.18em] text-white/40 mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.targetId)}
                      className="text-sm font-['Inter'] text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-['Inter'] text-white/30">
            {FOOTER_DATA.copyright}
          </p>
          <div className="flex items-center gap-2">
            {FOOTER_DATA.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-2.5 py-1 rounded-lg font-['JetBrains_Mono'] border border-white/8 text-white/25"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {PARTNERS_DATA.certifications.map((cert) => (
              <span
                key={cert.code}
                className="w-2 h-2 rounded-full"
                style={{ background: cert.dotColor, opacity: 0.5 }}
                title={`${cert.code} — ${cert.description}`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
