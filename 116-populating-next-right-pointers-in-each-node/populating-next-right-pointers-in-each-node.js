/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if( !root ) return root;
    let q = [root];

    while( q.length ) {
        let len = q.length;
        for(let i = 0; i < len; i++ ) {
            let curr = q.shift();
            if( i + 1 == len ) {
                curr.next = null;
            }else {
                curr.next = q[0];
            }

            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
    }

    return root;
    
};