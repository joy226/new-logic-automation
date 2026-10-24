import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { products } from '@/data/products';

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  systemOfInterest: z.string().optional(),
  requirements: z.string().min(10, 'Please describe your project requirements (at least 10 characters)'),
  privacyAck: z.boolean().refine(v => v === true, 'Please acknowledge the privacy notice to continue'),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  defaultSystem?: string;
  compact?: boolean;
}

export function EnquiryForm({ defaultSystem, compact = false }: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      systemOfInterest: defaultSystem ?? '',
      privacyAck: false,
    },
  });

  const privacyAck = watch('privacyAck');

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitting(true);
    setSubmitError(false);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const subject = encodeURIComponent(`Enquiry from ${data.name} — ${data.company}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone ?? '—'}\nSystem of interest: ${data.systemOfInterest ?? 'General enquiry'}\n\nRequirements:\n${data.requirements}`
      );
      window.location.href = `mailto:logicequip@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
          <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-lg font-bold text-teal-800 mb-1">Enquiry prepared</h3>
        <p className="text-sm text-teal-700 mb-4">
          Your email client should have opened with your enquiry details. If it didn't, please email us directly at logicequip@gmail.com.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="enquiry-name">Name *</Label>
          <Input id="enquiry-name" className="mt-1.5" placeholder="Your full name" {...register('name')} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-accent-600">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="enquiry-company">Company *</Label>
          <Input id="enquiry-company" className="mt-1.5" placeholder="Company name" {...register('company')} aria-invalid={!!errors.company} />
          {errors.company && <p className="mt-1 text-xs text-accent-600">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="enquiry-email">Email *</Label>
          <Input id="enquiry-email" type="email" className="mt-1.5" placeholder="you@company.com" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-accent-600">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="enquiry-phone">Phone</Label>
          <Input id="enquiry-phone" type="tel" className="mt-1.5" placeholder="Optional" {...register('phone')} />
        </div>
      </div>

      <div>
        <Label htmlFor="enquiry-system">System of interest</Label>
        <Select
          defaultValue={defaultSystem ?? ''}
          onValueChange={(v) => setValue('systemOfInterest', v)}
        >
          <SelectTrigger id="enquiry-system" className="mt-1.5">
            <SelectValue placeholder="Select a system (optional)" />
          </SelectTrigger>
          <SelectContent>
            {products.map(p => (
              <SelectItem key={p.slug} value={p.slug}>{p.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="enquiry-requirements">Project requirements *</Label>
        <Textarea id="enquiry-requirements" className="mt-1.5" placeholder="Describe your project, material, capacity, or the system you need..." {...register('requirements')} aria-invalid={!!errors.requirements} />
        {errors.requirements && <p className="mt-1 text-xs text-accent-600">{errors.requirements.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-warm-300 text-teal-500 focus:ring-teal-500"
            {...register('privacyAck')}
          />
          <span className="text-xs text-warm-500">
            I acknowledge that the information I provide will be used by New Logic Automation to respond to my enquiry, in accordance with the privacy policy.
          </span>
        </label>
        {errors.privacyAck && <p className="mt-1 text-xs text-accent-600">{errors.privacyAck.message}</p>}
      </div>

      {submitError && (
        <div className="rounded-lg border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700">
          Something went wrong preparing your enquiry. Please try again or email us directly at logicequip@gmail.com.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Preparing enquiry...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </Button>

      {!compact && (
        <p className="text-center text-xs text-warm-400">
          This form opens your email client with your enquiry details. For direct contact, call or email us using the details above.
        </p>
      )}
    </form>
  );
}
