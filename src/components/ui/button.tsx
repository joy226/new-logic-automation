import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 shadow-subtle hover:shadow-card',
        secondary:
          'bg-navy-700 text-white hover:bg-navy-800 active:bg-navy-900 shadow-subtle',
        outline:
          'border border-navy-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-warm-50 active:bg-warm-100',
        ghost:
          'text-navy-700 hover:bg-warm-100 active:bg-warm-200',
        accent:
          'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-subtle',
        'outline-light':
          'border border-white/30 bg-transparent text-white hover:bg-white/10 active:bg-white/20',
        'solid-light':
          'bg-white text-navy-700 hover:bg-warm-100 active:bg-warm-200 shadow-subtle',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
