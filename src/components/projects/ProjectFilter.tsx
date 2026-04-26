import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectFilterProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onReset: () => void;
}

interface FilterRowProps {
  label: string;
  items: string[];
  selected: string;
  onChange: (value: string) => void;
  formatLabel: (item: string) => string;
}

const FilterRow: React.FC<FilterRowProps> = ({ label, items, selected, onChange, formatLabel }) => (
  <div className="grid grid-cols-12 gap-4 items-baseline py-4 border-b border-foreground/15">
    <div className="col-span-12 md:col-span-2 meta-label text-foreground/50">
      {label}
    </div>
    <div className="col-span-12 md:col-span-10 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((item) => {
        const active = selected === item;
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`font-display text-base md:text-lg transition-all ${
              active
                ? 'italic text-foreground underline underline-offset-4 decoration-1'
                : 'text-foreground/55 hover:text-foreground hover:italic'
            }`}
          >
            {formatLabel(item)}
          </button>
        );
      })}
    </div>
  </div>
);

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  onCategoryChange,
  onTechnologyChange,
  onReset,
}) => {
  const { t } = useLanguage();
  const hasFilters = selectedCategory !== 'all' || selectedTechnology !== 'all';

  return (
    <div className="mb-12 border-t border-foreground/30">
      <div className="flex items-baseline justify-between py-4 border-b border-foreground/15">
        <span className="meta-label text-foreground/60">§ {t('projects.filters')}</span>
        {hasFilters && (
          <button
            onClick={onReset}
            className="meta-label text-foreground/60 hover:text-foreground underline underline-offset-4 decoration-1 transition-colors"
          >
            ✕ {t('projects.clearFilters')}
          </button>
        )}
      </div>

      <FilterRow
        label={t('projects.category')}
        items={categories}
        selected={selectedCategory}
        onChange={onCategoryChange}
        formatLabel={(c) => (c === 'all' ? t('projects.allCategories') : c)}
      />

      <FilterRow
        label={t('projects.technology')}
        items={technologies.slice(0, 8)}
        selected={selectedTechnology}
        onChange={onTechnologyChange}
        formatLabel={(t2) => (t2 === 'all' ? t('projects.allTechnologies') : t2)}
      />
    </div>
  );
};

export default ProjectFilter;
