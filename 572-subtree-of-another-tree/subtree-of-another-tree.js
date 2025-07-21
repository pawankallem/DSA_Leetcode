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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    const sameTree = (curr, subCurr) => {
        if (!curr && !subCurr) return true;
        if (!curr || !subCurr) return false;
        return curr.val == subCurr.val && sameTree(curr.left, subCurr.left) &&
            sameTree(curr.right, subCurr.right);
    }
    let isFound = false;
    if (root.val == subRoot.val) {
        isFound = sameTree(root, subRoot);
    }
    console.log(isFound, root.val, subRoot.val);
    if (isFound) return true;
    else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    return false;
};