// JQuery replacements:Animation
// fadeIn/fadeOut
function fadeOut(el, ms) {
  if (ms) {
    el.style.transition = `opacity ${ms} ms`;
    el.addEventListener(
      "transitionend",
      function(event) {
        el.style.display = "none";
      },
      false
    );
  }
  el.style.opacity = "0";
}

// Native fadeIn
function fadeIn(elem, ms) {
  elem.style.opacity = 0;

  if (ms) {
    let opacity = 0;
    const timer = setInterval(function() {
      opacity += 50 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
    }, 50);
  } else {
    elem.style.opacity = 1;
  }
}

// $el.fadeTo('slow',0.15);
el.style.transition = "opacity 3s"; // assume 'slow' equals 3 seconds
el.style.opacity = "0.15";

// $el.fadeToggle();
el.style.transition = "opacity 3s";
const { opacity } = el.ownerDocument.defaultView.getComputedStyle(el, null);
el.style.opacity = opacity === "1" ? "0" : "1";

// slideUp/slideDown
const originHeight = "100px";
el.style.transition = "height 3s";
el.style.height = "0px"; // slideUp
el.style.height = originHeight; // slideDown

// $el.slideToggle();
const originHeight = "100px";
el.style.transition = "height 3s";
const { height } = el.ownerDocument.defaultView.getComputedStyle(el, null);
if (parseInt(height, 10) === 0) {
  el.style.height = originHeight;
} else {
  el.style.height = "0px";
}

// $el.animate({ params }, speed);
el.style.transition = "all " + speed;
Object.keys(params).forEach((key) => (el.style[key] = params[key]));
