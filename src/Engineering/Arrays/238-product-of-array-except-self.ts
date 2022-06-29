// 238. Product of Array Except Self
// Given an integer array nums, return an array answer
// such that answer[i] is equal to the product
// of all the elements of nums except nums[i].

function productExceptSelf(nums: number[]) {
  const products = [1];

  let prefix = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix *= nums[i - 1];
    products[i] = prefix;
  }

  let postfix = 1;
  for (let d = nums.length - 2; d >= 0; d--) {
    postfix *= nums[d + 1];
    products[d] = products[d] * postfix;
  }

  return products;
}
