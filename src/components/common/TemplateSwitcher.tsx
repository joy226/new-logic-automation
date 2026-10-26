import { useState } from 'react';
import { useTemplate, type TemplateId } from '@/context/TemplateContext';
import { Layers, ChevronDown, ChevronUp, Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TemplateSwitcher() {
  const { templateId, availableTemplates, switchTemplate } = useTemplate();
  const [collapsed, setCollapsed] = useState(true);

  const activeTemplate = availableTemplates.find(t => t.id === templateId);

  return (
    <aside 
      className="fixed bottom-4 right-4 z-[999] max-w-sm font-sans"
      aria-label="Client Template Review Selector"
    >
      <div className="rounded-xl border border-warm-300/80 bg-white/95 p-2.5 sm:p-3 shadow-2xl backdrop-blur-md transition-all">
        {/* Header Bar */}
        <div 
          className={cn(
            "flex items-center justify-between gap-3 cursor-pointer select-none",
            !collapsed && "border-b border-warm-100 pb-2"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-50 text-teal-600">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                Review Mode
                <span className="rounded-full bg-teal-100 px-1.5 py-0.2 text-[10px] font-semibold text-teal-800">
                  T{templateId}
                </span>
                {collapsed && activeTemplate && (
                  <span className="text-[11px] font-normal text-warm-500 hidden sm:inline">
                    • {activeTemplate.name}
                  </span>
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded p-1 text-warm-400 hover:bg-warm-100 hover:text-navy-900 transition-colors"
            aria-label={collapsed ? 'Expand template selector' : 'Collapse template selector'}
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            {collapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {!collapsed && (
          /* Template Option Buttons */
          <div className="pt-2.5">
            <p className="text-[11px] text-warm-500 mb-2">
              Select design to review current page:
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {availableTemplates.map((t) => {
                const isActive = t.id === templateId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => switchTemplate(t.id as TemplateId)}
                    className={cn(
                      'group relative flex flex-col items-start rounded-lg border p-2 text-left transition-all',
                      isActive
                        ? 'border-teal-500 bg-teal-50/50 shadow-sm ring-1 ring-teal-500'
                        : 'border-warm-200 bg-white hover:border-warm-300 hover:bg-warm-50'
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className={cn('text-xs font-bold', isActive ? 'text-teal-900' : 'text-navy-800')}>
                        {t.name}
                      </span>
                      {isActive ? (
                        <Check className="h-3 w-3 text-teal-600" />
                      ) : (
                        <span className="text-[10px] text-warm-400 font-mono">/{t.id}</span>
                      )}
                    </div>
                    <span className="mt-0.5 text-[10px] font-medium text-warm-500">
                      {t.badge}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-warm-400 border-t border-warm-100 pt-1.5">
              <span className="flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5 text-teal-500" /> Multi-template router active
              </span>
              <span className="font-mono">Route: /{templateId}</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
