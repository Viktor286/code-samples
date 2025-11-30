
// ============================================
// TRANSFORMS
// ============================================

scale-50
// transform: scale(.5);

scale-100
// transform: scale(1);

scale-105
// transform: scale(1.05);

scale-150
// transform: scale(1.5);

scale-x-50
// transform: scaleX(.5);

scale-y-75
// transform: scaleY(.75);

rotate-0
// transform: rotate(0deg);

rotate-45
// transform: rotate(45deg);

rotate-90
// transform: rotate(90deg);

rotate-180
// transform: rotate(180deg);

-rotate-45
// transform: rotate(-45deg);

translate-x-4
// transform: translateX(1rem);

translate-x-full
// transform: translateX(100%);

translate-x-1/2
// transform: translateX(50%);

-translate-x-1/2
// transform: translateX(-50%);

translate-y-4
// transform: translateY(1rem);

-translate-y-full
// transform: translateY(-100%);

skew-x-6
// transform: skewX(6deg);

skew-y-3
// transform: skewY(3deg);

-skew-x-12
// transform: skewX(-12deg);

origin-center
// transform-origin: center;

origin-top
// transform-origin: top;

origin-top-right
// transform-origin: top right;

origin-bottom-left
// transform-origin: bottom left;


// ============================================
// TRANSITIONS & ANIMATION
// ============================================

transition
// transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms;

transition-none
// transition-property: none;

transition-all
// transition-property: all;

transition-colors
// transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;

transition-opacity
// transition-property: opacity;

transition-shadow
// transition-property: box-shadow;

transition-transform
// transition-property: transform;

duration-75
// transition-duration: 75ms;

duration-150
// transition-duration: 150ms;

duration-300
// transition-duration: 300ms;

duration-500
// transition-duration: 500ms;

duration-1000
// transition-duration: 1000ms;

ease-linear
// transition-timing-function: linear;

ease-in
// transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

ease-out
// transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

ease-in-out
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

delay-150
// transition-delay: 150ms;

delay-300
// transition-delay: 300ms;

animate-none
// animation: none;

animate-spin
// animation: spin 1s linear infinite;
// @keyframes spin { to { transform: rotate(360deg); } }

animate-ping
// animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
// scales up and fades out — good for notification dots

animate-pulse
// animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// fades in and out — good for skeleton loading

animate-bounce
// animation: bounce 1s infinite;
// bounces up and down