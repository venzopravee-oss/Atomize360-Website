import { Award, CircleCheck } from 'lucide-react';
import { ABOUT_DATA, PARTNERS_DATA } from '../data/siteData';
import { ACCENT_STYLES, DynamicIcon } from './Icons';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
            {ABOUT_DATA.eyebrow}
          </span>
          <h2
            className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.12]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Deep engineering for a{' '}
            <span className="brand-gradient-text">smarter, sustainable future</span>
          </h2>
          <p className="mt-4 text-[#6B7280] font-['Inter'] leading-relaxed text-[1rem]">
            {ABOUT_DATA.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Photo + Mission Card */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.07)] shadow-sm">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={ABOUT_DATA.image}
                  alt={ABOUT_DATA.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(46, 91, 255, 0.3) 0%, rgba(0, 160, 214, 0.2) 50%, transparent 100%)',
                }}
              />
              <div
                className="absolute bottom-4 left-4 px-4 py-3 rounded-xl backdrop-blur-md shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
              >
                <div
                  className="font-['Outfit'] font-extrabold brand-gradient-text leading-none"
                  style={{ fontSize: '1.5rem' }}
                >
                  {ABOUT_DATA.badgeValue}
                </div>
                <div className="text-xs font-['Inter'] font-medium text-[#374151] mt-1">
                  {ABOUT_DATA.badgeLabel}
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.07)',
                background: 'rgb(248, 250, 252)',
              }}
            >
              <h3 className="font-['Outfit'] font-bold text-[#111827] mb-2">
                {ABOUT_DATA.missionTitle}
              </h3>
              <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-4">
                {ABOUT_DATA.missionBody}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_DATA.missionBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-xs sm:text-sm font-['Inter'] text-[#374151] font-medium"
                  >
                    <CircleCheck
                      size={15}
                      className="shrink-0"
                      style={{ color: 'rgb(52, 168, 83)' }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards + Certifications Bar */}
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {ABOUT_DATA.pillars.map((pillar) => {
                const accent = ACCENT_STYLES[pillar.accent];
                const iconName = pillar.icon === 'shield' ? 'globe' : pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.07)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: accent.tint, color: accent.color }}
                    >
                      <DynamicIcon name={iconName} size={18} />
                    </div>
                    <h4 className="font-['Outfit'] font-bold text-[#111827] text-base mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-['Inter'] text-[#6B7280] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(46, 91, 255, 0.04) 0%, rgba(52, 168, 83, 0.04) 100%)',
                border: '1px solid rgba(46, 91, 255, 0.1)',
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Award size={16} style={{ color: 'rgb(46, 91, 255)' }} />
                  <span className="text-xs font-['Inter'] font-semibold tracking-[0.16em] text-[#111827]">
                    CERTIFICATIONS
                  </span>
                </div>
                <span className="text-xs font-['Inter'] text-[#6B7280] hidden sm:inline">
                  {ABOUT_DATA.certBarNote}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {PARTNERS_DATA.certifications.map((cert) => (
                  <div
                    key={cert.code}
                    className="flex items-center gap-2 text-xs sm:text-sm font-['Inter']"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: cert.dotColor }}
                    />
                    <span className="font-semibold text-[#111827]">{cert.code}</span>
                    <span className="text-[#6B7280]">— {cert.description}</span>
                  </div>
                ))}
                <span className="text-xs font-['Inter'] text-[#6B7280] sm:hidden pt-1">
                  {ABOUT_DATA.certBarNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
