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
    let q = [root];
    let levelNum = 0;
    while(q.length) {
        let levelArr = [];
        let levelLen = q.length;
        for(let i = 0; i < levelLen; i++) {
            let curr = q.shift();
            if(levelNum % 2 == 0) {
                levelArr.push(curr.val);
            }else {
                levelArr.unshift(curr.val);
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        levelNum++;
        ans.push(levelArr);
    }
    return ans;
};