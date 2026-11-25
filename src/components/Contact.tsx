import { useState, type FormEvent } from 'react';
import { ArrowRight, CircleCheck, Mail, MapPin, Send, Users } from 'lucide-react';
import { CONTACT_DATA } from '../data/siteData';

interface ContactProps {
  onNavigate?: (targetId: string) => void;
}

export function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Full name is required';
    if (!formState.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      errs.email = 'Please enter a valid email';
    if (!formState.subject.trim()) errs.subject = 'Subject is required';
    if (!formState.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const errs = validate();
  setErrors(errs);

  if (Object.keys(errs).length !== 0) return;

  setIsSending(true);
  setSubmitError('');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formState.name,
        company: formState.company,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setFormState({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setSubmitError(result.message || 'Message could not be sent. Please try again.');
    }
  } catch {
    setSubmitError('Network error. Please try again.');
  } finally {
    setIsSending(false);
  }
};

  const CONTACT_ICONS = [Mail, Users, MapPin];
  const CONTACT_ACCENT_COLORS = [
    { color: 'rgb(46, 91, 255)', tint: 'rgb(238, 242, 255)' },
    { color: 'rgb(52, 168, 83)', tint: 'rgb(230, 244, 234)' },
    { color: 'rgb(243, 108, 33)', tint: 'rgb(255, 243, 236)' },
  ];

  void _onNavigate;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="block text-xs font-['Inter'] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-3">
            {CONTACT_DATA.eyebrow}
          </span>
          <h2
            className="font-['Outfit'] font-extrabold text-[#111827] leading-[1.12]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            Contact &{' '}
            <span className="brand-gradient-text">Careers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Get in Touch + Join Our Team */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Get in Touch */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgb(248, 250, 252)',
                border: '1px solid rgba(0, 0, 0, 0.07)',
              }}
            >
              <h3 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-5">
                {CONTACT_DATA.getInTouch.title}
              </h3>
              <div className="flex flex-col gap-4">
                {CONTACT_DATA.getInTouch.items.map((item, idx) => {
                  const IconComp = CONTACT_ICONS[idx];
                  const accentStyle = CONTACT_ACCENT_COLORS[idx];
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: accentStyle.tint, color: accentStyle.color }}
                      >
                        <IconComp size={16} />
                      </div>
                      <div>
                        <span className="block text-xs font-['JetBrains_Mono'] font-medium text-[#9CA3AF] tracking-wider uppercase">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block text-sm font-['Inter'] font-semibold transition-colors hover:opacity-80 mt-0.5"
                            style={{ color: accentStyle.color }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="block text-sm font-['Inter'] font-semibold text-[#111827] mt-0.5">
                            {item.value}
                          </span>
                        )}
                        <span className="text-xs font-['Inter'] text-[#6B7280]">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Join Our Team */}
            <div
              className="p-6 rounded-2xl border overflow-hidden relative"
              style={{
                background:
                  'linear-gradient(135deg, rgba(46, 91, 255, 0.04) 0%, rgba(52, 168, 83, 0.04) 100%)',
                borderColor: 'rgba(46, 91, 255, 0.12)',
              }}
            >
              <h3 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-3">
                {CONTACT_DATA.careers.title}
              </h3>
              <p className="text-sm font-['Inter'] text-[#6B7280] leading-relaxed mb-4">
                {CONTACT_DATA.careers.body}
              </p>
              <ul className="flex flex-col gap-2.5 mb-5">
                {CONTACT_DATA.careers.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm font-['Inter'] text-[#374151] font-medium"
                  >
                    <CircleCheck
                      size={14}
                      className="shrink-0"
                      style={{ color: 'rgb(52, 168, 83)' }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={CONTACT_DATA.careers.ctaHref}
                className="inline-flex items-center gap-1.5 text-sm font-['Inter'] font-semibold transition-colors hover:opacity-80"
                style={{ color: 'rgb(46, 91, 255)' }}
              >
                {CONTACT_DATA.careers.ctaLabel}
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: 'rgba(0, 0, 0, 0.07)' }}
            >
              <div className="h-1 brand-gradient-animated" />
              <div className="p-6 sm:p-8">
                <h3 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-6">
                  {CONTACT_DATA.form.title}
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: 'rgb(230, 244, 234)' }}
                    >
                      <CircleCheck size={32} style={{ color: 'rgb(52, 168, 83)' }} />
                    </div>
                    <h4 className="font-['Outfit'] font-bold text-[#111827] text-lg mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-sm font-['Inter'] text-[#6B7280] mb-5 max-w-sm mx-auto">
                      Thank you for reaching out. Our engineering team will review
                      your inquiry and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-['Inter'] font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ color: 'rgb(46, 91, 255)' }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        label="Full Name"
                        placeholder="Your name"
                        value={formState.name}
                        error={errors.name}
                        onChange={(v) =>
                          setFormState((s) => ({ ...s, name: v }))
                        }
                      />
                      <FormField
                        label="Company"
                        placeholder="Organization name"
                        value={formState.company}
                        onChange={(v) =>
                          setFormState((s) => ({ ...s, company: v }))
                        }
                      />
                    </div>
                    <FormField
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      error={errors.email}
                      onChange={(v) =>
                        setFormState((s) => ({ ...s, email: v }))
                      }
                    />
                    <FormField
                      label="Subject"
                      placeholder="Project inquiry, quote request..."
                      value={formState.subject}
                      error={errors.subject}
                      onChange={(v) =>
                        setFormState((s) => ({ ...s, subject: v }))
                      }
                    />
                    <FormField
                      label="Message"
                      placeholder="Describe your project, requirements, or inquiry..."
                      value={formState.message}
                      error={errors.message}
                      onChange={(v) =>
                        setFormState((s) => ({ ...s, message: v }))
                      }
                      multiline
                    />
                    {submitError && (
                      <p className="text-sm text-red-500 font-['Inter']">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="relative group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold font-['Inter'] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,91,255,0.4)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 brand-gradient-animated" />
                      <span className="relative z-10">
                        {isSending ? 'Sending...' : CONTACT_DATA.form.submitLabel}
                      </span>
                      <Send size={15} className="relative z-10" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  placeholder,
  value,
  error,
  onChange,
  type = 'text',
  multiline = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (val: string) => void;
  type?: string;
  multiline?: boolean;
}) {
  const inputClasses =
    "w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 font-['Inter'] bg-[#f8fafc] focus:bg-white focus:border-[#2E5BFF]/40 focus:shadow-[0_0_0_3px_rgba(46,91,255,0.08)]";

  return (
    <div>
      <label className="block text-sm font-['Inter'] font-medium text-[#374151] mb-1.5">
        {label}
      </label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={`${inputClasses} resize-none`}
          style={{
            borderWidth: '1.5px',
            borderColor: error
              ? 'rgb(239, 68, 68)'
              : 'rgba(0, 0, 0, 0.08)',
            color: 'rgb(17, 24, 39)',
          }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          style={{
            borderWidth: '1.5px',
            borderColor: error
              ? 'rgb(239, 68, 68)'
              : 'rgba(0, 0, 0, 0.08)',
            color: 'rgb(17, 24, 39)',
          }}
        />
      )}
      {error && (
        <p className="text-xs font-['Inter'] text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
