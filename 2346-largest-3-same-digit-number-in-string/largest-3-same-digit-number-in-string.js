/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = "";
    for(let i = 0; i < num.length - 2; i++ ) {
        let x = num[i], y = num[i+1], z = num[i+2];
        if( x == y && y == z ) {
            let val = x + "" + y + "" + z;
            if( max == "" || max < val ) max = val;
        }
    }
    return max;
};