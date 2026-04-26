import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogFilterProps {
  categories: string[];
  years: string[];
  selectedCategory: string;
  selectedYear: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onYearChange: (year: string) => void;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

interface RowProps {
  label: string;
  items: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const Row: React.FC<RowProps> = ({ label, items, selected, onChange }) => (
  <div className="grid grid-cols-12 gap-4 items-baseline py-4 border-b border-foreground/15">
    <div className="col-span-12 md:col-span-2 meta-label text-foreground/50">{label}</div>
    <div className="col-span-12 md:col-span-10 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((item) => {
        const active = selected === item.value;
        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`font-display text-base md:text-lg transition-all ${
              active
                ? 'italic text-foreground underline underline-offset-4 decoration-1'
                : 'text-foreground/55 hover:text-foreground hover:italic'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  </div>
);

const BlogFilter: React.FC<BlogFilterProps> = ({
  categories,
  years,
  selectedCategory,
  selectedYear,
  sortBy,
  onCategoryChange,
  onYearChange,
  onSortChange,
  onReset,
}) => {
  const { t } = useLanguage();
  const hasFilters = selectedCategory !== 'all' || selectedYear !== 'all' || sortBy !== 'date-desc';

  const yearItems = [
    { value: 'all', label: t('blog.allYears') },
    ...years.map((y) => ({ value: y, label: y })),
  ];

  const sortItems = [
    { value: 'date-desc', label: t('blog.newestFirst') },
    { value: 'date-asc', label: t('blog.oldestFirst') },
    { value: 'title', label: t('blog.alphabetical') },
  ];

  const categoryItems = categories.map((c) => ({
    value: c,
    label: c === 'all' ? t('blog.allCategories') : c,
  }));

  return (
    <div className="mb-12 border-t border-foreground/30">
      <div className="flex items-baseline justify-between py-4 border-b border-foreground/15">
        <span className="meta-label text-foreground/60">§ {t('blog.filters')}</span>
        {hasFilters && (
          <button
            onClick={onReset}
            className="meta-label text-foreground/60 hover:text-foreground underline underline-offset-4 decoration-1 transition-colors"
          >
            ✕ {t('blog.clearFilters')}
          </button>
        )}
      </div>

      <Row
        label={t('blog.category')}
        items={categoryItems}
        selected={selectedCategory}
        onChange={onCategoryChange}
      />

      <Row
        label={t('blog.year')}
        items={yearItems}
        selected={selectedYear}
        onChange={onYearChange}
      />

      <Row
        label={t('blog.sortBy')}
        items={sortItems}
        selected={sortBy}
        onChange={onSortChange}
      />
    </div>
  );
};

export default BlogFilter;
