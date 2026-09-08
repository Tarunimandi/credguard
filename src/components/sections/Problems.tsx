import { motion } from 'framer-motion';
import { AlertTriangle, CreditCard, Brain, TrendingDown } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Late Payment Penalties',
    desc: 'Unexpected additional charges that add up quickly when a payment deadline is missed.',
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/20',
  },
  {
    icon: CreditCard,
    title: 'Credit Health Impact',
    desc: 'Missed payments may negatively affect your credit history and future loan eligibility.',
    color: 'text-danger',
    bg: 'bg-danger/10',
    border: 'border-danger/20',
  },
  {
    icon: Brain,
    title: 'Financial Stress',
    desc: 'Multiple EMI deadlines become difficult to manage and create ongoing anxiety.',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    border: 'border-accent-purple/20',
  },
  {
    icon: TrendingDown,
    title: 'Poor Financial Planning',
    desc: 'Unexpected expenses can disrupt your monthly payment schedule and budget.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
];

export default function Problems() {
  return (
    <section className="section-pad relative">
      <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-danger/5 blur-[120px]" />

      <div className="container-max relative">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="inline-block rounded-full border border-danger/30 bg-danger/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-danger">
              The Problem
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Missing One EMI Can Create{' '}
              <span className="gradient-text">Bigger Problems.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`group h-full rounded-2xl border ${p.border} ${p.bg} p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.bg} ${p.color} ring-1 ${p.border}`}>
                  <p.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{p.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg font-medium italic text-ink-secondary sm:text-xl">
            "One missed payment can create consequences that last longer than the missed payment itself."
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
