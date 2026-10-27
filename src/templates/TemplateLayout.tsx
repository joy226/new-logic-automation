import { Outlet, useParams } from 'react-router-dom';
import { TemplateProvider, type TemplateId } from '@/context/TemplateContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Header2 } from '@/templates/template2/components/Header2';
import { Footer2 } from '@/templates/template2/components/Footer2';
import { TemplateSwitcher } from '@/components/common/TemplateSwitcher';

export function TemplateLayout({ templateId: explicitId }: { templateId?: TemplateId }) {
  const params = useParams<{ templateId?: string }>();
  const activeId = (explicitId || params.templateId || '1') as TemplateId;

  const isTemplate2 = activeId === '2';

  return (
    <TemplateProvider templateId={activeId}>
      <div className="flex min-h-screen flex-col">
        {isTemplate2 ? <Header2 /> : <Header />}
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        {isTemplate2 ? <Footer2 /> : <Footer />}
        <TemplateSwitcher />
      </div>
    </TemplateProvider>
  );
}

