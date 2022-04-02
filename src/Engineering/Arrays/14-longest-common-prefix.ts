// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs: string[]) {
  const prefix = [];
  let maxWordLen = 0;

  for (let i=0; i < strs.length; i++) {
    if (strs[i].length > maxWordLen) maxWordLen = strs[i].length;
  }

  let j = 0;
  while(j < maxWordLen) { // O(maxWordLen * nOfStrs)
    prefix.push(strs[0][j]);

    for (let i=0; i < strs.length; i++) {
      if (strs[i][j] !== prefix[prefix.length-1]) {
        prefix.pop();
        return prefix.join('');
      }
    }

    j++;
  }

  return prefix.join('');
}
