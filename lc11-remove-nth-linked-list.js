/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {  
  let harePointer = head
  for (let i=1; i < n; i++) {
    harePointer = harePointer.next
  }
  
  return getRemovedNth(head, harePointer)
};

const getRemovedNth = function (head, harePointer) {
  if (harePointer.next === null) {
    head = head.next
    return head
  }
  
  head.next = getRemovedNth(head.next, harePointer.next)
  
  return head
}
