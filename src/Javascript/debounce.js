/**
 * @param {Function} fn
 * @param {number} ms
 * @return {Function}
 */
function debounce(fn, ms) {
  let timeout;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      fn.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
  };
}
