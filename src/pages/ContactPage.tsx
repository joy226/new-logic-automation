import { useSearchParams } from 'react-router-dom';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SmartImage } from '@/components/ui/smart-image';
import { EnquiryForm } from '@/components/EnquiryForm';
import { siteConfig } from '@/data/site';
import { images } from '@/lib/images';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const systemParam = searchParams.get('system') || undefined;

  return (
    <>
      <SEO
        title="Contact Us & Request a Quote — New Logic Automation"
        description="Contact New Logic Automation for industrial material handling, pneumatic conveying, and ingredient dosing inquiries. Direct phone, email, and RFQ form."
        path="/contact"
      />

      {/* Hero */}
      <section className="bg-navy-700 text-white pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">Contact Us</span>
          </nav>
          <h1 className="text-h1 font-heading text-white mb-4">Contact &amp; Request a Quote</h1>
          <p className="text-lg text-warm-300 leading-relaxed max-w-2xl">
            Discuss your material handling, conveying, or preparation requirements with our engineering team. We'll help assess material properties, throughput requirements, and suitable system configurations.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-warm-200 bg-white p-6 lg:p-8">
                <h2 className="text-h3 font-heading text-navy-700 mb-5">Direct contacts</h2>
                <div className="space-y-4">
                  {siteConfig.phoneNumbers.map(p => (
                    <a
                      key={p.number}
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      className="flex items-center gap-3.5 group p-2 -mx-2 rounded-lg hover:bg-warm-50 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Phone className="h-5 w-5 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-700">{p.name}</p>
                        <p className="text-sm font-mono text-warm-600 group-hover:text-teal-600 transition-colors">{p.number}</p>
                      </div>
                    </a>
                  ))}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3.5 group p-2 -mx-2 rounded-lg hover:bg-warm-50 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">General &amp; Technical Enquiries</p>
                      <p className="text-sm font-mono text-warm-600 group-hover:text-teal-600 transition-colors">{siteConfig.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3.5 p-2 -mx-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">Office &amp; Works Address</p>
                      <p className="text-sm text-warm-600 leading-relaxed mt-0.5">
                        {siteConfig.address.line1},<br />
                        {siteConfig.address.line2},<br />
                        {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}, {siteConfig.address.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="rounded-xl border border-warm-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 shrink-0">
                    <Clock className="h-4 w-4 text-teal-600" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-navy-800">Business Hours</h3>
                </div>
                <div className="space-y-2 text-xs text-warm-600">
                  <div className="flex justify-between border-b border-warm-100 pb-2">
                    <span className="font-medium text-navy-700">General Enquiries:</span>
                    <span>{siteConfig.businessHours.general}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-medium text-navy-700">Direct Engineering Line:</span>
                    <span>{siteConfig.businessHours.direct}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-warm-200 bg-white p-4">
                <div className="flex items-start gap-3 text-xs text-warm-500 leading-relaxed">
                  <ShieldCheck className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    Your inquiry details are handled confidentially and reviewed directly by New Logic Automation engineering partners.
                  </span>
                </div>
              </div>

              <SmartImage
                src={images.contactHeader}
                alt="Industrial material handling equipment and stainless steel piping"
                aspectRatio="aspect-[16/10]"
                className="rounded-xl shadow-card"
              />
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-warm-200 bg-white p-6 lg:p-8">
                <h2 className="text-h3 font-heading text-navy-700 mb-2">Submit an enquiry</h2>
                <p className="text-sm text-warm-500 mb-6">
                  Provide brief details about your material, capacity, or plant requirements. You do not need an exact system code — our engineers will review your process and recommend suitable configurations.
                </p>
                <EnquiryForm defaultSystem={systemParam} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
