import { TemplateLink as Link } from '@/context/TemplateContext';
import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/site';

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy — New Logic Automation"
        description="Privacy policy for the New Logic Automation website. How we handle project enquiries and contact information."
        path="/privacy"
      />

      <section className="bg-navy-700 text-white py-16 lg:py-20">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">Privacy Policy</span>
          </nav>
          <h1 className="text-h1 font-heading text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-narrow space-y-8">
          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Overview</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              New Logic Automation ("we", "us") respects your privacy. This policy explains how we collect and handle information submitted through our business website (newlogicautomation.com).
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Information We Collect</h2>
            <p className="text-sm text-warm-600 leading-relaxed mb-3">
              When you submit a project enquiry or contact us directly, we collect:
            </p>
            <ul className="space-y-2 text-sm text-warm-600 ml-4">
              <li>• Your name and company or manufacturing organization</li>
              <li>• Work email address and contact telephone number</li>
              <li>• Equipment or process systems of interest (e.g., flour handling, liquid dosing, cream preparation)</li>
              <li>• Specific project requirements, materials, and production capacity parameters you describe</li>
            </ul>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">How We Use Your Information</h2>
            <ul className="space-y-2 text-sm text-warm-600 ml-4">
              <li>• To evaluate your process needs and respond to your equipment enquiries</li>
              <li>• To prepare technical datasheets, plant layout drawings, or commercial quotations</li>
              <li>• To contact you regarding your active inquiries using the details you provided</li>
            </ul>
            <p className="text-sm text-warm-600 leading-relaxed mt-3">
              We do not sell, rent, trade, or share commercial enquiry data with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Data Confidentiality &amp; Storage</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              Enquiry details and project parameters are reviewed directly by New Logic Automation engineering partners. We maintain appropriate safeguards to protect confidential engineering specifications, facility drawings, and recipe parameters shared during consultation.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Cookies &amp; Tracking</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              This website operates strictly for commercial informational and direct enquiry purposes. We do not use third-party behavioral advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Your Rights &amp; Contact</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              For any questions regarding your enquiry information or to request correction or removal of your details, please contact us directly:
            </p>
            <div className="mt-3 text-sm text-warm-600 space-y-1">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-teal-600 hover:text-teal-700 font-mono">{siteConfig.email}</a></p>
              <p>Address: {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} – {siteConfig.address.pincode}, {siteConfig.address.country}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
