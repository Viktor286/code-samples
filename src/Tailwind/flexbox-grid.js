// ============================================
// FLEXBOX
// ============================================

flex
// display: flex;

inline-flex
// display: inline-flex;

flex-row
// flex-direction: row; /* default */

flex-col
// flex-direction: column;

flex-row-reverse
// flex-direction: row-reverse;

flex-wrap
// flex-wrap: wrap;

flex-nowrap
// flex-wrap: nowrap; /* default — children shrink or overflow */

flex-1
// flex: 1 1 0%; /* grow, shrink, zero basis — fill available space equally */

flex-auto
// flex: 1 1 auto; /* grow, shrink, auto basis — size based on content then fill */

flex-initial
// flex: 0 1 auto; /* don't grow, can shrink, auto basis — default flex behavior */

flex-none
// flex: none; /* don't grow or shrink — fixed size */

grow
// flex-grow: 1;

grow-0
// flex-grow: 0;

shrink
// flex-shrink: 1;

shrink-0
// flex-shrink: 0; /* prevent shrinking — useful for icons/fixed elements */

basis-0
// flex-basis: 0px;

basis-auto
// flex-basis: auto;

basis-full
// flex-basis: 100%;

basis-1/4
// flex-basis: 25%;

justify-start
// justify-content: flex-start;

justify-center
// justify-content: center;

justify-between
// justify-content: space-between; /* first/last flush, equal space between */

justify-around
// justify-content: space-around; /* equal space around each item */

justify-evenly
// justify-content: space-evenly; /* truly equal spacing including edges */

items-start
// align-items: flex-start;

items-center
// align-items: center;

items-baseline
// align-items: baseline; /* align text baselines */

items-stretch
// align-items: stretch; /* default — children fill cross axis */

self-auto
// align-self: auto;

self-start
// align-self: flex-start; /* override parent's align-items for this child */

content-start
// align-content: flex-start; /* for multi-line flex containers */

content-between
// align-content: space-between;

gap-4
// gap: 1rem; /* works in flex and grid — cleaner than space-* */

gap-x-4
// column-gap: 1rem;

gap-y-2
// row-gap: 0.5rem;

order-first
// order: -9999;

order-last
// order: 9999;

order-2
// order: 2;

order-none
// order: 0;


// ============================================
// GRID
// ============================================

grid
// display: grid;

inline-grid
// display: inline-grid;

grid-cols-3
// grid-template-columns: repeat(3, minmax(0, 1fr));
// note: minmax(0, 1fr) not just 1fr — allows content to shrink below natural size

grid-cols-none
// grid-template-columns: none;

grid-cols-subgrid
// grid-template-columns: subgrid; /* inherit parent's column tracks */

grid-rows-4
// grid-template-rows: repeat(4, minmax(0, 1fr));

col-span-2
// grid-column: span 2 / span 2;

col-span-full
// grid-column: 1 / -1; /* span all columns */

col-start-2
// grid-column-start: 2;

col-end-4
// grid-column-end: 4;

row-span-2
// grid-row: span 2 / span 2;

row-start-1
// grid-row-start: 1;

grid-flow-row
// grid-auto-flow: row; /* default */

grid-flow-col
// grid-auto-flow: column;

grid-flow-dense
// grid-auto-flow: dense; /* fill holes in grid */

auto-cols-fr
// grid-auto-columns: minmax(0, 1fr);

auto-cols-min
// grid-auto-columns: min-content;

auto-cols-max
// grid-auto-columns: max-content;

auto-rows-auto
// grid-auto-rows: auto;

place-content-center
// place-content: center; /* align-content + justify-content */

place-items-center
// place-items: center; /* align-items + justify-items */

place-self-end
// place-self: end; /* align-self + justify-self */
