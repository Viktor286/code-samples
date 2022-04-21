/**
 * Throttles the number of function executions
 *
 * @param {Function} fn - function to be executed
 * @param {number} ms - time limit
 */
function throttle(fn, ms) {
  let timeout, isThrottle = false;
  return function() {
    if (isThrottle) return;
    clearTimeout(timeout);
    fn.apply(this, arguments);
    isThrottle = true;
    timeout = setTimeout(() => isThrottle = false, ms);
  };
}

function _throttle(func, wait) {
  let waiting = false, lastArgs = null;
  return function(...args){
    if(!waiting){
      func.apply(this, args)
      waiting = true;
      let timeout = () => setTimeout(() => {
        waiting = false;
        if(lastArgs){
          func.apply(this, lastArgs);
          waiting = true;
          lastArgs = null;
          timeout();
        }
      }, wait);
      timeout();
    }
    else
      lastArgs = args
  }
}
