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
    let queue = [[root]];
    let ans = [];
    while(queue.length) {
        let curr = queue.shift();
        let temp = [];
        let arr = [];
        while(curr.length) {
            temp.push(curr[0].val);
            curr[0].left && arr.push(curr[0].left);
            curr[0].right && arr.push(curr[0].right);
            curr.shift();
        }
        ans.push(temp);
        if(arr.length > 0) queue.push(arr);
    }
    return ans;
};