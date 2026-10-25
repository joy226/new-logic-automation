import { Outlet, useParams } from 'react-router-dom';
import { TemplateProvider, type TemplateId } from '@/context/TemplateContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TemplateSwitcher } from '@/components/common/TemplateSwitcher';

export function TemplateLayout({ templateId: explicitId }: { templateId?: TemplateId }) {
  const params = useParams<{ templateId?: string }>();
  const activeId = (explicitId || params.templateId || '1') as TemplateId;

  return (
    <TemplateProvider templateId={activeId}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <TemplateSwitcher />
      </div>
    </TemplateProvider>
  );
}
