// jQuery (optional filter selector)
// $el.prevAll($filter);
function getPreviousSiblings(elem, filter) {
  const sibs = [];
  while (elem = elem.previousSibling) {
    if (elem.nodeType === 3) continue; // ignore text nodes
    if (!filter || filter(elem)) sibs.push(elem);
  }
  return sibs;
}

// $el.nextAll($filter);
function getNextSiblings(elem, filter) {
  var sibs = [];
  var nextElem = elem.parentNode.firstChild;
  do {
    if (nextElem.nodeType === 3) continue; // ignore text nodes
    if (nextElem === elem) continue; // ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        sibs.push(nextElem);
        elem = nextElem;
      }
    }
  } while (nextElem = nextElem.nextSibling);
  return sibs;
}

// $el.parentsUntil(selector, filter);
function parentsUntil(el, selector, filter) {
  const result = [];
  // match start from parent
  el = el.parentElement;
  while (el && !el.matches(selector)) {
    if (!filter) {
      result.push(el);
    } else {
      if (el.matches(filter)) {
        result.push(el);
      }
    }
    el = el.parentElement;
  }
  return result;
}

// $("selector:contains('text')");
function contains(selector, text) {
  const elements = document.querySelectorAll(selector);
  return Array.from(elements).filter(function(element) {
    return RegExp(text).test(element.textContent);
  });
}

// $.parseHTML(htmlString);
function parseHTML(string) {
  const context = document.implementation.createHTMLDocument();

  // Set the base href for the created document so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement("base");
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children;
}

