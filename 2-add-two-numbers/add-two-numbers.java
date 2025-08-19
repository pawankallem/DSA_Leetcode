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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode ans = new ListNode();
        ListNode head = ans;
        int carry = 0;
        while(l1 != null || l2 != null || carry != 0) {
            int l1Val = 0;
            if(l1 != null) {
                l1Val = l1.val;
            }
            int l2Val = 0;
            if(l2 != null) {
                l2Val = l2.val;
            }
            int sum = l1Val + l2Val + carry;
            carry = sum / 10;
            sum %= 10;
            ListNode temp = new ListNode(sum);
            ans.next = temp;
            ans = ans.next;

            if(l1 != null) {
                l1 = l1.next;
            }
            if(l2 != null) {
                l2 = l2.next;
            }
        }
        return head.next;
    }
}