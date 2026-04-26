// Academic publications — structured for citation rendering & filtering.
// TODO: Replace placeholder entries with actual publications, DOIs, and PDF links.

export type PublicationType =
  | 'journal'
  | 'conference'
  | 'workshop'
  | 'preprint'
  | 'thesis'
  | 'chapter';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  authors: string[]; // Use "L. Mbagdje Dorenan" style; bold the self-author at render time
  venue: string; // Journal / Conference name
  venueShort?: string; // e.g. "NeurIPS"
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  arxiv?: string;
  url?: string;
  pdfUrl?: string;
  codeUrl?: string;
  abstract?: string;
  keywords?: string[];
  status?: 'published' | 'accepted' | 'under-review' | 'in-preparation';
  citations?: number;
}

export const SELF_AUTHOR = 'L. Mbagdje Dorenan';

export const publications: Publication[] = [
  {
    id: 'pub-2024-interpretable',
    type: 'journal',
    title:
      'Interpretable Deep Learning for Clinical Decision Support: A Statistical Framework',
    authors: [SELF_AUTHOR, 'A. Dupont', 'M. Chen'],
    venue: 'Journal of Machine Learning Research',
    venueShort: 'JMLR',
    year: 2024,
    volume: '25',
    pages: '1–34',
    doi: '10.0000/placeholder.2024.001',
    arxiv: '2401.00000',
    keywords: ['interpretability', 'healthcare', 'deep learning'],
    status: 'published',
    abstract:
      'We propose a unified statistical framework for interpretable deep models in clinical decision support, with theoretical guarantees on attribution stability.',
  },
  {
    id: 'pub-2024-robust',
    type: 'conference',
    title:
      'Data-Efficient Robustness via Distributionally Adaptive Regularization',
    authors: [SELF_AUTHOR, 'R. Okafor'],
    venue: 'Advances in Neural Information Processing Systems',
    venueShort: 'NeurIPS',
    year: 2024,
    pages: '1102–1114',
    arxiv: '2406.00000',
    keywords: ['robustness', 'regularization', 'data efficiency'],
    status: 'accepted',
  },
  {
    id: 'pub-2023-fairness',
    type: 'conference',
    title: 'On the Fairness–Calibration Trade-off in Probabilistic Classifiers',
    authors: ['M. Chen', SELF_AUTHOR, 'P. Lambert'],
    venue: 'International Conference on Machine Learning',
    venueShort: 'ICML',
    year: 2023,
    pages: '4501–4516',
    doi: '10.0000/placeholder.2023.045',
    keywords: ['fairness', 'calibration', 'classification'],
    status: 'published',
    citations: 18,
  },
  {
    id: 'pub-2023-survey',
    type: 'preprint',
    title: 'A Survey of Trustworthy Machine Learning under Real-World Constraints',
    authors: [SELF_AUTHOR],
    venue: 'arXiv preprint',
    year: 2023,
    arxiv: '2312.00000',
    keywords: ['survey', 'trustworthy ML'],
    status: 'under-review',
  },
  {
    id: 'pub-2022-thesis',
    type: 'thesis',
    title:
      'Statistical Foundations for Interpretable Machine Learning Systems',
    authors: [SELF_AUTHOR],
    venue: 'PhD Thesis, [University Name]',
    year: 2022,
    keywords: ['thesis', 'statistical learning', 'interpretability'],
    status: 'published',
  },
];

export const publicationTypeLabels: Record<PublicationType, { en: string; fr: string }> = {
  journal: { en: 'Journal Article', fr: 'Article de revue' },
  conference: { en: 'Conference Paper', fr: 'Article de conférence' },
  workshop: { en: 'Workshop', fr: 'Atelier' },
  preprint: { en: 'Preprint', fr: 'Préprint' },
  thesis: { en: 'Thesis', fr: 'Thèse' },
  chapter: { en: 'Book Chapter', fr: 'Chapitre de livre' },
};
