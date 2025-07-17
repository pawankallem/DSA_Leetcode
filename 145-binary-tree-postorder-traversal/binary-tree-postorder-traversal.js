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
    let s1 = [];
    let curr = root;
    let lastVisited = null;
    let ans = [];

    while(curr || s1.length > 0 ) {
        while(curr) {
            s1.push(curr);
            curr = curr.left;
        }
        curr = s1[s1.length - 1];
        console.log(curr.val, ans);
        if(curr.right != null && lastVisited != curr.right) {
            console.log("here 1")
            curr = curr.right;
        }else {
            ans.push(curr.val);
            lastVisited = s1.pop();
            curr = null;
            console.log("here 2 : ",curr,lastVisited)
        }
    }
    return ans;
};