import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  Factory, 
  Wind, 
  Scale, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/images';

export interface PlantStage {
  id: string;
  step: string;
  shortLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  businessImpact: string;
  specs: { label: string; value: string }[];
  equipmentLinks: { name: string; slug: string }[];
  image: string;
  icon: typeof Factory;
  telemetry: {
    systemTag: string;
    flowVelocity: string;
    dustRating: string;
  };
}

export const plantStages: PlantStage[] = [
  {
    id: 'intake',
    step: '01',
    shortLabel: 'Intake & Sifting',
    badge: 'Raw Material Receiving',
    title: 'Bulk Material Receiving & Contaminant Sifting',
    subtitle: 'Flour silos, bag dump stations & vibrating gyroscreen sifting',
    description: 'Bulk raw flour, maida, and granulated sugar are received from bulk road tankers or 50kg bags. Material passes through magnetic separators and high-frequency gyroscreen sifters to eliminate lumps and foreign particles before pneumatic intake.',
    businessImpact: 'Prevents downstream equipment blockages, guarantees food safety audit compliance, and eliminates airborne flour dust during bag tipping.',
    specs: [
      { label: 'Throughput', value: 'Up to 15,000 kg/hr' },
      { label: 'Screen Mesh', value: 'Food-Grade SS Sieve' },
      { label: 'Filtration', value: 'Reverse-Pulse Jet' },
    ],
    equipmentLinks: [
      { name: 'Flour & Maida Handling', slug: 'flour-maida-handling' },
      { name: 'Sepro-Gyroscreen', slug: 'sepro-gyroscreen' },
    ],
    image: images.products['flour-maida-handling'] || images.processReceive,
    icon: Factory,
    telemetry: {
      systemTag: 'INTAKE-SILO-01',
      flowVelocity: '15 TPH Capacity',
      dustRating: '100% Dust Free',
    },
  },
  {
    id: 'conveying',
    step: '02',
    shortLabel: 'Pneumatic Conveying',
    badge: 'Closed-Loop Pipeline',
    title: 'Enclosed Lean & Dense Phase Pressure Transport',
    subtitle: 'Positive pressure pipelines with multi-way diverter valves',
    description: 'Material is fluidized and transferred through sanitary stainless steel pipelines using precision rotary airlock valves and positive displacement blowers. Closed-loop pneumatic conveying completely replaces manual sack handling and forklift traffic.',
    businessImpact: 'Saves 1.5% to 3% in raw ingredient spillage, frees plant floor space, and eliminates forklift traffic across mixing halls.',
    specs: [
      { label: 'Transfer Mode', value: 'Lean / Dense Phase' },
      { label: 'Distance', value: 'Up to 250 Meters' },
      { label: 'Pipe Metallurgy', value: 'Sanitary SS304/316' },
    ],
    equipmentLinks: [
      { name: 'Powder Sugar Handling', slug: 'powder-sugar-handling' },
      { name: 'Pneumatic Conveying', slug: 'flour-maida-handling' },
    ],
    image: images.products['powder-sugar-handling'] || images.categoryDosing,
    icon: Wind,
    telemetry: {
      systemTag: 'PNEUMA-LINE-02',
      flowVelocity: 'Velocity: 22 m/s',
      dustRating: 'Zero Floor Spillage',
    },
  },
  {
    id: 'dosing',
    step: '03',
    shortLabel: 'Precision Dosing',
    badge: 'Gravimetric Recipe Lock',
    title: 'Loss-in-Weight Batching & Multi-Liquid Metering',
    subtitle: 'High-precision load-cell hoppers & Coriolis mass flow metering skids',
    description: 'Dry micro-ingredients (salt, soda, cocoa powder) and high-viscosity liquids (palm oil, liquid glucose, water, lecithin) are metered with gravimetric and Coriolis flow meters. Every batch is precisely dosed according to PLC recipe targets.',
    businessImpact: 'Achieves ±0.2% dosing precision, locking in product texture and taste while eliminating manual operator weighing errors.',
    specs: [
      { label: 'Batch Accuracy', value: '±0.2% Target' },
      { label: 'Liquids Handled', value: 'Oil, Glucose, Water' },
      { label: 'Control Unit', value: 'Siemens / Rockwell PLC' },
    ],
    equipmentLinks: [
      { name: 'Multiple Liquid Dosing', slug: 'multiple-liquid-dosing' },
      { name: 'Water Dosing System', slug: 'water-dosing' },
    ],
    image: images.products['multiple-liquid-dosing'] || images.processDose,
    icon: Scale,
    telemetry: {
      systemTag: 'BATCH-SKID-03',
      flowVelocity: 'Accuracy: ±0.2%',
      dustRating: 'Gravimetric Lock',
    },
  },
  {
    id: 'preparation',
    step: '04',
    shortLabel: 'Homogenization & Cream',
    badge: 'Continuous High-Shear',
    title: 'High-Shear Emulsification & Temperature Feed',
    subtitle: 'Jacketed homogenizers & direct pressurized delivery to dough mixers',
    description: 'Sandwich biscuit cream and dough slurries are blended in double-jacketed temperature-regulated mixing vessels. High-shear emulsifier impellers guarantee consistent droplet dispersion and aeration before automatic transfer to final production lines.',
    businessImpact: 'Maintains ideal fat crystallization and cream viscosity 24/7 with automated recipe discharge directly to sandwiching machines.',
    specs: [
      { label: 'Mixer Capacity', value: '100 to 1,500 L' },
      { label: 'Thermal Jacketing', value: 'Hot Water / Chilled' },
      { label: 'Sanitation', value: 'Full CIP Washable' },
    ],
    equipmentLinks: [
      { name: 'Cream Preparation Plant', slug: 'cream-preparation' },
      { name: 'Sugar Grinding Plant', slug: 'sugar-handling' },
    ],
    image: images.products['cream-preparation'] || images.processPrepare,
    icon: Layers,
    telemetry: {
      systemTag: 'HOMOGENIZER-04',
      flowVelocity: 'Thermal Jacketed',
      dustRating: 'Full CIP Cleanable',
    },
  },
];

export function InteractivePlantFlow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Subtle auto-advance every 7 seconds if user is not hovering/interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % plantStages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStage = plantStages[activeIdx];

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-white py-16 lg:py-24 border-b border-warm-200 overflow-hidden"
    >
      {/* Subtle Architectural Coordinate Grid */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]" 
        aria-hidden="true" 
      />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge 
            variant="outline" 
            className="border-teal-500/40 bg-teal-50 text-teal-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-teal-600 inline" />
            Interactive Plant Architecture
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            How New Logic Systems Connect <br className="hidden sm:inline" />
            <span className="text-teal-500">Across Your Production Facility</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-warm-600 leading-relaxed max-w-2xl mx-auto">
            Explore our end-to-end material flow from intake silos to high-shear mixing. Select any plant zone below to inspect machinery specs, conveying velocities, and operational ROI.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="mb-10 lg:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-warm-100/80 border border-warm-200">
            {plantStages.map((stage, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`relative flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive 
                      ? 'bg-navy-900 text-white shadow-md' 
                      : 'bg-transparent text-navy-800 hover:bg-white/80 hover:text-navy-950'
                  }`}
                >
                  <div className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                    isActive 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-warm-200/90 text-navy-700'
                  }`}>
                    {stage.step}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-[10px] font-mono font-semibold uppercase tracking-wider truncate ${
                      isActive ? 'text-teal-400' : 'text-warm-500'
                    }`}>
                      Zone {stage.step}
                    </p>
                    <p className="text-xs sm:text-sm font-bold truncate">
                      {stage.shortLabel}
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeFlowIndicator"
                      className="absolute -bottom-1 left-4 right-4 h-0.5 bg-teal-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Display Panel */}
        <div className="relative rounded-3xl border border-warm-200 bg-warm-50/60 p-6 sm:p-8 lg:p-10 shadow-elevated">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Technical Specifications & Plant Impact */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                    Process Step {activeStage.step} of 04
                  </span>
                  <span className="text-xs font-semibold text-warm-500 uppercase tracking-wider">
                    {activeStage.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
                  {activeStage.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-teal-700">
                  {activeStage.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Executive Business ROI Box */}
                <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-subtle">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-warm-500 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal-600" /> Plant Manager Advantage
                  </p>
                  <p className="text-xs sm:text-sm text-navy-900 font-semibold mt-1">
                    {activeStage.businessImpact}
                  </p>
                </div>

                {/* 3 Technical Metric Tiles */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                  {activeStage.specs.map((sp, idx) => (
                    <div 
                      key={idx} 
                      className="rounded-xl border border-warm-200 bg-white p-2.5 sm:p-3 text-center shadow-subtle"
                    >
                      <p className="text-[10px] font-bold uppercase text-warm-500 tracking-tight">{sp.label}</p>
                      <p className="text-xs sm:text-sm font-extrabold text-navy-900 mt-0.5 truncate">{sp.value}</p>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button asChild size="sm" variant="primary" className="font-bold shadow-sm">
                    <Link to="/contact">
                      Request GA Layout Drawing <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-warm-500 font-medium">Related Systems:</span>
                    {activeStage.equipmentLinks.map((eq) => (
                      <Link
                        key={eq.slug}
                        to={`/systems/${eq.slug}`}
                        className="text-xs font-semibold text-navy-900 hover:text-teal-600 underline underline-offset-2 flex items-center"
                      >
                        {eq.name} <ChevronRight className="h-3 w-3 inline" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Resolution Industrial Equipment Viewport */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-navy-700/80 bg-navy-950 overflow-hidden shadow-card group">
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <img 
                      src={activeStage.image}
                      alt={activeStage.title}
                      className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  </div>

                  {/* Top HUD Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="rounded bg-navy-900/90 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] text-teal-300 border border-teal-500/30">
                      TAG: {activeStage.telemetry.systemTag}
                    </span>
                    <span className="rounded-full bg-emerald-950/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Schematic
                    </span>
                  </div>

                  {/* Bottom HUD Bar */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-navy-900/95 backdrop-blur-sm p-3 border border-navy-700 flex items-center justify-between text-xs text-white">
                    <div>
                      <p className="text-[10px] font-mono text-warm-400 uppercase">Operating Velocity</p>
                      <p className="text-xs font-bold text-teal-300 font-mono mt-0.5">
                        {activeStage.telemetry.flowVelocity}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-mono text-warm-400 uppercase">Hygiene &amp; Safety</p>
                      <p className="text-xs font-bold text-emerald-300 flex items-center justify-end gap-1 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        {activeStage.telemetry.dustRating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
