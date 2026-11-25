import { PARTNERS_DATA } from '../data/siteData';
import { PartnerLogo } from './Logo';

export function Partners() {
  const marqueeLogos = [...PARTNERS_DATA.logos, ...PARTNERS_DATA.logos];

  return (
    <section id="partners" className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
          {PARTNERS_DATA.eyebrow}
        </span>
        <h2
          className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.15]"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Engineering with the <span className="brand-gradient-text">World&apos;s Best</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-[#6B7280] font-['Inter'] text-sm sm:text-base">
          {PARTNERS_DATA.subtitle}
        </p>
      </div>

      {/* Auto-scrolling Marquee */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgb(248, 250, 252), transparent)',
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(270deg, rgb(248, 250, 252), transparent)',
          }}
        />
        <div className="flex w-max gap-5 animate-marquee">
          {marqueeLogos.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="flex items-center justify-center bg-white rounded-2xl px-6 shrink-0"
              style={{
                minWidth: '140px',
                height: '72px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}
            >
              <PartnerLogo name={partner.shortName || partner.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Static 7-Partner Grid + ISO Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {PARTNERS_DATA.logos.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center bg-white rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,91,255,0.1)] group"
              style={{
                minHeight: '72px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}
            >
              <PartnerLogo name={partner.shortName || partner.name} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-[rgba(0,0,0,0.06)]">
          {PARTNERS_DATA.certifications.map((cert) => (
            <div
              key={cert.code}
              className="flex items-center gap-2.5 text-sm font-['Inter']"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: cert.dotColor }}
              />
              <span className="font-semibold text-[#111827]">{cert.code}</span>
              <span className="text-[#6B7280]">— {cert.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
