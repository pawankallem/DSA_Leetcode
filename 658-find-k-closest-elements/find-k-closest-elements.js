/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        let m = i + Math.floor(( j - i) / 2);
        if( x - arr[m] >  arr[m + k] - x ) i = m + 1;
        else j = m;
    }

    console.log(i, j);
    let ans = [];
    for(let m = i; m < i + k; m++) {
        ans.push(arr[m]);
    }

    return ans;
};