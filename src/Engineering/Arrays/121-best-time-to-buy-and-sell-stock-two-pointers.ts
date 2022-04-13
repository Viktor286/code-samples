// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
// Return the maximum profit you can achieve from single buy transaction
// given array of day prices.

function maxProfit(prices: number[]) {
  // d1, d2, array indexes are days and dayBuy < daySell
  // Two pointers, Min(d1) < Max(d2)
  // profit is prices[daySell] - prices[dayBuy]
  let l = 0;
  let maxProfit = 0;

  for (let r = 1; r < prices.length; r++) {
    if (prices[l] < prices[r]) {
      maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
    } else {
      l = r;
    }
  }

  return maxProfit;
}
