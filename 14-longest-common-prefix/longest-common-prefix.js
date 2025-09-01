/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    let isCompleted = false;
    let index = 0;
    while(!isCompleted) {
        let newStr = "";
        for(let i = 0; i < strs.length; i++) {
            let str = strs[i];
            if(str.length <= index) {
                isCompleted = true;
                return res;
            }
            if(newStr == "" && str.length > index) {
                newStr = str[index];
            }else {
                if(str.length <= index || newStr != str[index]) {
                    return res;
                }
            }
        }
        res += newStr;
        index++;
    }
    return res;
};