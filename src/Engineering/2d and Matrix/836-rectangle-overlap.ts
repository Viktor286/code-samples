// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/
// Given two axis-aligned rectangles rec1 and rec2,
// return true if they overlap, otherwise return false.
// Two rectangles overlap if the area of their intersection is positive. To be clear,
// two rectangles that only touch at the corner or edges do not overlap.
// return true if they overlap, otherwise return false.

function isRectangleOverlap(rec1: number[], rec2: number[]) {
  const [lbx, lby, rtx, rty] = rec1;
  const [_lbx, _lby, _rtx, _rty] = rec2;

  //exclude if rectangle is actually a line
  if (lbx === rtx || lby === rty || _lbx === _rtx || _lby === _rty) {
    return false;
  }

  // a.1 detect intersection by point A in the range of B side boundaries. For each side, A to B and B to A.
  // a.2 detect non-intersection by rightmost point A less than leftmost point B, top A greater than bottom B and so on.

  if (rtx <= _lbx || rty <= _lby || lbx >= _rtx || lby >= _rty) {
    return false;
  }

  return true;
  // find out is intersection positive:
  // min point x-right > max point x-left
  // min point y-top > max point y-bottom
  // Math.min(rtx, _rtx) > Math.max(lbx, _lbx) && // width > 0
  // Math.min(rty, _rty) > Math.max(lby, _lby));  // height > 0
}
