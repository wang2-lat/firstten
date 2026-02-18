'use client';

import { useState } from 'react';
import { templates, categoryLabels } from '@/lib/templates';
import TemplateCard from '@/components/TemplateCard';

const categories = ['all', 'cold-email', 'linkedin', 'reddit', 'twitter'] as const;
const categoryNames: Record<string, string> = {
  all: '全部',
  ...categoryLabels,
};

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = templates.filter((t) => {
    const matchCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchSearch =
      search === '' ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.content.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">话术模板库</h1>
        <p className="text-slate-500 mt-1">20个精选话术模板，一键复制，快速触达潜在客户</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300'
              }`}
            >
              {categoryNames[cat]}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="搜索模板..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-1.5 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:ml-auto w-full sm:w-64"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          没有找到匹配的模板
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
