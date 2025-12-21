/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        ListNode sentinal = new ListNode();
        ListNode tracker = sentinal;
        ListNode curr = head;;
        while(curr != null && curr.next != null) {
            ListNode temp = curr.next;
            curr.next = curr.next.next;
            temp.next = curr;
            curr = curr.next;
            tracker.next = temp;
            if(curr != null) {
                tracker = tracker.next.next;
            }
        }
        return sentinal.next;
    }
}