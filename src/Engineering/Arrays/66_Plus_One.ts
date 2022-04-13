// You are given a large integer represented as an integer array digits.
// Increment the integer by one and return the resulting array of digits.
// [4,3,2,1] -> [4,3,2,2]

const plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];
};
