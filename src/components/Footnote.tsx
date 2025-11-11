import React, { ReactNode } from 'react';

interface FootnoteRefProps {
  slug: string;
  label: string;
}

interface FootnoteProps {
  slug: string;
  label: string;
  children: ReactNode;
}

interface FootnoteListProps {
  children: ReactNode;
}

/**
 * FootnoteRef - Inline reference to a footnote
 * @param slug - Internal identifier for linking (e.g., "who-report")
 * @param label - Visible text shown to user (e.g., "WHO2023")
 */
export const FootnoteRef: React.FC<FootnoteRefProps> = ({ slug, label }) => {
  return (
    <sup id={`ref-${slug}`}>
      [<a href={`#footnote-${slug}`}>{label}</a>]
    </sup>
  );
};

/**
 * Footnote - The actual footnote content at the bottom of the page
 * @param slug - Internal identifier matching FootnoteRef (e.g., "who-report")
 * @param label - Visible text matching FootnoteRef (e.g., "WHO2023")
 * @param children - The citation/footnote content
 */
export const Footnote: React.FC<FootnoteProps> = ({ slug, label, children }) => {
  return (
    <div id={`footnote-${slug}`} style={{ marginBottom: '1rem' }}>
      <strong>[{label}]</strong> {children}{' '}
      <a href={`#ref-${slug}`} title="Jump back to reference">
        ↩
      </a>
    </div>
  );
};

/**
 * FootnoteList - Container for all footnotes at the bottom of the page
 */
export const FootnoteList: React.FC<FootnoteListProps> = ({ children }) => {
  return (
    <div style={{ fontSize: '0.9rem', lineHeight: '1.8', marginTop: '2rem' }}>
      {children}
    </div>
  );
};
