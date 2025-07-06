/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    let i = 0;
    let j = arr.length - 1;

    while( i < j) {
        let m = i + Math.floor(( j - i) / 2);
        if( (arr[m + k] - x) < ( x - arr[m] )) {
            i = m + 1;
        }else {
            j = m;
        }
    }

    let ans = [];

    for(let n = i; n < i + k; n++ ) {
        ans.push(arr[n]);
    }
    

    console.log(ans);

    return ans;
};