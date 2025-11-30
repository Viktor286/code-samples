// ============================================
// SPACING
// ============================================

// 1 unit = 0.25rem = 4px (at default 16px root)
// scale: 0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96

p-4
// padding: 1rem; /* 16px */

p-0.5
// padding: 0.125rem; /* 2px — decimal uses dot syntax */

px-4
// padding-left: 1rem; padding-right: 1rem;

py-2
// padding-top: 0.5rem; padding-bottom: 0.5rem;

pt-4
// padding-top: 1rem;

ps-4
// padding-inline-start: 1rem; /* RTL-aware, flips in RTL languages */

m-4
// margin: 1rem;

mx-auto
// margin-left: auto; margin-right: auto;

-mt-4
// margin-top: -1rem; /* negative values use dash prefix */

space-x-4
// applies margin-left: 1rem to all children except first
// uses > * + * selector (lobotomized owl)
// actually sets --tw-space-x-reverse and calc()

space-y-reverse
// reverses the space direction for RTL or column-reverse layouts


// ============================================
// SIZING
// ============================================

w-64
// width: 16rem; /* 256px */

w-full
// width: 100%;

w-screen
// width: 100vw;

w-svw
// width: 100svw; /* small viewport width — excludes mobile browser chrome */

w-dvw
// width: 100dvw; /* dynamic viewport — adjusts as browser chrome shows/hides */

w-lvw
// width: 100lvw; /* large viewport — assumes browser chrome is hidden */

w-1/3
// width: 33.333333%;

w-fit
// width: fit-content;

w-min
// width: min-content;

w-max
// width: max-content;

h-screen
// height: 100vh;

h-svh
// height: 100svh;

h-dvh
// height: 100dvh; /* best for mobile full-height layouts */

min-w-0
// min-width: 0px; /* crucial for flex children to allow shrinking below content size */

min-w-fit
// min-width: fit-content;

max-w-prose
// max-width: 65ch; /* optimal reading width */

max-w-screen-md
// max-width: 768px; /* matches md breakpoint */

max-w-none
// max-width: none;

size-8
// width: 2rem; height: 2rem; /* square shorthand */
