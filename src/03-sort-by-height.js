/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function searchMinusOne(array) {
  const arrayMinusOne = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      arrayMinusOne.push(i);
    }
  }
  return arrayMinusOne;
}

function sortNum(a, b) {
  return a - b;
}

function addMinusOne(array, indexArray) {
  array.sort(sortNum);
  for (let i = 0; i < indexArray.length; i++) {
    array.splice(indexArray[i], 0, -1);
  }
}

function removeMinusOne(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      array.splice(i, 1);
      i--;
    }
  }
}

function sortByHeight(arr) {
  const array = arr;
  const arrayMinusOne = searchMinusOne(array);
  removeMinusOne(array, -1);
  addMinusOne(array, arrayMinusOne);
  return array;
}

module.exports = sortByHeight;
