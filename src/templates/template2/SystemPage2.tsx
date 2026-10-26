import { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Gauge, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Workflow, 
  Sparkles,
  Phone,
  Mail,
  Printer,
  Download,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { getProductImage, images } from '@/lib/images';
import { siteConfig } from '@/data/site';
import { EnquiryForm } from '@/components/EnquiryForm';

export function SystemPage2() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll reading progress
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end'],
  });

  const scrollScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <SEO
        title={`${product.name} — Technical Specification | New Logic Automation`}
        description={product.shortDescription}
        path={`/systems/${product.slug}`}
      />

      {/* Scroll Reading Progress Line */}
      <motion.div 
        style={{ scaleX: scrollScale, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 z-50"
      />

      <div ref={pageRef} className="bg-warm-50 text-navy-900 font-sans min-h-screen">
        {/* Template 2 Header Banner */}
        <div className="bg-navy-900 text-white py-2 px-4 text-center text-xs font-medium border-b border-navy-800">
          <span className="inline-flex items-center gap-1.5 text-teal-400 font-bold">
            <Sparkles className="h-3.5 w-3.5" /> Template 2:
          </span>{' '}
          <span className="text-warm-300">Engineering Equipment Specification &amp; CAD Layout Architecture</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-warm-200 py-12 lg:py-16">
          <div 
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" 
            aria-hidden="true" 
          />

          <div className="container-page relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="text-xs text-warm-500 mb-6 flex items-center flex-wrap gap-1.5 font-medium" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/solutions" className="hover:text-teal-600 transition-colors">Solutions</Link>
              <span>/</span>
              <span className="text-warm-400">{product.categoryLabel}</span>
              <span>/</span>
              <span className="text-navy-900 font-semibold">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Header Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-3 py-1 text-xs font-semibold text-navy-800 shadow-subtle">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-teal-600 uppercase tracking-wider">{product.categoryLabel}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
                  {product.name}
                </h1>

                <p className="text-base sm:text-lg text-warm-600 leading-relaxed max-w-2xl">
                  {product.purpose}
                </p>

                {/* Primary Actions */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg">
                    <a href="#enquire">
                      Request Custom GA Drawing <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-navy-200 text-navy-900 hover:bg-warm-100 font-semibold">
                    <a href={`tel:${siteConfig.phoneNumbers[0].number.replace(/\s/g, '')}`}>
                      <Phone className="mr-2 h-4 w-4 text-teal-600" />
                      Engineering Hotline
                    </a>
                  </Button>
                </div>

                {/* Quick Spec Matrix */}
                <div className="pt-4 grid grid-cols-3 gap-3 border-t border-warm-200 text-xs">
                  <div>
                    <p className="font-bold uppercase text-warm-500 text-[10px]">Contact Metallurgy</p>
                    <p className="font-extrabold text-navy-900 text-sm mt-0.5">SS304 / SS316L</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase text-warm-500 text-[10px]">Automation Standard</p>
                    <p className="font-extrabold text-teal-600 text-sm mt-0.5">PLC / SCADA</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase text-warm-500 text-[10px]">Dust Emission</p>
                    <p className="font-extrabold text-navy-900 text-sm mt-0.5">Zero Airborne</p>
                  </div>
                </div>
              </div>

              {/* Machinery Photographic Showcase Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-navy-700/80 bg-navy-900 p-4 sm:p-5 text-white shadow-elevated overflow-hidden">
                  <div className="flex items-center justify-between border-b border-navy-700 pb-3 mb-3 text-xs">
                    <span className="font-mono text-teal-400 font-bold uppercase tracking-wider text-[11px]">
                      General Arrangement • Model CAD
                    </span>
                    <Badge variant="outline" className="border-teal-400/40 text-teal-300 text-[10px]">
                      Hygienic Execution
                    </Badge>
                  </div>

                  <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-navy-950">
                    <img 
                      src={getProductImage(product.slug)}
                      alt={product.name}
                      className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="rounded bg-navy-900/90 px-2 py-1 font-mono text-[10px] text-teal-300 border border-teal-500/30">
                        TAG: NLA-{product.slug.toUpperCase().slice(0, 10)}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="text-warm-200 font-mono text-[10px] bg-navy-900/80 px-2 py-0.5 rounded border border-navy-700">
                        In-House Fabricated
                      </span>
                      <span className="text-emerald-300 font-semibold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Turnkey Commissioned
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-warm-300 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-teal-400" /> Food Contact Compliant
                    </span>
                    <span className="text-teal-400 font-mono text-[11px]">Bhiwandi Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Content Sections */}
        <section className="py-14 lg:py-20">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Main Details Column */}
              <div className="lg:col-span-7 space-y-10">
                {/* How It Operates */}
                <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Workflow className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-bold text-navy-900">Operating Sequence &amp; Process Flow</h2>
                  </div>
                  <div className="space-y-4">
                    {product.howItWorks.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-teal-400 text-xs font-mono font-bold shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-sm text-warm-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-bold text-navy-900">Key Engineering Advantages</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-warm-50 p-3 border border-warm-200/80">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-navy-800">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Components */}
                <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-bold text-navy-900">Engineered Components Included</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.components.map((c, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-warm-700 py-1 border-b border-warm-100 last:border-b-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Fast Consultation Enquiry Form */}
              <div className="lg:col-span-5" id="enquire">
                <div className="sticky top-24 rounded-2xl border border-warm-200 bg-white p-6 sm:p-7 shadow-elevated">
                  <div className="border-b border-warm-100 pb-4 mb-5">
                    <Badge className="bg-teal-50 text-teal-700 border-teal-200 mb-2">Direct OEM RFQ</Badge>
                    <h3 className="text-lg font-bold text-navy-900">Request Plant Layout &amp; Pricing</h3>
                    <p className="text-xs text-warm-500 mt-1">
                      Our chief engineers will prepare tailored GA drawings and capacity calculations for {product.name}.
                    </p>
                  </div>

                  <EnquiryForm preselectedProduct={product.name} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Systems Carousel/Grid */}
        {related.length > 0 && (
          <section className="py-14 bg-warm-100/60 border-t border-warm-200">
            <div className="container-page">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Integrated Modules</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">Related Process Systems</h3>
                </div>
                <Button asChild variant="outline" size="sm" className="border-warm-300">
                  <Link to="/solutions">All Solutions →</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.slice(0, 3).map((item) => (
                  <div key={item.slug} className="group rounded-xl border border-warm-200 bg-white p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="h-36 rounded-lg overflow-hidden bg-warm-100 mb-3">
                      <img 
                        src={getProductImage(item.slug)} 
                        alt={item.name} 
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-warm-500 mt-1 line-clamp-2">{item.shortDescription}</p>
                    <Link to={`/systems/${item.slug}`} className="mt-3 text-xs font-bold text-teal-600 flex items-center gap-1">
                      Technical Spec <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
