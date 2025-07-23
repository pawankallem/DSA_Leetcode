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
        let leftSum = travarse(curr.left);
        let rightSum = travarse(curr.right);

        let total = curr.val + leftSum + rightSum;
        if (max < curr.val) max = curr.val;
        if (max < total) max = total;
        if (max < total - leftSum) max = total - leftSum;
        if (max < total - rightSum) max = total - rightSum;

        let diff = Math.max(leftSum, rightSum);
        return curr.val + (diff < 0 ? 0 : diff);
    }
    let sum = travarse(root);
    if (max < sum) max = sum;

    return max;
};