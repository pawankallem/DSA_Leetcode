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
    public ListNode rotateRight(ListNode head, int k) {
        if(k <= 0 || head == null || head.next == null) {
            return head;
        }
        ListNode prev = head;
        ListNode curr = head;
        int count = 0;
        ListNode temp = head;
        while(temp != null) {
            count++;
            temp = temp.next;
        }
        int n = k % count;

        for(int i = 0; i < n; i++) {
            curr = curr.next;
        }
        if(curr == prev) {
            return head;
        }

        while(curr != null && curr.next != null) {
            prev = prev.next;
            curr = curr.next;
        }

        curr.next = head;
        head = prev.next;
        prev.next = null;
        return head;        
    }
}