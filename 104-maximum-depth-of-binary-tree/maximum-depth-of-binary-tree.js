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
var maxDepth = function(root) {
    if(!root) return 0;
    let q = [root];
    let max = 0;

    while(q.length) {
        ++max;
        let levelSize = q.length;
        for(let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
    }
    return max;
};