/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = 0, maxSS = 0, i = 0, j = 0;
    let n = s.length;
    let map = {};
    let maxChar = "";
    for(let m = 0; m < n; m++) map[s[m]] = 0;

    while(j < n) {
        map[s[j]]++;
        count++;
        maxChar = maxChar == "" ? s[j] : findMaxChar(map);
        let val = count - map[maxChar];
        if(val <= k) {
            ++j;
        }else {
            maxSS = Math.max( (j-i), maxSS );
            map[s[j]]--;
            map[s[i]]--;
            count -= 2;
            ++i;
            if(j + 1 == n) break;
        }
    }

    if( j == n) maxSS = Math.max( ( j - i), maxSS );
    return maxSS;
};

const findMaxChar = (obj) => {
    let max = 0;
    let ch = "";
    for(let k in obj) {
        if(obj[k] > max) {
            max = obj[k];
            ch = k;
        }
    }
    return ch;
}