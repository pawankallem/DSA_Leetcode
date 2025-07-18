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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let arr = [];
    const travarsel = (curr, level) => {
        if(!curr) return;
        if(!arr[level]) arr[level] = [];
        arr[level].push(curr.val);
        travarsel(curr.left, level+1);
        travarsel(curr.right, level+1);
        return;
    }

    travarsel( root , 0);

    return arr;
};