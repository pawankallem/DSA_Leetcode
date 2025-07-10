/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
    arr.sort((a,b) => a - b);
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i-1]) {
            twoSum(arr, i, ans);
        }
    }
    return ans;
};

let twoSum = (arr, x, ans) => {
    let i = x + 1, j = arr.length - 1;

    while(i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if(sum == 0) {
            ans.push([arr[i], arr[j], arr[x]]);
            ++i, --j;
            while( i < j && arr[i] == arr[i - 1]) ++i;
        }else if( sum > 0) {
            --j;
        }else {
            ++i;
        }
    }
}