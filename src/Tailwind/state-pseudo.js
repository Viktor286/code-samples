
// ============================================
// STATE VARIANTS
// ============================================

hover:bg-blue-700
// :hover { background-color: #1d4ed8; }

focus:outline-none
// :focus { outline: 2px solid transparent; outline-offset: 2px; }

focus:ring-2
// :focus { box-shadow: 0 0 0 2px var(--tw-ring-color); }

focus-visible:ring-2
// :focus-visible { ... } /* only keyboard focus, not mouse clicks */

focus-within:border-blue-500
// :focus-within { ... } /* when any child has focus */

active:bg-blue-800
// :active { background-color: #1e40af; }

visited:text-purple-600
// :visited { color: #9333ea; }

disabled:opacity-50
// :disabled { opacity: 0.5; }

disabled:cursor-not-allowed
// :disabled { cursor: not-allowed; }

enabled:hover:bg-blue-500
// :enabled:hover { background-color: #3b82f6; }

checked:bg-blue-500
// :checked { background-color: #3b82f6; }

indeterminate:bg-gray-300
// :indeterminate { background-color: #d1d5db; }

required:border-red-500
// :required { border-color: #ef4444; }

valid:border-green-500
// :valid { border-color: #22c55e; }

invalid:border-red-500
// :invalid { border-color: #ef4444; }

in-range:border-green-500
// :in-range { border-color: #22c55e; }

out-of-range:border-red-500
// :out-of-range { border-color: #ef4444; }

placeholder-shown:border-gray-300
// :placeholder-shown { border-color: #d1d5db; }

autofill:bg-yellow-100
// :autofill { background-color: #fef9c3; }

read-only:bg-gray-100
// :read-only { background-color: #f3f4f6; }

first:mt-0
// :first-child { margin-top: 0px; }

last:mb-0
// :last-child { margin-bottom: 0px; }

odd:bg-gray-50
// :nth-child(odd) { background-color: #f9fafb; }

even:bg-white
// :nth-child(even) { background-color: #fff; }

only:mx-auto
// :only-child { margin-left: auto; margin-right: auto; }

first-of-type:pt-0
// :first-of-type { padding-top: 0px; }

last-of-type:pb-0
// :last-of-type { padding-bottom: 0px; }

empty:hidden
// :empty { display: none; }

target:bg-yellow-100
// :target { background-color: #fef9c3; } /* when element matches URL hash */

open:rotate-180
// [open] { transform: rotate(180deg); } /* for <details> element */


// ============================================
// PSEUDO-ELEMENTS
// ============================================

before:content-['']
// ::before { content: ''; } /* required to show pseudo-element */

before:absolute
// ::before { position: absolute; }

before:inset-0
// ::before { inset: 0px; }

after:content-['*']
// ::after { content: '*'; }

after:text-red-500
// ::after { color: #ef4444; }

placeholder:text-gray-400
// ::placeholder { color: #9ca3af; }

placeholder:italic
// ::placeholder { font-style: italic; }

file:mr-4
// ::file-selector-button { margin-right: 1rem; }

file:rounded-lg
// ::file-selector-button { border-radius: 0.5rem; }

file:border-0
// ::file-selector-button { border-width: 0px; }

file:bg-blue-50
// ::file-selector-button { background-color: #eff6ff; }

selection:bg-blue-200
// ::selection { background-color: #bfdbfe; }

selection:text-blue-900
// ::selection { color: #1e3a8a; }

first-line:uppercase
// ::first-line { text-transform: uppercase; }

first-letter:text-7xl
// ::first-letter { font-size: 4.5rem; line-height: 1; }

first-letter:float-left
// ::first-letter { float: left; }

marker:text-blue-500
// ::marker { color: #3b82f6; } /* list bullet/number */

backdrop:bg-black/50
// ::backdrop { background-color: rgb(0 0 0 / 0.5); } /* for <dialog> */