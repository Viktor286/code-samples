/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (proto === null || proto === undefined || typeof proto !== "object")
    throw Error;

  function f() {
  }

  f.prototype = proto;
  return new f();
}
