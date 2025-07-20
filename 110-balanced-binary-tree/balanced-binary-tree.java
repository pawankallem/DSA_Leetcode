/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    boolean ans = true;
    public boolean isBalanced(TreeNode root) {
        rec(root);
        return ans;
    }
    public int rec( TreeNode curr) {
        if( curr == null ) return 0;
        int left = rec(curr.left);
        int right = rec(curr.right);

        if( Math.abs(left - right) > 1) {
            ans = false;
        }
        return 1 + Math.max(left, right);
    }
}