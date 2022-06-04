/* global shallowEqual */

let prevCallback = null;
let prevDeps = null;

function useCallback(callback, deps) {
  if (!prevCallback || !prevDeps) {
    prevCallback = callback;
    prevDeps = deps;
    return callback;
  }

  if (shallowEqual(deps, prevDeps)) {
    return prevCallback;
  }

  prevCallback = callback;
  prevDeps = deps;

  return callback;
}
