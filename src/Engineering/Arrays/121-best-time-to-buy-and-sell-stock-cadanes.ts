// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
// Return the maximum profit you can achieve from single buy transaction
// given array of day prices.

function maxProfitCadanes(prices: number[]) {
  // d1, d2, array indexes are days and dayBuy < daySell
  // Two pointers, Min(d1) < Max(d2)
  // profit is prices[daySell] - prices[dayBuy]
  // day sequence could be represented as sequence of profits:
  // [p[i]-p[i-1], ...]
  // Then the we could search the max sum of sequence (subarray of profits)
  // Cadane's algorithm can accumulate subarray sum
  // and keep the maximum result:
  // MaxSum(i) = Max(MaxSum(i-1) + arr[i], 0)]
  let current = 0;
  let prev = 0;
  let max = 0;
  for(let i = 1; i < prices.length; i++) {
    current = Math.max(prev + (prices[i] - prices[i-1]), 0);
    max = Math.max(max, current);
    prev = current;
  }

  return max;
}
