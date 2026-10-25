import React, { createContext, useContext, useMemo } from 'react';
import { useLocation, useNavigate, Link as RouterLink, type LinkProps } from 'react-router-dom';

export type TemplateId = '1' | '2' | '3' | '4';

export interface TemplateInfo {
  id: TemplateId;
  name: string;
  badge: string;
  description: string;
}

export const TEMPLATES: TemplateInfo[] = [
  {
    id: '1',
    name: 'Template 1',
    badge: 'Industrial Trust',
    description: 'Current production layout: dark hero, high-credibility partner marquee, comprehensive technical showcase.',
  },
  {
    id: '2',
    name: 'Template 2',
    badge: 'Modern Engineering',
    description: 'Clean architectural look: light canvas, modular grid, interactive process flowchart and bold metric tiles.',
  },
  {
    id: '3',
    name: 'Template 3',
    badge: 'Enterprise Automation',
    description: 'High-contrast dark-mode theme: high-tech automation lines, video/media-first hero and executive enquiry deck.',
  },
  {
    id: '4',
    name: 'Template 4',
    badge: 'Catalogue & Solutions',
    description: 'Commercial buyer-first layout: instant category filtering, split system showcase, and prominent RFQ builder.',
  },
];

interface TemplateContextType {
  templateId: TemplateId;
  templateInfo: TemplateInfo;
  tPath: (path: string) => string;
  switchTemplate: (newTemplateId: TemplateId) => void;
  availableTemplates: TemplateInfo[];
}

const TemplateContext = createContext<TemplateContextType | null>(null);

/**
 * Extract active template ID from current URL pathname (e.g. /1/solutions -> '1', /2 -> '2')
 */
export function getTemplateIdFromPath(pathname: string): TemplateId {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first === '1' || first === '2' || first === '3' || first === '4') {
    return first;
  }
  return '1';
}

/**
 * Get route subpath without the template prefix (e.g. /1/solutions -> /solutions, /2 -> /)
 */
export function getSubpathWithoutTemplate(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === '1' || segments[0] === '2' || segments[0] === '3' || segments[0] === '4') {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

export function TemplateProvider({
  templateId,
  children,
}: {
  templateId: TemplateId;
  children: React.ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const templateInfo = useMemo(
    () => TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0],
    [templateId]
  );

  const tPath = useMemo(() => {
    return (path: string): string => {
      // Remove leading slash if any
      const clean = path.startsWith('/') ? path.slice(1) : path;
      if (!clean) return `/${templateId}`;
      return `/${templateId}/${clean}`;
    };
  }, [templateId]);

  const switchTemplate = (newTemplateId: TemplateId) => {
    const subpath = getSubpathWithoutTemplate(location.pathname);
    const target = subpath === '/' ? `/${newTemplateId}` : `/${newTemplateId}${subpath}`;
    navigate(target);
  };

  return (
    <TemplateContext.Provider
      value={{
        templateId,
        templateInfo,
        tPath,
        switchTemplate,
        availableTemplates: TEMPLATES,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate(): TemplateContextType {
  const context = useContext(TemplateContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      templateId: '1',
      templateInfo: TEMPLATES[0],
      tPath: (path: string) => (path.startsWith('/') ? `/1${path === '/' ? '' : path}` : `/1/${path}`),
      switchTemplate: () => {},
      availableTemplates: TEMPLATES,
    };
  }
  return context;
}

/**
 * TemplateLink automatically prepends the active template prefix to the `to` prop.
 * Example: <TemplateLink to="/solutions"> will navigate to /1/solutions or /2/solutions.
 */
export const TemplateLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const { tPath } = useTemplate();
    const destination = typeof to === 'string' ? tPath(to) : to;
    return <RouterLink ref={ref} to={destination} {...props} />;
  }
);

TemplateLink.displayName = 'TemplateLink';
