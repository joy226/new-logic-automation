import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, Mail,
  Package, Factory, Settings2, Wrench,
  ArrowDown, CheckCircle2, Layers, Workflow, Quote, ClipboardCheck,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SmartImage } from '@/components/ui/smart-image';
import { cn } from '@/lib/utils';
import { images } from '@/lib/images';
import { products, categoryLabels, categoryDescriptions, type ProductCategory } from '@/data/products';
import { siteConfig, processStages } from '@/data/site';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];
const categoryIcons: Record<ProductCategory, React.ElementType> = {
  'dosing-handling': Package,
  'preparation': Settings2,
  'accessories': Wrench,
};
const categoryImages: Record<ProductCategory, string> = {
  'dosing-handling': images.categoryDosing,
  'preparation': images.categoryPreparation,
  'accessories': images.categoryAccessories,
};

const featuredSlugs = ['flour-maida-handling', 'cream-preparation', 'sugar-solution-preparation', 'chemical-handling'];

export function HomePage() {
  return (
    <>
      <SEO
        title="New Logic Automation — Material Handling, Dosing & Preparation Systems"
        description={siteConfig.description}
        path="/"
      />
      <HeroSection />
      <TrustStrip />
      <SolutionDiscoverySection />
      <ProcessOverviewSection />
      <FeaturedSystemsSection />
      <BenefitsSection />
      <CompanyIntroSection />
      <ClientLogoGridSection />
      <ClientTrustSection />
      <FinalEnquirySection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-navy-700 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src={images.hero}
          alt={images.heroAlt}
          aspectRatio=""
          className="absolute inset-0 h-full w-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>
      <div className="container-page relative pt-32 pb-24 lg:pt-36 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] sm:text-xs sm:px-4 font-semibold text-teal-300 backdrop-blur-sm max-w-full">
            <Factory className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Experts since 2006 · Food & process industries</span>
          </span>
          <h1 className="mt-6 text-display font-heading text-white">
            Precision handling.<br />Consistent production.
          </h1>
          <p className="mt-6 text-lg text-warm-200 leading-relaxed max-w-2xl">
            {siteConfig.description} We design and build start-to-end systems for receiving, conveying, preparing, and dosing materials into production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link to="/solutions">Explore Solutions <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </motion.div>

        {/* Animated process line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  );
}

function TrustStrip() {
  const points = [
    { label: 'Dry ingredients', detail: 'Flour, sugar and powders' },
    { label: 'Liquid ingredients', detail: 'Water, oils and syrups' },
    { label: 'Preparation systems', detail: 'Creams, solutions and emulsions' },
    { label: 'Project-led design', detail: 'Configured to your process' },
  ];

  return (
    <section className="border-b border-warm-200 bg-white">
      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {points.map((point, index) => (
            <div key={point.label} className={`flex items-start gap-3 ${index > 1 ? 'hidden sm:flex' : ''}`}>
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-navy-700">{point.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-warm-500">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionDiscoverySection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Solutions</span>
          <h2 className="mt-3 text-h2 font-heading text-navy-700">Find the right system for your process</h2>
          <p className="mt-4 text-warm-500 leading-relaxed">
            Our systems fall into three categories — from receiving and conveying raw materials, to preparing ingredients, to the accessories that keep everything running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {categoryOrder.map((cat, i) => {
            const Icon = categoryIcons[cat];
            const count = products.filter(p => p.category === cat).length;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full flex"
              >
                <Link
                  to={`/solutions?category=${cat}`}
                  className="group flex flex-col w-full h-full rounded-xl border border-warm-200 bg-white overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300"
                >
                  <SmartImage
                    src={categoryImages[cat]}
                    alt={categoryLabels[cat]}
                    aspectRatio="aspect-[16/10]"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                        <Icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <Badge variant="teal" className="text-xs font-semibold">{count} systems</Badge>
                    </div>
                    <h3 className="text-h4 font-heading text-navy-700 mb-2">{categoryLabels[cat]}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed mb-6 flex-1">{categoryDescriptions[cat]}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessOverviewSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = processStages[activeStage];
  const stageProducts = stage.productSlugs
    .map(s => products.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section className="py-20 lg:py-28 bg-navy-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-page relative">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Process Overview</span>
          <h2 className="mt-3 text-h2 font-heading text-white">From raw material to production line</h2>
          <p className="mt-4 text-warm-300 leading-relaxed">
            A typical material handling system follows this flow. This is a general overview — actual configurations vary by project, material, and process.
          </p>
        </div>

        {/* Stage buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-10">
          {processStages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveStage(i)}
              className={`flex items-center gap-3 px-5 py-3 text-sm font-semibold rounded-lg sm:rounded-none sm:first:rounded-l-lg sm:last:rounded-r-lg transition-all ${
                activeStage === i
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/5 text-warm-300 hover:bg-white/10'
              }`}
              aria-pressed={activeStage === i}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold bg-white/10">
                {i + 1}
              </span>
              {s.label}
              {i < processStages.length - 1 && (
                <ArrowDown className="h-3 w-3 sm:hidden" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8">
              <h3 className="text-h3 font-heading text-white mb-3">{stage.title}</h3>
              <p className="text-warm-300 leading-relaxed">{stage.description}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">Relevant systems</h4>
              <div className="space-y-2">
                {stageProducts.map(p => (
                  <Link
                    key={p.slug}
                    to={`/systems/${p.slug}`}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm font-medium text-warm-200 hover:bg-white/10 hover:text-white transition-all group"
                  >
                    {p.name}
                    <ArrowRight className="h-4 w-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeaturedSystemsSection() {
  const featured = featuredSlugs.map(s => products.find(p => p.slug === s)).filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Featured Systems</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">Core systems for your production line</h2>
          </div>
          <Link to="/solutions" className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5">
            View all systems <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-full flex"
            >
              <Link
                to={`/systems/${p.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-2 w-full h-full rounded-xl border border-warm-200 bg-white overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300"
              >
                <div className="relative min-h-[220px] sm:min-h-full h-56 sm:h-auto w-full overflow-hidden bg-warm-100">
                  <SmartImage
                    src={images.products[p.slug] ?? images.categoryDosing}
                    alt={p.name}
                    aspectRatio=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-warm-400 mb-2 block">{p.categoryLabel}</span>
                    <h3 className="text-h4 font-heading text-navy-700 mb-2">{p.name}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed mb-4">{p.shortDescription}</p>
                    <ul className="space-y-1.5 mb-5">
                      {p.benefits.slice(0, 2).map(b => (
                        <li key={b} className="flex items-start gap-2 text-xs text-warm-600">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-2.5 transition-all pt-2">
                    View System <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Layers,
      title: 'Accurate dosing',
      description: 'Weight-based and flow-based dosing systems deliver the right quantity of every ingredient, supporting consistent recipes batch after batch.',
    },
    {
      icon: Workflow,
      title: 'Reduced manual handling',
      description: 'Automated conveying and dosing reduces the need for manual lifting, carrying, and measuring of raw materials across the production line.',
    },
    {
      icon: Factory,
      title: 'Cleaner transfer',
      description: 'Enclosed pneumatic conveying and hygienic pipework minimise dust, spillage, and contamination risk during material transfer.',
    },
    {
      icon: Settings2,
      title: 'Consistent batches',
      description: 'Recipe-driven preparation and dosing systems help ensure that every batch meets the same quality and composition standards.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-warm-100">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Engineering Benefits</span>
          <h2 className="mt-3 text-h2 font-heading text-navy-700">Why automated material handling matters</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-warm-200 bg-warm-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-700 mb-4">
                  <Icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-h4 font-heading text-navy-700 mb-2">{b.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompanyIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5 }}
          >
            <SmartImage
              src={images.aboutMain}
              alt="Food production facility with industrial processing equipment"
              aspectRatio="aspect-[5/4]"
              className="rounded-xl shadow-card"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">About New Logic Automation</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">
              Engineering material handling solutions for process industries
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              New Logic Automation provides start-to-end material handling solutions for the food processing industry and related process applications. From bulk receiving and storage to accurate dosing and ingredient preparation, our systems are designed to keep production lines running efficiently and hygienically.
            </p>
            <p className="mt-4 text-warm-500 leading-relaxed">
              We are headquartered in Bhiwandi, Thane, India, and have supplied systems to food manufacturers across India and internationally.
            </p>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link to="/about">Learn About Us <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



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
    <div
      className={cn(
        'group flex items-center gap-3.5 px-4 py-3 rounded-xl border border-warm-200 bg-white shadow-subtle hover:shadow-card hover:border-teal-300 transition-all duration-300 min-w-[280px] max-w-[310px] shrink-0 select-none cursor-pointer'
      )}
    >
      <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg bg-warm-50/60 p-1.5 border border-warm-100 overflow-hidden group-hover:border-teal-200 transition-colors">
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
          <Badge variant={client.type === 'Domestic' ? 'default' : 'teal'} className="text-[10px] px-1.5 py-0 font-medium shrink-0">
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

function ClientLogoGridSection() {
  return (
    <section className="border-b border-warm-200 bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container-page mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Industrial Track Record</span>
        <h2 className="mt-3 text-h2 font-heading text-navy-700">Partners &amp; clients</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-warm-500">
          Leading commercial food manufacturers across India and internationally rely on New Logic Automation systems for automated material conveying, accurate dosing, and recipe preparation.
        </p>
      </div>

      <div className="relative w-full space-y-4">
        {/* Row 1: Domestic moving left */}
        <div className="mask-marquee overflow-hidden">
          <div className="animate-marquee flex gap-4">
            {[...domesticClients, ...domesticClients].map((client, idx) => (
              <ClientLogoCard key={`${client.name}-d1-${idx}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2: International moving right */}
        <div className="mask-marquee overflow-hidden">
          <div className="animate-marquee-reverse flex gap-4">
            {[...internationalClients, ...internationalClients].map((client, idx) => (
              <ClientLogoCard key={`${client.name}-i1-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-8 text-center">
        <p className="text-xs text-warm-400">
          Hover over any partner badge to pause. Installed systems operating continuously across India, Nepal, Bangladesh, and Papua New Guinea.
        </p>
      </div>
    </section>
  );
}

function ClientTrustSection() {
  const feedbackThemes = [
    'Accurate dosing that supports consistent recipes and batch quality.',
    'Cleaner, more hygienic transfer with less dust, spillage, and manual handling.',
    'Practical engineering support from material receiving through to production feed.',
  ];

  const caseStudies = [
    {
      title: 'Flour handling for continuous production',
      summary: 'A dust-controlled route from bag or bulk receiving to storage, weighing, and downstream mixing.',
      outcome: 'Cleaner transfer · Reduced manual handling · Repeatable dosing',
    },
    {
      title: 'Multi-liquid dosing for recipe consistency',
      summary: 'A controlled system for water, oil, syrup, and other liquids with recipe-led delivery into the process.',
      outcome: 'Accurate quantities · Shorter dosing cycles · Consistent batches',
    },
    {
      title: 'Sugar solution preparation',
      summary: 'An automated preparation flow that measures, dissolves, and feeds sugar solution to the production line.',
      outcome: 'Hygienic preparation · Reliable charging · Easier operation',
    },
  ];

  return (
    <section className="border-b border-warm-200 bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Client confidence</span>
          <h2 className="mt-3 text-h2 font-heading text-navy-700">Built around the results your plant needs</h2>
          <p className="mt-4 leading-relaxed text-warm-500">
            New Logic Automation is referenced by food manufacturers in India and internationally. These client priorities and application profiles show how our systems are designed to support dependable production.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl bg-navy-700 p-7 text-white lg:p-8">
            <Quote className="h-8 w-8 text-accent-400" aria-hidden="true" />
            <h3 className="mt-5 text-h3 font-heading text-white">What clients value</h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-200">
              A practical summary of the outcomes customers typically look for when upgrading material handling and preparation.
            </p>
            <ul className="mt-6 space-y-4">
              {feedbackThemes.map(theme => (
                <li key={theme} className="flex items-start gap-3 text-sm leading-relaxed text-warm-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                  {theme}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-warm-300">
              Customer names are shown in the reference list above. Detailed references and project discussions are available on request.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="rounded-xl border border-warm-200 bg-warm-50 p-5 transition-shadow hover:shadow-card lg:flex lg:items-start lg:gap-5">
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 lg:mb-0">
                  <ClipboardCheck className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent-600">0{index + 1}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-warm-400">Application profile</span>
                  </div>
                  <h3 className="mt-2 text-h4 font-heading text-navy-700">{study.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-500">{study.summary}</p>
                  <p className="mt-3 text-xs font-semibold leading-relaxed text-teal-700">{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalEnquirySection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="container-page">
        <div className="rounded-2xl bg-navy-700 text-white p-8 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-h2 font-heading text-white mb-4">
                Planning a new line or upgrading an existing system?
              </h2>
              <p className="text-warm-300 leading-relaxed mb-6">
                Tell us about your material, your process, and your production requirements. We'll help you identify the right handling, dosing, and preparation systems for your project.
              </p>
              <div className="space-y-3">
                {siteConfig.phoneNumbers.map(p => (
                  <a key={p.number} href={`tel:${p.number.replace(/\s/g, '')}`} className="flex items-center gap-3 text-warm-200 hover:text-teal-400 transition-colors">
                    <Phone className="h-4 w-4 text-teal-400" />
                    {p.name}: {p.number}
                  </a>
                ))}
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-warm-200 hover:text-teal-400 transition-colors">
                  <Mail className="h-4 w-4 text-teal-400" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" variant="primary">
                <Link to="/contact">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/solutions">Browse All Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
