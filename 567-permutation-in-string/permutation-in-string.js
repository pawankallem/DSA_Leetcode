/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    let hash1 = new Array(26).fill(0);
    let hash2 = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++) {
        ++hash1[s1.charCodeAt(i) - 97];
        ++hash2[s2.charCodeAt(i) - 97];
    }

    let i = 0;
    let j = s1.length - 1;
    while( j < s2.length ) {
        if( isWindowValid(hash1, hash2) ) {
            return true;
        }else {
            --hash2[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hash2[s2.charCodeAt(j) - 97];
        }
    }

    return false;
};

const isWindowValid = (hash1, hash2) => {
    for(let i = 0; i < 26; i++) {
        if(hash1[i] !== hash2[i]) return false;
    }
    return true;
}