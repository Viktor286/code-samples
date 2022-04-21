// https://bigfrontend.dev/problem/implement-general-memoization-function
// implement a general memo() function, which caches the result once called
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...args) => args.join('_')) {
  const cache = new Map();

  return function(...args) {
    const cacheKey = resolver(...args);
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const value = func.apply(this, args);
    cache.set(cacheKey, value);
    return value;
  }
}
