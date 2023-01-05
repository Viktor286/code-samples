// memoize with accessible cache

function memoize(fn) {
  function memoFn(...args) {
    const key = JSON.stringify(args);
    if (memoFn.cache[key]) {
      console.log('FROM CACHE');
      return memoFn.cache[key];
    }
    console.log('FRESH COMPUTE');
    memoFn.cache[key] = fn(...args);
    return memoFn.cache[key];
  }

  memoFn.cache = Object.create(null);
  return memoFn;
}
