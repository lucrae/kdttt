/**
 * Calculates coordinates from index in hypercube.
 * @param {number} i Index
 * @param {number} n Number of dimensions
 * @param {number} m Size of each dimension
 * @returns {Array} Coordinates [x, y, z, ...]
 */
const indexToCoords = (i, n, m) => {
  let coords = [];

  for (let j = n - 1; j >= 0; j--) {
    const unit = m**j;
    coords.push(Math.floor(i / unit));
    i = i % unit;
  }

  return coords.reverse();
}

/**
 * Calculates index from coords in hypercube.
 * @param {Array} coords Coordinates [x, y, z, ...]
 * @param {number} n Number of dimensions
 * @param {number} m Size of each dimension
 * @returns {number} Index 
 */
const coordsToIndex = (coords, n, m) => {
  let i = 0;
}

/**
 * Formats an array into a string in tuple form
 * @param {Array} 1D array 
 * @returns {string} Formatted string (x, y, z, ...)
 */
const arrayToTupleString = (a) => {
  let s = '('
  for (let i = 0; i < a.length - 1; i++) {
    s += `${a[i]}, `;
  }
  s += `${a[a.length - 1]})`

  return s;
}


export { indexToCoords, arrayToTupleString };