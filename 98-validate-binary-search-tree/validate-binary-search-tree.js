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
var isValidBST = function(root) {
    let ans = [];

    const inOrderTraversal = ( curr ) => {
        curr.left && inOrderTraversal(curr.left);
        ans.push(curr.val);
        curr.right && inOrderTraversal(curr.right);
    }

    inOrderTraversal(root);
    let isSorted = true;
    for(let i = 0; i < ans.length - 1; i++) {
        if( ans[i] >= ans[i + 1] ) {
            isSorted = false;
            break;
        }
    }

    return isSorted;
};