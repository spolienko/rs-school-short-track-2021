/* eslint-disable valid-typeof */
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function checkerBoom(matrix) {
  const array = matrix.flat();
  if (array.includes(true)) {
    return true;
  } return false;
}

function matrixWithoutBoom(martix) {
  const m = martix;
  for (let i = 0; i < m.length; i++) {
    for (let y = 0; y < m[i].length; y++) {
      m[i][y] = 0;
    }
  }
  return m;
}

function minesweeper(matrix) {
  const result = matrix;
  if (checkerBoom(matrix) === false) {
    return matrixWithoutBoom(matrix);
  }
  for (let x = 0; x < result.length; x++) {
    for (let y = 0; y < result[x].length; y++) {
      let count = 1;
      if (result[x][y] === true) {
        count = 1;
      }
      if (((x + 1) < result.length) && (y < result[x].length) && (result[x + 1][y] === true)) {
        count++;
      }
      if (((x - 1) > 0) && (y < result[x].length) && (result[x - 1][y] === true)) {
        count++;
      }
      if ((x < result.length) && ((y + 1) < result[x].length) && result[x][y + 1] === true) {
        count++;
      }
      if ((x < result.length) && ((y - 1) > 0) && result[x][y - 1] === true) {
        count++;
      }
      result[x][y] = count;
    }
  }
  return result;
}

module.exports = minesweeper;
