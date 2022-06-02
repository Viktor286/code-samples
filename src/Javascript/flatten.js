/**
 * @param {any[]} arr
 */
const test = [1, 2, [3, 4, [5, 6], 7, 8], 9];

function flatten(arr) {
  return arr.reduce((acc, next) => {
    if (Array.isArray(next)) return acc.concat(flatten(next));
    else return acc.concat(next);
  }, []);
}

function flattenSimple(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result = result.concat(flatten(arr[i]));
    }
  }

  return result;
}

console.log(JSON.stringify(flatten(test)) === "[1,2,3,4,5,6,7,8,9]");
