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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let ans = [];
    
    const rec = (curr, level) => {
        if( !ans[level] ) ans[level] = [];
        if(level % 2 == 0) {
            ans[level].push(curr.val);
        }else {
            ans[level].unshift(curr.val);
        }
        curr.left && rec(curr.left, level + 1);
        curr.right && rec(curr.right, level + 1);
    }

    rec( root, 0);
    return ans;
};