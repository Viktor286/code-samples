/**
 * @param {any} proto
 * @return {object}
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
function myObjectCreate(proto) {
  if (proto === null || typeof proto !== 'object') throw new TypeError();
  const o = {};
  Object.setPrototypeOf(o, proto);
  return o;
}

function _myObjectCreate(proto) {
  if (proto === null || proto === undefined || typeof proto !== 'object') throw Error;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function f() {}

  f.prototype = proto;
  return new f();
}
