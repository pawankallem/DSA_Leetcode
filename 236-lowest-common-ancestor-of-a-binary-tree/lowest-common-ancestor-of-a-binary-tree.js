/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;

    const traverse = (curr) => {
        if(!curr) return 0;
        let count = 0;
        let left = traverse(curr.left);
        let right = traverse(curr.right);
        if(curr == p || curr == q) {
            count++;
        }
        count += left + right;
        if(count == 2) {
            // console.log(count, curr.val, p, q)
            ans = curr;
            count = 0;
        }
        return count;
    }
    traverse(root);

    return ans;
};