/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a1 = headA;
        ListNode a2 = headB;
        while(a1 != null && a2 != null ) {
            if(a1 == a2) {
                return a1;
            }
            a1 = a1.next;
            a2 = a2.next;
            if(a1 == a2 ) {
                return a1;
            }
            if(a1 == null) {
                a1 = headB;
            }
            if(a2 == null) {
                a2 = headA;
            }
        }
        return null;
    }
}