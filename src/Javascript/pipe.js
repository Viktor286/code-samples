// Suppose we have some simple functions like this
const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

pipe([times(2), plus(3), times(4)]);
// (x * 2 + 3) * 4

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((prev, curr) => curr.call(this, prev), arg);
  };
}

const _pipe = (fns) => (x) => fns.reduce((y, fn) => fn(y), x);
