// JQuery replacements: DOM Manipulation
// $(`'<div>...'`);
const range = document.createRange();
const parse = range.createContextualFragment.bind(range);
parse('<div>...');
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
// https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment

// $("<div/>") or $("<span/>")
document.createElement('span');
element = document.createElement('div');
el.textContent = 'Text';
// or create a textNode and append it
const text = document.createTextNode('Text');
el.appendChild(text);

el.textContent; // $el.text();
el.innerHTML; // $el.html();

// $p.append(newEl | '<div id="container">Hello World</div>');
// Append child element after the last child of parent element
// (Just inside the element, after its last child.)
p.insertAdjacentHTML('beforeend', '<div>...');
p.innerHTML = '<div>...'; // overwrite contents
p.appendChild(el); // node only, no text or html
p.append(el); // node/text, not html

// $p.prepend(newEl | '<div id="container">Hello World</div>');
p.insertAdjacentHTML('afterbegin', '<div>...');
p.insertBefore(el);
p.prepend(el);

// .before() .after()
p.before(el);
p.after(el);

// $newEl.insertBefore(selector);
// Insert a new node before the selected elements
el.insertAdjacentHTML('beforebegin ', '<div>...');
el.parentNode.insertBefore(newEl, el);

// $newEl.insertAfter(selector);
// Insert a new node after the selected elements
el.insertAdjacentHTML('afterend', '<div>...');
el.parentNode.insertBefore(newEl, el.nextSibling);

// $el.clone();
el.cloneNode(); // deep copy of an element

// $el.empty();
el.innerHTML = null;

// $('.inner').replaceWith('<div class="outer"></div>');
el.replaceWith(newEl);

// $('.inner').wrap('<div class="wrapper"></div>');
Array.from(document.querySelectorAll('.inner')).forEach((el) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
});

// $('.inner').unwrap();
Array.from(document.querySelectorAll('.inner')).forEach((el) => {
  let elParentNode = el.parentNode;
  if (elParentNode !== document.body) {
    elParentNode.parentNode.insertBefore(el, elParentNode);
    elParentNode.parentNode.removeChild(elParentNode);
  }
});
