// https://leetcode.com/problems/repeated-dna-sequences/submissions/
// Given a string "s" that represents a DNA sequence,
// return all the 10-letter-long sequences (substrings) that occur more than once.
// You may return the answer in any order.
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

function findRepeatedDnaSequences(s: string) {
  const seen = new Map();

  for (let i = 0, j = 10; j < s.length + 1; i++, j++) {
    const current = s.slice(i, j);
    seen.set(current, seen.has(current) ? seen.get(current) + 1 : 1);
  }

  const resultArray: string[] = [];
  seen.forEach((value, key) => value > 1 ? resultArray.push(key) : null);

  return resultArray;
}
