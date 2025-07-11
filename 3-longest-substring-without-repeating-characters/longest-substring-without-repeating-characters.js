/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 0) return 0;
    let max = 0;
    let obj = {};
    let i = 0, j = 0;

    while(j < s.length) {
        if(obj[s[j]] != undefined && i <= obj[s[j]] && obj[s[j]] < j) {
            let val = s[j];
            i = obj[val] + 1;
            obj[val] = j;
        }else {
            obj[s[j]] = j;
        }
        const diff = (j - i) + 1 ;
        if(max < diff) max = diff;
        ++j;
    }

    return max;
};