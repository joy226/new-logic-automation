import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
}

export function SmartImage({ className, aspectRatio = 'aspect-[4/3]', alt, ...props }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-warm-100', aspectRatio, className)}>
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-warm-200" />
      )}
      {errored ? (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-700">
          <div className="flex flex-col items-center gap-2 text-navy-200">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 3.75h16.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25z" />
            </svg>
            <span className="text-xs font-medium">Image unavailable</span>
          </div>
        </div>
      ) : (
        <img
          {...props}
          alt={alt}
          loading={props.loading ?? 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-500',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
      )}
    </div>
  );
}
