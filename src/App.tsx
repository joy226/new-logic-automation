import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { TemplateLayout } from '@/templates/TemplateLayout';
import { HomePage } from '@/pages/HomePage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { SystemPage } from '@/pages/SystemPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Import Multi-Template Pages
import { HomePage2 } from '@/templates/template2/HomePage2';
import { AboutPage2 } from '@/templates/template2/AboutPage2';
import { SolutionsPage2 } from '@/templates/template2/SolutionsPage2';
import { SystemPage2 } from '@/templates/template2/SystemPage2';
import { ContactPage2 } from '@/templates/template2/ContactPage2';
import { HomePage3 } from '@/templates/template3/HomePage3';
import { HomePage4 } from '@/templates/template4/HomePage4';

const legacyRedirects: Record<string, string> = {
  '/index.html': '/1',
  '/contacts.html': '/1/contact',
  '/contact.html': '/1/contact',
  '/about.html': '/1/about',
  '/flour-maida-handling.html': '/1/systems/flour-maida-handling',
  '/sugar-handling.html': '/1/systems/sugar-handling',
  '/powder-sugar-handling.html': '/1/systems/powder-sugar-handling',
  '/liquid-handling.html': '/1/systems/multiple-liquid-dosing',
  '/water-dosing.html': '/1/systems/water-dosing',
  '/chemical-handling.html': '/1/systems/chemical-handling',
  '/cream-preparation.html': '/1/systems/cream-preparation',
  '/sepro-gyroscreen.html': '/1/systems/sepro-gyroscreen',
};

function RedirectToTemplate1System() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/1/systems/${slug || ''}`} replace />;
}

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
      <Routes>
        {/* Root URL redirects to Template 1 */}
        <Route path="/" element={<Navigate to="/1" replace />} />

        {/* Template 1: Current Industrial Trust & Full Engineering Showcase */}
        <Route path="/1" element={<TemplateLayout templateId="1" />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="systems/:slug" element={<SystemPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>

        {/* Template 2: Modern Engineering & Modular Industrial Flow */}
        <Route path="/2" element={<TemplateLayout templateId="2" />}>
          <Route index element={<HomePage2 />} />
          <Route path="solutions" element={<SolutionsPage2 />} />
          <Route path="systems/:slug" element={<SystemPage2 />} />
          <Route path="about" element={<AboutPage2 />} />
          <Route path="contact" element={<ContactPage2 />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>

        {/* Template 3: Enterprise Automation & Turnkey Plant Systems */}
        <Route path="/3" element={<TemplateLayout templateId="3" />}>
          <Route index element={<HomePage3 />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="systems/:slug" element={<SystemPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>

        {/* Template 4: Commercial Buyer Catalogue & Rapid RFQ Workflow */}
        <Route path="/4" element={<TemplateLayout templateId="4" />}>
          <Route index element={<HomePage4 />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="systems/:slug" element={<SystemPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>

        {/* Direct unprefixed routes fallback gracefully to /1/... */}
        <Route path="/solutions" element={<Navigate to="/1/solutions" replace />} />
        <Route path="/systems/:slug" element={<RedirectToTemplate1System />} />
        <Route path="/about" element={<Navigate to="/1/about" replace />} />
        <Route path="/contact" element={<Navigate to="/1/contact" replace />} />
        <Route path="/privacy" element={<Navigate to="/1/privacy" replace />} />

        {/* Fallbacks */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<LegacyRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
