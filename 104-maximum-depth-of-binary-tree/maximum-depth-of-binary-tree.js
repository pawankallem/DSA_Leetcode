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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;

    let leftCount = root.left && maxDepth(root.left) || 0;
    let rightCount = root.right && maxDepth(root.right) || 0;

    return 1 + Math.max(leftCount, rightCount);
};