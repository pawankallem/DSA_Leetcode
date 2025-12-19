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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow = head;
        ListNode fast = head;
        int count = 0;
        while(fast != null && fast.next != null) {
            count++;
            fast = fast.next.next;
            slow = slow.next;
        }
        if(fast == null) { 
            count = count * 2;
        }else {
            count = (count * 2) + 1;
        }
        count = count - n;
        ListNode sentinal = new ListNode();
        sentinal.next = head;
        slow = sentinal;
        while(count >= 1) {
            count--;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        
        return sentinal.next;        
    }
}