// You are given a large integer represented as an integer array digits.
// Increment the integer by one and return the resulting array of digits.
// [4,3,2,1] -> [4,3,2,2]

function plusOne(digits: number[]): number[] {
  for (let d = digits.length - 1; d >= 0; d--) {
    if (digits[d] < 9) {
      digits[d]++;
      return digits;
    }

    digits[d] = 0;
  }
  // here we have invariant: zero will be always first,
  // so just add leading 1
  return [1, ...digits]; // alt: digits.unshift(1);
}
