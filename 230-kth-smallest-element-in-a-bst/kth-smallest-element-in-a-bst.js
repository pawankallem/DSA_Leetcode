/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans = [];
    const inOrder = (curr) => {
        curr.left && inOrder(curr.left);
        ans.push(curr.val);
        curr.right && inOrder(curr.right);
    }
    inOrder(root);

    return ans[k-1];
    
};