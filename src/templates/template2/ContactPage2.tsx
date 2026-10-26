import { useSearchParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  ArrowRight,
  Factory,
  MessageSquare
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { EnquiryForm } from '@/components/EnquiryForm';
import { siteConfig } from '@/data/site';
import { Badge } from '@/components/ui/badge';

export function ContactPage2() {
  const [searchParams] = useSearchParams();
  const systemParam = searchParams.get('system') || undefined;

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <SEO
        title="Engineering Consultation & Plant Layout RFQ — New Logic Automation"
        description="Connect directly with New Logic Automation's chief engineers in Bhiwandi, Maharashtra for plant GA layout drawings, pneumatic conveying calculations, and dosing equipment proposals."
        path="/contact"
      />

      {/* Top Reading Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 z-50 pointer-events-none"
      />

      <div className="bg-warm-50 text-navy-900 font-sans min-h-screen">
        {/* Template 2 Header Banner */}
        <div className="bg-navy-900 text-white py-2 px-4 text-center text-xs font-medium border-b border-navy-800">
          <span className="inline-flex items-center gap-1.5 text-teal-400 font-bold">
            <Sparkles className="h-3.5 w-3.5" /> Template 2:
          </span>{' '}
          <span className="text-warm-300">Engineering Consultation &amp; Turnkey Plant Enquiry Architecture</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-warm-200 py-12 lg:py-16">
          <div 
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" 
            aria-hidden="true" 
          />

          <div className="container-page relative z-10">
            <nav className="text-xs text-warm-500 mb-4 flex items-center gap-1.5 font-medium" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-navy-900 font-semibold">Engineering Consultation</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-3.5 py-1 text-xs font-semibold text-navy-800 shadow-subtle mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Direct Chief Engineer Access • No Sales Intermediaries</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
                Discuss Your Food Plant <br className="hidden sm:inline" />
                <span className="text-teal-500">Automation Requirements</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-warm-600 leading-relaxed">
                Send us your factory drawings, material bulk density, line throughput targets, or planned factory expansions. Our senior engineering team in Bhiwandi reviews your application and prepares initial GA drawings and pneumatic transfer sizing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content & RFQ Form Section */}
        <section className="py-12 lg:py-20">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Direct Engineering Hotlines & Technical Assurance */}
              <div className="lg:col-span-5 space-y-6">
                {/* Engineering Leadership Direct Contacts */}
                <div className="rounded-2xl border border-warm-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-teal-600" /> Chief Automation Engineers
                  </h2>

                  <div className="space-y-3.5">
                    {siteConfig.phoneNumbers.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.number.replace(/\s/g, '')}`}
                        className="group flex items-center justify-between rounded-xl border border-warm-100 bg-warm-50/80 p-3.5 hover:border-teal-500/50 hover:bg-white transition-all"
                      >
                        <div>
                          <p className="text-xs font-bold text-navy-900">{p.name}</p>
                          <p className="text-xs text-warm-500 mt-0.5">{p.role}</p>
                          <p className="text-sm font-extrabold text-teal-600 group-hover:text-teal-700 mt-1 font-mono">
                            {p.number}
                          </p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                          <Phone className="h-4 w-4" />
                        </div>
                      </a>
                    ))}

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-center justify-between rounded-xl border border-warm-100 bg-warm-50/80 p-3.5 hover:border-teal-500/50 hover:bg-white transition-all"
                    >
                      <div>
                        <p className="text-xs font-bold text-navy-900">Technical Proposals &amp; CAD</p>
                        <p className="text-xs text-warm-500 mt-0.5">Send project specifications &amp; DWG files</p>
                        <p className="text-sm font-extrabold text-teal-600 group-hover:text-teal-700 mt-1 font-mono">
                          {siteConfig.email}
                        </p>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Manufacturing Plant Location Card */}
                <div className="rounded-2xl border border-warm-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <Factory className="h-4 w-4 text-teal-600" /> Manufacturing Works &amp; HQ
                  </h3>
                  <div className="text-xs text-warm-600 leading-relaxed space-y-1">
                    <p className="font-semibold text-navy-800">{siteConfig.address.company}</p>
                    <p>{siteConfig.address.street}</p>
                    <p>{siteConfig.address.area}, {siteConfig.address.city} – {siteConfig.address.pincode}</p>
                    <p>{siteConfig.address.state}, {siteConfig.address.country}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-100 flex items-center justify-between text-[11px] text-warm-500">
                    <span className="flex items-center gap-1 font-semibold text-navy-900">
                      <MapPin className="h-3.5 w-3.5 text-teal-600" /> Strategic Hub
                    </span>
                    <span>35 km from Mumbai Airport</span>
                  </div>
                </div>

                {/* Consultation Assurance */}
                <div className="rounded-2xl border border-warm-200 bg-teal-50/40 p-5 border-teal-100">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">Confidential Engineering Review</h4>
                      <p className="text-[11px] text-warm-600 mt-1 leading-relaxed">
                        All recipe parameters, factory floor dimensions, and throughput quantities are kept strictly confidential under standard mutual NDA terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical RFQ Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-card">
                  <div className="border-b border-warm-100 pb-4 mb-6">
                    <Badge className="bg-teal-50 text-teal-700 border-teal-200 mb-2">Technical Specification Form</Badge>
                    <h2 className="text-xl font-bold text-navy-900">Request Equipment GA Drawing &amp; Budget</h2>
                    <p className="text-xs text-warm-500 mt-1">
                      Fill out your contact and project parameters below. You will receive an encoded confirmation review draft.
                    </p>
                  </div>

                  <EnquiryForm preselectedProduct={systemParam} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
