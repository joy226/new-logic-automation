import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  Factory, 
  ShieldCheck, 
  Gauge, 
  MapPin, 
  ArrowRight, 
  Award, 
  Clock, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { images } from '@/lib/images';
import { ClientLogoGridSection } from '@/components/common/ClientLogoGridSection';

interface MilestoneStage {
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  icon: typeof Factory;
}

const milestones: MilestoneStage[] = [
  {
    year: '2006',
    badge: 'Founding & Inception',
    title: 'Precision Fabrication Facility in Bhiwandi',
    subtitle: 'High-purity stainless steel fabrication for western India process plants',
    description: 'New Logic Automation was founded with a dedicated manufacturing plant in Bhiwandi, Maharashtra. From day one, the focus was sanitary-grade SS304/316 sheet metal fabrication, sanitary rotary vessels, and custom food machinery tailored for rigorous industrial processing.',
    highlights: [
      'In-house certified TIG and orbital welding',
      'Food-grade mechanical polishing (Ra < 0.8 µm)',
      'Custom machinery for local biscuit and confectionery plants',
    ],
    image: images.aboutMain,
    icon: Factory,
  },
  {
    year: '2012',
    badge: 'Conveying Breakthrough',
    title: 'First Turnkey Closed-Loop Pneumatic Systems',
    subtitle: 'Transition from manual ingredient hauling to zero-dust pressure pipelines',
    description: 'Developed and commissioned our first generation of dilute and dense phase pneumatic conveying pipelines. By pairing positive displacement blowers with precision rotary airlocks, plants completely eliminated airborne flour dust and forklift traffic across mixing halls.',
    highlights: [
      'Enclosed pipelines up to 250m conveying distances',
      'Integrated reverse pulse-jet dust collectors',
      'Multi-silo receiving and automated routing diverters',
    ],
    image: images.products['flour-maida-handling'] || images.processTransfer,
    icon: Workflow,
  },
  {
    year: '2018',
    badge: 'Automation & Precision',
    title: 'PLC Recipe Dosing & Gravimetric Skids',
    subtitle: 'Integrated loss-in-weight batching hoppers and Coriolis liquid dosing',
    description: 'Pioneered digital recipe management skids featuring load-cell loss-in-weight batching and high-accuracy mass flow meters. The automated control panels integrated directly into factory SCADA platforms, achieving ±0.2% dosing accuracy and zero recipe drift.',
    highlights: [
      'Siemens / Rockwell Automation PLC control architecture',
      'Multi-liquid automatic batching (glucose, edible oils, invert syrup)',
      'Continuous recipe logging and audit-ready traceability',
    ],
    image: images.products['multiple-liquid-dosing'] || images.processDose,
    icon: Cpu,
  },
  {
    year: 'Present',
    badge: 'National Track Record',
    title: '500+ Installations Across Premier Food Brands',
    subtitle: 'End-to-end material handling OEM trusted by industry leaders',
    description: 'Today, New Logic Automation systems handle millions of kilograms of dry and liquid ingredients every single day for premier food manufacturers across India, Nepal, Bangladesh, and beyond—consistently delivering 24/7 uptime and hygienic excellence.',
    highlights: [
      'Over 500 turnkey industrial plant installations',
      'Longstanding partnerships: Parle, Britannia, Haldiram, Bikaji, ITC',
      'Comprehensive in-house design, manufacturing, and AMC support',
    ],
    image: images.aboutSecondary,
    icon: Award,
  },
];

export function AboutPage2() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Top page reading scroll progress
  const { scrollYProgress: pageScrollYProgress } = useScroll();
  const pageScrollProgress = useSpring(pageScrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Scroll tracking across the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 60%', 'end 85%'],
  });

  // Fluid spring animation for the vertical conduit line
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const timelinePulseTop = useTransform(timelineProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <SEO
        title="Engineering Heritage & Milestones — New Logic Automation"
        description="Learn about New Logic Automation's 18+ year history engineering food-grade material handling, pneumatic conveying, and precision dosing systems based in Bhiwandi, India."
        path="/about"
      />

      {/* Top Reading Progress Indicator */}
      <motion.div 
        style={{ scaleX: pageScrollProgress, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 z-50 pointer-events-none"
      />

      <div className="bg-warm-50 text-navy-900 font-sans">
        {/* Template 2 Concept Header Banner */}
        <div className="bg-navy-900 text-white py-2 px-4 text-center text-xs font-medium border-b border-navy-800">
          <span className="inline-flex items-center gap-1.5 text-teal-400 font-bold">
            <Sparkles className="h-3.5 w-3.5" /> Template 2:
          </span>{' '}
          <span className="text-warm-300">Engineering Heritage &amp; Scroll-Driven Company Timeline</span>
        </div>

        {/* Hero Section with Architectural CAD Grid */}
        <section className="relative overflow-hidden bg-white border-b border-warm-200 py-16 lg:py-24">
          <div 
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" 
            aria-hidden="true" 
          />
          <div 
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-warm-50/60" 
            aria-hidden="true" 
          />

          <div className="container-page relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="text-xs text-warm-500 mb-6 flex items-center gap-1.5 font-medium" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-navy-900 font-semibold">About New Logic Automation</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-3.5 py-1 text-xs font-semibold text-navy-800 shadow-subtle">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Engineering Heritage Since 2006 • Bhiwandi, Maharashtra</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
                  Pioneering Precision in <br />
                  <span className="text-teal-500 font-black">Industrial Material Handling</span>
                </h1>

                <p className="text-base sm:text-lg text-warm-600 leading-relaxed max-w-2xl">
                  Founded in 2006, New Logic Automation designs and manufactures complete, turnkey raw material handling, closed-loop pneumatic conveying, and automated dosing systems engineered specifically for continuous food processing.
                </p>

                {/* Key Capability Badges */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="rounded-lg bg-warm-100/80 px-3 py-1.5 text-xs font-semibold text-navy-800 border border-warm-200 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-teal-600" /> Sanitary SS304/316
                  </span>
                  <span className="rounded-lg bg-warm-100/80 px-3 py-1.5 text-xs font-semibold text-navy-800 border border-warm-200 flex items-center gap-1.5">
                    <Gauge className="h-4 w-4 text-teal-600" /> ±0.2% Batch Accuracy
                  </span>
                  <span className="rounded-lg bg-warm-100/80 px-3 py-1.5 text-xs font-semibold text-navy-800 border border-warm-200 flex items-center gap-1.5">
                    <Factory className="h-4 w-4 text-teal-600" /> In-House Bhiwandi Works
                  </span>
                </div>
              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-warm-200 overflow-hidden shadow-elevated bg-white">
                  <div className="h-72 w-full overflow-hidden bg-navy-900 relative">
                    <img 
                      src={images.aboutMain}
                      alt="New Logic Automation Manufacturing Workshop Facility"
                      className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400">
                        Primary Fabrication Works
                      </p>
                      <p className="text-sm font-bold mt-0.5">Bhiwandi Heavy Engineering Facility</p>
                      <p className="text-xs text-warm-300 mt-0.5">Thane District, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="p-4 bg-warm-50 flex items-center justify-between text-xs text-warm-600 border-t border-warm-200">
                    <span className="flex items-center gap-1 font-semibold text-navy-900">
                      <MapPin className="h-3.5 w-3.5 text-teal-600" /> Strategic Mumbai Industrial Hub
                    </span>
                    <span className="font-mono text-[11px] text-warm-500">18+ Years OEM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL-DRIVEN MILESTONE TIMELINE SECTION */}
        <section 
          ref={timelineRef}
          className="relative py-20 lg:py-32 bg-white border-b border-warm-200 overflow-hidden"
        >
          {/* Subtle Architectural Grid Accents */}
          <div 
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0A1930_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" 
            aria-hidden="true" 
          />

          <div className="container-page relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <Badge 
                variant="outline" 
                className="border-teal-500/40 bg-teal-50 text-teal-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
              >
                <Clock className="mr-1.5 h-3.5 w-3.5 text-teal-600 inline" />
                Scroll-Driven Engineering Journey
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                18+ Years of Continuous <br />
                <span className="text-teal-500">Engineering Innovation</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-warm-600 leading-relaxed">
                Trace our technological milestones from our initial Bhiwandi manufacturing floor to becoming one of India's leading OEMs for continuous food material handling systems.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-warm-500">
                <span className="inline-block h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                Scroll to explore our engineering timeline
              </div>
            </div>

            {/* Vertical Timeline Track */}
            <div className="relative">
              {/* Central Pipe Conduit */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
                <div className="h-full w-full bg-warm-200 rounded-full" />
                
                {/* Active Progress Conduit */}
                <motion.div
                  style={{ scaleY: timelineProgress, transformOrigin: 'top' }}
                  className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-teal-500 via-teal-600 to-teal-400 rounded-full shadow-[0_0_12px_rgba(196,47,59,0.5)]"
                />

                {/* Moving Pulse Ball */}
                <motion.div
                  style={{ top: timelinePulseTop }}
                  className="absolute -left-1.5 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-teal-500 shadow-[0_0_14px_rgba(196,47,59,0.9)]"
                >
                  <div className="h-full w-full rounded-full bg-white/40 animate-ping" />
                </motion.div>
              </div>

              {/* Timeline Milestone Cards */}
              <div className="space-y-16 lg:space-y-28 relative z-10">
                {milestones.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const Icon = item.icon;

                  return (
                    <div 
                      key={item.year}
                      className={`relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Text Content Card */}
                      <div className="w-full md:w-1/2 pl-14 md:pl-0">
                        <motion.div
                          initial={{ opacity: 0, y: 32 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="group rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all"
                        >
                          <div className="flex items-center justify-between border-b border-warm-100 pb-3 mb-4">
                            <span className="font-mono text-sm font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                              {item.year}
                            </span>
                            <span className="text-xs font-semibold text-warm-500 uppercase tracking-wider">
                              {item.badge}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs font-medium text-teal-600 mt-1">
                            {item.subtitle}
                          </p>

                          <p className="mt-3 text-sm text-warm-600 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Highlights Checklist */}
                          <div className="mt-5 space-y-2 rounded-xl bg-warm-50 p-3.5 border border-warm-200/80">
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-navy-800">
                                <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Center Node Icon */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg border-4 border-white transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5 text-teal-400" />
                      </div>

                      {/* Visual Equipment Card */}
                      <div className="w-full md:w-1/2 pl-14 md:pl-0">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative overflow-hidden rounded-2xl border border-warm-200 bg-navy-900 text-white p-5 shadow-card"
                        >
                          <div className="flex items-center justify-between border-b border-navy-700 pb-3 mb-3 text-xs">
                            <span className="font-mono text-teal-400 font-bold uppercase tracking-wider text-[11px]">
                              Milestone Archive • {item.year}
                            </span>
                            <span className="text-warm-400 text-[11px]">Sanitary Specification</span>
                          </div>

                          <div className="relative h-48 w-full rounded-xl overflow-hidden bg-navy-950">
                            <img 
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                              <span className="rounded bg-navy-900/90 px-2 py-0.5 text-[10px] font-mono text-teal-300 border border-teal-500/30">
                                Milestone: {item.year}
                              </span>
                              <span className="text-warm-300 font-medium text-[11px] flex items-center gap-1">
                                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" /> Factory Built
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Facility & Manufacturing Capabilities */}
        <section className="py-16 lg:py-24 bg-warm-50 border-b border-warm-200">
          <div className="container-page">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Our Works</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">In-House Manufacturing Capabilities</h2>
              <p className="mt-2 text-sm text-warm-600">
                Operating directly from Bhiwandi, Maharashtra, our facility houses specialized machinery dedicated exclusively to stainless steel food processing equipment fabrication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Factory,
                  title: 'Custom Plant Layout Engineering',
                  description: 'Every conveying and dosing system is tailor-drawn to your facility dimensions, floor loading, and throughput targets—not rigid catalogue components.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Sanitary SS304/SS316 Build',
                  description: 'Certified food-grade contact materials with crevice-free internal TIG welding, mirror polishing, and integrated CIP (clean-in-place) circuits.',
                },
                {
                  icon: Cpu,
                  title: 'PLC Recipe Automation',
                  description: 'Complete in-house control panel assembly featuring Siemens and Rockwell Automation PLCs, touch HMIs, and SCADA network communication.',
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="rounded-xl border border-warm-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-600 mb-4 border border-teal-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{c.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-warm-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dual Client Marquee */}
        <ClientLogoGridSection />

        {/* Bottom CTA Bar */}
        <section className="py-14 bg-white border-t border-warm-200 text-center">
          <div className="container-page max-w-3xl">
            <h3 className="text-2xl font-extrabold text-navy-900">
              Discuss your food plant automation project with our chief engineers
            </h3>
            <p className="mt-2 text-sm text-warm-600">
              Speak directly with Sachin or Sagar Tamhane to review your factory floor plan, raw ingredient characteristics, and line commissioning goals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="primary" className="font-bold shadow-md hover:shadow-lg">
                <Link to="/contact">Request Engineering Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-200 text-navy-900 hover:bg-warm-100 font-semibold">
                <Link to="/solutions">Explore Equipment Catalogue</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
