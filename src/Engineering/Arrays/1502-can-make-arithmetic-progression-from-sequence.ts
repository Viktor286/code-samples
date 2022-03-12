// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// A sequence of numbers is called an arithmetic progression
// if the difference between any two consecutive elements is the same.
// Given an array of numbers arr, return true if the array can be
// rearranged to form an arithmetic progression. Otherwise, return false.

function canMakeArithmeticProgression(arr: number[]) {
  if (arr.length <= 2) {
    return true;
  }

  let max = -Infinity;
  let min = Infinity;
  const seen = new Map();

  for (let i=0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
    seen.set(arr[i], true)
  }

  const step = (max - min) / (arr.length-1);
  let n = min;
  for(let i=0; i < arr.length-1; i++){
    if(!seen.has(n + step)) {
      return false;
    }
    n += step;
  }

  return true;
}

function canMakeArithmeticProgressionTwo(arr: number[]) {
    const sorted = arr.sort((a,b) => a-b);
    for (let i=0; i < arr.length - 2; i++) {
        if (arr[i+1] - arr[i] != arr[i+2] - arr[i+1]) {
            return false;
        }
    }
    return true;
}
