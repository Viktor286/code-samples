// 986. Interval List Intersections
// https://leetcode.com/problems/interval-list-intersections/
// You are given two lists of closed intervals,
// Return the intersection of these two interval lists.

function intervalIntersection(firstList: Array<number[]>, secondList: Array<number[]>) {
  let i = 0;
  let j = 0;

  const intersections = [];

  while (i < firstList.length && j < secondList.length) {
    const a = firstList[i];
    const b = secondList[j];

    if (a[0] <= b[1] && b[0] <= a[1]) {
      intersections.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
    }

    a[1] < b[1] ? i++ : j++;
  }

  return intersections;
}
