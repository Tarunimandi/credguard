import { motion } from 'framer-motion';
import { Wallet, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const normalFlow = [
  { label: 'Salary', color: 'text-success' },
  { label: 'Bank Account', color: 'text-accent-blue' },
  { label: 'EMI Payment', color: 'text-accent-cyan' },
];

const problemFlow = [
  { label: 'Unexpected Expense', color: 'text-danger' },
  { label: 'Low Balance', color: 'text-warning' },
  { label: 'EMI Risk', color: 'text-danger' },
];

const credGuardFlow = [
  { label: 'Salary', color: 'text-success' },
  { label: 'EMI Planning', color: 'text-accent-blue' },
  { label: 'EMI Buffer', color: 'text-accent-cyan' },
  { label: 'Payment Readiness', color: 'text-success' },
];

function FlowCard({ flow, title, variant }: { flow: typeof normalFlow; title: string; variant: 'normal' | 'problem' | 'credguard' }) {
  const borderColor =
    variant === 'problem' ? 'border-danger/20 bg-danger/5' :
    variant === 'credguard' ? 'border-success/20 bg-success/5' :
    'border-white/10 bg-white/5';

  return (
    <div className={`rounded-2xl border ${borderColor} p-5`}>
      <h4 className={`font-display text-sm font-bold ${
        variant === 'problem' ? 'text-danger' :
        variant === 'credguard' ? 'text-success' :
        'text-white'
      }`}>{title}</h4>
      <div className="mt-4 flex flex-col items-center gap-2">
        {flow.map((item, i) => (
          <div key={item.label} className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-center justify-center rounded-xl border border-white/10 bg-navy-700/50 px-4 py-2.5 text-sm font-semibold ${item.color}`}
            >
              {item.label}
            </motion.div>
            {i < flow.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowRight size={14} className="rotate-90 text-ink-tertiary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EmiBuffer() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="The EMI Buffer"
          title="Your EMI Buffer."
          highlight="Your Financial Safety Net."
          subtitle="The EMI Buffer is designed to help users plan and maintain a reserve dedicated to upcoming EMI obligations."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <FadeUp>
            <FlowCard flow={normalFlow} title="Normal Situation" variant="normal" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <FlowCard flow={problemFlow} title="Potential Problem" variant="problem" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <FlowCard flow={credGuardFlow} title="CredGuard Concept" variant="credguard" />
          </FadeUp>
        </div>

        {/* Disclaimer */}
        <FadeUp delay={0.3}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-navy-700/40 p-5 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue">
                <Shield size={16} />
              </div>
              <p className="text-xs leading-relaxed text-ink-secondary">
                <span className="font-semibold text-white">Important:</span> CredGuard does not represent itself as a bank or financial institution. Any payment, wallet, banking, investment, or regulated financial functionality would operate through authorized and compliant partners where required.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
