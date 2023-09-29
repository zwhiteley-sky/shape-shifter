/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords (points) {
  [A,B,C,D] = points;

  let xdiff = A.x - points.find(x => A.x != x.x).x;
  let ydiff = A.y - points.find(x => A.y != x.y).y;

  return Math.abs(xdiff * ydiff);
}

module.exports = rectangleAreaFromCoords
