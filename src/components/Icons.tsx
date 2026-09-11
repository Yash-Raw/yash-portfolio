/** Four hairline glyphs, drawn to the same 1.5px stroke as the page's rules. */
const base = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const ArrowUpRight = () => (
  <svg {...base}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Mail = () => (
  <svg {...base} width={16} height={16}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export const Github = () => (
  <svg {...base} width={16} height={16}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.5 1.4a12.1 12.1 0 0 0-6.4 0C7.2 1.5 6.1 1.8 6.1 1.8a4.8 4.8 0 0 0-.1 3.6A5.1 5.1 0 0 0 4.6 9c0 5 3 6.3 5.9 6.6a3.4 3.4 0 0 0-.9 2.6V22" />
  </svg>
);

export const Linkedin = () => (
  <svg {...base} width={16} height={16}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5A6 6 0 0 1 16 8z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
