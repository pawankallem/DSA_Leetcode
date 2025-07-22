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
var rightSideView = function(root) {
    if( !root ) return [];
    let ans = [];
    let q = [root];

    while(q.length) {
        let len = q.length;
        let isPushed = false;
        for(let i = 0; i < len; i++) {
            let curr = q.shift();
            if( isPushed === false && curr ) {
                ans.push(curr.val);
                isPushed = true;
            }
            curr.right && q.push(curr.right); 
            curr.left && q.push(curr.left);
        }
    }

    return ans;
    
};