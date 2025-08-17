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
        int count = 0;
        ListNode sentinalNode = new ListNode();
        sentinalNode.next = head;
        ListNode first = sentinalNode;
        ListNode second = sentinalNode;
        while(first != null && first.next != null) {
            count++;
            if(count <= n) {
                first = first.next;
            }else {
                second = second.next;
                first = first.next;
            }
        }
        second.next = second.next.next;
        return sentinalNode.next; 
    }
}