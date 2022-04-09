// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/
// Given an integer array nums and an integer k, return
// the k most frequent elements.
// You may return the answer in any order.
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
function topKFrequent(nums: number[], k: number) {
  const fMap = new Map();

  // build frequency map
  for (let i = 0; i < nums.length; i++) {
    if (fMap.has(nums[i])) {
      fMap.set(nums[i], fMap.get(nums[i]) + 1);
    } else {
      fMap.set(nums[i], 1);
    }
  }

  // build bucket sort for elements in the frequency map
  const buckets = new Array(nums.length);

  fMap.forEach((frequency, number) => {
    if (!buckets[frequency - 1]) {
      buckets[frequency - 1] = [number];
    } else {
      buckets[frequency - 1].push(number);
    }
  });

  // gather the results
  const result = [];
  for (let d = buckets.length - 1; d >= 0 && k > 0; d--) {
    if (buckets[d] !== undefined) {
      // handle collisions
      result.push(buckets[d].pop());
      // stay on the same index if array still not empty
      if (buckets[d].length > 0) d++;
      k--;
    }
  }

  return result;
}
