import { forwardRef } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitive.Provider;

const toastViewportVariants = cva(
  'fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-sm sm:bottom-4 sm:right-4 sm:p-0'
);

const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(toastViewportVariants(), className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border p-4 pr-8 shadow-elevated transition-all data-[state=open]:animate-[slide-up_0.3s_ease] data-[state=closed]:animate-[fade-out_0.2s_ease] data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
  {
    variants: {
      variant: {
        default: 'border-warm-200 bg-white text-navy-700',
        success: 'border-teal-200 bg-teal-50 text-teal-800',
        error: 'border-accent-200 bg-accent-50 text-accent-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

const Toast = forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastProps>(
  ({ className, variant, children, ...props }, ref) => {
    const icon =
      variant === 'success' ? <CheckCircle2 className="h-5 w-5 text-teal-600" /> :
      variant === 'error' ? <AlertCircle className="h-5 w-5 text-accent-600" /> :
      null;
    return (
      <ToastPrimitive.Root
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        {icon}
        <div className="flex-1 text-sm font-medium">{children}</div>
        <ToastPrimitive.Close className="absolute right-2 top-2 rounded-md p-1 text-current opacity-50 hover:opacity-100 transition-opacity">
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
    );
  }
);
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription };
