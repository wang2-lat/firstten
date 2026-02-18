'use client';

import { Template } from '@/types';
import CopyButton from './CopyButton';
import { categoryLabels } from '@/lib/templates';

interface TemplateCardProps {
  template: Template;
  variables?: Record<string, string>;
}

export default function TemplateCard({ template, variables = {} }: TemplateCardProps) {
  const processedContent = template.variables.reduce((content, variable) => {
    const value = variables[variable] || `{${variable}}`;
    return content.replaceAll(`{${variable}}`, value);
  }, template.content);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-slate-800">{template.title}</h3>
          <span className="text-xs text-slate-500">{categoryLabels[template.category]}</span>
        </div>
        <CopyButton text={processedContent} />
      </div>
      <pre className="text-sm text-slate-600 whitespace-pre-wrap font-sans bg-slate-50 rounded-lg p-3 max-h-48 overflow-y-auto">
        {processedContent}
      </pre>
      {template.variables.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {template.variables.map((v) => (
            <span key={v} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
              {`{${v}}`}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
