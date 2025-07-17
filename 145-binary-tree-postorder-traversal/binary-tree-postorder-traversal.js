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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return [];
    let s1 = [root];
    let s2 = [];

    while(s1.length > 0) {
        let curr = s1.pop();
        s2.push(curr.val);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    return s2.reverse();
};