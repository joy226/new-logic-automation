import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  Pause,
  Play,
  Check,
  Building2,
  Layers,
  Sparkles,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

/**
 * 4 Featured Showcase Machinery Cutouts from Rhythm Revamp
 */
interface ShowcaseMachine {
  id: number;
  number: string;
  name: string;
  slug: string;
  description: string;
  cutout: string;
}

const showcaseMachines: ShowcaseMachine[] = [
  {
    id: 0,
    number: '01',
    name: 'Sugar Syrup Preparation',
    slug: 'invert-syrup-preparation',
    description: 'Accurate, hygienic charging with automated syrup preparation.',
    cutout: '/rhythm-photos/sugar-syrup-cutout.png',
  },
  {
    id: 1,
    number: '02',
    name: 'Cream Preparation',
    slug: 'cream-preparation',
    description: 'Prepare consistent cream for your production requirements.',
    cutout: '/rhythm-photos/cream-cutout.png',
  },
  {
    id: 2,
    number: '03',
    name: 'Chemical Handling System',
    slug: 'chemical-handling',
    description: 'Controlled preparation and dispensing into your process.',
    cutout: '/rhythm-photos/chemical-cutout.png',
  },
  {
    id: 3,
    number: '04',
    name: 'Flour Handling System',
    slug: 'flour-maida-handling',
    description: 'Reduce spillage and manual handling through your production line.',
    cutout: '/rhythm-photos/flour-cutout.png',
  },
];

/**
 * Hero Panorama Slider Slides
 */
interface PanoramaSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  slug: string;
}

const panoramaSlides: PanoramaSlide[] = [
  {
    id: 0,
    title: 'Liquid Handling System',
    subtitle: 'Accurate dosing. Consistent production.',
    image: '/rhythm-photos/liquid.jpg',
    slug: 'multiple-liquid-dosing',
  },
  {
    id: 1,
    title: 'Flour Handling System',
    subtitle: 'Flour spillage and losses minimum. Dust free environment.',
    image: '/rhythm-photos/flour.jpg',
    slug: 'flour-maida-handling',
  },
  {
    id: 2,
    title: 'Creamer (Cream Preparation)',
    subtitle: 'Very high quality consistent cream can be produced.',
    image: '/rhythm-photos/creamer.jpg',
    slug: 'cream-preparation',
  },
];

/**
 * 6 Core Products for Solutions Grid
 */
interface RhythmProduct {
  id: string;
  num: string;
  category: 'dosing' | 'preparation';
  categoryLabel: string;
  name: string;
  slug: string;
  summary: string;
  photo: string;
}

const rhythmProducts: RhythmProduct[] = [
  {
    id: 'liquid',
    num: '01',
    category: 'dosing',
    categoryLabel: 'Auto dosing',
    name: 'Liquid Handling System',
    slug: 'multiple-liquid-dosing',
    summary: 'Accurate dosing. Consistent quality. Better hygiene.',
    photo: '/rhythm-photos/liquid.jpg',
  },
  {
    id: 'syrup',
    num: '02',
    category: 'preparation',
    categoryLabel: 'Preparation',
    name: 'Sugar Syrup Preparation',
    slug: 'invert-syrup-preparation',
    summary: 'Accurate charging. Heated and jacketed preparation.',
    photo: '/rhythm-photos/syrup.jpg',
  },
  {
    id: 'flour',
    num: '03',
    category: 'dosing',
    categoryLabel: 'Auto dosing',
    name: 'Flour Handling System',
    slug: 'flour-maida-handling',
    summary: 'Minimum spillage. Cleaner transfers. Easy maintenance.',
    photo: '/rhythm-photos/flour.jpg',
  },
  {
    id: 'creamer',
    num: '04',
    category: 'preparation',
    categoryLabel: 'Preparation',
    name: 'Creamer (Cream Preparation)',
    slug: 'cream-preparation',
    summary: 'Consistent texture. Uniform aeration. Reliable mixing.',
    photo: '/rhythm-photos/creamer.jpg',
  },
  {
    id: 'screen',
    num: '05',
    category: 'preparation',
    categoryLabel: 'Preparation',
    name: 'Sepro Gyroscreen',
    slug: 'sepro-gyroscreen',
    summary: 'Efficient screening for wet slurries and dry ingredients.',
    photo: '/rhythm-photos/screen.png',
  },
  {
    id: 'chemical',
    num: '06',
    category: 'dosing',
    categoryLabel: 'Auto dosing',
    name: 'Chemical Handling System',
    slug: 'chemical-handling',
    summary: 'Accurate measurement and controlled addition to process.',
    photo: '/rhythm-photos/chemical.jpg',
  },
];

/**
 * Client Logos from Rhythm assets
 */
const domesticClients = [
  { name: 'Britannia Industries Ltd.', logo: '/rhythm-photos/client-domestic-01.png' },
  { name: 'ITC Ltd.', logo: '/rhythm-photos/client-domestic-02.png' },
  { name: 'Haldiram Foods International Pvt. Ltd.', logo: '/rhythm-photos/client-domestic-03.png' },
  { name: 'Unibic Foods India Pvt. Ltd.', logo: '/rhythm-photos/client-domestic-04.png' },
  { name: 'Patanjali Ayurved Ltd.', logo: '/rhythm-photos/client-domestic-05.jpg' },
  { name: 'Anmol Industries Ltd.', logo: '/rhythm-photos/client-domestic-06.png' },
  { name: 'Raja Udyog Pvt. Ltd.', logo: '/rhythm-photos/client-domestic-07.png' },
  { name: 'Bonn Nutrients Pvt. Ltd.', logo: '/rhythm-photos/client-domestic-08.jpg' },
  { name: 'Dukes Products (India) Ltd.', logo: '/rhythm-photos/client-domestic-09.jpg' },
  { name: 'Bhagwati Foods Pvt. Ltd.', logo: '/rhythm-photos/client-domestic-10.jpg' },
  { name: 'Mrs. Bector Food Specialities Ltd.', logo: '/rhythm-photos/client-domestic-11.png' },
];

const internationalClients = [
  { name: 'Britannia Nepal Ltd.', logo: '/rhythm-photos/client-international-01.png' },
  { name: 'Pran Foods Ltd.', logo: '/rhythm-photos/client-international-02.jpg' },
  { name: 'Kwality Noodles Industries (P) Ltd.', logo: '/rhythm-photos/client-international-03.png' },
  { name: 'Asian Biscuit & Confectionery Pvt. Ltd.', logo: '/rhythm-photos/client-international-04.png' },
  { name: 'Khajurico Nepal Pvt. Ltd.', logo: '/rhythm-photos/client-international-05.jpg' },
  { name: 'Ifad Multi Products Ltd.', logo: '/rhythm-photos/client-international-06.png' },
  { name: 'Lae Biscuit Co. Ltd.', logo: '/rhythm-photos/client-international-07.png' },
  { name: 'Reedisha Foods Ltd.', logo: '/rhythm-photos/client-international-08.jpg' },
];

export function HomePage2() {
  // Active machinery showcase in hero
  const [activeMachineIdx, setActiveMachineIdx] = useState(0);
  const activeMachine = showcaseMachines[activeMachineIdx];

  // Panorama Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);

  // Solutions category filter
  const [filterCategory, setFilterCategory] = useState<'all' | 'dosing' | 'preparation'>('all');

  // Client marquee pause state
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Quick enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Panorama slider auto-advance every 5.5s
  useEffect(() => {
    if (!isSliderPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % panoramaSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isSliderPlaying]);

  const filteredProducts = rhythmProducts.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Requirement Enquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement:\n${formData.requirement}\n\nSent via Rhythm Template 2`
    );
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.requirement}`
      );
    }
    setSubmitted(true);
    window.location.href = `mailto:logicequip@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="bg-[#f4f6f3] text-[#172b33] font-sans antialiased selection:bg-[#007f91] selection:text-white">
      <SEO
        title="New Logic Automation — Precision in handling. Consistency in every process."
        description="We are innovative and embrace new engineering challenges - delivering hygienic, dust-free, PLC-controlled raw material handling and ingredient preparation systems."
        path="/2"
      />

      {/* =========================================================================
          HERO SECTION (Rhythm Split Engineering Layout)
          ========================================================================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#dce3e3] bg-[#f4f6f3]">
        {/* Subtle engineering background glows & grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#d8eaf5]/60 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-[#007f91]/5 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-[#172b33]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007f91]" />
                <span>NEW LOGIC AUTOMATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-1.8px] leading-[1.04] text-[#172b33]">
                Precision in handling.
                <br />
                Consistency in
                <br />
                <em className="not-italic text-[#007f91]">every process.</em>
              </h1>

              <p className="text-base sm:text-lg text-[#66747a] leading-relaxed max-w-lg">
                We are innovative and embrace new engineering challenges &mdash; delivering hygienic, dust-free, PLC-controlled raw material handling and ingredient preparation systems for leading food, bakery, and biscuit plants around the world.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Button asChild size="lg" className="bg-[#007f91] hover:bg-[#006675] text-white font-medium text-xs px-6 py-3.5 rounded-none shadow-sm hover:-translate-y-0.5 transition-all">
                  <a href="#solutions">
                    Explore our systems
                    <ArrowRight className="h-4 w-4 ml-3" />
                  </a>
                </Button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#172b33] hover:text-[#007f91] transition-colors"
                >
                  Discuss your requirement
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Machinery Showcase */}
            <div className="lg:col-span-6">
              <div className="relative p-6 sm:p-8 rounded-2xl border border-[#dce3e3] bg-white shadow-xl shadow-[#172b33]/5 text-center">
                
                {/* Decorative orbit behind machinery */}
                <div 
                  className="pointer-events-none absolute top-12 left-[10%] right-[10%] h-[280px] rounded-[50%] border border-[#006b9d]/15 bg-radial from-[#d8eaf5]/50 to-transparent -rotate-12 -z-0"
                  aria-hidden="true" 
                />

                {/* Machine View Stage */}
                <div className="relative h-[340px] sm:h-[380px] flex flex-col justify-between items-center z-10">
                  
                  {/* Top Figcaption */}
                  <div className="self-start flex items-center gap-4 text-left">
                    <span className="font-mono text-3xl font-light text-[#007f91] border-r border-[#dce3e3] pr-4">
                      {activeMachine.number}
                    </span>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[1.4px] text-[#66747a]">
                        SYSTEM SPOTLIGHT
                      </span>
                      <strong className="block text-lg font-semibold text-[#172b33]">
                        {activeMachine.name}
                      </strong>
                    </div>
                  </div>

                  {/* Cutout Image with Smooth Fade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMachine.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative my-auto flex items-center justify-center h-[240px] w-full"
                    >
                      <img
                        src={activeMachine.cutout}
                        alt={activeMachine.name}
                        className="max-h-[230px] w-auto object-contain drop-shadow-[0_16px_14px_rgba(23,62,80,0.18)]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Interactive Details & CTA */}
                  <div className="w-full pt-3 border-t border-[#dce3e3] flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                    <p className="text-xs text-[#66747a] line-clamp-1 max-w-xs">
                      {activeMachine.description}
                    </p>
                    <Button asChild size="sm" className="bg-[#007f91] hover:bg-[#006675] text-white text-xs font-semibold rounded-none shrink-0">
                      <Link to={`/contact?system=${activeMachine.slug}`}>
                        Send Enquiry <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>

                </div>

                {/* 4 Machine Selectors Thumbnail Buttons */}
                <div className="flex items-center justify-center gap-3 pt-6 mt-4 border-t border-[#dce3e3]">
                  {showcaseMachines.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveMachineIdx(idx)}
                      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                        activeMachineIdx === idx
                          ? 'border-[#007f91] bg-[#007f91]/10 text-[#007f91] shadow-sm'
                          : 'border-[#dce3e3] bg-white text-[#66747a] hover:border-[#007f91]/50 hover:bg-[#f4f6f3]'
                      }`}
                    >
                      <img src={m.cutout} alt="" className="h-6 w-6 object-contain" />
                      <span>{m.number}</span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-[#66747a] mt-2 font-mono">
                  Select a system to explore
                </p>

              </div>
            </div>

          </div>

          {/* 4 Engineering Statistics Bar (Rhythm Stats) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-14 lg:pt-18 border-t border-[#dce3e3] mt-14">
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 border border-[#dce3e3]">
              <Building2 className="h-6 w-6 text-[#007f91] shrink-0" />
              <div>
                <strong className="block text-xl font-extrabold text-[#172b33]">2006</strong>
                <span className="text-xs text-[#66747a]">Established In India</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 border border-[#dce3e3]">
              <Layers className="h-6 w-6 text-[#007f91] shrink-0" />
              <div>
                <strong className="block text-xl font-extrabold text-[#172b33]">23+</strong>
                <span className="text-xs text-[#66747a]">Specialized Systems</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 border border-[#dce3e3]">
              <ShieldCheck className="h-6 w-6 text-[#007f91] shrink-0" />
              <div>
                <strong className="block text-xl font-extrabold text-[#172b33]">100%</strong>
                <span className="text-xs text-[#66747a]">Hygienic &amp; Dust-Free</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 border border-[#dce3e3]">
              <Sparkles className="h-6 w-6 text-[#007f91] shrink-0" />
              <div>
                <strong className="block text-xl font-extrabold text-[#172b33]">Tier-1</strong>
                <span className="text-xs text-[#66747a]">Global FMCG Clients</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          HERO PANORAMA CAROUSEL (Rhythm Panorama Slider)
          ========================================================================= */}
      <section className="relative bg-[#172b33] text-white overflow-hidden border-b border-[#172b33]">
        <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={panoramaSlides[activeSlide].image}
                alt={panoramaSlides[activeSlide].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172b33] via-[#172b33]/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Caption Overlay */}
          <div className="absolute inset-0 flex items-end pb-12 z-10 pointer-events-none">
            <div className="container-page w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-auto">
              <div className="space-y-1 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91] bg-white/10 px-2 py-0.5 rounded">
                  ENGINEERED FOR YOUR PROCESS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  {panoramaSlides[activeSlide].title}
                </h2>
                <p className="text-xs sm:text-sm text-warm-300">
                  {panoramaSlides[activeSlide].subtitle}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSliderPlaying(!isSliderPlaying)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
                  aria-label={isSliderPlaying ? 'Pause panorama slider' : 'Play panorama slider'}
                >
                  {isSliderPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>
                <div className="flex items-center gap-1.5">
                  {panoramaSlides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeSlide === idx ? 'w-6 bg-[#007f91]' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 / OUR SOLUTIONS SECTION (Rhythm Solutions Grid)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f4f6f3] border-b border-[#dce3e3]" id="solutions">
        <div className="container-page">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91] mb-2">
                01 / OUR SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-1.8px] text-[#172b33] leading-[1.04]">
                The right system.
                <br />
                <span className="text-[#66747a] font-normal">A better process.</span>
              </h2>
            </div>
            <p className="text-sm text-[#66747a] max-w-md leading-relaxed">
              Explore our range of handling and preparation solutions, designed around the demands of your production.
            </p>
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#dce3e3]">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-none border transition-all ${
                filterCategory === 'all'
                  ? 'bg-[#172b33] text-white border-[#172b33]'
                  : 'bg-white text-[#172b33] border-[#dce3e3] hover:border-[#007f91]'
              }`}
            >
              All systems <sup className="ml-1 text-[10px] text-[#007f91]">06</sup>
            </button>
            <button
              onClick={() => setFilterCategory('dosing')}
              className={`px-4 py-2 text-xs font-semibold rounded-none border transition-all ${
                filterCategory === 'dosing'
                  ? 'bg-[#172b33] text-white border-[#172b33]'
                  : 'bg-white text-[#172b33] border-[#dce3e3] hover:border-[#007f91]'
              }`}
            >
              Auto dosing
            </button>
            <button
              onClick={() => setFilterCategory('preparation')}
              className={`px-4 py-2 text-xs font-semibold rounded-none border transition-all ${
                filterCategory === 'preparation'
                  ? 'bg-[#172b33] text-white border-[#172b33]'
                  : 'bg-white text-[#172b33] border-[#dce3e3] hover:border-[#007f91]'
              }`}
            >
              Preparation
            </button>
            <a
              href="#accessories"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#007f91] hover:underline"
            >
              Accessories <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col justify-between bg-white border border-[#dce3e3] p-5 rounded-none shadow-sm hover:shadow-md hover:border-[#007f91] transition-all"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#f4f6f3] mb-4">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center bg-white/90 text-[#172b33] group-hover:bg-[#007f91] group-hover:text-white transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Meta Tag */}
                  <div className="flex items-center justify-between text-xs text-[#66747a] mb-2 font-mono">
                    <span>{p.num}</span>
                    <span className="uppercase text-[10px] font-bold text-[#007f91]">{p.categoryLabel}</span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold text-[#172b33] group-hover:text-[#007f91] transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#66747a] leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                {/* Send Enquiry Link */}
                <div className="mt-6 pt-3 border-t border-[#dce3e3]">
                  <Link
                    to={`/contact?system=${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007f91] group-hover:gap-2.5 transition-all"
                  >
                    Send an enquiry <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          OUR CUSTOMERS (Rhythm Client Section with Pause Toggle)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#dce3e3] overflow-hidden" id="clients">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91] mb-2">
              OUR CUSTOMERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-1.8px] text-[#172b33] leading-[1.04]">
              Trusted across production.
              <br />
              <span className="text-[#66747a] font-normal">In India and beyond.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsMarqueePaused(!isMarqueePaused)}
            className="px-3 py-1.5 text-xs font-semibold rounded border border-[#dce3e3] bg-[#f4f6f3] text-[#172b33] hover:border-[#007f91] transition-colors flex items-center gap-1.5"
          >
            {isMarqueePaused ? <Play className="h-3 w-3 text-[#007f91]" /> : <Pause className="h-3 w-3 text-[#007f91]" />}
            {isMarqueePaused ? 'Resume logo banners' : 'Pause logo banners'}
          </button>
        </div>

        {/* Domestic Row */}
        <div className="mb-8">
          <div className="container-page text-[10px] font-mono font-bold uppercase tracking-wider text-[#66747a] mb-3">
            DOMESTIC CUSTOMERS
          </div>
          <div className="mask-marquee overflow-hidden">
            <div className={`flex gap-4 ${isMarqueePaused ? '' : 'animate-marquee'}`}>
              {[...domesticClients, ...domesticClients].map((c, i) => (
                <div
                  key={`dom-${i}`}
                  className="flex h-16 w-36 sm:w-44 shrink-0 items-center justify-center p-2.5 rounded border border-[#dce3e3] bg-[#f4f6f3] hover:border-[#007f91] transition-colors"
                >
                  <img src={c.logo} alt={c.name} className="max-h-10 max-w-[120px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International Row */}
        <div>
          <div className="container-page text-[10px] font-mono font-bold uppercase tracking-wider text-[#66747a] mb-3">
            INTERNATIONAL CUSTOMERS
          </div>
          <div className="mask-marquee overflow-hidden">
            <div className={`flex gap-4 ${isMarqueePaused ? '' : 'animate-marquee-reverse'}`}>
              {[...internationalClients, ...internationalClients].map((c, i) => (
                <div
                  key={`intl-${i}`}
                  className="flex h-16 w-36 sm:w-44 shrink-0 items-center justify-center p-2.5 rounded border border-[#dce3e3] bg-[#f4f6f3] hover:border-[#007f91] transition-colors"
                >
                  <img src={c.logo} alt={c.name} className="max-h-10 max-w-[120px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / WHY NEW LOGIC (Rhythm About Section)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f4f6f3] border-b border-[#dce3e3]" id="about">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#dce3e3] bg-white p-2 shadow-md">
                <img
                  src="/rhythm-photos/flour.jpg"
                  alt="Flour handling equipment and pipework"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-mono font-bold text-[#66747a]">
                  <span>BUILT AROUND YOUR REQUIREMENTS</span>
                  <ArrowUpRight className="h-4 w-4 text-[#007f91]" />
                </div>
              </div>
            </div>

            {/* Right Copy & Benefits Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91]">
                02 / WHY NEW LOGIC
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-1.8px] text-[#172b33] leading-[1.04]">
                Practical engineering.
                <br />
                <span className="text-[#66747a] font-normal">From start to finish.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#66747a] leading-relaxed">
                Based in Bhiwandi, India, New Logic Automation provides end-to-end raw material handling solutions for food and process industries.
              </p>

              <p className="text-sm sm:text-base text-[#66747a] leading-relaxed">
                From customised equipment to installation, commissioning and servicing, we bring engineering and support together for your production needs.
              </p>

              {/* 3 Benefit Rows */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-4 bg-white border border-[#dce3e3] hover:border-[#007f91] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#007f91]">01</span>
                    <h3 className="text-sm font-bold text-[#172b33]">Customised equipment</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#66747a]" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-[#dce3e3] hover:border-[#007f91] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#007f91]">02</span>
                    <h3 className="text-sm font-bold text-[#172b33]">Quality assurance</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#66747a]" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-[#dce3e3] hover:border-[#007f91] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#007f91]">03</span>
                    <h3 className="text-sm font-bold text-[#172b33]">Technical support &amp; know-how</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#66747a]" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ACCESSORIES BANNER (Rhythm Accessories)
          ========================================================================= */}
      <section className="py-12 bg-white border-b border-[#dce3e3]" id="accessories">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91] mb-1">
              COMPONENTS THAT COMPLETE THE SYSTEM
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#172b33]">
              Every detail counts.
            </h2>
            <p className="mt-1 text-xs text-[#66747a]">
              Gear pumps &middot; Roots blowers &middot; Valves &middot; Filters
            </p>
          </div>
          <Button asChild className="rounded-full h-12 w-12 p-0 bg-[#007f91] hover:bg-[#006675] text-white shrink-0">
            <Link to="/contact?system=accessories" aria-label="Enquire about accessories">
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* =========================================================================
          03 / LET’S CONNECT (Rhythm Contact Section)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f4f6f3]" id="contact">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#007f91]">
                03 / LET&rsquo;S CONNECT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-1.8px] text-[#172b33] leading-[1.04]">
                Tell us what
                <br />
                your process
                <br />
                <em className="not-italic text-[#007f91]">needs.</em>
              </h2>

              <p className="text-sm text-[#66747a] leading-relaxed">
                Share your requirement with our team.
                <br />
                Let&rsquo;s find the right system for your application.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919820646393"
                  className="flex items-center gap-2 text-lg font-bold text-[#172b33] hover:text-[#007f91] transition-colors"
                >
                  +91 98206 46393
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:logicequip@gmail.com"
                  className="block text-sm font-mono text-[#66747a] hover:text-[#007f91] transition-colors"
                >
                  logicequip@gmail.com
                </a>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 bg-white border border-[#dce3e3] shadow-md">
                <h3 className="text-lg font-bold text-[#172b33] mb-4">
                  Start a conversation
                </h3>

                {submitted ? (
                  <div className="p-6 bg-[#f4f6f3] border border-[#007f91]/30 text-center space-y-3">
                    <Check className="h-8 w-8 text-[#007f91] mx-auto" />
                    <h4 className="text-sm font-bold text-[#172b33]">Requirement Drafted</h4>
                    <p className="text-xs text-[#66747a]">
                      Your email client has been opened with your inquiry addressed to <strong>logicequip@gmail.com</strong>.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-[#172b33] uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-[#dce3e3] bg-[#f4f6f3] px-3.5 py-2.5 text-xs text-[#172b33] focus:border-[#007f91] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#172b33] uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Your contact number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-[#dce3e3] bg-[#f4f6f3] px-3.5 py-2.5 text-xs text-[#172b33] focus:border-[#007f91] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#172b33] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="work@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-[#dce3e3] bg-[#f4f6f3] px-3.5 py-2.5 text-xs text-[#172b33] focus:border-[#007f91] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#172b33] uppercase tracking-wider mb-1">
                        What does your process need? *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Ingredients handled, plant throughput, batch frequency, or upgrade plans..."
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full border border-[#dce3e3] bg-[#f4f6f3] px-3.5 py-2.5 text-xs text-[#172b33] focus:border-[#007f91] focus:bg-white focus:outline-none resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#007f91] hover:bg-[#006675] text-white font-bold py-3 text-xs rounded-none transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="h-3.5 w-3.5" /> Send your requirement
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
