const trianglePerimeter = require('../easy/trianglePerimeter')

/**
 * Uses Heron's formula (https://en.wikipedia.org/wiki/Heron%27s_formula) to give the area of a triangle
 * with sides a,b,c. The triangle isn't assumed to be a right-triangle.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} the area
*/

function triangleAreaFromSides (a, b, c) {
  let s = (a + b + c) / 2;
  let area_squared = s * (s - a) * (s - b) * (s - c);
  return Math.sqrt(area_squared);

  // Works, just with rounding error
  //let angle_cos = (b * b + c * c - a * a) / (2 * b * c);
  //let angle_sin = Math.sqrt(1 - angle_cos * angle_cos);
  //return (b * c * angle_sin) / 2;
}

module.exports = triangleAreaFromSides
