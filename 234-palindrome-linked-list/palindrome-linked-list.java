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
    public boolean isPalindrome(ListNode head) {
        if( head == null || head.next == null ) return true;
        ListNode s = head;
        ListNode f = head;
        ListNode sentinal = null;
        while( f != null && f.next != null ) {
            f = f.next.next;
            ListNode temp = s.next;
            s.next = sentinal;
            sentinal = s;
            s = temp;
            if( f != null && f.next == null ) {
                s = s.next;
            }
        }
        while( s != null ) {
            if( sentinal.val != s.val ) return false;
            sentinal = sentinal.next;
            s = s.next;
        }
        return true;
    }
}