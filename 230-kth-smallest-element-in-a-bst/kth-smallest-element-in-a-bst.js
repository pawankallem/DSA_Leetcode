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
    let ans = null;
    let count = 0;

    const inOrder = (curr) => {
        curr.left && inOrder(curr.left);
        if(ans === null && ( count + 1) === k) {
            ans = curr.val;
        }
        ++count;
        if( count < k && curr.right ) {
            inOrder(curr.right);
        }
    }
    inOrder(root);

    return ans;    
};