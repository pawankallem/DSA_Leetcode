/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj = {};
    let vow = 0, con = 0;
    for(let i = 0; i < s.length; i++) {
        let key = s[i];
        if(obj[key] > 0) {
            obj[key]++;
        }else {
            obj[key] = 1;
        }
        if(key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
            if(vow < obj[key]) vow = obj[key];
        }else {
            if(con < obj[key]) con = obj[key];
        }
    }
    return vow + con;
};