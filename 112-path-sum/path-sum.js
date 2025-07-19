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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let isFound = false;
    const travarse = (curr, sum) => {
        if(!curr.left && !curr.right) {
            if(isFound === false) isFound = sum + curr.val == targetSum;
            console.log(curr, sum, isFound, sum+curr.val);
        }
        curr.left && travarse(curr.left, sum + curr.val)
        curr.right && travarse(curr.right, sum + curr.val);
    }

    travarse(root, 0);
    return isFound;
};