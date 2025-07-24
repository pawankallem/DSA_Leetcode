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
var isValidBST = function (root) {

    const traversal = (curr, low, high) => {
        if (!curr) return true;

        return ( (low == null || low < curr.val) && (high == null || curr.val < high) && traversal(curr.left, low, curr.val) && traversal(curr.right, curr.val, high) );
    };

    let ans = traversal(root, null, null);
    return ans;
};