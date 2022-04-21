/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (proto === null || proto === undefined || typeof proto !== 'object') throw Error;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function f() {}

  f.prototype = proto;
  return new f();
}
