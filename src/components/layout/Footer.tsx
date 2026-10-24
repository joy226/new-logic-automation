import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { products, categoryLabels, type ProductCategory } from '@/data/products';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-warm-300">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex rounded-sm bg-white px-2 py-1">
              <img
                src="/logo.png"
                alt="New Logic Automation"
                className="h-11 w-auto object-contain"
                width="190"
                height="44"
              />
            </div>
            <p className="text-sm leading-relaxed text-warm-400 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-warm-300 hover:text-teal-400 transition-colors">
                <Mail className="h-4 w-4 text-teal-400" />
                {siteConfig.email}
              </a>
              {siteConfig.phoneNumbers.map(p => (
                <a key={p.number} href={`tel:${p.number.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-warm-300 hover:text-teal-400 transition-colors">
                  <Phone className="h-4 w-4 text-teal-400" />
                  {p.name}: {p.number}
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm text-warm-400">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Product categories */}
          {categoryOrder.map(cat => {
            const catProducts = products.filter(p => p.category === cat).slice(0, 6);
            return (
              <div key={cat}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-400">
                  {categoryLabels[cat]}
                </h3>
                <ul className="space-y-2">
                  {catProducts.map(p => (
                    <li key={p.slug}>
                      <Link to={`/systems/${p.slug}`} className="text-sm text-warm-300 hover:text-white transition-colors">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-400">
            <span>© {year} {siteConfig.name}. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy</Link>
          </div>
          <div className="flex items-center gap-4 text-xs text-warm-500">
            <Link to="/solutions" className="hover:text-teal-400 transition-colors">Solutions</Link>
            <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
