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
var maxPathSum = function (root) {
    if (!root) return 0;
    let max = root.val;

    const travarse = (curr) => {
        if (!curr) return 0;
        let leftSum = Math.max(0, travarse(curr.left));
        let rightSum = Math.max(0, travarse(curr.right));

        let total = curr.val + leftSum + rightSum;
        if (max < total) max = total;
        return curr.val + Math.max(leftSum, rightSum);
    }
    let sum = travarse(root);
    // if (max < sum) max = sum;

    return max;
};