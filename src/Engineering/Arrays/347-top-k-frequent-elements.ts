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

  // build bucket sort for elements in the frequency map
  const priorityToNumsArr = new Array(nums.length);

  // priority = index = frequency - 1
  numToFreq.forEach((frequency, number) => {
    if (!priorityToNumsArr[frequency - 1]) {
      priorityToNumsArr[frequency - 1] = [number];
    } else {
      priorityToNumsArr[frequency - 1].push(number);
    }
  });

  // gather the results
  const topKFrequent = [];
  for (let d = priorityToNumsArr.length - 1; d >= 0 && k > 0; d--) {
    if (priorityToNumsArr[d] !== undefined) {
      // handle collisions
      topKFrequent.push(priorityToNumsArr[d].pop());
      // stay on the same index if array still not empty
      if (priorityToNumsArr[d].length > 0) d++;
      k--;
    }
  }

  return topKFrequent;
}
