import { TemplateLink as Link } from '@/context/TemplateContext';
import { ArrowRight, Cpu, Activity, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';

export function HomePage3() {
  const topProducts = products.slice(0, 6);

  return (
    <div className="bg-navy-950 text-white font-sans">
      {/* Template 3 Concept Banner */}
      <div className="bg-teal-900/40 text-teal-300 py-2 px-4 text-center text-xs font-medium border-b border-teal-800/40">
        <span className="inline-flex items-center gap-1.5 font-bold">
          <Sparkles className="h-3.5 w-3.5" /> Template 3 Preview:
        </span>{' '}
        <span>Enterprise Automation &amp; Turnkey Plant Engineering</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-navy-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.15),transparent_50%)]" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/40 px-3 py-1 text-xs uppercase tracking-wider">
              Turnkey Industrial Automation
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Intelligent Automation for <br />
              <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
                High-Volume Food Plants
              </span>
            </h1>

            <p className="text-base sm:text-lg text-warm-300 leading-relaxed max-w-2xl">
              From raw intake to high-speed batching: New Logic delivers custom PLC-controlled pneumatic conveying, loss-in-weight dosing, and multi-liquid systems engineered for zero downtime.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold px-8 shadow-lg shadow-teal-500/20">
                <Link to="/contact">Request Engineering Proposal <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-700 bg-navy-900/60 text-white hover:bg-navy-800">
                <Link to="/solutions">Explore Turnkey Systems</Link>
              </Button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-navy-800 pt-8">
            <div className="p-4 rounded-xl bg-navy-900/50 border border-navy-800">
              <p className="text-3xl font-extrabold text-teal-400">18+</p>
              <p className="text-xs text-warm-400 mt-1">Years of Innovation</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/50 border border-navy-800">
              <p className="text-3xl font-extrabold text-white">500+</p>
              <p className="text-xs text-warm-400 mt-1">Industrial Plants</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/50 border border-navy-800">
              <p className="text-3xl font-extrabold text-teal-400">4+</p>
              <p className="text-xs text-warm-400 mt-1">Countries Operating</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/50 border border-navy-800">
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-xs text-warm-400 mt-1">In-House Manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Showcase */}
      <section className="py-16 lg:py-24 bg-navy-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Automated Equipment</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Enterprise-Grade Food Processing Line</h2>
            <p className="mt-3 text-sm text-warm-400">
              Manufactured with SS304/SS316 sanitary contact parts, closed pneumatic loops, and precision micro-dosing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((p) => (
              <div key={p.id} className="rounded-xl border border-navy-800 bg-navy-950 p-5 hover:border-teal-500/50 transition-all group flex flex-col justify-between">
                <div>
                  <div className="h-44 rounded-lg overflow-hidden mb-4 bg-navy-900">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-warm-400 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-navy-800 flex items-center justify-between">
                  <span className="text-[11px] text-teal-400 font-mono">PID / PLC Integrated</span>
                  <Link to={`/systems/${p.slug}`} className="text-xs font-semibold text-white hover:text-teal-400 flex items-center gap-1">
                    System Specs <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-bold">
              <Link to="/solutions">View Complete Systems Catalogue (13 Solutions)</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
