/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let p1 = headA;
    let p2 = headB;

    while(p1 != null && p2 != null) {
        if(p1 == p2) return p1;
        if(p1.next == null && p2.next == null) break;
        p1 = p1.next == null ? headB : p1.next;
        p2 = p2.next == null ? headA : p2.next;
    }

    return null;

};