// ============================================
// TYPOGRAPHY
// ============================================

font-sans
// font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

font-serif
// font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

font-mono
// font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

text-sm
// font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */
// tailwind sets line-height with font-size for optimal pairing

text-base
// font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */

text-lg
// font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */

text-xl
// font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */

text-2xl
// font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */

text-9xl
// font-size: 8rem; /* 128px */ line-height: 1;

font-thin
// font-weight: 100;

font-light
// font-weight: 300;

font-normal
// font-weight: 400;

font-medium
// font-weight: 500;

font-semibold
// font-weight: 600;

font-bold
// font-weight: 700;

font-black
// font-weight: 900;

italic
// font-style: italic;

not-italic
// font-style: normal;

tracking-tight
// letter-spacing: -0.025em;

tracking-normal
// letter-spacing: 0em;

tracking-wide
// letter-spacing: 0.025em;

tracking-widest
// letter-spacing: 0.1em;

leading-none
// line-height: 1; /* useful for large headings */

leading-tight
// line-height: 1.25;

leading-normal
// line-height: 1.5;

leading-relaxed
// line-height: 1.625;

leading-loose
// line-height: 2;

leading-6
// line-height: 1.5rem; /* fixed line-height override */

text-left
// text-align: left;

text-center
// text-align: center;

text-right
// text-align: right;

text-justify
// text-align: justify;

text-start
// text-align: start; /* RTL-aware */

text-end
// text-align: end;

underline
// text-decoration-line: underline;

overline
// text-decoration-line: overline;

line-through
// text-decoration-line: line-through;

no-underline
// text-decoration-line: none;

decoration-solid
// text-decoration-style: solid;

decoration-dashed
// text-decoration-style: dashed;

decoration-wavy
// text-decoration-style: wavy;

decoration-2
// text-decoration-thickness: 2px;

decoration-from-font
// text-decoration-thickness: from-font;

underline-offset-4
// text-underline-offset: 4px;

uppercase
// text-transform: uppercase;

lowercase
// text-transform: lowercase;

capitalize
// text-transform: capitalize;

normal-case
// text-transform: none;

truncate
// overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
// all three properties together for single-line truncation

text-ellipsis
// text-overflow: ellipsis;

text-clip
// text-overflow: clip;

text-wrap
// text-wrap: wrap;

text-nowrap
// text-wrap: nowrap;

text-balance
// text-wrap: balance; /* balances line lengths in headings */

text-pretty
// text-wrap: pretty; /* avoids orphans */

whitespace-nowrap
// white-space: nowrap;

whitespace-pre
// white-space: pre; /* preserves spaces and newlines */

whitespace-pre-wrap
// white-space: pre-wrap; /* preserves whitespace, wraps text */

whitespace-pre-line
// white-space: pre-line; /* preserves newlines, collapses spaces */

break-words
// overflow-wrap: break-word;

break-all
// word-break: break-all;

break-keep
// word-break: keep-all; /* for CJK text */

hyphens-auto
// hyphens: auto;

align-baseline
// vertical-align: baseline;

align-middle
// vertical-align: middle;

align-text-top
// vertical-align: text-top;

list-disc
// list-style-type: disc;

list-decimal
// list-style-type: decimal;

list-none
// list-style-type: none;

list-inside
// list-style-position: inside;

list-outside
// list-style-position: outside;


// ============================================
// COLORS
// ============================================

// colors have shades: 50,100,200,300,400,500,600,700,800,900,950
// 500 is the "base" shade

text-black
// color: #000;

text-white
// color: #fff;

text-transparent
// color: transparent;

text-current
// color: currentColor; /* inherits from parent */

text-inherit
// color: inherit;

text-slate-500
// color: #64748b;

text-gray-700
// color: #374151;

text-red-500
// color: #ef4444;

text-blue-600
// color: #2563eb;

bg-white
// background-color: #fff;

bg-black
// background-color: #000;

bg-transparent
// background-color: transparent;

bg-slate-100
// background-color: #f1f5f9;

bg-blue-500
// background-color: #3b82f6;

border-gray-300
// border-color: #d1d5db;

ring-blue-500
// --tw-ring-color: #3b82f6;

divide-gray-200
// sets border-color on > * + * children

accent-pink-500
// accent-color: #ec4899; /* for checkboxes, radios, range inputs */

caret-blue-500
// caret-color: #3b82f6; /* text input cursor */

// opacity modifier: color/{opacity}
bg-black/50
// background-color: rgb(0 0 0 / 0.5);

text-white/75
// color: rgb(255 255 255 / 0.75);

bg-blue-500/0
// background-color: rgb(59 130 246 / 0);