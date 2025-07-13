/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {
    let res = [];
    let q = [];
    let i = 0, j = 0;

    while(j < arr.length) {
        while(q.length && q[q.length - 1] < arr[j]) q.pop();
        q.push( arr[j] );
        if( j - i + 1 == k ) {
            res.push(q[0]);
            if(q[0] == arr[i]) q.shift();
            ++i;
            ++j;
        }else {
            ++j;
        }
    }

    return res;
};
