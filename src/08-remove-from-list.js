/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// function removeKFromList(l, k) {
//   const list = l;
//   let current = null;
//   while (list.head && list.head.value === k) {
//     list.head = list.head.next;
//   }
//   current = list.head;
//   if (current !== null) {
//     while (current.next !== null) {
//       if (current.next.value === k) {
//         current.next.value = current.next.next.value;
//       } else { current = current.next; }
//     }
//   }
//   if ((current.next === null) {

//   }
// }

function removeKFromList(l, k) {
  let head = l;
  let current = l;
  if (head.value === k) {
    head = head.next;
    current = head;
  }
  while (head.next !== null) {
    if (head.next.value === k) {
      head.next = head.next.next;
    }
    head = head.next;
  }
  return current;
}

module.exports = removeKFromList;
