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
    let rootHash = rec(root);
    let subRootHash = rec(subRoot)
    return rootHash.includes(subRootHash);
    return kmp(rootHash, subRootHash);
};


const rec = (root) => {

    let hash = "";
    const rec1 = (curr) => {
        if (!curr) {
            hash += "-#";
            return;
        }
        hash += "-" + curr.val;
        rec1(curr.left);
        rec1(curr.right);
    }

    rec1(root);
    return hash;
}

const kmp = (str1, str2) => {
    let lps = [0];
    let i = 0, j = 1;

    while(j < str2.length) {
        if(str2[i] == str2[j]) {
            lps[j] = i+1;
            ++i, ++j;
        }else {
            if(i == 0) {
                lps[j] = 0;
                ++j;
            }else {
                i = lps[i - 1];
            }
        }
    }

    i = j = 0;

    while( i < str1.length ) {
        if( str1[i] == str2[j] ) {
            ++i, ++j;
        }else {
            if( j == 0) {
                i++;
            }else {
                j = lps[j - 1];
            }
        }
        if( j == str2.length ) {
            return true;
        }
    }
    return false;

}












