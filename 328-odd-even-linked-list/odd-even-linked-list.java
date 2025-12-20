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
    public ListNode oddEvenList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode curr = head;
        ListNode sentinal = new ListNode();
        ListNode even = sentinal;
        while(curr!= null && curr.next != null) {
            ListNode temp = curr.next;
            curr.next = curr.next.next;
            even.next = temp;
            if(curr.next != null) {
                curr = curr.next;
            }
            if(even.next != null) {
                even = even.next;
            }
        }
        even.next = null;
        curr.next = sentinal.next;
        return head;        
    }
}