import { TemplateLink } from '@/context/TemplateContext';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer2() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#fafbf8] border-t border-[#dce3e3] text-[#172b33] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 py-14 lg:py-20">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <TemplateLink to="/" className="inline-block" aria-label="New Logic Automation home">
              <img
                src="/logo.png"
                alt="New Logic Automation"
                className="h-10 sm:h-11 w-auto object-contain"
                width="242"
                height="44"
                loading="lazy"
              />
            </TemplateLink>
            <p className="font-semibold text-[15px] leading-snug text-[#172b33]">
              Raw material handling.
              <br />
              <span className="text-[#007f91]">Engineered with purpose.</span>
            </p>
            <p className="text-[13px] text-[#66747a] leading-relaxed max-w-sm">
              Custom dosing, storage, and conveying plants engineered in Bhiwandi, Maharashtra since 2006 for food, bakery, confectionery, and chemical manufacturers across India and export markets.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#172b33] hover:text-[#007f91] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#007f91]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Systems */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#172b33] mb-4 font-mono">
              Explore
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <TemplateLink
                  to="/solutions?cat=dosing-handling"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Auto dosing systems
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/solutions?cat=preparation"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Preparation systems
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/solutions?cat=accessories"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Accessories &amp; Gyroscreens
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/solutions"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Complete equipment catalogue (06)
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/about"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  About us &amp; Founders
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/contact"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Engineering Consultation &amp; RFQ
                </TemplateLink>
              </li>
              <li>
                <TemplateLink
                  to="/privacy"
                  className="text-[#66747a] hover:text-[#007f91] transition-colors block py-0.5"
                >
                  Privacy policy
                </TemplateLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit Us & Contact Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#172b33] mb-4 font-mono">
              Visit us
            </h3>
            <div className="flex items-start gap-2.5 text-[13px] text-[#66747a] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#007f91] shrink-0 mt-0.5" />
              <p>
                {siteConfig.address.line1},
                <br />
                {siteConfig.address.line2},
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}, {siteConfig.address.country}.
              </p>
            </div>

            <div className="pt-2 space-y-1.5 text-[13px]">
              <a
                href="tel:+919223242803"
                className="flex items-center gap-2 font-medium text-[#172b33] hover:text-[#007f91] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#007f91] shrink-0" />
                <span>+91 92232 42803 <span className="text-[#66747a] font-normal text-xs">(Sagar Mallah)</span></span>
              </a>
              <a
                href="tel:+919820646393"
                className="flex items-center gap-2 font-medium text-[#172b33] hover:text-[#007f91] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#007f91]" />
                <span>+91 98206 46393 <span className="text-[#66747a] font-normal text-xs">(Sachin Tamhane)</span></span>
              </a>
            </div>

            <div className="pt-3 border-t border-[#dce3e3] text-xs text-[#66747a]">
              <span className="font-semibold text-[#172b33]">Operating Hours:</span> Mon – Sat: 9:00 AM – 6:30 PM IST
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#dce3e3] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#66747a]">
          <span>
            © {year} <strong className="font-medium text-[#172b33]">New Logic Automation</strong>. All rights reserved.
          </span>
          <span className="hidden sm:inline font-mono tracking-wider text-[10px] text-[#66747a]">
            Homepage design concept · Rhythm V09
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-medium text-[#172b33] hover:text-[#007f91] transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#007f91]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
