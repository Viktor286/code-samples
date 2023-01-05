// JQuery replacements: CSS & Style
// $el.css();
window.getComputedStyle(el, null); // null means not to return pseudo styles

// $(".element").addClass("focus") .removeClass("focus") .toggleClass("focus")
el.classList.add('focus');
el.classList.remove('focus');
el.classList.toggle('focus');
el.classList.replace('focus', 'blurred');
el.classList.contains('focus'); // $(".element").hasClass("focus")

// $(".element").hide();
document.querySelectorAll('.element').forEach((el) => (el.style.display = 'none'));

// $(".element").css("color", "#000");
el.style.color = '#000';
el.style.cssText = 'color: #000; background-color: red';

// ===== Width & Height, Position & Offset
// $(window).height();
window.document.documentElement.clientHeight; // without scrollbar (like jQuery)
window.innerHeight; // with scrollbar

// $(document).height();
const body = document.body;
const html = document.documentElement;
const height = Math.max(
  body.offsetHeight,
  body.scrollHeight,
  html.clientHeight,
  html.offsetHeight,
  html.scrollHeight,
);

// $el.height();
// accurate to integer（when `border-box`, it's `height - border`;
// when `content-box`, it's `height + padding`）
el.clientHeight;

// accurate to decimal（when `border-box`, it's `height`;
// when `content-box`, it's `height + padding + border`）
el.getBoundingClientRect().height;

// Get the current coordinates of the element relative to the offset parent.
// $el.position();
const lt = () => ({ left: el.offsetLeft, top: el.offsetTop });

// Get the current coordinates of the element relative to the document.
// $el.offset();
function getOffset(el) {
  const box = el.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft,
  };
}

// $(window).scrollTop();
// Get the current vertical position of the scroll bar for the element.
document.body.scrollTop;
