/**
 * Uses the Shoelace Algorithm (https://vimeo.com/429687542) to find the area of a triangle given the coordinates of the three corners.
 * The triangle is not assumed to be a right-triangle. The points are given in an array, e.g.
 * [{ x: 3, y: 4}, { x: 4, y: 6 }, { x: 7, y: 1 }]
 * @param {{ x: number, y: number }[]} points - The three vertices of the triangle
 * @returns 
 */

function triangleAreaFromCoords (points) {
  let area = 0;

  for (let i = 0; i < points.length; ++i) {
    let current = points[i];
    let next = points[(i + 1) % points.length];

    area += (current.y + next.y) * (current.x - next.x);
  }

  return area / 2;
}

module.exports = triangleAreaFromCoords
