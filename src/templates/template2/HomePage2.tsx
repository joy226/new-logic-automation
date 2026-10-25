import { TemplateLink as Link } from '@/context/TemplateContext';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Gauge, Zap, Cog, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';

export function HomePage2() {
  const featured = products.slice(0, 4);

  return (
    <div className="bg-warm-50 text-navy-900 font-sans">
      {/* Template 2 Concept Banner */}
      <div className="bg-navy-900 text-white py-2 px-4 text-center text-xs font-medium border-b border-navy-800">
        <span className="inline-flex items-center gap-1.5 text-teal-400 font-bold">
          <Sparkles className="h-3.5 w-3.5" /> Template 2 Preview:
        </span>{' '}
        <span className="text-warm-300">Modern Engineering &amp; Modular Industrial Flow</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-warm-200 py-16 lg:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="outline" className="border-teal-500/30 bg-teal-50 text-teal-700 px-3 py-1 font-semibold text-xs uppercase tracking-wider">
                Industrial Automation Systems Since 2006
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
                Engineering Precision for <br />
                <span className="text-teal-600">Continuous Food Processing</span>
              </h1>
              <p className="text-base sm:text-lg text-warm-600 leading-relaxed max-w-2xl">
                Custom pneumatics, sanitary liquid batching, micro-ingredient precision, and closed-loop material transport designed for zero contamination and continuous uptime.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md">
                  <Link to="/solutions">
                    Explore Systems Architecture <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-navy-200 text-navy-800 hover:bg-warm-100">
                  <Link to="/contact">Request Engineering Consultation</Link>
                </Button>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-warm-200">
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-navy-900">500+</p>
                  <p className="text-xs text-warm-500 font-medium">Plant Installations</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-teal-600">±0.2%</p>
                  <p className="text-xs text-warm-500 font-medium">Dosing Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-navy-900">18+ Yrs</p>
                  <p className="text-xs text-warm-500 font-medium">OEM Track Record</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual / Process Diagram */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-warm-300 bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between border-b border-navy-700/60 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Factory className="h-5 w-5 text-teal-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-warm-300">Complete Process Flow</span>
                  </div>
                  <span className="rounded-full bg-teal-400/20 px-2 py-0.5 text-[10px] font-semibold text-teal-300">Closed-Loop</span>
                </div>

                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Raw Intake & Screening', desc: 'Flour silos, bag dump stations & vibrating gyroscreen sifting' },
                    { step: '02', title: 'Pneumatic Conveying', desc: 'Dense/lean phase pressure and vacuum transport with zero dust' },
                    { step: '03', title: 'Micro & Liquid Dosing', desc: 'Load-cell loss-in-weight batching with recipe PLC controller' },
                    { step: '04', title: 'Cream & Slurry Prep', desc: 'Jacketed temperature-controlled homogenizers & emulsifiers' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3 rounded-lg bg-navy-800/60 p-3 border border-navy-700/40">
                      <span className="font-mono text-xs font-bold text-teal-400 bg-navy-900/80 px-2 py-1 rounded">
                        {s.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{s.title}</h4>
                        <p className="text-[11px] text-warm-300 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-navy-700/60 flex items-center justify-between text-xs text-warm-400">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-teal-400" /> Sanitary 304/316 SS</span>
                  <span>PLC Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Systems Grid */}
      <section className="py-16 lg:py-20 bg-warm-50">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Equipment Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Core Automation Modules</h2>
            </div>
            <Button asChild variant="outline" className="border-warm-300 text-navy-800 hover:bg-white self-start md:self-auto">
              <Link to="/solutions">View All 13 Systems <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <div key={item.id} className="group flex flex-col rounded-xl border border-warm-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all">
                <div className="relative mb-4 h-44 overflow-hidden rounded-lg bg-warm-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-navy-900/85 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.category === 'dosing-handling' ? 'Dosing & Handling' : 'Preparation'}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-warm-500 leading-relaxed flex-1 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-warm-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-warm-500 flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-teal-500" /> PLC Integrated
                  </span>
                  <Link
                    to={`/systems/${item.slug}`}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                  >
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Callout */}
      <section className="bg-navy-900 text-white py-14">
        <div className="container-page text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to evaluate Template 2 with your engineering team?</h2>
          <p className="mt-3 text-sm text-warm-300">
            Compare layout hierarchy, equipment discovery, and technical conversion flows directly against Template 1.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
              <Link to="/contact">Enquire About Custom Plant Engineering</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-navy-700 text-white hover:bg-navy-800">
              <Link to="/solutions">Browse Technical Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
