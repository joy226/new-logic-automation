import { useState } from 'react';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { motion } from 'framer-motion';
import {
  ArrowRight, Phone, CheckCircle2, ShieldCheck, Scale, Wind,
  Check, Play
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/site';
import { InteractivePlantFlow } from '@/templates/template2/components/InteractivePlantFlow';

/**
 * 6 Authentic Featured Equipment from original website https://newlogicautomation.com/
 * Using verified original images and authentic bullet points.
 */
interface OriginalSolutionItem {
  id: string;
  name: string;
  slug: string;
  category: 'auto-dosing' | 'preparation';
  categoryLabel: string;
  image: string;
  tagline: string;
  bullets: string[];
  specs: { label: string; value: string }[];
}

const originalFeaturedSolutions: OriginalSolutionItem[] = [
  {
    id: 'liquid-handling',
    name: 'Liquid Handling System',
    slug: 'multiple-liquid-dosing',
    category: 'auto-dosing',
    categoryLabel: 'Auto Dosing System',
    image: '/original-img/liquid-handling-system.jpg',
    tagline: 'High-precision flow meter and mass metering skid for oils, syrups & water',
    bullets: [
      'Very High dosing accuracy achieved.',
      'Consistent product quality and better hygiene.'
    ],
    specs: [
      { label: 'Dosing Accuracy', value: '±0.2% Mass Flow' },
      { label: 'Control Skid', value: 'PLC-SCADA Recipe' }
    ]
  },
  {
    id: 'sugar-syrup',
    name: 'Sugar Syrup Preparation',
    slug: 'invert-syrup-preparation',
    category: 'preparation',
    categoryLabel: 'Preparation System',
    image: '/original-img/sugar-syrup-preparation.jpg',
    tagline: 'Automated sugar dissolution with sanitary heating & brix control',
    bullets: [
      'Accurate and hygienic charging.',
      'Fully automated'
    ],
    specs: [
      { label: 'Vessel Rating', value: 'Steam Jacketed SS316' },
      { label: 'Brix Uniformity', value: '±0.2° Brix Accuracy' }
    ]
  },
  {
    id: 'flour-handling',
    name: 'Flour Handling System',
    slug: 'flour-maida-handling',
    category: 'auto-dosing',
    categoryLabel: 'Auto Dosing System',
    image: '/original-img/flour-maida-handling-1.jpg',
    tagline: 'Turnkey pneumatic transfer from bulk silos or bag dump to mixer hoppers',
    bullets: [
      'Flour spillage and losses minimum.',
      'Dust free environment.',
      'System hygienic, easy to use and clean.'
    ],
    specs: [
      { label: 'Conveying Mode', value: 'Dense & Dilute Phase' },
      { label: 'Transfer Rate', value: 'Up to 5,000 kg/hr' }
    ]
  },
  {
    id: 'creamer',
    name: 'Creamer (Cream Preparation)',
    slug: 'cream-preparation',
    category: 'preparation',
    categoryLabel: 'Preparation System',
    image: '/original-img/creamer-system.jpg',
    tagline: 'High-shear emulsification and jacketed temperature control for cream fillings',
    bullets: [
      'Very high quality consistent cream can be produce.'
    ],
    specs: [
      { label: 'Emulsification', value: 'High-Shear Rotor/Stator' },
      { label: 'Thermal Jacketing', value: 'Cooling / Heating Dimple' }
    ]
  },
  {
    id: 'sepro-gyroscreen',
    name: 'Sepro Gyroscreen',
    slug: 'sepro-gyroscreen',
    category: 'preparation',
    categoryLabel: 'Preparation / Screening',
    image: '/original-img/sepro-gyroscreen.png',
    tagline: 'Multi-plane high-frequency vibratory separator for powders and slurries',
    bullets: [
      'Most efficient vibrating screen for wet and dry screening'
    ],
    specs: [
      { label: 'Screening Type', value: 'Wet & Dry High-Frequency' },
      { label: 'Mesh Hygiene', value: 'Food-Grade Stainless Mesh' }
    ]
  },
  {
    id: 'chemical-handling',
    name: 'Chemical Handling System',
    slug: 'chemical-handling',
    category: 'auto-dosing',
    categoryLabel: 'Auto Dosing System',
    image: '/original-img/chemical-handling-system.jpg',
    tagline: 'Automated dissolution and pressure-dispense of minor additives into mix line',
    bullets: [
      'Proper amount of water is added and the chemicals are stirred and dispensed into the cookers or mixer using air pressure or gravity.'
    ],
    specs: [
      { label: 'Dispense Mode', value: 'Air Pressure / Gravity' },
      { label: 'Material Grade', value: 'SS316 Corrosion Resistant' }
    ]
  }
];

export function HomePage() {
  return (
    <>
      <SEO
        title="New Logic Automation — Material Handling, Dosing & Preparation Systems"
        description="Bhiwandi-based specialists in pneumatic conveying, bulk powder handling, liquid dosing, and recipe preparation systems for the food, bakery, and chemical process industries since 2006."
        path="/"
      />
      
      {/* 1. Cinematic Architectural Hero Section */}
      <CinematicHeroSection />

      {/* 2. Engineering Verification Strip */}
      <EngineeringMetricsStrip />

      {/* 3. Original 6 Solutions Showcase with Original Images */}
      <OriginalSolutionsShowcaseSection />

      {/* 4. Complete Plant Material Architecture Flow */}
      <CompletePlantFlowSection />

      {/* 5. "Why New Logic Automation ?" Section */}
      <WhyNewLogicSection />

      {/* 6. "Client Satisfaction" 4 Commitments */}
      <ClientSatisfactionSection />

      {/* 7. Domestic & International Customers Marquee */}
      <CustomersMarqueeSection />

      {/* 8. Direct Engineering Consultation RFQ Banner */}
      <ConsultationRFQBanner />
    </>
  );
}

/**
 * 1. Cinematic Architectural Hero Section
 * Modern B2B industrial design with authentic company headline:
 * "We are innovative and like to face new challenges for improvement into existences."
 */
function CinematicHeroSection() {
  return (
    <section className="relative bg-navy-950 text-white pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-navy-800">
      {/* Ambient Lighting & Technical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[36rem] h-[36rem] bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/80 to-navy-950" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Narrative & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-300 backdrop-blur-md shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Experts Since 2006 · Bhiwandi Manufacturing Works</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]"
            >
              &ldquo;We are innovative{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-accent-300">
                and like to face new challenges
              </span>{' '}
              for improvement into existences.&rdquo;
            </motion.h1>

            {/* Sub-Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-warm-300 leading-relaxed max-w-2xl"
            >
              <strong>New Logic Automation</strong> provides complete start-to-end solutions for any kind of logical material handling and automated dosing required by food, confectionery, and process manufacturing facilities worldwide.
            </motion.p>

            {/* Three Technical Attribute Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-xs font-medium text-warm-200">
                <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
                <span>SS304 / SS316 Sanitary</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-xs font-medium text-warm-200">
                <Scale className="h-4 w-4 text-teal-400 shrink-0" />
                <span>±0.1% Batch Repeatability</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-xs font-medium text-warm-200">
                <Wind className="h-4 w-4 text-teal-400 shrink-0" />
                <span>Enclosed Zero-Dust Transfer</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-7 shadow-lg shadow-teal-500/25 transition-all">
                <Link to="/solutions">
                  Explore Full Catalogue <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-6">
                <Link to="/contact">
                  Request Plant Consultation
                </Link>
              </Button>
            </motion.div>

            {/* Direct Line Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-warm-400"
            >
              <span className="flex items-center gap-1.5 text-warm-300 font-semibold">
                <Phone className="h-3.5 w-3.5 text-teal-400" /> Direct Lines:
              </span>
              <a href="tel:+919820646393" className="hover:text-teal-300 transition-colors font-mono">
                Sachin Tamhane: +91 9820646393
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="tel:+919223242803" className="hover:text-teal-300 transition-colors font-mono">
                Sagar Mallah: +91 9223242803
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-white/15 bg-navy-900/90 backdrop-blur-xl p-6 shadow-2xl">
              
              {/* Header Telemetry Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-300">
                    Turnkey Engineering
                  </span>
                </div>
                <span className="font-mono text-[11px] text-warm-400">
                  OEM Bhiwandi Works
                </span>
              </div>

              {/* Machinery Visual Window */}
              <div className="relative h-60 w-full overflow-hidden rounded-xl border border-white/10 bg-navy-950 mb-4">
                <img
                  src="/original-img/flour-maida-handling-1.jpg"
                  alt="New Logic Automation Flour Handling System"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-navy-950/85 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-bold text-teal-300 border border-teal-500/30">
                    Flour &amp; Powder Handling
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="rounded bg-black/75 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-mono text-white border border-white/20">
                    Dense / Dilute Pneumatic
                  </span>
                </div>
              </div>

              {/* Brief Capability List */}
              <div className="space-y-2 text-xs text-warm-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-warm-400">Process Scope:</span>
                  <span className="font-semibold text-white">Dry Powders, Liquids &amp; Syrups</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-warm-400">Execution Model:</span>
                  <span className="font-semibold text-white">100% In-House Design &amp; Build</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-warm-400">Typical Line Velocity:</span>
                  <span className="font-semibold text-teal-300 font-mono">100 – 5,000 kg/hr</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button asChild size="sm" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs py-2.5">
                  <Link to="/systems/flour-maida-handling">
                    Inspect Flour System Details <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/**
 * 2. Engineering Verification Metrics Strip
 */
function EngineeringMetricsStrip() {
  const metrics = [
    { value: '2006', label: 'Founded & Established', detail: '18+ years of dedicated process engineering' },
    { value: '±0.1%', label: 'Dosing Precision', detail: 'Loss-in-weight and mass flow accuracy' },
    { value: '5,000 kg/h', label: 'Conveying Capacity', detail: 'Dense and dilute phase pneumatic transfer' },
    { value: '100%', label: 'In-House Fabrication', detail: 'Bhiwandi mechanical & electrical works' },
  ];

  return (
    <section className="bg-white border-b border-warm-200">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col justify-between p-4 rounded-xl bg-warm-50/70 border border-warm-100">
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  {m.value}
                </p>
                <p className="mt-1 text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {m.label}
                </p>
              </div>
              <p className="mt-2 text-xs text-warm-500 leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 3. Original 6 Featured Solutions Showcase
 * Uses authentic machinery photography and original bullets from newlogicautomation.com
 */
function OriginalSolutionsShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-warm-200">
      <div className="container-page">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="border-teal-500/40 text-teal-700 bg-teal-50 font-bold px-3 py-1 text-xs mb-3">
            EQUIPMENT CATALOGUE
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            &ldquo;Our Wide Range of Solutions Includes&rdquo;
          </h2>
          <p className="mt-3 text-sm sm:text-base text-warm-600 leading-relaxed">
            Every system is manufactured at our Bhiwandi factory and engineered to meet stringent sanitary standards for food, confectionery, and chemical processing lines.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {originalFeaturedSolutions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="h-full flex"
            >
              <div className="group flex flex-col w-full rounded-2xl border border-warm-200 bg-white overflow-hidden shadow-subtle hover:shadow-xl hover:border-teal-500/50 transition-all duration-300">
                
                {/* Machinery Photo Header */}
                <div className="relative h-56 w-full overflow-hidden bg-warm-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-navy-900/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded bg-black/75 backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono text-teal-300 border border-teal-500/30">
                      Food Grade SS
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-warm-500 leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Original Site Bullets */}
                    <ul className="mt-4 space-y-2 border-t border-warm-100 pt-3">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-warm-700 leading-relaxed font-medium">
                          <Check className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technical Specifications */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-warm-100">
                      {item.specs.map((sp, spIdx) => (
                        <div key={spIdx} className="rounded-lg bg-warm-50 p-2 text-center border border-warm-100">
                          <p className="text-[10px] font-mono text-warm-500 uppercase">{sp.label}</p>
                          <p className="text-xs font-bold text-navy-900 truncate mt-0.5">{sp.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-3 border-t border-warm-100 flex items-center justify-between gap-3">
                    <Button asChild size="sm" className="bg-navy-900 hover:bg-teal-600 text-white text-xs font-bold w-full transition-colors">
                      <Link to={`/contact?system=${item.slug}`}>
                        Send Enquiry <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-warm-300 text-xs text-navy-700 hover:bg-warm-100 shrink-0">
                      <Link to={`/systems/${item.slug}`}>
                        Specs
                      </Link>
                    </Button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Systems CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold px-8">
            <Link to="/solutions">
              Browse Complete Equipment Range (All 11 Systems) <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

/**
 * 4. Complete Plant Material Architecture Flow
 */
function CompletePlantFlowSection() {
  return (
    <section className="bg-warm-50 border-b border-warm-200">
      <InteractivePlantFlow />
    </section>
  );
}

/**
 * 5. "Why New Logic Automation ?" Section
 * Verbatim text from original website + plant video link
 */
function WhyNewLogicSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Video Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900">
              <img
                src="/original-img/flour-maida-handling-1.jpg"
                alt="New Logic Automation Plant Installation"
                className="w-full h-80 object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              
              {/* Play Video Button Anchor (linking to original YouTube video from site) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=T3lzbjwM1nA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl hover:scale-110 hover:bg-teal-400 transition-all duration-300"
                  aria-label="Watch New Logic Automation equipment video on YouTube"
                >
                  <Play className="h-7 w-7 ml-1 fill-white" />
                </a>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-300">
                  Turnkey Plant Video Demo
                </p>
                <p className="text-xs text-warm-300 mt-0.5">
                  Click to watch live installation in operation
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Original Text */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Corporate Credentials
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why <strong>New Logic Automation</strong> ?
            </h2>

            {/* Exact verbatim text from original website */}
            <blockquote className="border-l-4 border-teal-500 pl-4 py-2 text-sm sm:text-base text-warm-200 leading-relaxed italic bg-white/5 rounded-r-xl">
              &ldquo;<strong>New Logic Automation</strong> is one of the world&rsquo;s largest Raw Material Handling System providers for Food Industries. We are headquartered in Bhiwandi, India and provide a complete start to end solution to any kind of logical material handling system required to various process industries of all sizes around the world. Our end-to-end raw material handling solutions are ideal for Food industries. We offer a vast line of services like Flour handling system, Sugar syrup preparation system, Water dosing system, Bulk fat handling system, Chemical handling system etc&rdquo;
            </blockquote>

            {/* In-House Manufacturing Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> In-House Works
                </p>
                <p className="text-xs text-warm-300 mt-1">
                  100% mechanical fabrication, pneumatic piping, and electrical panel assembly at Bhiwandi works.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> PLC-SCADA Automation
                </p>
                <p className="text-xs text-warm-300 mt-1">
                  Recipe management, loss-in-weight batching accuracy, and remote diagnostics support.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6">
                <Link to="/contact">
                  Discuss Your Plant Upgrade <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link to="/about">
                  Executive Engineering Background
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * 6. "Client Satisfaction" 4 Commitments from Original Website
 */
function ClientSatisfactionSection() {
  const pillars = [
    {
      num: '01',
      title: 'Updated and Customized Equipment',
      desc: 'Tailored pipe isometric routing, custom hopper geometries, and material-specific blowers configured to your ingredient rheology.'
    },
    {
      num: '02',
      title: 'Backup Support and Know How',
      desc: 'Over 17+ years of hands-on process automation experience from founders Sachin Tamhane and Sagar Mallah.'
    },
    {
      num: '03',
      title: 'Quality Assurance',
      desc: 'Sanitary food-grade SS304/SS316 stainless steel, smooth hygienic internal welds, and zero particle contamination.'
    },
    {
      num: '04',
      title: 'Advanced Testing Facilities',
      desc: 'Pre-dispatch dry run simulations, electrical continuity audits, and pressure testing at our Bhiwandi factory.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-warm-200">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <Badge variant="outline" className="border-teal-500/40 text-teal-700 bg-teal-50 font-bold px-3 py-1 text-xs mb-3">
            QUALITY ASSURANCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Client Satisfaction Commitments
          </h2>
          <p className="mt-2 text-sm text-warm-600 leading-relaxed">
            Every New Logic Automation installation is backed by four non-negotiable operational principles established in 2006.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="rounded-2xl border border-warm-200 bg-warm-50/70 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-mono text-2xl font-black text-teal-600">{p.num}</span>
                <h3 className="mt-3 text-base font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-xs text-warm-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-warm-200 text-[10px] font-mono text-warm-500 uppercase tracking-wider">
                Original Guarantee
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 7. Domestic & International Customers Marquee
 */
interface ClientItem {
  name: string;
  shortName: string;
  type: 'Domestic' | 'International';
  logoUrl: string;
}

const domesticClients: ClientItem[] = [
  { name: 'Britannia Industries Ltd.', shortName: 'Britannia', type: 'Domestic', logoUrl: '/clients/britannia-industries.png' },
  { name: 'ITC Ltd.', shortName: 'ITC Limited', type: 'Domestic', logoUrl: '/clients/itc-ltd.png' },
  { name: 'Haldiram Foods International Pvt. Ltd.', shortName: 'Haldiram’s', type: 'Domestic', logoUrl: '/clients/haldiram-foods-international.png' },
  { name: 'Parle Products Pvt. Ltd.', shortName: 'Parle', type: 'Domestic', logoUrl: '/clients/parle.jpg' },
  { name: 'Patanjali Ayurved Ltd.', shortName: 'Patanjali', type: 'Domestic', logoUrl: '/clients/patanjali-ayurved.jpg' },
  { name: 'Unibic Foods India Pvt. Ltd.', shortName: 'Unibic', type: 'Domestic', logoUrl: '/clients/unibic-foods-india.png' },
  { name: 'Bikaji Foods International Ltd.', shortName: 'Bikaji', type: 'Domestic', logoUrl: '/clients/bikaji.jpg' },
  { name: 'Anmol Industries Ltd.', shortName: 'Anmol', type: 'Domestic', logoUrl: '/clients/anmol-industries.png' },
  { name: 'Sobisco (Sona Biscuits)', shortName: 'Sobisco', type: 'Domestic', logoUrl: '/clients/sobisco.jpg' },
  { name: 'Raja Udyog Pvt. Ltd.', shortName: 'Raja Udyog', type: 'Domestic', logoUrl: '/clients/raja-udyog.png' },
  { name: 'Bonn Nutrients Pvt. Ltd.', shortName: 'Bonn', type: 'Domestic', logoUrl: '/clients/bonn-nutrients.jpg' },
  { name: 'Dukes Products (India) Ltd.', shortName: 'Dukes', type: 'Domestic', logoUrl: '/clients/dukes-products.jpg' },
  { name: 'Bhagwati Foods Pvt. Ltd.', shortName: 'Bhagwati', type: 'Domestic', logoUrl: '/clients/bhagwati-foods.jpg' },
  { name: 'Mrs. Bector Food Specialities Ltd', shortName: 'Cremica', type: 'Domestic', logoUrl: '/clients/mrs.-bector-food-specialities.png' },
  { name: 'Sunder Biscuits', shortName: 'Sunder', type: 'Domestic', logoUrl: '/clients/sunder.jpg' },
  { name: 'HF Super (Chanakya Bakery)', shortName: 'HF Super', type: 'Domestic', logoUrl: '/clients/hf-super.jpg' },
];

const internationalClients: ClientItem[] = [
  { name: 'Britannia Nepal Ltd.', shortName: 'Britannia Nepal', type: 'International', logoUrl: '/clients/britannia-nepal.png' },
  { name: 'Pran Foods Ltd.', shortName: 'PRAN Foods', type: 'International', logoUrl: '/clients/pran-foods-ltd.jpg' },
  { name: 'Kwality Noodles Industries (P) Ltd.', shortName: 'Kwality', type: 'International', logoUrl: '/clients/kwality-noodles-industries.png' },
  { name: 'Asian Biscuit & Confectionery Pvt. Ltd.', shortName: 'Asian Biscuit', type: 'International', logoUrl: '/clients/asian-biscuit-and-confectionery.png' },
  { name: 'Khajurico Nepal Pvt. Ltd.', shortName: 'Khajurico', type: 'International', logoUrl: '/clients/khajurico-nepal.jpg' },
  { name: 'Ifad Multi Products Ltd.', shortName: 'IFAD Group', type: 'International', logoUrl: '/clients/ifad-multi-products.png' },
  { name: 'Lae Biscuit Co. Ltd.', shortName: 'Lae Biscuit', type: 'International', logoUrl: '/clients/lae-biscuit.png' },
  { name: 'Reedisha Foods Ltd.', shortName: 'Reedisha', type: 'International', logoUrl: '/clients/reedisha-foods.jpg' },
  { name: 'Koshambh Multitred Pvt Ltd', shortName: 'Koshambh', type: 'International', logoUrl: '/clients/koshambh.jpg' },
  { name: 'Marino Biscuits', shortName: 'Marino', type: 'International', logoUrl: '/clients/marino.jpg' },
  { name: 'Mio Biscuits', shortName: 'Mio Biscuits', type: 'International', logoUrl: '/clients/mio-biscuits.jpg' },
  { name: 'Gattani’s OPG Group', shortName: 'Gattani’s', type: 'International', logoUrl: '/clients/gattanis.jpg' },
];

function ClientLogoCard({ client }: { client: ClientItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex items-center gap-3.5 px-4 py-3 rounded-xl border border-warm-200 bg-white shadow-subtle hover:shadow-card hover:border-teal-300 transition-all duration-300 min-w-[280px] max-w-[310px] shrink-0 select-none">
      <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg bg-warm-50 p-1.5 border border-warm-100 overflow-hidden">
        {!imgError ? (
          <img
            src={client.logoUrl}
            alt={`${client.name} logo`}
            loading="lazy"
            className="max-h-9 max-w-[70px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-heading font-black text-xs text-navy-700">
            {client.shortName.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <p className="font-heading text-sm font-bold text-navy-800 truncate group-hover:text-teal-600 transition-colors">
            {client.shortName}
          </p>
          <Badge variant={client.type === 'Domestic' ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0 font-medium shrink-0">
            {client.type === 'Domestic' ? 'India' : 'Export'}
          </Badge>
        </div>
        <p className="text-xs text-warm-500 truncate" title={client.name}>
          {client.name}
        </p>
      </div>
    </div>
  );
}

function CustomersMarqueeSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm-50 border-b border-warm-200 overflow-hidden">
      <div className="container-page mb-8 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 tracking-tight">
          Our Domestic Customers
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-warm-600">
          Commercial food and biscuit manufacturers across India powered by New Logic Automation systems.
        </p>
      </div>

      {/* Row 1: Domestic moving left */}
      <div className="mask-marquee overflow-hidden mb-12">
        <div className="animate-marquee flex gap-4">
          {[...domesticClients, ...domesticClients].map((client, idx) => (
            <ClientLogoCard key={`${client.name}-d-${idx}`} client={client} />
          ))}
        </div>
      </div>

      <div className="container-page mb-8 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 tracking-tight">
          Our International Customers
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-warm-600">
          Turnkey export installations in Nepal, Bangladesh, Papua New Guinea, and neighboring markets.
        </p>
      </div>

      {/* Row 2: International moving right */}
      <div className="mask-marquee overflow-hidden">
        <div className="animate-marquee-reverse flex gap-4">
          {[...internationalClients, ...internationalClients].map((client, idx) => (
            <ClientLogoCard key={`${client.name}-i-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 8. High-Conversion Consultation & RFQ Banner (Above Layout Footer)
 * Leads directly into the single layout footer.
 */
function ConsultationRFQBanner() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="rounded-3xl bg-navy-950 text-white p-8 lg:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="outline" className="border-teal-400 text-teal-300 bg-teal-950/50 text-[11px] font-bold px-3 py-1">
                ENGINEERING ASSISTANCE
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Planning a New Production Line or Modernizing Your Plant?
              </h2>
              <p className="text-sm text-warm-300 leading-relaxed max-w-2xl">
                Share your ingredient flow rates, batch volumes, and factory layout. Founders Sachin Tamhane and Sagar Mallah will review your process requirements and provide a preliminary engineering proposal within 24–48 hours.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-warm-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> Free Technical Assessment
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> Direct Director Review
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> Verified Plant References
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold w-full sm:w-auto px-7 shadow-lg shadow-teal-500/20">
                <Link to="/contact">
                  Submit Engineering RFQ <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto">
                <Link to="/solutions">
                  Browse All Equipment
                </Link>
              </Button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs font-mono text-teal-300 hover:underline pt-1"
              >
                {siteConfig.email}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
