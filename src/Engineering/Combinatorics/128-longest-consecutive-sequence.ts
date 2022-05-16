// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// BF optimized with memo and sequence limitation
function longestConsecutive(nums: number[]) {
  const set = new Set();
  nums.forEach((e) => set.add(e));

  let longestStreak = 0;

  for (let n = 0; n < nums.length; n++) {
    // We start only if current number is the starter of a new sequence,
    // the same as: current number isn't a part of another longer sequence
    if (set.has(nums[n] - 1)) {
      continue;
    }

    let currentNum = nums[n];
    let currentStreak = 1;

    while (set.has(currentNum + 1)) {
      currentStreak++;
      currentNum++;
    }

    longestStreak = Math.max(currentStreak, longestStreak);
  }

  return longestStreak;
}
