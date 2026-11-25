import { useState } from 'react';
import { ArrowRight, CircleCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ACCENT_STYLES, DynamicIcon, type AccentKey } from './Icons';

const SERVICE_ACCENTS: AccentKey[] = [
  'blue', 'cyan', 'green', 'orange', 'purple', 'blue', 'cyan', 'green',
];

const ENGAGEMENT_DOT_COLORS = [
  'rgb(46, 91, 255)',
  'rgb(52, 168, 83)',
  'rgb(243, 108, 33)',
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const services = SERVICES_DATA.services;
  const active = services[activeIdx];
  const activeAccent = activeIdx >= 0 ? ACCENT_STYLES[services[activeIdx].accent as AccentKey] : ACCENT_STYLES['blue'];

  return (
    <section id="services" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
            {SERVICES_DATA.eyebrow}
          </span>
          <h2
            className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.12]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Engineering <span className="brand-gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-[#6B7280] font-['Inter'] leading-relaxed text-[0.95rem]">
            {SERVICES_DATA.subtitle}
          </p>
        </div>

        {/* Desktop: Tab Switcher Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Left: Tab List */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            {services.map((service, idx) => {
              const isActive = idx === activeIdx;
              const accent = ACCENT_STYLES[service.accent as AccentKey];
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group relative overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
                      : 'bg-transparent hover:bg-white/60'
                  }`}
                  style={{
                    border: isActive
                      ? '1px solid rgba(0, 0, 0, 0.06)'
                      : '1px solid transparent',
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full"
                      style={{ background: accent.color }}
                    />
                  )}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      background: isActive ? accent.tint : 'transparent',
                      color: isActive ? accent.color : 'rgb(156, 163, 175)',
                    }}
                  >
                    <DynamicIcon name={service.icon} size={16} />
                  </div>
                  <span
                    className="text-sm font-['Inter'] flex-1 transition-colors"
                    style={{
                      fontWeight: isActive ? 600 : 500,
                      color: isActive
                        ? 'rgb(17, 24, 39)'
                        : 'rgb(107, 114, 128)',
                    }}
                  >
                    {service.title}
                  </span>
                  {isActive && (
                    <ArrowRight
                      size={14}
                      className="ml-auto shrink-0"
                      style={{ color: accent.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-8">
            <div
              className="rounded-2xl overflow-hidden border bg-white"
              style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
            >
              {/* Banner Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 7' }}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(transparent 20%, rgba(${activeAccent.rgb}, 0.133) 60%, rgba(${activeAccent.rgb}, 0.333) 100%)`,
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5">
                  <span
                    className="text-xs mb-1 block font-['JetBrains_Mono'] text-white/70"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {active.eyebrow}
                  </span>
                  <h3
                    className="text-white font-['Outfit'] font-extrabold"
                    style={{ fontSize: '1.4rem' }}
                  >
                    {active.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-6">
                  {active.description}
                </p>
                <div className="mb-4">
                  <span
                    className="text-xs tracking-widest font-['JetBrains_Mono'] font-medium"
                    style={{ color: activeAccent.color }}
                  >
                    {SERVICES_DATA.deliverablesHeading}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {active.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-['Inter'] text-[#374151] leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: activeAccent.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="lg:hidden flex flex-col gap-2">
          {services.map((service, idx) => {
            const isOpen = idx === activeIdx;
            const accent = ACCENT_STYLES[SERVICE_ACCENTS[idx]];
            return (
              <div
                key={service.id}
                className="rounded-xl overflow-hidden border bg-white"
                style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                  className="flex items-center gap-3 w-full px-4 py-3.5 text-left cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isOpen ? accent.tint : 'transparent',
                      color: isOpen ? accent.color : 'rgb(156, 163, 175)',
                    }}
                  >
                    <DynamicIcon name={service.icon} size={16} />
                  </div>
                  <span
                    className="text-sm font-['Inter'] flex-1"
                    style={{
                      fontWeight: isOpen ? 600 : 500,
                      color: isOpen
                        ? 'rgb(17, 24, 39)'
                        : 'rgb(107, 114, 128)',
                    }}
                  >
                    {service.title}
                  </span>
                  <ArrowRight
                    size={14}
                    className={`transition-transform duration-200 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                    style={{ color: isOpen ? accent.color : '#9CA3AF' }}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm font-['Inter'] text-[#374151]"
                        >
                          <CircleCheck
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: accent.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Models Banner */}
        <div
          className="mt-12 p-6 rounded-2xl border"
          style={{
            background:
              'linear-gradient(135deg, rgba(46, 91, 255, 0.03) 0%, rgba(52, 168, 83, 0.03) 100%)',
            borderColor: 'rgba(0, 0, 0, 0.07)',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="lg:min-w-[220px]">
              <h3 className="font-['Outfit'] font-bold text-[#111827] text-base">
                {SERVICES_DATA.engagementBanner.title}
              </h3>
              <p className="text-sm font-['Inter'] text-[#6B7280] mt-0.5">
                {SERVICES_DATA.engagementBanner.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-1 lg:justify-end">
              {SERVICES_DATA.engagementBanner.models.map((model, idx) => (
                <span
                  key={model.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-['Inter'] font-medium text-[#374151]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: ENGAGEMENT_DOT_COLORS[idx] }}
                  />
                  {model.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
