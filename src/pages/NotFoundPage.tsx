import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

export function NotFoundPage() {
  const popularSystems = products.slice(0, 4);

  return (
    <>
      <SEO
        title="Page Not Found — New Logic Automation"
        description="The page you are looking for could not be found. Browse our solutions or contact us for assistance."
        path="/404"
        noindex
      />
      <section className="min-h-[70vh] flex items-center bg-navy-700 text-white">
        <div className="container-page py-20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5">
            <Search className="h-10 w-10 text-teal-400" />
          </div>
          <h1 className="text-display font-heading text-white mb-4">404</h1>
          <p className="text-lg text-warm-300 max-w-xl mx-auto mb-8">
            The page you are looking for could not be found. It may have been moved, renamed, or the link may be outdated.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button asChild variant="primary" size="lg">
              <Link to="/"><Home className="h-4 w-4" /> Back to Home</Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link to="/solutions">Browse Solutions <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-warm-400 mb-4">Or try one of these popular systems:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSystems.map(p => (
                <Link
                  key={p.slug}
                  to={`/systems/${p.slug}`}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-warm-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
