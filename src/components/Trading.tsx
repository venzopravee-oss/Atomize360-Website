import { Mail } from 'lucide-react';
import { TRADING_DATA, PARTNERS_DATA, CONTACT_INFO } from '../data/siteData';
import { ACCENT_STYLES, DynamicIcon, type AccentKey } from './Icons';
import { PartnerLogo } from './Logo';

const TRADING_ICONS: Array<{ icon: 'cpu' | 'radio' | 'thermometer'; accent: AccentKey }> = [
  { icon: 'cpu', accent: 'blue' },
  { icon: 'radio', accent: 'green' },
  { icon: 'thermometer', accent: 'orange' },
];

export function Trading() {
  return (
    <section id="trading" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
            {TRADING_DATA.eyebrow}
          </span>
          <h2
            className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.12]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Products &{' '}
            <span className="brand-gradient-text">Components</span>
          </h2>
          <p className="mt-4 text-[#6B7280] font-['Inter'] leading-relaxed text-[0.95rem]">
            {TRADING_DATA.subtitle}
          </p>
        </div>

        {/* 3 Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {TRADING_DATA.categories.map((cat, idx) => {
            const style = TRADING_ICONS[idx];
            const accent = ACCENT_STYLES[style.accent];
            return (
              <div
                key={cat.id}
                className="rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
              >
                {/* Banner Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16 / 7' }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(transparent 20%, rgba(${accent.rgb}, 0.19) 70%, rgba(${accent.rgb}, 0.376) 100%)`,
                    }}
                  />
                  <div
                    className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      color: accent.color,
                    }}
                  >
                    <DynamicIcon name={style.icon} size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-['Outfit'] font-bold text-[#111827] text-base mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-['Inter'] text-[#374151]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: accent.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* OEM Supply + Quote */}
        <div
          className="rounded-2xl border p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(46, 91, 255, 0.03) 0%, rgba(243, 108, 33, 0.03) 100%)',
            borderColor: 'rgba(0, 0, 0, 0.07)',
          }}
        >
          {/* Left: OEM Grid */}
          <div>
            <h3 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-2">
              {TRADING_DATA.oemSupply.title}
            </h3>
            <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-6">
              {TRADING_DATA.oemSupply.subtitle}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {PARTNERS_DATA.logos.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center rounded-xl bg-white p-2 group"
                  style={{
                    height: '48px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <PartnerLogo
                    name={partner.shortName || partner.name}
                    className="text-[10px]"
                  />
                </div>
              ))}
              <div
                className="flex items-center justify-center rounded-xl bg-white p-2"
                style={{
                  height: '48px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <span className="text-[9px] font-['Inter'] font-bold text-gray-400 text-center leading-tight">
                  {TRADING_DATA.oemSupply.extraTextPartner}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote Card */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgb(255, 255, 255)',
              border: '1px solid rgba(0, 0, 0, 0.07)',
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: 'rgb(238, 242, 255)' }}
            >
              <Mail size={22} style={{ color: 'rgb(46, 91, 255)' }} />
            </div>
            <h4 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-2">
              {TRADING_DATA.quoteCard.title}
            </h4>
            <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-5">
              {TRADING_DATA.quoteCard.description}
            </p>
            <a
              href={`mailto:${CONTACT_INFO.salesEmail}`}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,91,255,0.4)] hover:scale-[1.03]"
            >
              <span className="absolute inset-0 brand-gradient-bg" />
              <Mail size={14} className="relative z-10" />
              <span className="relative z-10">{CONTACT_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
