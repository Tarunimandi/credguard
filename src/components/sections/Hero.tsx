import { motion } from 'framer-motion';
import { ArrowRight, Shield, Bell, TrendingUp, Calendar, Wallet, CheckCircle2, AlertCircle } from 'lucide-react';

const floatNotif = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background visuals */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent-purple/10 blur-[120px]" />

      <div className="container-max relative px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold text-accent-cyan"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Early Access — Now Open
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Never Miss an{' '}
              <span className="relative">
                <span className="gradient-text">EMI Again.</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            >
              <span className="gradient-text-subtle">Protect Your Payments. Protect Your Future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg lg:mx-0"
            >
              CredGuard helps you track EMI obligations, build a financial safety buffer, and stay ahead of missed payments — all from one intelligent platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <button
                onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group w-full sm:w-auto"
              >
                Join the Waitlist
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full sm:w-auto"
              >
                Explore How It Works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-6 text-xs text-ink-tertiary lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-accent-cyan" /> Secure by Design
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-success" /> No Credit Score Impact
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp size={14} className="text-accent-blue" /> Financial Discipline
              </span>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-blue/20 via-accent-cyan/10 to-accent-purple/10 blur-2xl" />

            {/* Main dashboard card */}
            <div className="glass-strong relative rounded-3xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-ink-tertiary">Welcome back</p>
                  <p className="text-sm font-semibold text-white">Dashboard Overview</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-success/15 px-3 py-1">
                  <Shield size={12} className="text-success" />
                  <span className="text-xs font-semibold text-success">Protected</span>
                </div>
              </div>

              {/* Circular progress */}
              <div className="my-6 flex items-center justify-center">
                <div className="relative h-32 w-32">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#1B2F4C" strokeWidth="8" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="url(#heroGrad)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="264"
                      initial={{ strokeDashoffset: 264 }}
                      animate={{ strokeDashoffset: 264 - (264 * 92) / 100 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-3xl font-extrabold text-white">92%</span>
                    <span className="text-[10px] text-ink-tertiary">Readiness</span>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-ink-tertiary">
                    <Wallet size={14} />
                    <span className="text-[10px] font-medium uppercase">Upcoming EMI</span>
                  </div>
                  <p className="mt-1.5 font-display text-xl font-bold text-white">₹5,000</p>
                  <p className="text-[10px] text-ink-tertiary">Sep 28</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-ink-tertiary">
                    <Shield size={14} />
                    <span className="text-[10px] font-medium uppercase">EMI Buffer</span>
                  </div>
                  <p className="mt-1.5 font-display text-xl font-bold text-white">₹15,000</p>
                  <p className="text-[10px] text-success">Active</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-ink-tertiary">
                    <Calendar size={14} />
                    <span className="text-[10px] font-medium uppercase">Next Payment</span>
                  </div>
                  <p className="mt-1.5 font-display text-xl font-bold text-white">Sep 28</p>
                  <p className="text-[10px] text-warning">In 3 days</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-ink-tertiary">
                    <TrendingUp size={14} />
                    <span className="text-[10px] font-medium uppercase">Fin. Health</span>
                  </div>
                  <p className="mt-1.5 font-display text-xl font-bold text-white">Good</p>
                  <p className="text-[10px] text-success">Stable</p>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <motion.div
              variants={floatNotif}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -left-6 top-8 animate-float-slow sm:-left-10"
            >
              <div className="glass rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/20">
                    <Bell size={16} className="text-warning" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Upcoming EMI</p>
                    <p className="text-[10px] text-ink-tertiary">In 3 days</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={floatNotif}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -right-4 top-24 animate-float-medium sm:-right-8"
            >
              <div className="glass rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-success/20">
                    <Shield size={16} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Buffer Protected</p>
                    <p className="text-[10px] text-ink-tertiary">₹15,000 reserved</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={floatNotif}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -left-2 bottom-12 animate-float-fast sm:-left-6"
            >
              <div className="glass rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-blue/20">
                    <CheckCircle2 size={16} className="text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Reminder Sent</p>
                    <p className="text-[10px] text-ink-tertiary">Payment alert</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={floatNotif}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.6 }}
              className="absolute -right-2 bottom-8 animate-float-slow sm:-right-4"
            >
              <div className="glass rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-cyan/20">
                    <TrendingUp size={16} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Health: Stable</p>
                    <p className="text-[10px] text-ink-tertiary">On track</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
