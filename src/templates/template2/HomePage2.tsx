import { motion, useScroll, useSpring } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  ArrowRight, 
  Factory, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  ChevronRight,
  Activity,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { images, getProductImage } from '@/lib/images';
import { PneumaticScrollPipeline } from './components/PneumaticScrollPipeline';
import { ClientLogoGridSection } from '@/components/common/ClientLogoGridSection';

export function HomePage2() {
  const featured = products.slice(0, 4);

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="bg-warm-50 text-navy-900 font-sans">
      {/* Top Reading Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 z-50 pointer-events-none"
      />
      {/* Template 2 Concept Header Banner */}
      <div className="bg-navy-900 text-white py-2 px-4 text-center text-xs font-medium border-b border-navy-800/80">
        <span className="inline-flex items-center gap-1.5 text-teal-400 font-bold">
          <Sparkles className="h-3.5 w-3.5" /> Template 2:
        </span>{' '}
        <span className="text-warm-300">Modern Engineering &amp; Scroll-Driven Pneumatic Flow Architecture</span>
      </div>

      {/* Hero Section with Architectural CAD Drafting Guidelines */}
      <section className="relative overflow-hidden bg-white border-b border-warm-200 py-14 lg:py-20">
        {/* Architectural Datum Grid (Subtle ASML-Inspired Coordinate Accents) */}
        <div 
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-warm-50/60" 
          aria-hidden="true" 
        />

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Refined Engineering Heritage Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50/90 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-navy-800 shadow-subtle backdrop-blur-sm max-w-full">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">Precision Food Automation OEM • Bhiwandi Since 2006</span>
              </div>

              <h1 className="text-[1.45rem] leading-[1.2] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
                Engineering Precision for <br />
                <span className="text-teal-500 font-black">Continuous Food Processing</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-warm-600 leading-relaxed max-w-2xl">
                Custom pneumatic conveying pipelines, sanitary liquid batching skids, gravimetric micro-ingredient precision, and closed-loop material conveying designed for zero airborne dust, 24/7 uptime, and strict food hygiene.
              </p>

              {/* High-Contrast Interactive CTA Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                  <Link to="/contact">
                    Request Plant Layout Drawing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-navy-200 text-navy-900 hover:bg-warm-100 font-semibold w-full sm:w-auto">
                  <Link to="/solutions">Browse Technical Catalog</Link>
                </Button>
              </div>

              {/* Elevated Performance Metric Strip */}
              <div className="pt-2 sm:pt-4">
                <div className="grid grid-cols-3 divide-x divide-warm-200 rounded-xl border border-warm-200/80 bg-warm-50/80 p-3 sm:p-4 shadow-subtle">
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">500+</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">Plant Installations</p>
                  </div>
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-teal-500 tracking-tight">±0.2%</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">Dosing Accuracy</p>
                  </div>
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">18+ Yrs</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">OEM Track Record</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Executive CAD Schematic Console */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-navy-700/80 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-5 sm:p-6 text-white shadow-elevated">
                {/* Console Top Header */}
                <div className="flex items-center justify-between border-b border-navy-700/70 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-teal-400" />
                    <span className="text-xs font-mono font-bold tracking-wider text-warm-200 uppercase">
                      Pneumatic Process Circuit
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-500/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Closed Loop Active</span>
                  </div>
                </div>

                {/* Industrial Schematic Machinery Viewport */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-navy-700/80 bg-navy-950 mb-4 group">
                  <img 
                    src={images.products['flour-maida-handling'] || images.hero}
                    alt="Sanitary pneumatic food automation skid"
                    className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                  
                  {/* Schematic HUD Overlays */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="rounded bg-navy-900/90 px-2 py-0.5 font-mono text-[10px] text-teal-300 border border-teal-500/30">
                      SYS-ID: NLA-FLOUR-500
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                    <span className="text-warm-200 font-mono text-[10px] bg-navy-900/80 px-2 py-0.5 rounded border border-navy-700">
                      Conveying Velocity: 22 m/s
                    </span>
                    <span className="text-emerald-300 font-semibold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Zero Dust Emission
                    </span>
                  </div>
                </div>

                {/* 4 Process Sequence Steps */}
                <div className="space-y-2.5">
                  {[
                    { step: '01', title: 'Raw Intake & Screening', desc: 'Flour silos, bag dump stations & vibrating gyroscreen sifting' },
                    { step: '02', title: 'Pneumatic Conveying', desc: 'Dense/lean phase pressure and vacuum transport with zero dust' },
                    { step: '03', title: 'Micro & Liquid Dosing', desc: 'Load-cell loss-in-weight batching with recipe PLC controller' },
                    { step: '04', title: 'Cream & Slurry Prep', desc: 'Jacketed temperature-controlled homogenizers & emulsifiers' },
                  ].map((s) => (
                    <div 
                      key={s.step} 
                      className="flex items-center gap-3 rounded-lg bg-navy-800/60 p-2.5 border border-navy-700/60 hover:border-teal-500/40 hover:bg-navy-800/90 transition-all"
                    >
                      <span className="font-mono text-xs font-bold text-teal-400 bg-navy-950/80 px-2 py-1 rounded border border-teal-500/30">
                        {s.step}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white truncate">{s.title}</h4>
                          <span className="text-[10px] font-mono text-warm-400">PLC Step {s.step}</span>
                        </div>
                        <p className="text-[11px] text-warm-300 truncate mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Console Footer Certifications */}
                <div className="mt-4 pt-3.5 border-t border-navy-700/70 flex items-center justify-between text-xs text-warm-300">
                  <span className="flex items-center gap-1.5 text-warm-200">
                    <ShieldCheck className="h-4 w-4 text-teal-400" /> Sanitary 304/316 SS
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-300 font-mono text-[11px]">
                    <Activity className="h-3.5 w-3.5" /> SCADA Integrated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: Scroll-Driven Material Flow Pipeline Section */}
      <PneumaticScrollPipeline />

      {/* Modular Systems Grid */}
      <section className="py-16 lg:py-24 bg-warm-50 border-b border-warm-200">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Equipment Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Core Automation Modules</h2>
              <p className="text-xs sm:text-sm text-warm-500 mt-2">
                Heavy-duty engineering skids engineered and manufactured in-house for high-volume biscuit, snack, and food production.
              </p>
            </div>
            <Button asChild variant="outline" className="border-warm-300 text-navy-800 hover:bg-white self-start md:self-auto font-semibold">
              <Link to="/solutions">View All 13 Systems <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, idx) => (
              <motion.div 
                key={item.slug} 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group flex flex-col rounded-xl border border-warm-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-teal-500/40 transition-all"
              >
                <div className="relative mb-4 h-44 overflow-hidden rounded-lg bg-warm-100">
                  <img
                    src={getProductImage(item.slug)}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-navy-900/85 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.category === 'dosing-handling' ? 'Dosing & Handling' : 'Preparation'}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs text-warm-500 leading-relaxed flex-1 line-clamp-3">
                  {item.shortDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-warm-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-warm-500 flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-teal-500" /> PLC Integrated
                  </span>
                  <Link
                    to={`/systems/${item.slug}`}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                  >
                    Details <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Track Record: Partners & Clients Dual Marquee */}
      <ClientLogoGridSection />
    </div>
  );
}
