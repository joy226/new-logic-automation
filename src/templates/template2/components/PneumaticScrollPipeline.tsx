import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  Factory, 
  Wind, 
  Scale, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/images';

interface PipelineStage {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  equipmentLinks: { name: string; slug: string }[];
  image: string;
  icon: typeof Factory;
  highlight: string;
}

const stages: PipelineStage[] = [
  {
    step: '01',
    badge: 'Raw Intake & Sifting',
    title: 'Bulk Material Receiving & Contaminant Screening',
    subtitle: 'Flour silos, bag tipping stations & vibrating gyro-screen sifting',
    description: 'Bulk raw flour, maida, and granulated sugar are received from tanker trucks or 50kg bags. Material passes through magnetic separators and high-frequency gyroscreen sifters to eliminate lumps, foreign particles, and moisture agglomerates before entry into storage silos.',
    specs: [
      { label: 'Throughput', value: 'Up to 15 TPH' },
      { label: 'Sanitary Grade', value: 'SS304 / SS316' },
      { label: 'Dust Control', value: 'Integrated Pulse Jet' },
    ],
    equipmentLinks: [
      { name: 'Flour & Maida Handling', slug: 'flour-maida-handling' },
      { name: 'Sepro-Gyroscreen', slug: 'sepro-gyroscreen' },
    ],
    image: images.products['flour-maida-handling'] || images.processReceive,
    icon: Factory,
    highlight: 'Zero dust bag tipping with integrated reverse-pulse filtration',
  },
  {
    step: '02',
    badge: 'Pneumatic Conveying',
    title: 'Enclosed Lean & Dense Phase Pressure Transport',
    subtitle: 'Positive pressure and vacuum pipelines with multi-way diverter valves',
    description: 'Material is fluidized and transferred through stainless steel pipelines using precision rotary airlock valves and positive displacement blowers. Closed-loop pneumatic conveying completely eliminates manual hauling, forklift traffic, airborne contamination, and plant floor dust.',
    specs: [
      { label: 'Transfer Mode', value: 'Lean / Dense Phase' },
      { label: 'Pipeline Distance', value: 'Up to 250 Meters' },
      { label: 'Sanitary Standard', value: 'Food-Grade Gaskets' },
    ],
    equipmentLinks: [
      { name: 'Powder Sugar Handling', slug: 'powder-sugar-handling' },
      { name: 'Pneumatic Conveying', slug: 'flour-maida-handling' },
    ],
    image: images.products['powder-sugar-handling'] || images.categoryDosing,
    icon: Wind,
    highlight: '100% closed loop transfer with multi-destination divert gates',
  },
  {
    step: '03',
    badge: 'Micro & Liquid Dosing',
    title: 'Loss-in-Weight Batching & Multi-Liquid Metering',
    subtitle: 'Precision load-cell weigh hoppers & recipe-controlled PLC metering skids',
    description: 'Dry micro-ingredients (salt, soda, cocoa powder) and high-viscosity liquids (palm oil, liquid glucose, water, lecithin) are metered with gravimetric and Coriolis flow meters. Every batch is precisely dosed according to recipe recipes programmed in the Siemens/Rockwell PLC.',
    specs: [
      { label: 'Batch Accuracy', value: '±0.2% Target' },
      { label: 'Liquids Handled', value: 'Oil, Glucose, Water' },
      { label: 'Control Unit', value: 'PLC + SCADA HMI' },
    ],
    equipmentLinks: [
      { name: 'Multiple Liquid Dosing', slug: 'multiple-liquid-dosing' },
      { name: 'Water Dosing System', slug: 'water-dosing' },
    ],
    image: images.products['multiple-liquid-dosing'] || images.processDose,
    icon: Scale,
    highlight: 'Continuous loss-in-weight load cell monitoring with zero recipe drift',
  },
  {
    step: '04',
    badge: 'Slurry & Cream Prep',
    title: 'High-Shear Emulsification & Temperature-Controlled Feed',
    subtitle: 'Jacketed homogenizers & direct pressurized delivery to dough mixers',
    description: 'Sandwich biscuit cream and dough slurries are blended in double-jacketed temperature-regulated mixing vessels. High-shear emulsifier impellers guarantee consistent droplet dispersion and aeration before automatic transfer to final production mixers.',
    specs: [
      { label: 'Mixer Capacity', value: '100 to 1,500 L' },
      { label: 'Thermal Jacketing', value: 'Hot Water / Chilled' },
      { label: 'CIP Capability', value: 'Full Clean-in-Place' },
    ],
    equipmentLinks: [
      { name: 'Cream Preparation Plant', slug: 'cream-preparation' },
      { name: 'Sugar Grinding Plant', slug: 'sugar-handling' },
    ],
    image: images.products['cream-preparation'] || images.processPrepare,
    icon: Layers,
    highlight: 'Automated recipe discharge directly into continuous production lines',
  },
];

export function PneumaticScrollPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the pipeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  // Smooth spring physics for natural fluid motion (like Jane Street)
  const pipeProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  // Flow indicator position along the vertical pipe
  const pulseTop = useTransform(pipeProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={containerRef}
      className="relative bg-white py-20 lg:py-32 border-b border-warm-200 overflow-hidden"
    >
      {/* Subtle Architectural Drafting Accents */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-warm-50/60" 
        aria-hidden="true" 
      />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <Badge 
            variant="outline" 
            className="border-teal-500/40 bg-teal-50 text-teal-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-teal-600 inline" />
            Scroll-Driven Process Architecture
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            The Closed-Loop <br />
            <span className="text-teal-600">Material Flow Pipeline</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-warm-600 leading-relaxed">
            Follow raw ingredient movement through a modern automated food manufacturing plant. Scroll down to trace the pneumatic pressure transfer from intake silos to high-shear mixing.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-warm-500">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            Scroll to follow continuous pneumatic transfer flow
          </div>
        </div>

        {/* Pipeline Container with Center Track */}
        <div className="relative">
          {/* Central Vertical Pipeline Track (Desktop Center, Mobile Left) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
            {/* Base Hollow Pipe Track */}
            <div className="h-full w-full bg-warm-200 rounded-full" />

            {/* Active Fluid Flow Line (Framer Motion scaleY) */}
            <motion.div
              style={{ scaleY: pipeProgress, transformOrigin: 'top' }}
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-teal-500 via-teal-600 to-teal-400 rounded-full shadow-[0_0_12px_rgba(13,148,136,0.6)]"
            />

            {/* Moving Material Particle / Flow Indicator */}
            <motion.div
              style={{ top: pulseTop }}
              className="absolute -left-1.5 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-teal-500 shadow-[0_0_16px_rgba(13,148,136,1)]"
            >
              <div className="h-full w-full rounded-full bg-white/40 animate-ping" />
            </motion.div>
          </div>

          {/* 4 Interactive Process Stages */}
          <div className="space-y-16 lg:space-y-28 relative z-10">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const Icon = stage.icon;

              return (
                <div 
                  key={stage.step}
                  className={`relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Content Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <motion.div 
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="group rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all"
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between border-b border-warm-100 pb-4 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                            STAGE {stage.step}
                          </span>
                          <span className="text-xs font-semibold text-warm-500 uppercase tracking-wide">
                            {stage.badge}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-teal-600 flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Automated Loop
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-teal-700 transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-medium text-teal-700 mt-1">
                        {stage.subtitle}
                      </p>

                      <p className="mt-3 text-sm text-warm-600 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Technical Spec Chips (ASML Spec Bar Style) */}
                      <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-warm-50 p-3 border border-warm-200/80">
                        {stage.specs.map((spec) => (
                          <div key={spec.label} className="text-center">
                            <p className="text-[10px] uppercase font-bold text-warm-500">{spec.label}</p>
                            <p className="text-xs font-extrabold text-navy-900 mt-0.5">{spec.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Highlight Strip */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-warm-700 bg-teal-50/50 px-3 py-2 rounded-lg border border-teal-100">
                        <ShieldCheck className="h-4 w-4 text-teal-600 shrink-0" />
                        <span className="font-medium text-[11px]">{stage.highlight}</span>
                      </div>

                      {/* Equipment Links */}
                      <div className="mt-5 pt-4 border-t border-warm-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {stage.equipmentLinks.map((eq) => (
                            <Link
                              key={eq.slug}
                              to={`/systems/${eq.slug}`}
                              className="inline-flex items-center text-xs font-semibold text-navy-800 hover:text-teal-600 bg-warm-100 hover:bg-warm-200 px-2.5 py-1 rounded transition-colors"
                            >
                              {eq.name} &rarr;
                            </Link>
                          ))}
                        </div>

                        <Button asChild size="sm" variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-bold text-xs">
                          <Link to="/contact">
                            Request Layout <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Icon (Station along the pipe) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg border-4 border-white transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-teal-400" />
                  </div>

                  {/* Right / Left Illustrated Diagram Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative overflow-hidden rounded-2xl border border-warm-200 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-6 text-white shadow-md"
                    >
                      <div className="flex items-center justify-between border-b border-navy-700 pb-3 mb-4">
                        <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider">
                          CAD Plant Diagram • Stage {stage.step}
                        </span>
                        <Badge variant="outline" className="border-teal-400/40 text-teal-300 text-[10px]">
                          Sanitary SS304/316
                        </Badge>
                      </div>

                      <div className="relative h-48 w-full rounded-xl overflow-hidden bg-navy-950/80 border border-navy-700/60 flex items-center justify-center">
                        <img 
                          src={stage.image}
                          alt={stage.title}
                          className="h-full w-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                          <span className="rounded bg-navy-900/90 px-2 py-1 font-mono text-[10px] text-teal-300 border border-teal-500/30">
                            Flow Direction: &darr; Mix Batch
                          </span>
                          <span className="text-white/80 font-medium text-[11px] flex items-center gap-1">
                            <Gauge className="h-3 w-3 text-teal-400" /> PLC Connected
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-warm-300 pt-1">
                        <span>Zero-Dust Discharge</span>
                        <span className="text-teal-400 font-semibold">Continuous CIP Washable</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Summary CTA */}
        <div className="mt-20 lg:mt-28 text-center rounded-2xl bg-warm-100/70 border border-warm-200 p-8 sm:p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-extrabold text-navy-900">
            Need this closed-loop flow engineered for your facility?
          </h3>
          <p className="mt-2 text-sm text-warm-600 max-w-xl mx-auto">
            Our engineering team prepares custom general arrangement (GA) drawings and pneumatic transfer calculations tailored to your factory height, throughput, and silo locations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link to="/contact">Request Custom GA Layout Drawing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-navy-300 text-navy-900 hover:bg-white font-semibold">
              <Link to="/solutions">Browse Technical Datasheets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
