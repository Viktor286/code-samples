
// ============================================
// LAYOUT
// ============================================

aspect-auto
// aspect-ratio: auto;

aspect-square
// aspect-ratio: 1 / 1;

aspect-video
// aspect-ratio: 16 / 9;

container
// width: 100%; /* plus max-width at each breakpoint */
// not responsive by default — add mx-auto for centering

columns-2
// columns: 2;

columns-3
// columns: 3;

columns-xs
// columns: 20rem; /* column width, auto number */

columns-sm
// columns: 24rem;

break-after-column
// break-after: column;

break-before-page
// break-before: page;

break-inside-avoid
// break-inside: avoid;

box-border
// box-sizing: border-box; /* default — width includes padding/border */

box-content
// box-sizing: content-box; /* width is content only */

float-right
// float: right;

float-left
// float: left;

float-none
// float: none;

float-start
// float: inline-start; /* RTL-aware */

float-end
// float: inline-end;

clear-both
// clear: both;

clear-left
// clear: left;

isolate
// isolation: isolate; /* creates new stacking context */

isolation-auto
// isolation: auto;

object-contain
// object-fit: contain;

object-cover
// object-fit: cover;

object-fill
// object-fit: fill;

object-none
// object-fit: none;

object-scale-down
// object-fit: scale-down;

object-center
// object-position: center;

object-top
// object-position: top;

object-left-bottom
// object-position: left bottom;


// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

// breakpoints are mobile-first (min-width)
// sm:  640px  — @media (min-width: 640px)
// md:  768px  — @media (min-width: 768px)
// lg:  1024px — @media (min-width: 1024px)
// xl:  1280px — @media (min-width: 1280px)
// 2xl: 1536px — @media (min-width: 1536px)

sm:flex
// @media (min-width: 640px) { display: flex; }

md:grid-cols-2
// @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }

lg:w-1/3
// @media (min-width: 1024px) { width: 33.333333%; }

xl:hidden
// @media (min-width: 1280px) { display: none; }

2xl:text-xl
// @media (min-width: 1536px) { font-size: 1.25rem; line-height: 1.75rem; }

// max-* variants (max-width — apply BELOW breakpoint)
max-md:flex-col
// @media not all and (min-width: 768px) { flex-direction: column; }

// range variants
md:max-lg:hidden
// @media (min-width: 768px) and (max-width: 1023px) { display: none; }
