import { useState, useMemo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  ArrowRight, 
  Factory, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  Scale, 
  Clock, 
  PhoneCall, 
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Wind
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { images, getProductImage } from '@/lib/images';
import { InteractivePlantFlow } from './components/InteractivePlantFlow';
import { ClientLogoGridSection } from '@/components/common/ClientLogoGridSection';

export function HomePage2() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Top Reading Progress Line with Spring Physics
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const featuredModules = useMemo(() => {
    if (selectedCategory === 'all') {
      return products.slice(0, 6);
    }
    return products.filter((p) => p.category === selectedCategory).slice(0, 6);
  }, [selectedCategory]);

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
        <span className="text-warm-300">Modern Engineering &amp; Interactive Plant Flow Architecture</span>
      </div>

      {/* Hero Section: Executive Engineering Credibility */}
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
                <span className="truncate">Sanitary SS304/316 OEM • Bhiwandi Works Since 2006</span>
              </div>

              <h1 className="text-[1.45rem] leading-[1.2] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
                Engineered for Uptime, <br />
                <span className="text-teal-500 font-black">Precision &amp; Zero Material Loss</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-warm-600 leading-relaxed max-w-2xl">
                Turnkey pneumatic conveying pipelines, automated ingredient dosing skids, and continuous food processing systems engineered for 24/7 reliability in India's premier bakeries, snack plants, and confectionery factories.
              </p>

              {/* High-Contrast Interactive CTA Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                  <Link to="/contact">
                    Request Plant Layout (GA) Drawing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-navy-200 text-navy-900 hover:bg-warm-100 font-semibold w-full sm:w-auto">
                  <Link to="/solutions">Explore Systems Portfolio</Link>
                </Button>
              </div>

              {/* Elevated Performance Metric Strip */}
              <div className="pt-2 sm:pt-4">
                <div className="grid grid-cols-3 divide-x divide-warm-200 rounded-xl border border-warm-200/80 bg-warm-50/80 p-3 sm:p-4 shadow-subtle">
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">500+</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">Turnkey Installations</p>
                  </div>
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-teal-500 tracking-tight">±0.2%</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">Batch Recipe Lock</p>
                  </div>
                  <div className="px-1.5 sm:px-4 text-center sm:text-left">
                    <p className="text-xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">18+ Yrs</p>
                    <p className="text-[10px] sm:text-xs text-warm-600 font-medium mt-0.5 leading-tight">OEM Engineering</p>
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
                    { step: '02', title: 'Pneumatic Conveying', desc: 'Dense/lean phase pressure transport with zero airborne dust' },
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
                          <span className="text-[10px] font-mono text-warm-400">Zone {s.step}</span>
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

      {/* NEW INTERACTIVE PROCESS FLOW: Replaces vertical scroll pipeline */}
      <InteractivePlantFlow />

      {/* Commercial ROI & Plant Manager Pillars */}
      <section className="py-16 lg:py-24 bg-white border-b border-warm-200">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">The New Logic Advantage</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-1.5">
              Engineered Specifically for Industrial Factory Owners
            </h2>
            <p className="mt-3 text-sm sm:text-base text-warm-600 leading-relaxed">
              Every system is purpose-built in our Bhiwandi fabrication works to solve the practical everyday challenges of food processing: product spillage, manual weighing errors, sanitation audits, and machine downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wind,
                title: 'Zero Material Spillage',
                metric: 'Save 1.5% to 3%',
                desc: 'Closed-loop pneumatic transfer pipelines eliminate airborne dust, floor spillage, and forklift traffic between warehouse and mixing halls.',
              },
              {
                icon: Scale,
                title: '±0.2% Gravimetric Lock',
                metric: 'Zero Recipe Drift',
                desc: 'Precision load-cell loss-in-weight batching and Coriolis mass flow meters remove operator weighing errors and maintain biscuit quality.',
              },
              {
                icon: ShieldCheck,
                title: 'SS304/316 Sanitary Build',
                metric: 'Ra < 0.8 µm Polish',
                desc: 'Certified TIG/orbital welded stainless steel contact parts, food-grade gaskets, and full CIP washdown readiness for clean sanitation audits.',
              },
              {
                icon: Factory,
                title: 'Direct In-House OEM',
                metric: 'Bhiwandi Works',
                desc: 'Direct access to founder & chief automation engineers Sachin and Sagar Tamhane with in-house fabrication, testing, and rapid spare parts.',
              },
            ].map((p, i) => {
              const PIcon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-warm-200 bg-warm-50/70 p-6 shadow-subtle hover:shadow-lg hover:border-teal-500/40 hover:bg-white transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors mb-4">
                    <PIcon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {p.metric}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mt-2.5 group-hover:text-teal-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-warm-600 leading-relaxed mt-2">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Automation Modules with Interactive Category Filter */}
      <section className="py-16 lg:py-24 bg-warm-50 border-b border-warm-200">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Equipment Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Core Automation Modules</h2>
              <p className="text-xs sm:text-sm text-warm-500 mt-1.5">
                Heavy-duty skids engineered in-house for continuous industrial food manufacturing.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: 'All Core Systems' },
                { id: 'dosing-handling', label: 'Dosing & Handling' },
                { id: 'preparation', label: 'Preparation & Mixing' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === c.id
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-warm-200/80 text-navy-800 hover:bg-warm-300'
                  }`}
                >
                  {c.label}
                </button>
              ))}
              <Button asChild variant="outline" size="sm" className="border-warm-300 text-navy-900 hover:bg-white font-semibold ml-1">
                <Link to="/solutions">All 13 Systems <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </Button>
            </div>
          </div>

          {/* Product Cards Grid with Staggered Scroll-In */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredModules.map((item, idx) => (
              <motion.div 
                key={item.slug} 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="group flex flex-col rounded-2xl border border-warm-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-warm-100">
                  <img
                    src={getProductImage(item.slug)}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-md bg-navy-900/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="rounded bg-black/75 backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono text-teal-300 border border-teal-500/30">
                      SS304/316
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-warm-600 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Operating Spec Strip */}
                <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-warm-50 p-2.5 border border-warm-200/70 text-center text-xs">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-warm-500">Operation</p>
                    <p className="font-extrabold text-navy-900 text-[11px] mt-0.5">Continuous CIP</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-warm-500">Automation</p>
                    <p className="font-extrabold text-teal-600 text-[11px] mt-0.5">PLC / SCADA</p>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="mt-5 pt-3.5 border-t border-warm-100 flex items-center justify-between">
                  <Button asChild size="sm" variant="primary" className="text-xs font-bold">
                    <Link to={`/contact?system=${item.slug}`}>
                      Enquire
                    </Link>
                  </Button>

                  <Link
                    to={`/systems/${item.slug}`}
                    className="text-xs font-bold text-navy-800 hover:text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    Technical Details <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Project Execution Lifecycle (4 Steps for Buyers) */}
      <section className="py-16 lg:py-24 bg-white border-b border-warm-200">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">The Commissioning Journey</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-1.5">
              From Initial Floor Plan to Live Commissioning
            </h2>
            <p className="mt-3 text-sm sm:text-base text-warm-600 leading-relaxed">
              We manage the entire project lifecycle in-house—ensuring seamless integration with your existing mixing hall equipment and strict adherence to project deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Plant Survey & Sizing',
                desc: 'We analyze your ingredient bulk densities, particle characteristics, throughput targets, and factory floor constraints.',
              },
              {
                step: '02',
                title: 'GA Layout CAD Drafting',
                desc: 'Our design office prepares comprehensive 2D/3D General Arrangement drawings and pneumatic pressure line calculations.',
              },
              {
                step: '03',
                title: 'In-House Bhiwandi Works',
                desc: 'Heavy stainless steel fabrication, TIG welding, and complete Factory Acceptance Testing (FAT) before dispatch.',
              },
              {
                step: '04',
                title: 'Site Erection & Training',
                desc: 'Our mechanical engineers supervise site installation, piping erection, SCADA integration, and hands-on staff training.',
              },
            ].map((st, i) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl border border-warm-200 bg-warm-50/60 p-6 shadow-subtle"
              >
                <span className="font-mono text-2xl font-black text-teal-500/80">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-navy-900 mt-3">
                  {st.title}
                </h3>
                <p className="text-xs text-warm-600 leading-relaxed mt-2">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Track Record: Partners & Clients Dual Marquee */}
      <ClientLogoGridSection />

      {/* Senior Engineering Consultation & Layout Proposal Callout (Light Theme) */}
      <section className="py-16 lg:py-24 bg-warm-50/70 border-b border-warm-200 relative overflow-hidden">
        {/* Subtle Architectural Coordinate Accents */}
        <div 
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]" 
          aria-hidden="true" 
        />
        
        <div className="container-page relative z-10">
          <div className="rounded-3xl border border-warm-200 bg-white p-6 sm:p-10 lg:p-12 shadow-elevated border-t-4 border-t-teal-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Commercial Proposition & GA Proposal */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-3 py-1 text-xs font-semibold text-navy-800 shadow-subtle">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Engineering Works • Bhiwandi Facility</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-900 leading-tight">
                  Planning a New Line or <br className="hidden sm:inline" />
                  <span className="text-teal-500">Factory Floor Expansion?</span>
                </h2>

                <p className="text-sm sm:text-base text-warm-600 leading-relaxed max-w-xl">
                  Send us your raw material specifications, line throughput targets (TPH), or factory drawings. Our chief engineers prepare an initial General Arrangement (GA) CAD layout drawing and pneumatic line sizing proposal.
                </p>

                {/* 3 Executive Trust Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border border-warm-200 bg-warm-50/70 p-3.5 shadow-subtle">
                    <Clock className="h-4 w-4 text-teal-600 mb-1.5" />
                    <p className="text-xs font-bold text-navy-900">48-Hr Turnaround</p>
                    <p className="text-[11px] text-warm-500 mt-0.5">Initial 2D/3D GA layout CAD drawings</p>
                  </div>
                  <div className="rounded-xl border border-warm-200 bg-warm-50/70 p-3.5 shadow-subtle">
                    <ShieldCheck className="h-4 w-4 text-teal-600 mb-1.5" />
                    <p className="text-xs font-bold text-navy-900">NDA Protected</p>
                    <p className="text-[11px] text-warm-500 mt-0.5">Confidentiality guaranteed on proprietary recipes</p>
                  </div>
                  <div className="rounded-xl border border-warm-200 bg-warm-50/70 p-3.5 shadow-subtle">
                    <Factory className="h-4 w-4 text-teal-600 mb-1.5" />
                    <p className="text-xs font-bold text-navy-900">Direct OEM Leads</p>
                    <p className="text-[11px] text-warm-500 mt-0.5">Zero sales agents; discuss directly with system designers</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                    <Link to="/contact">
                      Request GA Layout Drawing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-navy-200 text-navy-900 hover:bg-warm-100 font-semibold w-full sm:w-auto">
                    <Link to="/about">
                      Explore Our Works &amp; Heritage
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Direct Engineering Hotlines */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-warm-200 bg-warm-50/90 p-5 sm:p-6 shadow-subtle">
                  <div className="flex items-center justify-between border-b border-warm-200 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 text-teal-600" />
                      <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider font-mono">
                        Direct Chief Engineer Access
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      Bhiwandi OEM
                    </span>
                  </div>

                  <p className="text-xs text-warm-600 mb-4 leading-relaxed">
                    Discuss line throughput, pneumatic conveying distances, and dosing recipes directly with our directors:
                  </p>

                  <div className="space-y-3">
                    {/* Sachin Tamhane */}
                    <div className="rounded-xl border border-warm-200 bg-white p-3.5 shadow-subtle hover:border-teal-500/50 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-extrabold text-navy-900">Sachin Tamhane</p>
                          <p className="text-[11px] text-teal-600 font-semibold">Director &amp; Technical Head</p>
                        </div>
                        <span className="text-[10px] font-mono text-warm-500 bg-warm-100 px-2 py-0.5 rounded">18+ Yrs Exp</span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-warm-100">
                        <a 
                          href="tel:+919820646393"
                          className="font-mono text-xs font-bold text-navy-900 hover:text-teal-600 transition-colors flex items-center gap-1.5"
                        >
                          <Phone className="h-3.5 w-3.5 text-teal-600" /> +91 98206 46393
                        </a>
                        <a
                          href="https://wa.me/919820646393?text=Hello%20Sachin,%20we%20are%20planning%20a%20food%20automation%20project%20and%20would%20like%20to%20discuss%20system%20requirements."
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-2.5 py-1 text-[11px] font-bold border border-emerald-200 transition-colors flex items-center gap-1"
                        >
                          <MessageSquare className="h-3 w-3" /> WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Sagar Mallah */}
                    <div className="rounded-xl border border-warm-200 bg-white p-3.5 shadow-subtle hover:border-teal-500/50 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-extrabold text-navy-900">Sagar Mallah</p>
                          <p className="text-[11px] text-teal-600 font-semibold">Operations &amp; Automation Head</p>
                        </div>
                        <span className="text-[10px] font-mono text-warm-500 bg-warm-100 px-2 py-0.5 rounded">Plant Erection</span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-warm-100">
                        <a 
                          href="tel:+919223242803"
                          className="font-mono text-xs font-bold text-navy-900 hover:text-teal-600 transition-colors flex items-center gap-1.5"
                        >
                          <Phone className="h-3.5 w-3.5 text-teal-600" /> +91 92232 42803
                        </a>
                        <a
                          href="https://wa.me/919223242803?text=Hello%20Sagar,%20we%20are%20planning%20a%20food%20automation%20project%20and%20would%20like%20to%20discuss%20system%20requirements."
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-2.5 py-1 text-[11px] font-bold border border-emerald-200 transition-colors flex items-center gap-1"
                        >
                          <MessageSquare className="h-3 w-3" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Works location footer */}
                  <div className="mt-4 pt-3 border-t border-warm-200 flex items-center justify-between text-[11px] text-warm-500">
                    <span className="flex items-center gap-1 truncate max-w-[240px]">
                      <MapPin className="h-3.5 w-3.5 text-teal-600 shrink-0" /> Bhiwandi, Thane, Maharashtra
                    </span>
                    <a 
                      href="mailto:logicequip@gmail.com"
                      className="hover:text-teal-600 transition-colors font-medium text-navy-800 flex items-center gap-1"
                    >
                      <Mail className="h-3.5 w-3.5 text-teal-600" /> Email Inquiry
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
