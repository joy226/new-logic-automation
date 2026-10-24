import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/site';

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy — New Logic Automation"
        description="Privacy policy for the New Logic Automation website. How we handle enquiry information and website data."
        path="/privacy"
      />

      <section className="bg-navy-700 text-white py-16 lg:py-20">
        <div className="container-page">
          <nav className="text-xs text-warm-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-warm-200">Privacy</span>
          </nav>
          <h1 className="text-h1 font-heading text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="container-narrow space-y-8">
          <div className="rounded-xl border border-accent-200 bg-accent-50 px-5 py-4">
            <p className="text-sm text-accent-700 leading-relaxed">
              <strong className="font-semibold">Review required:</strong> The following privacy policy is a template prepared for the New Logic Automation website. The business owner must review and confirm these details before publishing. Items marked with [REVIEW] require owner input.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Overview</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              New Logic Automation ("we", "us") operates the website at newlogicautomation.com. This policy describes how we handle information you provide through this website.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Information we collect</h2>
            <p className="text-sm text-warm-600 leading-relaxed mb-3">
              When you submit an enquiry through our contact form, we collect:
            </p>
            <ul className="space-y-2 text-sm text-warm-600 ml-4">
              <li>• Your name and company name</li>
              <li>• Your email address and phone number (if provided)</li>
              <li>• The system you are interested in (if selected)</li>
              <li>• Your project requirements as described by you</li>
            </ul>
            <p className="text-sm text-warm-600 leading-relaxed mt-3">
              We use this information solely to respond to your enquiry and discuss your project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">How we use your information</h2>
            <ul className="space-y-2 text-sm text-warm-600 ml-4">
              <li>• To respond to your enquiry and provide information about our systems</li>
              <li>• To discuss your project requirements and prepare a proposal if applicable</li>
              <li>• To contact you about your enquiry using the details you provided</li>
            </ul>
            <p className="text-sm text-warm-600 leading-relaxed mt-3">
              We do not sell, rent, or share your information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Data storage and retention</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              [REVIEW] Enquiry information is used to respond to your request and may be retained for business records. The specific retention period and storage method should be confirmed by the business owner.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Cookies and analytics</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              [REVIEW] This website does not currently use analytics cookies. If analytics are added in the future, this section will be updated with details of the services used and how to opt out.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Your rights</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Contact</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              For privacy-related questions, contact us at:
            </p>
            <div className="mt-3 text-sm text-warm-600">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-teal-600 hover:text-teal-700">{siteConfig.email}</a></p>
              <p className="mt-1">{siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}</p>
            </div>
          </div>

          <div>
            <h2 className="text-h3 font-heading text-navy-700 mb-3">Updates</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              This policy may be updated from time to time. Changes will be posted on this page with the updated date.
            </p>
            <p className="text-sm text-warm-400 mt-3">Last updated: October 2026 [REVIEW]</p>
          </div>
        </div>
      </section>
    </>
  );
}
