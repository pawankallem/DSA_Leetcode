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
 * @return {boolean}
 */
var isBalanced = function (root) {

    let ans = true;
    const rec = (curr) => {
        if (!curr) return 0;
        let left = rec(curr.left);
        let right = rec(curr.right);
        if (Math.abs(left - right) > 1) ans = false;
        return 1 + Math.max(left, right)
    }
    rec(root);
    return ans;
};
