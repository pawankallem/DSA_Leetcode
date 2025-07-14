/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let curr = head;
    let num = 0;
    while(curr != null) {
        num = num << 1 ;
        // console.log("before : ", num)
        num += curr.val;
        // console.log("num : ", num , curr.val);
        curr = curr.next;
    }

    return num;
};