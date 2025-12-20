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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode store = new ListNode();
        ListNode sentinal = store;
        ListNode curr = list1;
        while(curr != null && list2 != null) {
            if(curr != null && curr.val <= list2.val) {
                sentinal.next = curr;
                curr = curr.next;
                sentinal = sentinal.next;
            } else {
                sentinal.next = list2;
                list2 = list2.next;
                sentinal = sentinal.next;
            }
        }
        if(curr != null) {
            sentinal.next = curr;
        }
        if(list2 != null) {
            sentinal.next = list2;
        }
        return store.next;
    }
}