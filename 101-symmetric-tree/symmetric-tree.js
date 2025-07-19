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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    let q = [root.left, root.right];
    while (q.length) {
        let c1 = q.shift();
        let c2 = q.shift();
        if (c1.val != c2.val) return false;
        if ( (!c1.left && c2.right) || (c1.left && !c2.right) ) return false;
        if ( (!c1.right && c2.left) || (c1.right && !c2.left) ) return false;
        if( c1.left && c2.right) {
            q.push(c1.left);
            q.push(c2.right);
        }
        if( c1.right && c2.left) {
            q.push(c1.right);
            q.push(c2.left);
        }
    }

    return true;
};