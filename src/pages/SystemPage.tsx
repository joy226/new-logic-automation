import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Phone, Mail, ChevronRight,
  Settings2, Info, Wrench, Layers,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { SmartImage } from '@/components/ui/smart-image';
import { EnquiryForm } from '@/components/EnquiryForm';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { siteConfig } from '@/data/site';
import { getProductImage } from '@/lib/images';

export function SystemPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <SEO
        title={`${product.name} — ${product.categoryLabel} | New Logic Automation`}
        description={product.shortDescription}
        path={`/systems/${product.slug}`}
      />

      {/* Hero section */}
      <section className="bg-navy-700 text-white pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-6 flex items-center flex-wrap gap-1" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/solutions" className="hover:text-teal-400">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/solutions?category=${product.category}`} className="hover:text-teal-400">{product.categoryLabel}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-warm-200">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">{product.categoryLabel}</span>
              <h1 className="mt-3 text-h1 font-heading text-white">{product.name}</h1>
              <p className="mt-4 text-lg text-warm-300 leading-relaxed">{product.purpose}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="primary">
                  <a href="#enquire">Enquire About This System <ArrowRight className="h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline-light">
                  <a href={`tel:${siteConfig.phoneNumbers[0].number.replace(/\s/g, '')}`}>
                    <Phone className="h-4 w-4" /> Call Us
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SmartImage
                src={getProductImage(product.slug)}
                alt={`${product.name} — illustrative industrial equipment photograph`}
                aspectRatio="aspect-[5/4]"
                className="rounded-xl shadow-elevated"
              />
              <p className="mt-2 text-xs text-warm-400 italic">
                Illustrative image. Contact us for project-specific details and photographs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-warm-50">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Benefits</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">Why choose this system</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-warm-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-sm text-navy-700 font-medium leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-white border-y border-warm-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700">
                  <Settings2 className="h-5 w-5 text-teal-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">How It Works</span>
              </div>
              <h2 className="text-h2 font-heading text-navy-700">System operation</h2>
              <p className="mt-4 text-warm-500 leading-relaxed text-sm">
                The following steps describe the general operation of the {product.name}. Actual configuration and sequencing may vary based on your project requirements.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ol className="space-y-0">
                {product.howItWorks.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '0px' }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                        {i + 1}
                      </div>
                      {i < product.howItWorks.length - 1 && (
                        <div className="w-px flex-1 bg-warm-200 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-navy-700 leading-relaxed pt-1">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Components and Technical Info */}
      <section className="py-16 lg:py-20 bg-warm-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Components */}
            <div className="rounded-xl border border-warm-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700">
                  <Wrench className="h-5 w-5 text-teal-400" />
                </div>
                <h2 className="text-h3 font-heading text-navy-700">Documented components</h2>
              </div>
              <ul className="space-y-2">
                {product.components.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-warm-600">
                    <ChevronRight className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical info */}
            <div className="rounded-xl border border-warm-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700">
                  <Info className="h-5 w-5 text-teal-400" />
                </div>
                <h2 className="text-h3 font-heading text-navy-700">Technical information</h2>
              </div>
              <dl className="space-y-3">
                {product.technicalInfo.map((t, i) => {
                  const [key, ...rest] = t.split(':');
                  return (
                    <div key={i} className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                      <dt className="font-semibold text-navy-700 sm:w-44 shrink-0">{key}:</dt>
                      <dd className="text-warm-600">{rest.join(':').trim()}</dd>
                    </div>
                  );
                })}
              </dl>
              <div className="mt-5 rounded-lg bg-warm-50 px-4 py-3 text-xs text-warm-500">
                Specifications such as capacity, dimensions, and materials are configured to your project requirements. Contact us to discuss your specific needs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-16 lg:py-20 bg-navy-700 text-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Enquire</span>
              <h2 className="mt-3 text-h2 font-heading text-white">
                Enquire about the {product.name}
              </h2>
              <p className="mt-4 text-warm-300 leading-relaxed">
                Tell us about your material, capacity, and process requirements. We'll help you determine if this system is the right fit for your production line.
              </p>
              <div className="mt-8 space-y-3">
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
            <div className="rounded-xl bg-white p-6 lg:p-8">
              <EnquiryForm defaultSystem={product.slug} compact />
            </div>
          </div>
        </div>
      </section>

      {/* Related systems */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-warm-50">
          <div className="container-page">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="h-5 w-5 text-teal-600" />
              <h2 className="text-h3 font-heading text-navy-700">Related systems</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/systems/${p.slug}`}
                  className="group block rounded-xl border border-warm-200 bg-white overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300"
                >
                  <SmartImage
                    src={getProductImage(p.slug)}
                    alt={p.name}
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-warm-400">{p.categoryLabel}</span>
                    <h3 className="mt-1 text-h4 font-heading text-navy-700 mb-2">{p.name}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed line-clamp-2">{p.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
