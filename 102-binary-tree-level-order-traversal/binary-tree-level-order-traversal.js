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
    let rec = (arr) => {
        if(arr.length <= 0) return [];
        let newArr = [];
        let vals = [];
        while(arr.length) {
            vals.push(arr[0].val);
            arr[0].left && newArr.push(arr[0].left);
            arr[0].right && newArr.push(arr[0].right);
            arr.shift();
        }
        let temp = rec(newArr);
        return [vals,...temp];
    }

    let ans = rec([root]);
    return ans;
};