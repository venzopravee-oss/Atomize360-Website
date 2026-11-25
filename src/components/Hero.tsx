import { ArrowRight, Globe, Shield, TrendingUp, Zap } from 'lucide-react';
import { HERO_DATA } from '../data/siteData';
import { ACCENT_STYLES } from './Icons';
import { Atomize360Logo } from './Logo';

interface HeroProps {
  onNavigate: (targetId: string) => void;
}

const PILL_STYLES = [
  {
    icon: Zap,
    color: 'rgb(46, 91, 255)',
    background: 'rgb(238, 242, 255)',
  },
  {
    icon: Globe,
    color: 'rgb(0, 160, 214)',
    background: 'rgb(224, 245, 253)',
  },
  {
    icon: TrendingUp,
    color: 'rgb(52, 168, 83)',
    background: 'rgb(230, 244, 234)',
  },
  {
    icon: Shield,
    color: 'rgb(243, 108, 33)',
    background: 'rgb(255, 243, 236)',
  },
];

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex flex-col justify-between pt-24 pb-10">
      {/* Subtle engineering grid + radial ambient blurs */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: '600px',
            height: '600px',
            top: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(46, 91, 255, 0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: '500px',
            height: '500px',
            bottom: '0%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(52, 168, 83, 0.07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: '350px',
            height: '350px',
            top: '40%',
            left: '35%',
            background: 'radial-gradient(circle, rgba(0, 160, 214, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6 transition-all duration-700">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Inter'] font-semibold"
                style={{
                  border: '1px solid rgba(46, 91, 255, 0.2)',
                  background: 'rgba(46, 91, 255, 0.05)',
                  color: 'rgb(46, 91, 255)',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: 'rgb(52, 168, 83)' }}
                />
                {HERO_DATA.badge}
              </span>
            </div>

            <div>
              <h1 className="font-['Outfit'] font-extrabold leading-[1.08] tracking-tight">
                <span className="block text-[#111827]">{HERO_DATA.headlineLines[0]}</span>
                <span className="block brand-gradient-text">{HERO_DATA.headlineLines[1]}</span>
                <span className="block">
                  <span className="text-[#111827]">{HERO_DATA.headlineLines[2]} </span>
                  <span className="brand-gradient-text">{HERO_DATA.headlineLines[3]}</span>
                </span>
              </h1>
              <p
                className="mt-5 max-w-lg font-['Inter'] text-[#6B7280] leading-relaxed"
                style={{ fontSize: '1.05rem', fontWeight: 400 }}
              >
                {HERO_DATA.subtitle}
              </p>
            </div>

            {/* 4 Capability Pills */}
            <div className="flex flex-wrap gap-2">
              {HERO_DATA.pills.map((label, idx) => {
                const style = PILL_STYLES[idx];
                const PillIcon = style.icon;
                return (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-['Inter'] font-medium"
                    style={{
                      color: style.color,
                      background: style.background,
                    }}
                  >
                    <PillIcon size={12} />
                    {label}
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="relative group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_6px_28px_rgba(46,91,255,0.38)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span className="absolute inset-0 brand-gradient-animated" />
                <span className="relative z-10">{HERO_DATA.primaryCta}</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl text-sm font-semibold font-['Inter'] transition-all hover:bg-[#f8fafc] hover:border-[rgba(46,91,255,0.3)] hover:text-[#2E5BFF] cursor-pointer"
                style={{
                  color: 'rgb(55, 65, 81)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                {HERO_DATA.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column: Orbital Visual */}
          <div className="relative h-[400px] md:h-[520px] flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float flex items-center justify-center">
              {/* Ambient glowing blobs */}
              <div
                className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
                style={{
                  top: '5%',
                  right: '10%',
                  background: 'rgba(46, 91, 255, 0.12)',
                }}
              />
              <div
                className="absolute w-48 h-48 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
                style={{
                  bottom: '15%',
                  left: '5%',
                  background: 'rgba(52, 168, 83, 0.12)',
                  animationDelay: '1.5s',
                }}
              />
              <div
                className="absolute w-40 h-40 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
                style={{
                  top: '55%',
                  right: '5%',
                  background: 'rgba(243, 108, 33, 0.1)',
                  animationDelay: '3s',
                }}
              />

              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-[3px] animate-spin-slow"
                style={{
                  borderColor:
                    'rgb(46, 91, 255) rgb(0, 160, 214) transparent transparent',
                  animationDuration: '16s',
                }}
              />

              {/* Middle reverse ring */}
              <div
                className="absolute rounded-full border-[3px]"
                style={{
                  inset: '14px',
                  borderColor:
                    'rgb(52, 168, 83) transparent transparent rgb(243, 108, 33)',
                  animation: '22s linear 0s infinite reverse none running spin-slow',
                }}
              />

              {/* Inner ring */}
              <div
                className="absolute rounded-full border-[2px]"
                style={{
                  inset: '28px',
                  borderColor:
                    'transparent rgb(0, 160, 214) rgb(106, 61, 204) transparent',
                  animation: '12s linear 0s infinite normal none running spin-slow',
                }}
              />

              {/* 3 Orbital Dots */}
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  background: 'rgb(46, 91, 255)',
                  boxShadow: 'rgba(46, 91, 255, 0.6) 0px 0px 12px',
                  transform: 'rotate(0deg) translateX(76px) translateY(-50%)',
                }}
              />
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  background: 'rgb(52, 168, 83)',
                  boxShadow: 'rgba(52, 168, 83, 0.6) 0px 0px 12px',
                  transform: 'rotate(120deg) translateX(76px) translateY(-50%)',
                }}
              />
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  background: 'rgb(243, 108, 33)',
                  boxShadow: 'rgba(243, 108, 33, 0.6) 0px 0px 12px',
                  transform: 'rotate(240deg) translateX(76px) translateY(-50%)',
                }}
              />

              {/* Center Logo Circle */}
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-[0_8px_40px_rgba(46,91,255,0.15)] flex items-center justify-center p-4">
                <Atomize360Logo className="scale-90 md:scale-100" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_DATA.stats.map((stat) => {
            const accent = ACCENT_STYLES[stat.accent];
            return (
              <div
                key={stat.label}
                className="relative flex flex-col gap-1 p-5 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group overflow-hidden"
                style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: accent.color }}
                />
                <span
                  className="font-['Outfit'] font-extrabold leading-none"
                  style={{ fontSize: '1.8rem', color: accent.color }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-['Inter'] font-medium text-[#6B7280] mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => onNavigate('partners')}
          className="flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-[#2E5BFF] transition-colors cursor-pointer group"
        >
          <span className="text-[10px] font-['Inter'] font-semibold tracking-[0.22em]">
            SCROLL
          </span>
          <span className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
}
