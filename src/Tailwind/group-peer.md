// ============================================
// GROUP & PEER
// ============================================

// group: parent hover/state affects children
// add "group" class to parent element

group-hover:visible
// .group:hover & { visibility: visible; }

group-hover:opacity-100
// .group:hover & { opacity: 1; }

group-hover:translate-x-2
// .group:hover & { transform: translateX(0.5rem); }

group-focus:ring-2
// .group:focus & { box-shadow: 0 0 0 2px var(--tw-ring-color); }

group-active:bg-blue-800
// .group:active & { background-color: #1e40af; }

// named groups: group/{name} on parent
group-hover/item:visible
// .group\/item:hover & { visibility: visible; }

group-hover/card:shadow-lg
// .group\/card:hover & { box-shadow: ... }

// peer: sibling state affects element
// add "peer" class to preceding sibling

peer-focus:ring-2
// .peer:focus ~ & { box-shadow: 0 0 0 2px var(--tw-ring-color); }

peer-invalid:visible
// .peer:invalid ~ & { visibility: visible; }

peer-checked:bg-blue-500
// .peer:checked ~ & { background-color: #3b82f6; }

peer-disabled:opacity-50
// .peer:disabled ~ & { opacity: 0.5; }

peer-placeholder-shown:top-4
// .peer:placeholder-shown ~ & { top: 1rem; }

// named peers
peer-checked/published:text-green-500
// .peer\/published:checked ~ & { color: #22c55e; }