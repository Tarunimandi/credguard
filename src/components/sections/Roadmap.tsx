import { motion } from 'framer-motion';
import { Search, Rocket, Handshake, TrendingUp } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const phases = [
  {
    num: '01',
    phase: 'Foundation',
    title: 'Research & Product Validation',
    items: ['EMI tracking concept', 'User research', 'MVP development', 'Financial workflow design'],
    icon: Search,
    status: 'In Progress',
    statusColor: 'text-warning bg-warning/10',
  },
  {
    num: '02',
    phase: 'MVP',
    title: 'Core Product Launch',
    items: ['EMI dashboard', 'Payment reminders', 'Financial calendar', 'EMI Buffer planning tools'],
    icon: Rocket,
    status: 'Next',
    statusColor: 'text-accent-blue bg-accent-blue/10',
  },
  {
    num: '03',
    phase: 'Partnerships',
    title: 'Financial Ecosystem Integration',
    items: ['Authorized payment partners', 'Banking integrations where applicable', 'Credit-related integrations'],
    icon: Handshake,
    status: 'Planned',
    statusColor: 'text-accent-cyan bg-accent-cyan/10',
  },
  {
    num: '04',
    phase: 'Scale',
    title: 'Expand the Platform',
    items: ['Advanced analytics', 'AI-powered financial insights', 'Personalized financial planning'],
    icon: TrendingUp,
    status: 'Future',
    statusColor: 'text-accent-purple bg-accent-purple/10',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Roadmap"
          title="Building the Future of"
          highlight="EMI Management."
          subtitle="A structured plan that takes CredGuard from concept to a comprehensive financial platform."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, i) => (
            <FadeUp key={phase.num} delay={i * 0.15}>
              <div className="group relative h-full">
                {/* Connecting line on desktop */}
                {i < phases.length - 1 && (
                  <div className="absolute top-12 -right-3 hidden h-0.5 w-6 bg-gradient-to-r from-accent-blue/30 to-transparent lg:block" />
                )}

                <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:border-accent-blue/30">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 ring-1 ring-white/10">
                      <phase.icon size={22} className="text-accent-cyan" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-cyan">Phase {phase.num}</span>
                    <h3 className="mt-1 font-display text-base font-bold text-white">{phase.phase}</h3>
                    <p className="mt-1 text-xs text-ink-tertiary">{phase.title}</p>
                  </div>

                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {phase.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-center gap-2 text-xs text-ink-secondary"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent-cyan" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-tertiary">
            Subject to regulatory requirements and partner availability.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
