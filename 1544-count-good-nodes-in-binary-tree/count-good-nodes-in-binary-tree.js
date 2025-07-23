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
var goodNodes = function(root) {
    let count = 0;

    const travarse = (curr, max) => {
        if( curr.val >= max) count++;
        max = Math.max(curr.val, max);
        curr.left && travarse(curr.left, max);
        curr.right && travarse(curr.right, max);
    }
    travarse(root, root.val);

    return count;
};