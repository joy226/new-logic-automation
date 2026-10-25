import { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, X, ArrowRight, Package, Settings2, Wrench } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SmartImage } from '@/components/ui/smart-image';
import { cn } from '@/lib/utils';
import { images } from '@/lib/images';
import { products, categoryLabels, categoryDescriptions, type ProductCategory } from '@/data/products';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];
const categoryIcons: Record<ProductCategory, React.ElementType> = {
  'dosing-handling': Package,
  'preparation': Settings2,
  'accessories': Wrench,
};

export function SolutionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const category = searchParams.get('category') ?? '';

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

  useEffect(() => {
    const title = query
      ? `Search: "${query}" — Solutions`
      : category
      ? `${categoryLabels[category as ProductCategory]} — Solutions`
      : 'Solutions — Material Handling, Dosing & Preparation Systems';
    document.title = title;
  }, [query, category]);

  return (
    <>
      <SEO
        title="Solutions — Material Handling, Dosing & Preparation | New Logic Automation"
        description="Browse all material handling, dosing, preparation systems and accessories. Search by name or filter by category."
        path="/solutions"
      />
      {/* Header band */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="container-page">
          <nav className="text-xs text-white/50 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Solutions</span>
          </nav>
          <h1 className="text-h1 font-heading text-white mb-4">Solutions Directory</h1>
          <p className="text-white/70 leading-relaxed max-w-2xl">
            Search our complete range of material handling, dosing, preparation systems, and accessories. Filter by category or search by system name or material.
          </p>
        </div>
      </section>

      {/* Search and filters */}
      <section className="sticky top-14 lg:top-[6.25rem] z-30 bg-white/95 backdrop-blur-md border-b border-warm-200">
        <div className="container-page py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-400" />
              <Input
                type="search"
                placeholder="Search by system name or material (e.g. flour, sugar, cream)..."
                value={query}
                onChange={(e) => updateParam('q', e.target.value)}
                className="pl-10"
              />
              {query && (
                <button
                  onClick={() => updateParam('q', '')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-navy-900"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              {categoryOrder.map(cat => (
                <button
                  key={cat}
                  onClick={() => updateParam('category', category === cat ? '' : cat)}
                  className={cn(
                    'px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap border',
                    category === cat
                      ? 'bg-teal-500 text-white border-teal-500'
                      : 'border-warm-200 text-warm-500 hover:border-navy-300 hover:text-navy-900'
                  )}
                >
                  {categoryLabels[cat].split(' & ')[0]}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-warm-500">
              {filtered.length} {filtered.length === 1 ? 'system' : 'systems'} found
            </span>
            {(query || category) && (
              <button onClick={clearFilters} className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1">
                <X className="h-3.5 w-3.5" /> Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-16 bg-warm-50 min-h-[50vh]">
        <div className="container-page">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-warm-100">
                <Search className="h-8 w-8 text-warm-400" />
              </div>
              <h2 className="text-h3 font-heading text-navy-900 mb-2">No systems found</h2>
              <p className="text-warm-500 mb-6">
                We couldn't find a system matching "{query}". Try a different term or clear your filters.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear filters and show all
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => {
                const Icon = categoryIcons[p.category];
                return (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.3) }}
                  >
                    <Link
                      to={`/systems/${p.slug}`}
                      className="group block h-full bg-white border border-warm-200 hover:border-navy-300 transition-all duration-300 overflow-hidden"
                    >
                      <SmartImage
                        src={images.products[p.slug] ?? images.categoryDosing}
                        alt={p.name}
                        className="transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-4 w-4 text-teal-600" />
                          <span className="text-xs font-semibold text-warm-400">{p.categoryLabel}</span>
                        </div>
                        <h3 className="text-h4 font-heading text-navy-900 mb-2">{p.name}</h3>
                        <p className="text-sm text-warm-500 leading-relaxed mb-3 line-clamp-2">{p.shortDescription}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-2.5 transition-all">
                          View System <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
