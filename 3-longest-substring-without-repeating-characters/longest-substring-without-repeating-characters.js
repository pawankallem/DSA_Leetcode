/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let max = 0;
    let arr = [], obj = {};

    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] != 1) {
            obj[s[i]] = 1;
            arr.push(s[i]);
            if(max < arr.length) max = arr.length;
        }else {
            while(arr.length > 0) {
                let val = arr.shift();
                obj[val] = 0;
                if(val == s[i]) {
                    break;
                }
            }
            arr.push(s[i]);
            obj[s[i]] = 1;
            if(max < arr.length) max = arr.length;
        }
    }
    return max;
};