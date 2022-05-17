// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Find and return the maximum profit you can achieve.
// You can only hold at most one share of the stock at any time.
// (No shorts playing)

const maxProfit2 = (p: number[]) => p.reduce((a, e, i) => (e < p[i + 1] ? (a += p[i + 1] - e) : a), 0);
