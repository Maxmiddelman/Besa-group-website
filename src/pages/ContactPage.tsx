import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, ArrowRight, CheckCircle2, Linkedin, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const AREAS_OF_INTEREST = [
  'Project partnership',
  'Battery storage',
  'Solar PV',
  'Financing',
  'Technology supply',
  'Energy trading / market access',
  'Other',
];

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const EMPTY_FORM: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Please enter your name';
  }

  if (!data.email.trim()) {
    errors.email = 'Please enter your email address';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.message.trim()) {
    errors.message = 'Please enter a message';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters';
  }

  return errors;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (touched[id]) {
      const updated = { ...formData, [id]: value };
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [id]: fieldErrors[id as keyof FormErrors] }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field as keyof FormErrors] }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setSubmitted(true);
  };

  const fieldBaseClass =
    'mt-2 w-full border-b bg-transparent py-3 text-base text-navy-950 outline-none transition-colors duration-200 placeholder:text-graphite-300';
  const fieldNormalClass = 'border-navy-950/15 focus:border-gold-400';
  const fieldErrorClass = 'border-red-400 focus:border-red-400';

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                Contact
              </span>
            </div>
            <h1 className="font-display font-light text-navy-950 text-display-xl text-balance max-w-4xl">
              Let&rsquo;s discuss Kosovo&rsquo;s
              <br />
              <span className="font-medium">energy transition</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite-500">
              BESA Group is open to discussions with landowners, grid stakeholders,
              technology suppliers, financing partners, energy companies and
              institutional investors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Contact text */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-navy-950">
                  Get in touch
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite-500">
                  For partnership, investment or project development enquiries, please
                  contact BESA Group.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-navy-950 text-gold-400">
                      <Mail className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-graphite-400">
                        Email
                      </div>
                      <a
                        href="mailto:info@besagroup.com"
                        className="mt-1 block text-base text-navy-950 transition-colors duration-200 hover:text-gold-600"
                      >
                        info@besagroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-navy-950 text-gold-400">
                      <Linkedin className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-graphite-400">
                        LinkedIn
                      </div>
                      <a
                        href="#"
                        className="mt-1 block text-base text-navy-950 transition-colors duration-200 hover:text-gold-600"
                      >
                        BESA Group
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal delay={2}>
                {submitted ? (
                  <div
                    role="status"
                    className="flex h-full min-h-[400px] flex-col items-center justify-center border border-navy-950/8 bg-white p-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center bg-gold-400/10 text-gold-500">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-medium text-navy-950">
                      Thank you
                    </h3>
                    <p className="mt-3 max-w-sm text-base leading-relaxed text-graphite-500">
                      Your message has been received. A member of our team will respond
                      shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData(EMPTY_FORM);
                        setErrors({});
                        setTouched({});
                      }}
                      className="mt-8 text-sm font-semibold text-navy-950 underline underline-offset-4 transition-colors duration-200 hover:text-gold-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="border border-navy-950/8 bg-white p-8 lg:p-10"
                  >
                    <div className="space-y-6">
                      {/* Name + Company */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                          >
                            Name <span className="text-red-400" aria-hidden>*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur('name')}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`${fieldBaseClass} ${errors.name ? fieldErrorClass : fieldNormalClass}`}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                              <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                          >
                            Company
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className={`${fieldBaseClass} ${fieldNormalClass}`}
                            placeholder="Company / organization"
                          />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                          >
                            Email <span className="text-red-400" aria-hidden>*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur('email')}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`${fieldBaseClass} ${errors.email ? fieldErrorClass : fieldNormalClass}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                              <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`${fieldBaseClass} ${fieldNormalClass}`}
                            placeholder="+383 ..."
                          />
                        </div>
                      </div>

                      {/* Area of interest */}
                      <div>
                        <label
                          htmlFor="interest"
                          className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                        >
                          Area of interest
                        </label>
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className={`${fieldBaseClass} ${fieldNormalClass} [&>option]:text-navy-950`}
                        >
                          <option value="" disabled>
                            Select an area
                          </option>
                          {AREAS_OF_INTEREST.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="text-xs font-medium uppercase tracking-wider text-graphite-400"
                        >
                          Message <span className="text-red-400" aria-hidden>*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur('message')}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`${fieldBaseClass} resize-none ${errors.message ? fieldErrorClass : fieldNormalClass}`}
                          placeholder="Tell us about your enquiry..."
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                            <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 bg-navy-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-900"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
