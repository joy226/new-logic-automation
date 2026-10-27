import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { 
  Search, 
  X, 
  ChevronRight, 
  SlidersHorizontal
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { products, categoryLabels, type ProductCategory } from '@/data/products';
import { getProductImage } from '@/lib/images';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];

export function SolutionsPage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const category = searchParams.get('category') ?? '';

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const filtered = useMemo(() => {
    let result = products;
    if (category) {
      result = result.filter(p => p.category === category);
    }
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.synonyms.some(s => s.toLowerCase().includes(q)) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }
    return result;
  }, [query, category]);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams(new URLSearchParams());

  return (
    <>
      <SEO
        title="Engineering Solutions & Modular Equipment — New Logic Automation"
        description="Explore New Logic Automation's complete portfolio of food-grade material handling, pneumatic conveying, and precision dosing systems."
        path="/solutions"
      />

      {/* Top Reading Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-400 z-50 pointer-events-none"
      />

      <div className="bg-[#f4f6f3] text-[#172b33] font-sans min-h-screen">

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
              <span className="text-navy-900 font-semibold">Equipment Catalogue</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-warm-200 bg-warm-50 px-3 py-1 text-xs font-semibold text-navy-800 shadow-subtle mb-3">
                <SlidersHorizontal className="h-3.5 w-3.5 text-teal-600" />
                Technical Portfolio • 13 Heavy-Duty Modules
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
                Engineered Food Automation <br className="hidden sm:inline" />
                <span className="text-teal-500">Systems &amp; Skids</span>
              </h1>
              <p className="mt-3 text-base text-warm-600 leading-relaxed">
                Browse our complete range of turnkey material handling equipment—from closed-loop pneumatic conveying and bulk silos to gravimetric micro-ingredient dosing and continuous high-shear cream preparation plants.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar & Controls */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-warm-200 shadow-subtle py-3.5">
          <div className="container-page">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
                <button
                  type="button"
                  onClick={() => updateParam('category', '')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5',
                    category === ''
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-warm-100/90 text-navy-800 hover:bg-warm-200/90'
                  )}
                >
                  All Systems
                  <span className={cn(
                    'rounded-full px-1.5 py-0.2 text-[10px] font-mono',
                    category === '' ? 'bg-white/20 text-white' : 'bg-warm-200 text-navy-700'
                  )}>
                    {products.length}
                  </span>
                </button>

                {categoryOrder.map((cat) => {
                  const count = products.filter(p => p.category === cat).length;
                  const isActive = category === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => updateParam('category', cat)}
                      className={cn(
                        'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5',
                        isActive
                          ? 'bg-teal-500 text-white shadow-sm'
                          : 'bg-warm-100/90 text-navy-800 hover:bg-warm-200/90'
                      )}
                    >
                      {categoryLabels[cat]}
                      <span className={cn(
                        'rounded-full px-1.5 py-0.2 text-[10px] font-mono',
                        isActive ? 'bg-white/20 text-white' : 'bg-warm-200 text-navy-700'
                      )}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Field */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-400" />
                <Input
                  type="search"
                  placeholder="Search flour, maida, dosing, cream..."
                  value={query}
                  onChange={(e) => updateParam('q', e.target.value)}
                  className="pl-9 pr-8 h-9 text-xs rounded-lg border-warm-200 bg-warm-50 focus:bg-white"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => updateParam('q', '')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-400 hover:text-navy-900"
                    aria-label="Clear search query"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards Grid with Staggered Scroll Animations */}
        <section className="py-12 lg:py-16">
          <div className="container-page">
            {/* Active filter badge bar */}
            {(category || query) && (
              <div className="mb-6 flex items-center justify-between bg-white rounded-xl border border-warm-200 px-4 py-2.5 shadow-subtle text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-warm-500 font-medium">Filtering by:</span>
                  {category && (
                    <span className="rounded-md bg-teal-50 px-2.5 py-1 font-semibold text-teal-700 border border-teal-200 flex items-center gap-1">
                      {categoryLabels[category as ProductCategory]}
                      <button onClick={() => updateParam('category', '')}><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  {query && (
                    <span className="rounded-md bg-warm-100 px-2.5 py-1 font-semibold text-navy-800 border border-warm-200 flex items-center gap-1">
                      "{query}"
                      <button onClick={() => updateParam('q', '')}><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  <span className="text-warm-400 font-mono">({filtered.length} matching)</span>
                </div>
                <button onClick={clearFilters} className="font-semibold text-teal-600 hover:underline">
                  Reset Filters
                </button>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center rounded-2xl border border-warm-200 bg-white p-12 max-w-lg mx-auto shadow-sm">
                <Search className="h-10 w-10 text-warm-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy-900">No matching equipment found</h3>
                <p className="mt-1 text-xs text-warm-500">
                  Try adjusting your search keywords or reset the category filters.
                </p>
                <Button onClick={clearFilters} variant="outline" size="sm" className="mt-4">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                    className="group flex flex-col rounded-2xl border border-warm-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300"
                  >
                    {/* Visual Photo Header */}
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

                    {/* Card Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs text-warm-600 leading-relaxed line-clamp-3">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Technical Spec Matrix */}
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

                    {/* Card Footer Actions */}
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
            )}
          </div>
        </section>
      </div>
    </>
  );
}
