import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Factory, Layers, Settings2, Workflow } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { SmartImage } from '@/components/ui/smart-image';
import { siteConfig } from '@/data/site';
import { images } from '@/lib/images';
import { products, categoryLabels, categoryDescriptions, type ProductCategory } from '@/data/products';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About — New Logic Automation"
        description="New Logic Automation provides integrated material handling, dosing, and preparation systems for food and process industries. Headquartered in Bhiwandi, Thane, India."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-navy-700 text-white pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">About</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-heading text-white mb-4">
              Engineering material handling solutions for process industries
            </h1>
            <p className="text-lg text-warm-300 leading-relaxed">
              New Logic Automation designs and builds integrated raw material handling, dosing, and preparation systems — primarily for food processing, with additional chemical handling applications.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 lg:py-24 bg-warm-50">
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
                alt="Industrial food production facility with processing machinery"
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
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">What We Do</span>
              <h2 className="mt-3 text-h2 font-heading text-navy-700">Start-to-end material handling</h2>
              <p className="mt-4 text-warm-500 leading-relaxed">
                We provide complete material handling solutions — from bulk receiving and storage, through pneumatic conveying and accurate dosing, to ingredient preparation and delivery to the production line.
              </p>
              <p className="mt-4 text-warm-500 leading-relaxed">
                Our systems handle dry materials such as flour, sugar, and powdered sugar; liquid ingredients including water, oil, and syrups; and semi-solid materials such as fats and butter. We also build preparation systems for cream, sugar solutions, invert syrup, GMS emulsion, and other process ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="py-16 lg:py-24 bg-white border-y border-warm-100">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Our Approach</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">How we engineer systems</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: 'Project-specific design',
                description: 'Each system is configured to the customer\'s material, capacity, layout, and process requirements — not a one-size-fits-all catalogue product.',
              },
              {
                icon: Workflow,
                title: 'Integrated automation',
                description: 'PLC-based control with recipe management allows automated dosing, sequencing, and monitoring across the full material handling chain.',
              },
              {
                icon: Settings2,
                title: 'Hygienic construction',
                description: 'Food-grade contact parts, enclosed transfer, and dust filtration support clean, hygienic operation in food production environments.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border border-warm-200 bg-warm-50 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-700 mb-4">
                    <Icon className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-h4 font-heading text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-warm-500 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Capabilities</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">System categories we build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryOrder.map((cat, i) => {
              const count = products.filter(p => p.category === cat).length;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border border-warm-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Layers className="h-6 w-6 text-teal-600" />
                    <span className="text-xs font-semibold text-warm-400">{count} systems</span>
                  </div>
                  <h3 className="text-h4 font-heading text-navy-700 mb-2">{categoryLabels[cat]}</h3>
                  <p className="text-sm text-warm-500 leading-relaxed mb-4">{categoryDescriptions[cat]}</p>
                  <Link to={`/solutions?category=${cat}`} className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5">
                    Browse systems <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-navy-700 text-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Location</span>
              <h2 className="mt-3 text-h2 font-heading text-white">Headquartered in Bhiwandi, India</h2>
              <div className="mt-6 flex items-start gap-3 text-warm-300">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                <div className="text-sm leading-relaxed">
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                  <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}</p>
                  <p>{siteConfig.address.country}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <Link to="/contact">Contact Us <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.5 }}
            >
              <SmartImage
                src={images.aboutSecondary}
                alt="Modern industrial facility interior"
                aspectRatio="aspect-[5/4]"
                className="rounded-xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
