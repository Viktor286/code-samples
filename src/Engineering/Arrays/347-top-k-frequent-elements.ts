// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/
// Given an integer array nums and an integer k, return
// the k most frequent elements.
// You may return the answer in any order.
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
function topKFrequent(nums: number[], k: number) {
  const numToFreq = new Map();

  // build frequency map
  for (let i = 0; i < nums.length; i++) {
    if (numToFreq.has(nums[i])) {
      numToFreq.set(nums[i], numToFreq.get(nums[i]) + 1);
    } else {
      numToFreq.set(nums[i], 1);
    }
  }

  // build an ordered storage like "bucket sort",
  // where the "key" will be: priority = frequency - 1 = index
  // and the "value" will be the "number element" itself.
  // Lets call the key of the map "PFI" as a reminder that
  // key represents Priority, Frequency and Index at the same time.
  const pfiToNum = new Array(nums.length);
  numToFreq.forEach((frequency, number) => {
    if (!pfiToNum[frequency - 1]) {
      pfiToNum[frequency - 1] = [number];
    } else {
      pfiToNum[frequency - 1].push(number);
    }
  });

  // gather the results from the end of the array
  const topKFrequent = [];
  for (let d = pfiToNum.length - 1; d >= 0 && k > 0; d--) {
    if (pfiToNum[d] !== undefined) {
      // handle collisions
      topKFrequent.push(pfiToNum[d].pop());
      // stay on the same index if array still not empty
      if (pfiToNum[d].length > 0) d++;
      k--;
    }
  }

  return topKFrequent;
}
