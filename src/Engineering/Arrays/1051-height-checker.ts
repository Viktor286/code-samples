// https://leetcode.com/problems/height-checker/
// Which elements are out of order compared to the positions if every person was ordered correctly?
// if we compare sorted = [1, 1, 1, 2, 3, 4] to the original input = [1, 1, 4, 2, 1, 3],
// we notice that sorted[i] == input[i] for i = 0, 1, 3 and hence
// the remaining elements in indexes 2, 4, 5 are out of place. So the answer is 3.

function heightChecker(heights: number[]) {
  const heightToFreq = new Array(101);
  heights.forEach((h) => (heightToFreq[h] > 0 ? heightToFreq[h]++ : (heightToFreq[h] = 1)));

  let wrong = 0;
  let curHeight = 0;

  for (let i = 0; i < heights.length; i++) {
    while (heightToFreq[curHeight] < 1) {
      // go to next viable bucket count
      curHeight++;
    }

    if (heights[i] !== curHeight) wrong++;
    heightToFreq[curHeight]--; // bucket count decrement
  }

  return wrong;
}
