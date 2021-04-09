/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

function getMatrixElementsSum(matrix) {
  let sum = sumArray(matrix[0]);
  for (let x = 1; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if ((matrix[x][y] > 0) && (matrix[x - 1][y] > 0)) {
        sum += matrix[x][y];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
