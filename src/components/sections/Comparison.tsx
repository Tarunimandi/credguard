import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const withoutCredGuard = [
  'Multiple EMI dates to remember',
  'Forgotten deadlines',
  'Financial uncertainty',
  'Manual tracking in spreadsheets',
  'Last-minute stress and penalties',
];

const withCredGuard = [
  'Centralized EMI tracking',
  'Smart reminders before deadlines',
  'Financial readiness awareness',
  'EMI Buffer planning tools',
  'Better payment discipline',
];

export default function Comparison() {
  return (
    <section id="why-credguard" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Why CredGuard"
          title="Financial Peace of Mind Starts"
          highlight="With Preparation."
          subtitle="See the difference between managing EMIs the old way and having an intelligent system working for you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Without CredGuard */}
          <FadeUp>
            <div className="h-full rounded-3xl border border-danger/20 bg-danger/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/15">
                  <X size={20} className="text-danger" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Without CredGuard</h3>
              </div>
              <div className="mt-6 space-y-4">
                {withoutCredGuard.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger/15">
                      <X size={14} className="text-danger" />
                    </div>
                    <span className="text-sm text-ink-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* With CredGuard */}
          <FadeUp delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-success/20 bg-gradient-to-br from-success/10 to-accent-cyan/5 p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-success/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15">
                    <Check size={20} className="text-success" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">With CredGuard</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {withCredGuard.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                        <Check size={14} className="text-success" />
                      </div>
                      <span className="text-sm font-medium text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
