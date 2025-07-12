/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0, j = 0;
    let maxSS = 0;
    let arr = new Array(26).fill(0);

    arr[s.charCodeAt(0) - 65] = 1;

    while( j < s.length ) {
        if(isWindowVali(arr,k)) {
            maxSS = Math.max(maxSS, (j-i) + 1 );
            ++j;
            ++arr[s.charCodeAt(j) - 65];
        }else {
            --arr[s.charCodeAt(i) - 65];
            ++i;
        }
    }

    return maxSS;

};

const isWindowVali = (arr, k) => {
    let total = 0;
    let max = 0;
    for(let i = 0; i < 26; i++) {
        if(arr[i]) {
            total += arr[i];
            max = Math.max( max, arr[i] ); 
        }
    }
    
    return ( total - max ) <= k;
}