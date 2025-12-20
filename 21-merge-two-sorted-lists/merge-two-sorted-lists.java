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
            while(curr != null && curr.val <= list2.val) {
                sentinal.next = curr;
                curr = curr.next;
                sentinal = sentinal.next;
            }
            while(list2 != null && curr != null && list2.val < curr.val) {
                sentinal.next = list2;
                list2 = list2.next;
                sentinal = sentinal.next;
            }
        }
        while(curr != null) {
            sentinal.next = curr;
            curr = curr.next;
            sentinal = sentinal.next;
        }
        while(list2 != null) {
            sentinal.next = list2;
            list2 = list2.next;
            sentinal = sentinal.next;
        }
        return store.next;
    }
}