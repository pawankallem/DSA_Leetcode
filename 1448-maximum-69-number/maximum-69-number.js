/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let max = num;
    let str = num.toString();
    for( let i = 0; i < str.length; i++) {
        let newStr = "";
        for(let j = 0; j < str.length; j++) {
            if( i == j) {
                if( str[i] == 6) {
                    newStr += 9;
                }else {
                    newStr += 6;
                }
            }else {
                newStr += str[j];
            }
        }
        if( max < newStr ) max = newStr;
    }
    return Number(max);
};