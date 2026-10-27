import { TemplateLink as Link } from '@/context/TemplateContext';
import { motion } from 'framer-motion';
import {
  ArrowRight, MapPin, Factory, Layers, CheckCircle2, Award, Phone
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SmartImage } from '@/components/ui/smart-image';
import { siteConfig } from '@/data/site';
import { images } from '@/lib/images';
import { products, categoryLabels, categoryDescriptions, type ProductCategory } from '@/data/products';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — New Logic Automation | Industrial Raw Material Handling Systems"
        description="Learn about New Logic Automation: founded by Sachin Tamhane and Sagar Mallah in 2006. Specialists in raw material handling, dosing, and preparation systems for food and process industries."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-navy-700 text-white pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-teal-300 backdrop-blur-sm mb-4">
              <Factory className="h-3.5 w-3.5" /> Established in 2006 · Bhiwandi Works
            </span>
            <h1 className="text-h1 font-heading text-white mb-4">
              Engineering material handling solutions for process industries
            </h1>
            <p className="text-lg text-warm-300 leading-relaxed">
              New Logic Automation provides end-to-end raw material handling, automated dosing, and ingredient preparation systems — designed, manufactured, installed, and commissioned for food processing and process manufacturers in India and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background & Leadership */}
      <section className="py-16 lg:py-24 bg-white border-b border-warm-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Company Background</span>
              <h2 className="mt-3 text-h2 font-heading text-navy-700">
                Founded on engineering experience and process expertise
              </h2>
              <p className="mt-4 text-warm-500 leading-relaxed">
                New Logic Automation was established by enterprising engineering professionals <strong>Mr. Sachin Tamhane</strong> and <strong>Mr. Sagar Mallah</strong>, each bringing more than 17 years of hands-on experience in industrial automation, pneumatic conveying, and process equipment.
              </p>
              <p className="mt-4 text-warm-500 leading-relaxed">
                Headquartered in Bhiwandi (Thane District, Maharashtra), our engineering team designs and executes complete material handling systems for plants of all scales. Our engineers are directly involved from initial plant layout and mechanical design through to on-site fabrication, electrical automation, and commissioning.
              </p>
              <div className="mt-6 pt-6 border-t border-warm-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.founders.map((f) => (
                  <div key={f.name} className="rounded-lg border border-warm-200 bg-warm-50 p-4">
                    <p className="font-heading font-bold text-navy-800 text-sm">{f.name}</p>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">{f.role}</p>
                    <p className="text-xs text-warm-500 mt-2 leading-relaxed">{f.experience}</p>
                    <a
                      href={`tel:${f.phone.replace(/\s/g, '')}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-teal-600"
                    >
                      <Phone className="h-3 w-3 text-teal-500" />
                      <span>{f.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.5 }}
            >
              <SmartImage
                src={images.aboutMain}
                alt="Industrial food production plant with stainless steel processing equipment"
                aspectRatio="aspect-[5/4]"
                className="rounded-xl shadow-card"
              />
              <div className="mt-4 rounded-xl border border-warm-200 bg-warm-50 p-5">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy-800">Quality-Driven Engineering Systems</h4>
                    <p className="mt-1 text-xs text-warm-500 leading-relaxed">
                      Recognized for structured quality systems across the design, manufacture, installation, commissioning, and servicing of industrial raw material handling systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Scope Lifecycle Capabilities */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Full Project Lifecycle</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">From concept to continuous production</h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              We manage the complete lifecycle of your material handling project, eliminating coordination gaps between mechanical suppliers, electrical contractors, and site installers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'System Design',
                description: 'Custom plant layout, piping routing, and capacity engineering tailored to your raw materials and process boundaries.',
              },
              {
                step: '02',
                title: 'Manufacture',
                description: 'Fabrication of storage silos, hoppers, vessels, and frames with sanitary SS304/SS316 food-grade contact surfaces.',
              },
              {
                step: '03',
                title: 'Installation',
                description: 'On-site mechanical erection, pneumatic piping, rotary airlocks, valves, and dust filtration integration.',
              },
              {
                step: '04',
                title: 'Commissioning',
                description: 'PLC panel wiring, load-cell calibration, recipe management integration, and live trial batches under production load.',
              },
              {
                step: '05',
                title: 'Service & Spares',
                description: 'Routine maintenance know-how, backup support, and supply of genuine pumps, blowers, valves, and filter media.',
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-xl border border-warm-200 bg-white p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-teal-600">{cap.step}</span>
                  <h3 className="mt-2 text-base font-heading font-bold text-navy-800">{cap.title}</h3>
                  <p className="mt-2 text-xs text-warm-500 leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Core Values */}
      <section className="py-16 lg:py-24 bg-white border-y border-warm-100">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Operating Principles</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">What guides our engineering approach</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'We are true to our word. We treat our clients with respect and provide transparent, reliable solutions that maintain system integrity and food safety.',
              },
              {
                title: 'Result-Oriented',
                description: 'We deliver solutions that simplify daily operation and produce dependable recipe dosing results, even in demanding high-volume manufacturing environments.',
              },
              {
                title: 'Effective Relationships',
                description: 'Teamwork is central to solving technical challenges, optimizing layouts, and ensuring our clients receive the dedicated engineering support they deserve.',
              },
              {
                title: 'Engineering Initiative',
                description: 'As technical problem-solvers, we take the initiative to help our clients meet evolving production standards, dust control norms, and plant compliance.',
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-warm-200 bg-warm-50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                </div>
                <h3 className="text-h4 font-heading text-navy-700 mb-2">{val.title}</h3>
                <p className="text-xs leading-relaxed text-warm-500">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Equipment Portfolio</span>
            <h2 className="mt-3 text-h2 font-heading text-navy-700">System categories we build</h2>
            <p className="mt-4 text-warm-500 leading-relaxed text-sm">
              Our equipment covers the complete plant flow: dry powder pneumatic transfer, liquid batching, ingredient preparation, and auxiliary process components.
            </p>
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
                  className="rounded-xl border border-warm-200 bg-white p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Layers className="h-6 w-6 text-teal-600" />
                      <Badge variant="teal" className="text-xs font-semibold">{count} systems</Badge>
                    </div>
                    <h3 className="text-h4 font-heading text-navy-700 mb-2">{categoryLabels[cat]}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed mb-6">{categoryDescriptions[cat]}</p>
                  </div>
                  <Link to={`/solutions?category=${cat}`} className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 pt-2 border-t border-warm-100">
                    Browse systems <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Works Location & Direct Enquiry CTA */}
      <section className="py-16 lg:py-24 bg-navy-700 text-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Headquarters &amp; Works</span>
              <h2 className="mt-3 text-h2 font-heading text-white">Bhiwandi, Maharashtra, India</h2>
              <div className="mt-6 flex items-start gap-3 text-warm-300">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-white">{siteConfig.name}</p>
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                  <p>{siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}</p>
                  <p>{siteConfig.address.country}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <Link to="/contact">Discuss Your Project <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline-light">
                  <Link to="/solutions">Browse Solutions</Link>
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
                alt="Modern food-grade industrial plant equipment"
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
