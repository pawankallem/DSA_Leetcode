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
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;

    const rec = (curr, p, q) => {
        if (!curr) return 0;
        let count = 0;
        if (curr.val == p.val || curr.val == q.val) ++count;
        let left = rec(curr.left, p, q);
        let right = rec(curr.right, p, q);
        count += left + right;
        if (count == 2 && ans == null) {
            ans = curr;
            count = 0;
        }
        return count;
    }

    rec(root, p, q);
    return ans;
};

