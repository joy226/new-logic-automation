import { useState } from 'react';
import { TemplateLink as Link } from '@/context/TemplateContext';
import { ArrowRight, Filter, Search, CheckCircle2, FileText, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categoryLabels, type ProductCategory } from '@/data/products';

export function HomePage4() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white text-navy-900 font-sans">
      {/* Template 4 Concept Banner */}
      <div className="bg-amber-500 text-navy-950 py-2 px-4 text-center text-xs font-bold border-b border-amber-600">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" /> Template 4 Preview:
        </span>{' '}
        <span>Commercial Buyer Catalogue &amp; Rapid RFQ Workflow</span>
      </div>

      {/* Hero with Direct Action */}
      <section className="bg-warm-100/60 border-b border-warm-200 py-14 lg:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <Badge className="bg-navy-900 text-white mb-4">Direct Commercial Catalogue</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
              Commercial Food Automation Equipment &amp; Dosing Machinery
            </h1>
            <p className="mt-4 text-base text-warm-600 leading-relaxed">
              Explore standard and custom engineered systems for biscuit, bakery, confectionery, and chemical processing plants. Fast technical datasheets, plant layout guidance, and commercial quotes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold">
                <Link to="/contact">Request Rapid Price Quotation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-warm-300 text-navy-800 hover:bg-white">
                <Link to="/about">About New Logic Engineering</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buyer Filter & Catalogue */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-warm-200 pb-6 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900">Equipment Catalogue ({filtered.length} Systems)</h2>
              <p className="text-xs text-warm-500 mt-1">Select an industrial category to filter systems:</p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-warm-100 text-navy-700 hover:bg-warm-200'
                }`}
              >
                All Systems ({products.length})
              </button>
              {(Object.keys(categoryLabels) as ProductCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-warm-100 text-navy-700 hover:bg-warm-200'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-warm-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full rounded-lg overflow-hidden bg-warm-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                      {categoryLabels[item.category]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-warm-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-warm-100 flex items-center justify-between">
                  <Link
                    to={`/systems/${item.slug}`}
                    className="text-xs font-bold text-navy-900 hover:text-teal-600"
                  >
                    View Specs &rarr;
                  </Link>
                  <Button asChild size="sm" variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 text-xs">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
