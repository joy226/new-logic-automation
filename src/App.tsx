import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { SystemPage } from '@/pages/SystemPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const legacyRedirects: Record<string, string> = {
  '/index.html': '/',
  '/contacts.html': '/contact',
  '/contact.html': '/contact',
  '/about.html': '/about',
  '/flour-maida-handling.html': '/systems/flour-maida-handling',
  '/sugar-handling.html': '/systems/sugar-handling',
  '/powder-sugar-handling.html': '/systems/powder-sugar-handling',
  '/liquid-handling.html': '/systems/multiple-liquid-dosing',
  '/water-dosing.html': '/systems/water-dosing',
  '/chemical-handling.html': '/systems/chemical-handling',
  '/cream-preparation.html': '/systems/cream-preparation',
  '/sepro-gyroscreen.html': '/systems/sepro-gyroscreen',
};

function LegacyRedirect() {
  const location = useLocation();
  const target = legacyRedirects[location.pathname];
  useEffect(() => {
    if (target) {
      window.history.replaceState(null, '', target);
    }
  }, [target]);
  if (target) return <Navigate to={target} replace />;
  return <NotFoundPage />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/systems/:slug" element={<SystemPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<LegacyRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
