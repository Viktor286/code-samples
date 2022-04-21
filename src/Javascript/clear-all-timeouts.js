// Implement a function which allows you to clean all timeouts
const clearAllTimeout = (function() {
  let callbacks = [];
  const oldTimeout = window.setTimeout;
  window.setTimeout = (fn, time) => {
    const id = oldTimeout(fn, time);
    callbacks.push(id);
    return id;
  };
  window.clearAllTimeout = () => {
    for (const id of callbacks) {
      clearTimeout(id);
    }
    callbacks = [];
  };
  return window.clearAllTimeout;
})();
