// https://leetcode.com/problems/height-checker/
// Which elements are out of order compared to the positions if every person was ordered correctly?
// if we compare sorted = [1, 1, 1, 2, 3, 4] to the original input = [1, 1, 4, 2, 1, 3],
// we notice that sorted[i] == input[i] for i = 0, 1, 3 and hence
// the remaining elements in indexes 2, 4, 5 are out of place. So the answer is 3.

function heightChecker(heights: number[]) {
  const hCount = new Array(101);
  heights.forEach((h) => (hCount[h] > 0 ? hCount[h]++ : (hCount[h] = 1)));

  let wrong = 0;
  let correctIndex = 0;

  for (let i = 0; i < heights.length; i++) {
    while (!hCount[correctIndex]) {
      correctIndex++;
    }

    if (heights[i] !== correctIndex) {
      wrong++;
    }

    hCount[correctIndex]--;
  }

  return wrong;
}
