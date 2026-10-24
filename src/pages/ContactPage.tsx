import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SmartImage } from '@/components/ui/smart-image';
import { EnquiryForm } from '@/components/EnquiryForm';
import { siteConfig } from '@/data/site';
import { images } from '@/lib/images';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact & Request a Quote — New Logic Automation"
        description="Contact New Logic Automation to discuss your material handling, dosing, or preparation system project. Call, email, or submit an enquiry."
        path="/contact"
      />

      {/* Hero */}
      <section className="bg-navy-700 text-white py-16 lg:py-20">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">Contact</span>
          </nav>
          <h1 className="text-h1 font-heading text-white mb-4">Contact & Request a Quote</h1>
          <p className="text-lg text-warm-300 leading-relaxed max-w-2xl">
            Tell us about your project — your material, your process, your capacity requirements. We'll help you identify the right handling, dosing, and preparation systems for your production line.
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
                <h2 className="text-h3 font-heading text-navy-700 mb-4">Contact details</h2>
                <div className="space-y-4">
                  {siteConfig.phoneNumbers.map(p => (
                    <a
                      key={p.number}
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0">
                        <Phone className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-700">{p.name}</p>
                        <p className="text-sm text-warm-500 group-hover:text-teal-600 transition-colors">{p.number}</p>
                      </div>
                    </a>
                  ))}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0">
                      <Mail className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">Email</p>
                      <p className="text-sm text-warm-500 group-hover:text-teal-600 transition-colors">{siteConfig.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 shrink-0">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">Address</p>
                      <p className="text-sm text-warm-500 leading-relaxed">
                        {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
                <p className="text-sm text-teal-800 leading-relaxed">
                  <strong className="font-semibold">Note:</strong> Business hours are not listed pending confirmation from the company. Please contact us by email or phone during your local business hours.
                </p>
              </div>

              <SmartImage
                src={images.contactHeader}
                alt="Industrial equipment and piping"
                aspectRatio="aspect-[16/10]"
                className="rounded-xl shadow-card"
              />
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-warm-200 bg-white p-6 lg:p-8">
                <h2 className="text-h3 font-heading text-navy-700 mb-2">Submit an enquiry</h2>
                <p className="text-sm text-warm-500 mb-6">
                  Fill in the form below. You don't need to know the exact system — a general description of your project is enough to start the conversation.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
