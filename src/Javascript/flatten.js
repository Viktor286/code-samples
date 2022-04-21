/**
 * @param {any[]} arr
 */
function flatten(arr) {
  return arr.reduce((acc, next) => {
    if (Array.isArray(next)) return acc.concat(flatten(next));
    else return acc.concat(next);
  }, []);
}

const test = [1, 2, [3, 4, [5, 6], 7, 8], 9];
console.log(flatten(test)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
