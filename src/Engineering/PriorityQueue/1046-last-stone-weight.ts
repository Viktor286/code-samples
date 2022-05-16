// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/
// Return the smallest stone in the game of stones

// The solid approach here is to use priority queue (based on binary heap).
// But we also may use something like insertInAscSortedArr(),
// which is O(n) worst than O(logN) of binary heap but still might be useful.

const lastStoneWeight = function (stones: number[]) {
  const sortedStones = stones.sort((a, b) => a - b);
  while (sortedStones.length > 1) {
    const s1 = sortedStones.pop();
    const s2 = sortedStones.pop();
    if (s1 === s2) {
      continue;
    } else {
      insertInAscSortedArr(sortedStones, s1 - s2);
    }
  }

  return sortedStones[0] ? sortedStones[0] : 0;
};

function insertInAscSortedArr(arr: number[], insertNum: number) {
  if (!Array.isArray(arr) || typeof insertNum !== 'number') {
    return arr;
  }

  let inserted = false;
  for (let d = arr.length - 1; d >= 0; d--) {
    if (arr[d] < insertNum) {
      arr.splice(d + 1, 0, insertNum);
      inserted = true;
      break;
    }
  }

  if (!inserted) arr.unshift(insertNum);

  return arr;
}
