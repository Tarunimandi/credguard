import { FadeUp } from '@/components/anim/FadeUp';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <FadeUp>
          <span className="inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            {eyebrow}
          </span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
