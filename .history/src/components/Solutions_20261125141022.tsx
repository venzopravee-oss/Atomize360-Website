import { useState } from 'react';
import { CircleCheck, Minus, Plus } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';
import { ACCENT_STYLES, DynamicIcon, type AccentKey } from './Icons';

export function Solutions() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
            {SOLUTIONS_DATA.eyebrow}
          </span>
          <h2
            className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.12]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Engineered Products &{' '}
            <span className="brand-gradient-text">Turnkey Systems</span>
          </h2>
          <p className="mt-4 text-[#6B7280] font-['Inter'] leading-relaxed text-[0.95rem]">
            {SOLUTIONS_DATA.subtitle}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS_DATA.items.map((item, idx) => {
            const accent = ACCENT_STYLES[item.accent as AccentKey];
            const isExpanded = expandedCards.has(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-lg group"
                style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(transparent 30%, rgba(${accent.rgb}, 0.25) 80%, rgba(${accent.rgb}, 0.5) 100%)`,
                    }}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-['Inter'] font-semibold"
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: accent.color,
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: accent.tint, color: accent.color }}
                    >
                      <DynamicIcon name={item.icon} size={17} />
                    </div>
                    <h3 className="font-['Outfit'] font-bold text-[#111827] text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable details */}
                  <button
                    type="button"
                    onClick={() => toggleCard(item.id)}
                    className="mt-4 flex items-center gap-1.5 text-xs font-['Inter'] font-semibold transition-colors cursor-pointer"
                    style={{ color: accent.color }}
                  >
                    {isExpanded ? (
                      <>
                        <Minus size={13} />
                        Show less
                      </>
                    ) : (
                      <>
                        <Plus size={13} />
                        Key details
                      </>
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? 'max-h-[400px] opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="flex flex-col gap-2.5">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-xs sm:text-sm font-['Inter'] text-[#374151]"
                        >
                          <CircleCheck
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: accent.color }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
