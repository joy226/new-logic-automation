import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, ChevronDown, X, ArrowRight } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { products, categoryLabels, type ProductCategory } from '@/data/products';

const categoryOrder: ProductCategory[] = ['dosing-handling', 'preparation', 'accessories'];

function Logo() {
  return (
    <Link to="/" className="flex items-center group" aria-label="New Logic Automation home">
      <img
        src="/logo.png"
        alt="New Logic Automation"
        className="h-11 w-auto object-contain"
        width="190"
        height="44"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<ProductCategory | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setSearchOpen(false);
    setMobileNavOpen(false);
  }, [location.pathname]);

  const searchResults = searchQuery.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.synonyms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/solutions?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          'bg-white/95 backdrop-blur-md shadow-subtle border-b border-warm-100'
        )}
      >
        <div className={cn('transition-all duration-300', scrolled ? 'h-16' : 'h-20')}>
          <div className="container-page flex h-full items-center justify-between gap-4">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <Link
                to="/"
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                  location.pathname === '/' ? 'text-teal-600' : 'text-navy-700 hover:text-teal-600 hover:bg-warm-50'
                )}
              >
                Home
              </Link>

              {/* Solutions mega menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                    location.pathname.startsWith('/solutions') ? 'text-teal-600' : 'text-navy-700 hover:text-teal-600 hover:bg-warm-50'
                  )}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Solutions
                  <ChevronDown className={cn('h-4 w-4 transition-transform', megaMenuOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[760px]"
                    >
                      <div className="rounded-xl border border-warm-100 bg-white shadow-elevated overflow-hidden">
                        <div className="grid grid-cols-3 gap-0">
                          {categoryOrder.map((cat) => {
                            const catProducts = products.filter(p => p.category === cat);
                            return (
                              <div key={cat} className="p-5 border-r border-warm-100 last:border-r-0">
                                <Link
                                  to={`/solutions?category=${cat}`}
                                  className="block mb-3 text-xs font-bold uppercase tracking-wider text-teal-600 hover:text-teal-700"
                                >
                                  {categoryLabels[cat]}
                                </Link>
                                <ul className="space-y-1">
                                  {catProducts.map(p => (
                                    <li key={p.slug}>
                                      <Link
                                        to={`/systems/${p.slug}`}
                                        className="block px-2 py-1.5 text-sm text-navy-600 rounded-md hover:bg-warm-50 hover:text-teal-600 transition-colors"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        <div className="border-t border-warm-100 px-5 py-3 bg-warm-50 flex items-center justify-between">
                          <span className="text-sm text-warm-500">Browse all systems and accessories</span>
                          <Link to="/solutions" className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1">
                            View all <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                  location.pathname === '/about' ? 'text-teal-600' : 'text-navy-700 hover:text-teal-600 hover:bg-warm-50'
                )}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                  location.pathname === '/contact' ? 'text-teal-600' : 'text-navy-700 hover:text-teal-600 hover:bg-warm-50'
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 hover:bg-warm-100 transition-colors"
                  aria-label="Search systems"
                  aria-expanded={searchOpen}
                >
                  {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-2 w-80"
                    >
                      <form onSubmit={handleSearch} className="rounded-xl border border-warm-100 bg-white shadow-elevated p-3">
                        <Input
                          type="search"
                          placeholder="Search systems, e.g. flour, sugar, cream..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                        />
                        {searchResults.length > 0 && (
                          <ul className="mt-2 space-y-0.5">
                            {searchResults.map(p => (
                              <li key={p.slug}>
                                <Link
                                  to={`/systems/${p.slug}`}
                                  className="block px-3 py-2 text-sm text-navy-600 rounded-md hover:bg-warm-50 transition-colors"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        <button type="submit" className="mt-2 w-full text-right text-xs font-semibold text-teal-600 hover:text-teal-700">
                          Search all solutions →
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button asChild size="sm" className="hidden lg:flex">
                <Link to="/contact">Request a Quote</Link>
              </Button>

              {/* Mobile menu trigger */}
              <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                <SheetTrigger asChild>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 hover:bg-warm-100 transition-colors lg:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-xs">
                  <div className="flex items-center justify-between px-5 h-16 border-b border-warm-100">
                    <Logo />
                  </div>
                  <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
                    <Link to="/" className="block px-3 py-2.5 text-sm font-semibold text-navy-700 rounded-lg hover:bg-warm-50">
                      Home
                    </Link>

                    {/* Expandable solutions */}
                    {categoryOrder.map(cat => {
                      const catProducts = products.filter(p => p.category === cat);
                      const isExpanded = expandedCategory === cat;
                      return (
                        <div key={cat} className="py-1">
                          <button
                            onClick={() => setExpandedCategory(isExpanded ? null : cat)}
                            className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-navy-700 rounded-lg hover:bg-warm-50"
                            aria-expanded={isExpanded}
                          >
                            {categoryLabels[cat]}
                            <ChevronDown className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')} />
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-3"
                              >
                                <li>
                                  <Link to={`/solutions?category=${cat}`} className="block px-3 py-2 text-xs font-semibold text-teal-600 rounded-md hover:bg-warm-50">
                                    View all →
                                  </Link>
                                </li>
                                {catProducts.map(p => (
                                  <li key={p.slug}>
                                    <Link to={`/systems/${p.slug}`} className="block px-3 py-2 text-sm text-navy-600 rounded-md hover:bg-warm-50">
                                      {p.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}

                    <Link to="/solutions" className="block px-3 py-2.5 text-sm font-semibold text-navy-700 rounded-lg hover:bg-warm-50">
                      All Solutions
                    </Link>
                    <Link to="/about" className="block px-3 py-2.5 text-sm font-semibold text-navy-700 rounded-lg hover:bg-warm-50">
                      About
                    </Link>
                    <Link to="/contact" className="block px-3 py-2.5 text-sm font-semibold text-navy-700 rounded-lg hover:bg-warm-50">
                      Contact
                    </Link>

                    <div className="mt-4 px-3">
                      <Button asChild className="w-full">
                        <Link to="/contact">Request a Quote</Link>
                      </Button>
                    </div>

                    {/* Mobile search */}
                    <form onSubmit={handleSearch} className="mt-4 px-3">
                      <Input
                        type="search"
                        placeholder="Search systems..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </form>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <div className={cn('transition-all duration-300', scrolled ? 'h-16' : 'h-20')} />
    </>
  );
}
