import { ShieldCheck } from 'lucide-react';

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: { icon: 20, text: 'text-lg' },
  md: { icon: 24, text: 'text-xl' },
  lg: { icon: 32, text: 'text-2xl' },
};

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-accent-blue/40 blur-md rounded-lg" />
        <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan p-1">
          <ShieldCheck size={s.icon} className="text-white" strokeWidth={2.5} />
        </div>
      </div>
      {showText && (
        <span className={`font-display font-extrabold tracking-tight text-white ${s.text}`}>
          Cred<span className="text-accent-cyan">Guard</span>
        </span>
      )}
    </div>
  );
}
