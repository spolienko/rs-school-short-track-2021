/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// function findAndChange(names, filename) {
//   let count = 0;
//   const array = names;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === filename) {
//       count++;
//       if (count > 1) {
//         array[i] += `(${count - 1})`;
//       }
//     }
//   }
//   return array;
// }

// function renameFiles(names) {
//   throw new Error('Not implemented');
//   let result = [];
//   for (let i = 0; i < names.length; i++) {
//     result = findAndChange(names, names[i]);
//   }
//   return result;
// }

function renameFiles(/* names */) {
  throw new Error('Not implemented');
}

module.exports = renameFiles;
