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

  // Default approach: counting value fracture from elapsed time
  let start, previousTimeStamp;

  const updater = (timestamp) => {
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      elem.style.opacity = elapsed / ms;

      if (elem.style.opacity < 1) {
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(updater);
      } else {
        elem.style.opacity = 1;
      }
    }
  }

  if (ms) {
    window.requestAnimationFrame(updater);
  } else {
    elem.style.opacity = 1;
  }

  // Alternative approach: Count with predefined fps as incrementPerFrame
  // not best approach when we don't know exact fps on devices
  const finalValue = 1;
  const msPerFrame = 1000 / 60; // 16.666666666666667ms
  const totalFrames = ms / msPerFrame;
  const incrementValuePerFrame = finalValue / totalFrames;
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
