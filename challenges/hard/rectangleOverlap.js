/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 * 
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 * 
 */

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */
function rectangleOverlap (rectangle1, rectangle2) {
  let [left1, ,, right1] = rectangle1.map(x => x.x).sort();
  let [bottom1, ,, top1] = rectangle1.map(x => x.y).sort();
  let [left2, ,, right2] = rectangle2.map(x => x.x).sort();
  let [bottom2, ,, top2] = rectangle2.map(x => x.y).sort();

  let xdiff = Math.min(right1, right2) - Math.max(left1, left2);
  let ydiff = Math.min(top1, top2) - Math.max(bottom1, bottom2);

  if (xdiff < 0) { return 0; }
  if (ydiff < 0) { return 0; }

  return xdiff * ydiff;
}

module.exports = rectangleOverlap
