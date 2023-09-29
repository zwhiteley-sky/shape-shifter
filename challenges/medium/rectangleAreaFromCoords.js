/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords (points) {
  [A,B,C,D] = points;

  let xdiff = A.x - points.filter(x => A.x != x.x)[0].x;
  let ydiff = A.y - points.filter(x => A.y != x.y)[0].y;

  return Math.abs(xdiff * ydiff);
}

module.exports = rectangleAreaFromCoords
