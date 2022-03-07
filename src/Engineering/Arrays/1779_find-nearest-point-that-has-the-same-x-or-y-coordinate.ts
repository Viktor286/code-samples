// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
// A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
// Return the index of the valid point with the smallest Manhattan distance from your current location.
// If there are no valid points, return -1.
// taxicab: abs(x1 - x2) + abs(y1 - y2)

function nearestValidPoint(x: number, y: number, points: Array<number[]>) {
  let smallestIndex = [-1, Infinity]; // [index, taxicab distance]

  for(let i=0; i < points.length; i++) {
    if (x === points[i][0] || y === points[i][1]) {
      const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (distance === 0) {
        return i;
      }

      if (distance < smallestIndex[1]) {
        smallestIndex = [i, distance];
      }
    }
  }

  return smallestIndex[0];
}
