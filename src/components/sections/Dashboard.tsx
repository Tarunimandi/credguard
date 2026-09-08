import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Wallet, Shield, ArrowUpRight, Sun } from 'lucide-react';
import { FadeUp, AnimatedCounter } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const upcomingPayments = [
  { name: 'Car Loan', amount: '₹8,000', due: 'September 25', color: 'text-accent-blue', days: '3 days' },
  { name: 'Laptop EMI', amount: '₹5,000', due: 'September 28', color: 'text-warning', days: '6 days' },
  { name: 'Personal Loan', amount: '₹5,500', due: 'October 2', color: 'text-accent-cyan', days: '10 days' },
];

const monthlyData = [12, 15, 14, 18, 16, 19, 18];
const bufferData = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export default function Dashboard() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="The Dashboard"
          title="Your Entire EMI Life."
          highlight="One Dashboard."
          subtitle="A realistic preview of the CredGuard experience — everything you need to manage your financial obligations, in one place."
        />

        <FadeUp delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-navy-800/80 shadow-2xl backdrop-blur-xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-navy-700/50 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-danger/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
              </div>
              <span className="text-xs text-ink-tertiary">credguard.app/dashboard</span>
            </div>

            <div className="p-6 lg:p-8">
              {/* Welcome */}
              <FadeUp>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan">
                      <Sun size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">Good Morning, Tarun 👋</h3>
                      <p className="text-xs text-ink-tertiary">Here's your financial overview for today</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 rounded-full bg-success/15 px-3 py-1.5 sm:flex">
                    <Shield size={14} className="text-success" />
                    <span className="text-xs font-semibold text-success">Protection Active</span>
                  </div>
                </div>
              </FadeUp>

              {/* EMI Summary cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Total Monthly EMI', value: 18500, prefix: '₹', icon: Wallet, color: 'text-accent-blue', bg: 'bg-accent-blue/10' },
                  { label: 'Upcoming Payments', value: 3, prefix: '', icon: Calendar, color: 'text-warning', bg: 'bg-warning/10' },
                  { label: 'EMI Buffer', value: 55500, prefix: '₹', icon: Shield, color: 'text-success', bg: 'bg-success/10' },
                  { label: 'Payment Readiness', value: 92, prefix: '', suffix: '%', icon: TrendingUp, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
                ].map((stat, i) => (
                  <FadeUp key={stat.label} delay={i * 0.1}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
                          <stat.icon size={16} />
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-ink-tertiary">{stat.label}</p>
                      <p className="mt-1 font-display text-2xl font-bold text-white">
                        <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix || ''} />
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {/* Upcoming Payments */}
                <FadeUp delay={0.1} className="lg:col-span-2">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-sm font-bold text-white">Upcoming Payments</h4>
                      <span className="text-xs text-ink-tertiary">3 scheduled</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {upcomingPayments.map((p, i) => (
                        <motion.div
                          key={p.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-navy-700/30 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.color === 'text-accent-blue' ? 'bg-accent-blue/15' : p.color === 'text-warning' ? 'bg-warning/15' : 'bg-accent-cyan/15'} ${p.color}`}>
                              <Wallet size={14} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">{p.name}</p>
                              <p className="text-xs text-ink-tertiary">Due: {p.due}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-white">{p.amount}</p>
                            <p className={`text-xs ${p.color}`}>{p.days}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* Financial Protection */}
                <FadeUp delay={0.2}>
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-success/10 to-accent-cyan/5 p-5">
                    <h4 className="font-display text-sm font-bold text-white">Financial Protection</h4>
                    <div className="mt-4 flex flex-col items-center">
                      <div className="relative h-24 w-24">
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#1B2F4C" strokeWidth="7" />
                          <motion.circle
                            cx="50" cy="50"
                            r="40"
                            fill="none"
                            stroke="#22C55E"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray="251"
                            initial={{ strokeDashoffset: 251 }}
                            whileInView={{ strokeDashoffset: 251 - (251 * 85) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="font-display text-xl font-bold text-success">Healthy</span>
                        </div>
                      </div>
                      <div className="mt-4 w-full space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-ink-tertiary">Buffer Status</span>
                          <span className="font-semibold text-success">Healthy</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-ink-tertiary">Coverage</span>
                          <span className="font-semibold text-white">3 Months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Charts row */}
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {/* Monthly EMI chart */}
                <FadeUp delay={0.1} className="lg:col-span-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-sm font-bold text-white">Monthly EMI Trend</h4>
                      <span className="flex items-center gap-1 text-xs text-success">
                        <ArrowUpRight size={12} /> +8.2%
                      </span>
                    </div>
                    <div className="mt-6 flex h-32 items-end justify-between gap-2">
                      {monthlyData.map((val, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(val / 20) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-accent-blue/40 to-accent-cyan/80"
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-ink-tertiary">
                      {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map(m => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* Buffer growth */}
                <FadeUp delay={0.2}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h4 className="font-display text-sm font-bold text-white">Buffer Growth</h4>
                    <div className="mt-4 flex h-32 items-end justify-between gap-1.5">
                      {bufferData.map((val, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(val / 55) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.06 }}
                          className="flex-1 rounded-t bg-gradient-to-t from-success/30 to-success/80"
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-ink-tertiary">₹10K → ₹55K over 10 months</p>
                  </div>
                </FadeUp>
              </div>

              {/* Payment calendar */}
              <FadeUp delay={0.3}>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-display text-sm font-bold text-white">Payment Calendar — September 2026</h4>
                  <div className="mt-4 grid grid-cols-7 gap-2 text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <span key={i} className="text-[10px] font-medium text-ink-tertiary">{d}</span>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => {
                      const day = i + 1;
                      const isPayment = [25, 28].includes(day);
                      const isToday = day === 22;
                      return (
                        <div
                          key={day}
                          className={`flex h-8 items-center justify-center rounded-lg text-xs ${
                            isPayment
                              ? 'bg-accent-blue/20 font-bold text-accent-cyan ring-1 ring-accent-blue/40'
                              : isToday
                              ? 'bg-white/10 font-bold text-white'
                              : 'text-ink-secondary'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-[10px] text-ink-tertiary">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-accent-cyan ring-1 ring-accent-blue/40" /> Payment Due
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-white/20" /> Today
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
