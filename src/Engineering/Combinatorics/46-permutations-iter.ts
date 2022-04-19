// 46. Permutations
// https://leetcode.com/problems/permutations/
// Given an array nums of distinct integers,
// return all the possible permutations.
// You can return the answer in any order.

// BFS approach
// grow array "permutation" iteratively on each node going BFS
// reduce array "origin" on the same iterative step

class Combination {
  constructor(public permutation: number[], public origin: number[]) {}
}

function permute(nums: number[]) {
  const queue = [new Combination([], nums)];
  const collection = [];
  const len = nums.length;

  while (queue.length !== 0) {
    const { permutation, origin } = queue.shift();

    if (permutation.length === len) {
      collection.push(permutation);
      continue;
    }

    origin.forEach((number, i) => {
      const reducedOrigin = [...origin];
      reducedOrigin.splice(i, 1);
      queue.push(new Combination([...permutation, number], reducedOrigin));
    });
  }
  return collection;
}
