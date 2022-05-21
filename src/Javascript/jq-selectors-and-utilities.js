// JQuery replacements: Selectors
let el = document.querySelector("div.HTMLElement") || new HTMLElement();
el.matches(".HTMLElement"); // Return true if it matches the query selector

el.closest(":not(div)"); // $el.closest(selector);
document.querySelectorAll("a[target=_blank]"); // $('a[target=_blank]');
// $el.siblings();
[...el.parentNode.children].filter((child) => child !== element);
Array.from(el.parentNode.children).filter((child) => child !== element);

// $(".element").next() .prev() .parent()
el.nextElementSibling;
el.previousElementSibling;
el.parentElement;

// .attr('foo'), .attr('foo', 'bar') .data('foo')
el.getAttribute("foo");
el.setAttribute("foo", "bar");
el.getAttribute("data-foo");

// Utilities
Array.isArray(array); // $.isArray(array);
// $.inArray(item, array);
array.indexOf(item) > -1;
array.includes(item);

// $.isFunction(item);
Object.prototype.toString.call(item) === "[object Function]";

// $.isEmptyObject(obj);
Object.keys(obj).length === 0;

// $.extend({}, object1, object2);
Object.assign({}, object1, object2);

// $.trim(string);
string.trim();
