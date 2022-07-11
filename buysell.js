let maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let high = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[l] > prices[r]) {
      l = r;
    }
    if (prices[l] < prices[r]) {
      if (prices[r] - prices[l] > high) {
        high = prices[r] - prices[l];
      }
    }
    r++;
  }
  return high;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 3, 2, 1, 5];
const arr3 = [7, 6, 5, 4, 3, 2, 1];
const arr4 = [7, 1, 5, 3, 6, 4];
const arr5 = [4, 2, 1, 7];

console.log(maxProfit(arr1)); //desired output: 4
console.log(maxProfit(arr2)); //desired output: 4
console.log(maxProfit(arr3)); //desired output: 0
console.log(maxProfit(arr4)); //desired output: 5

// for leetcode challenge 'best time to buy stocks
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/