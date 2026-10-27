import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TemplateLink, useTemplate } from '@/context/TemplateContext';
import { ChevronDown, ArrowUpRight, Phone, Mail } from 'lucide-react';

export function Header2() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { tPath } = useTemplate();

  // Close menus on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key closes menus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileNavOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = location.pathname === '/2' || location.pathname === '/2/';

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        e.preventDefault();
        contactEl.scrollIntoView({ behavior: 'smooth' });
        setMobileNavOpen(false);
      }
    }
  };

  const handleSystemLinkClick = (hashOrQuery: string) => {
    setDropdownOpen(false);
    setMobileNavOpen(false);
    if (isHome && hashOrQuery.startsWith('#')) {
      const el = document.querySelector(hashOrQuery);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 1. Rhythm Top Utility Bar */}
      <div className="bg-[#eaf2f8] text-[#172b33] border-b border-[#dce3e3] text-[10.5px] font-mono tracking-[0.8px] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 h-[34px] flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007f91] animate-pulse inline-block" />
            <span className="font-semibold uppercase tracking-[1.4px] text-[#172b33]">
              Raw Material Handling · Process Automation
            </span>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 text-xs sm:text-[11px]">
            <span className="sm:hidden font-semibold tracking-wider text-[10px] uppercase text-[#66747a]">
              New Logic Bhiwandi
            </span>
            <a
              href="tel:+919820646393"
              className="inline-flex items-center gap-1.5 font-medium text-[#172b33] hover:text-[#007f91] transition-colors"
              title="Call engineering desk"
            >
              <span>Let’s talk engineering &nbsp;+91 98206 46393</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#007f91]" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Rhythm Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fffffff2] backdrop-blur-md border-b border-[#dce3e3] transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between min-h-[76px] lg:min-h-[86px]">
            {/* Brand Logo */}
            <TemplateLink
              to="/"
              className="flex items-center group py-2"
              aria-label="New Logic Automation home"
            >
              <img
                src="/logo.png"
                alt="New Logic Automation"
                className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-[1.01]"
                width="242"
                height="44"
              />
            </TemplateLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#172b33]" aria-label="Main navigation">
              <TemplateLink
                to="/"
                className={`py-6 transition-colors hover:text-[#007f91] ${
                  isHome ? 'text-[#007f91] font-semibold' : ''
                }`}
              >
                Home
              </TemplateLink>

              {/* Dropdown for Systems */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  className={`py-6 inline-flex items-center gap-1.5 transition-colors hover:text-[#007f91] focus:outline-none ${
                    dropdownOpen ? 'text-[#007f91]' : ''
                  }`}
                  aria-expanded={dropdownOpen}
                >
                  <span>Our systems</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180 text-[#007f91]' : 'text-[#66747a]'
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                {dropdownOpen && (
                  <div
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-[calc(100%-8px)] left-0 min-w-[260px] bg-white border border-[#dce3e3] p-2 shadow-[0_12px_32px_rgba(23,43,51,0.12)] z-50 flex flex-col animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <TemplateLink
                      to="/solutions?cat=dosing-handling"
                      onClick={() => handleSystemLinkClick('#solutions')}
                      className="px-3 py-2.5 text-left text-xs font-medium text-[#172b33] hover:bg-[#f4f6f3] hover:text-[#007f91] transition-colors rounded-sm flex items-center justify-between"
                    >
                      <span>Auto dosing systems</span>
                      <span className="text-[10px] text-[#66747a] font-mono">03 Units</span>
                    </TemplateLink>
                    <TemplateLink
                      to="/solutions?cat=preparation"
                      onClick={() => handleSystemLinkClick('#solutions')}
                      className="px-3 py-2.5 text-left text-xs font-medium text-[#172b33] hover:bg-[#f4f6f3] hover:text-[#007f91] transition-colors rounded-sm flex items-center justify-between"
                    >
                      <span>Preparation systems</span>
                      <span className="text-[10px] text-[#66747a] font-mono">02 Units</span>
                    </TemplateLink>
                    <TemplateLink
                      to="/solutions?cat=accessories"
                      onClick={() => handleSystemLinkClick('#accessories')}
                      className="px-3 py-2.5 text-left text-xs font-medium text-[#172b33] hover:bg-[#f4f6f3] hover:text-[#007f91] transition-colors rounded-sm flex items-center justify-between"
                    >
                      <span>Accessories &amp; Screens</span>
                      <span className="text-[10px] text-[#66747a] font-mono">01 Unit</span>
                    </TemplateLink>
                    <div className="my-1 border-t border-[#dce3e3]" />
                    <TemplateLink
                      to="/solutions"
                      onClick={() => setDropdownOpen(false)}
                      className="px-3 py-2 text-left text-[11px] font-semibold text-[#007f91] hover:bg-[#eaf2f8] transition-colors rounded-sm flex items-center justify-between"
                    >
                      <span>All systems (06)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </TemplateLink>
                  </div>
                )}
              </div>

              <TemplateLink
                to="/about"
                className={`py-6 transition-colors hover:text-[#007f91] ${
                  location.pathname.includes('/about') ? 'text-[#007f91] font-semibold' : ''
                }`}
              >
                About us
              </TemplateLink>

              <TemplateLink
                to="/contact"
                className={`py-6 transition-colors hover:text-[#007f91] ${
                  location.pathname.includes('/contact') ? 'text-[#007f91] font-semibold' : ''
                }`}
              >
                Contact
              </TemplateLink>

              {/* Rhythm Action Button */}
              <a
                href={tPath('/contact')}
                onClick={handleEnquiryClick}
                className="inline-flex items-center justify-between gap-3 bg-[#172b33] hover:bg-[#007f91] text-white text-[13px] font-medium px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <span>Send enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>

            {/* Mobile Hamburger Toggle (Rhythm Two-Line Minimalist) */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2.5 -mr-2 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
              aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileNavOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-[#172b33] transition-transform duration-200 ${
                  mobileNavOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#172b33] transition-transform duration-200 ${
                  mobileNavOpen ? '-rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-white border-t border-[#dce3e3] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 text-sm font-medium text-[#172b33]">
              <TemplateLink
                to="/"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#007f91]"
              >
                Home
              </TemplateLink>

              <div className="pt-2 pb-1 border-t border-[#dce3e3]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#66747a] mb-2 font-semibold">
                  Our Systems
                </div>
                <div className="pl-3 space-y-2 text-xs">
                  <TemplateLink
                    to="/solutions?cat=dosing-handling"
                    onClick={() => handleSystemLinkClick('#solutions')}
                    className="block py-1 hover:text-[#007f91]"
                  >
                    Auto dosing systems
                  </TemplateLink>
                  <TemplateLink
                    to="/solutions?cat=preparation"
                    onClick={() => handleSystemLinkClick('#solutions')}
                    className="block py-1 hover:text-[#007f91]"
                  >
                    Preparation systems
                  </TemplateLink>
                  <TemplateLink
                    to="/solutions?cat=accessories"
                    onClick={() => handleSystemLinkClick('#accessories')}
                    className="block py-1 hover:text-[#007f91]"
                  >
                    Accessories &amp; Screens
                  </TemplateLink>
                  <TemplateLink
                    to="/solutions"
                    onClick={() => setMobileNavOpen(false)}
                    className="block py-1 font-semibold text-[#007f91]"
                  >
                    View complete catalogue (06 systems) →
                  </TemplateLink>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dce3e3]">
                <TemplateLink
                  to="/about"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1 hover:text-[#007f91]"
                >
                  About us
                </TemplateLink>
                <TemplateLink
                  to="/contact"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1 hover:text-[#007f91]"
                >
                  Contact
                </TemplateLink>
              </div>
            </div>

            {/* Direct Contact Phone & CTA */}
            <div className="pt-4 border-t border-[#dce3e3] space-y-3">
              <a
                href={tPath('/contact')}
                onClick={handleEnquiryClick}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#172b33] hover:bg-[#007f91] text-white text-xs font-semibold py-3 px-4 rounded-sm transition-colors text-center"
              >
                <span>Send enquiry email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex flex-col gap-2 pt-1 text-xs text-[#66747a]">
                <a href="tel:+919820646393" className="flex items-center gap-2 hover:text-[#007f91]">
                  <Phone className="w-3.5 h-3.5 text-[#007f91]" />
                  <span>Sachin Tamhane: +91 98206 46393</span>
                </a>
                <a href="tel:+919223242803" className="flex items-center gap-2 hover:text-[#007f91]">
                  <Phone className="w-3.5 h-3.5 text-[#007f91]" />
                  <span>Sagar Mallah: +91 92232 42803</span>
                </a>
                <a href="mailto:logicequip@gmail.com" className="flex items-center gap-2 hover:text-[#007f91]">
                  <Mail className="w-3.5 h-3.5 text-[#007f91]" />
                  <span>logicequip@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
