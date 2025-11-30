
// ============================================
// POSITIONING
// ============================================

static
// position: static; /* default — normal document flow */

relative
// position: relative; /* positioned relative to normal position */

absolute
// position: absolute; /* removed from flow, positioned relative to nearest positioned ancestor */

fixed
// position: fixed; /* positioned relative to viewport */

sticky
// position: sticky; /* hybrid — relative until scroll threshold, then fixed */

inset-0
// inset: 0px; /* top: 0; right: 0; bottom: 0; left: 0; */

inset-x-0
// left: 0px; right: 0px;

inset-y-4
// top: 1rem; bottom: 1rem;

top-0
// top: 0px;

top-1/2
// top: 50%;

-top-4
// top: -1rem;

right-full
// right: 100%;

left-auto
// left: auto;

z-10
// z-index: 10;

z-auto
// z-index: auto;

-z-10
// z-index: -10;


// ============================================
// DISPLAY & VISIBILITY
// ============================================

block
// display: block;

inline-block
// display: inline-block;

inline
// display: inline;

hidden
// display: none;

contents
// display: contents; /* element disappears, children move up */

flow-root
// display: flow-root; /* creates BFC — contains floats, prevents margin collapse */

visible
// visibility: visible;

invisible
// visibility: hidden; /* hidden but takes up space */

collapse
// visibility: collapse; /* for table rows/columns */


// ============================================
// OVERFLOW
// ============================================

overflow-hidden
// overflow: hidden;

overflow-auto
// overflow: auto; /* scrollbar only when needed */

overflow-scroll
// overflow: scroll; /* always show scrollbar */

overflow-clip
// overflow: clip; /* like hidden but disables programmatic scrolling */

overflow-visible
// overflow: visible; /* default */

overflow-x-auto
// overflow-x: auto;

overflow-y-scroll
// overflow-y: scroll;

overscroll-contain
// overscroll-behavior: contain; /* prevent scroll chaining to parent */

overscroll-none
// overscroll-behavior: none; /* no scroll chaining, no bounce effects */

overscroll-auto
// overscroll-behavior: auto; /* default */
