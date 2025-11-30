
// ============================================
// INTERACTIVITY
// ============================================

cursor-pointer
// cursor: pointer;

cursor-not-allowed
// cursor: not-allowed;

cursor-wait
// cursor: wait;

cursor-grab
// cursor: grab;

cursor-grabbing
// cursor: grabbing;

cursor-move
// cursor: move;

cursor-text
// cursor: text;

cursor-crosshair
// cursor: crosshair;

cursor-zoom-in
// cursor: zoom-in;

pointer-events-none
// pointer-events: none; /* clicks pass through to elements below */

pointer-events-auto
// pointer-events: auto;

resize
// resize: both;

resize-none
// resize: none;

resize-x
// resize: horizontal;

resize-y
// resize: vertical;

scroll-smooth
// scroll-behavior: smooth;

scroll-auto
// scroll-behavior: auto;

scroll-mt-16
// scroll-margin-top: 4rem; /* offset for fixed headers when scrolling to anchors */

scroll-pt-16
// scroll-padding-top: 4rem; /* same but for scroll containers */

snap-x
// scroll-snap-type: x var(--tw-scroll-snap-strictness);

snap-y
// scroll-snap-type: y var(--tw-scroll-snap-strictness);

snap-mandatory
// --tw-scroll-snap-strictness: mandatory; /* must snap */

snap-proximity
// --tw-scroll-snap-strictness: proximity; /* snap when close */

snap-start
// scroll-snap-align: start;

snap-center
// scroll-snap-align: center;

snap-end
// scroll-snap-align: end;

snap-always
// scroll-snap-stop: always; /* can't scroll past */

touch-none
// touch-action: none;

touch-pan-x
// touch-action: pan-x;

touch-pan-y
// touch-action: pan-y;

touch-manipulation
// touch-action: manipulation; /* allows pan/zoom, disables double-tap zoom */

touch-pinch-zoom
// touch-action: pinch-zoom;

select-none
// user-select: none;

select-text
// user-select: text;

select-all
// user-select: all; /* click selects all text */

select-auto
// user-select: auto;

will-change-transform
// will-change: transform; /* performance hint to browser */

will-change-scroll
// will-change: scroll-position;

will-change-contents
// will-change: contents;

appearance-none
// appearance: none; /* remove default styling from form elements */

appearance-auto
// appearance: auto;


// ============================================
// OTHER VARIANTS
// ============================================

print:hidden
// @media print { display: none; }

print:text-black
// @media print { color: #000; }

// aria attribute variants
aria-checked:bg-blue-500
// [aria-checked="true"] { background-color: #3b82f6; }

aria-disabled:opacity-50
// [aria-disabled="true"] { opacity: 0.5; }

aria-expanded:rotate-180
// [aria-expanded="true"] { transform: rotate(180deg); }

aria-selected:border-blue-500
// [aria-selected="true"] { border-color: #3b82f6; }

aria-[sort=ascending]:bg-blue-100
// [aria-sort="ascending"] { background-color: #dbeafe; }

aria-[current=page]:font-bold
// [aria-current="page"] { font-weight: 700; }

// data attribute variants
data-[state=open]:bg-white
// [data-state="open"] { background-color: #fff; }

data-[active]:bg-blue-100
// [data-active] { background-color: #dbeafe; }

data-[size=large]:text-lg
// [data-size="large"] { font-size: 1.125rem; line-height: 1.75rem; }

// supports queries
supports-[display:grid]:grid
// @supports (display: grid) { display: grid; }

supports-[backdrop-filter]:backdrop-blur
// @supports (backdrop-filter: blur(0)) { backdrop-filter: blur(8px); }


// ============================================
// DARK MODE
// ============================================

// dark: prefix applies when dark mode is active
// by default uses prefers-color-scheme media query
// can be configured to use class strategy

dark:bg-gray-900
// @media (prefers-color-scheme: dark) { background-color: #111827; }
// or with class strategy: .dark & { background-color: #111827; }

dark:text-white
// dark mode: color: #fff;

dark:border-gray-700
// dark mode: border-color: #374151;

dark:hover:bg-gray-800
// dark mode + hover: background-color: #1f2937;


// ============================================
// CONTAINER QUERIES
// ============================================

// @container on parent makes it a query container
@container
// container-type: inline-size;

// @{size}: prefix for container query breakpoints
@sm:grid-cols-2
// @container (min-width: 24rem) { grid-template-columns: repeat(2, minmax(0, 1fr)); }

@md:flex-row
// @container (min-width: 28rem) { flex-direction: row; }

@lg:gap-8
// @container (min-width: 32rem) { gap: 2rem; }

