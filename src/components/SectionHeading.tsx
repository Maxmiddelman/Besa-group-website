import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-gold-400" />
          <span
            className={`text-xs font-medium uppercase tracking-[0.2em] ${
              dark ? 'text-gold-300' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display font-medium text-display-md ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            dark ? 'text-navy-200' : 'text-graphite-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
