
// ============================================
// ARBITRARY VALUES
// ============================================

// square brackets for custom values
w-[200px]
// width: 200px;

h-[calc(100vh-80px)]
// height: calc(100vh - 80px);

top-[117px]
// top: 117px;

mt-[5%]
// margin-top: 5%;

bg-[#1da1f2]
// background-color: #1da1f2;

text-[22px]
// font-size: 22px;

text-[color:var(--my-color)]
// color: var(--my-color); /* type hint for ambiguous values */

grid-cols-[1fr_500px_2fr]
// grid-template-columns: 1fr 500px 2fr; /* underscores become spaces */

font-[1100]
// font-weight: 1100;

p-[clamp(1rem,5vw,3rem)]
// padding: clamp(1rem, 5vw, 3rem);

rotate-[17deg]
// transform: rotate(17deg);

translate-x-[var(--offset)]
// transform: translateX(var(--offset));


// ============================================
// ARBITRARY PROPERTIES
// ============================================

// completely custom CSS properties
[mask-type:luminance]
// mask-type: luminance;

[text-wrap:balance]
// text-wrap: balance;

[word-spacing:0.5em]
// word-spacing: 0.5em;

hover:[mask-type:alpha]
// :hover { mask-type: alpha; }


// ============================================
// ARBITRARY VARIANTS
// ============================================

// custom selectors
[&>*]:p-4
// & > * { padding: 1rem; }

[&:nth-child(3)]:underline
// &:nth-child(3) { text-decoration-line: underline; }

[&_.highlight]:bg-yellow-200
// & .highlight { background-color: #fef08a; }

[@supports(display:grid)]:grid
// @supports (display: grid) { display: grid; }

[@media(hover:hover)]:hover:bg-blue-500
// @media (hover: hover) { &:hover { background-color: #3b82f6; } }


// ============================================
// IMPORTANT MODIFIER
// ============================================

// ! prefix adds !important
!p-4
// padding: 1rem !important;

!mt-0
// margin-top: 0px !important;

hover:!bg-red-500
// :hover { background-color: #ef4444 !important; }


// ============================================
// MODIFIER STACKING ORDER
// ============================================

// read left to right: responsive → state → pseudo-element
sm:hover:bg-blue-500
// @media (min-width: 640px) { &:hover { background-color: #3b82f6; } }

dark:md:hover:bg-gray-800
// dark mode + @media (min-width: 768px) + :hover

lg:first:pt-0
// @media (min-width: 1024px) { &:first-child { padding-top: 0px; } }

group-hover:sm:opacity-100
// @media (min-width: 640px) { .group:hover & { opacity: 1; } }

disabled:dark:bg-gray-700
// dark mode + :disabled { background-color: #374151; }