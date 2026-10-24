import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'teal' | 'accent' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-warm-100 text-warm-600',
    teal: 'bg-teal-50 text-teal-700 border border-teal-100',
    accent: 'bg-accent-50 text-accent-700 border border-accent-100',
    outline: 'border border-warm-200 text-warm-500',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
