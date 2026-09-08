import { motion } from 'framer-motion';
import { BarChart3, Bell, Shield, CheckCircle2, TrendingUp } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const flowSteps = [
  { icon: BarChart3, label: 'EMI Tracking', color: 'from-accent-blue to-accent-cyan' },
  { icon: Bell, label: 'Smart Reminders', color: 'from-accent-cyan to-accent-blue' },
  { icon: Shield, label: 'EMI Buffer', color: 'from-accent-blue to-accent-purple' },
  { icon: CheckCircle2, label: 'Payment Readiness', color: 'from-accent-purple to-accent-cyan' },
  { icon: TrendingUp, label: 'Better Financial Discipline', color: 'from-accent-cyan to-success' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="How It Works"
          title="Meet Your EMI"
          highlight="Safety System."
          subtitle="CredGuard brings EMI tracking, payment awareness, financial buffers, and intelligent alerts into one unified experience."
        />

        {/* Flow diagram */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2 lg:gap-4">
          {flowSteps.map((step, i) => (
            <FadeUp key={step.label} delay={i * 0.15}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-lg transition-opacity group-hover:opacity-40`} />
                  <div className="glass-strong relative flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color}`}>
                      <step.icon size={20} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-white">{step.label}</span>
                  </div>
                </motion.div>

                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.1 }}
                    className="hidden sm:block"
                  >
                    <div className="relative h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-blue/50 to-accent-cyan/50 lg:w-16">
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                    </div>
                  </motion.div>
                )}
                {i < flowSteps.length - 1 && (
                  <div className="text-accent-cyan/40 sm:hidden">
                    ↓
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
