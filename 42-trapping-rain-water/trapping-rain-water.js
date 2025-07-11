/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    
    let n = arr.length;
    // stack 1 of left to right side max
    let maxL = arr[0];
    let s1 = [arr[0]];
    for(let i = 1; i < n; i++) {
        if(arr[i] > maxL) maxL = arr[i];
        s1.push(maxL);
    }
    // stack 2 of right to left max
    let maxR = arr[n-1];
    let s2 = new Array(n).fill(0);
    s2[n-1] = arr[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        if(arr[i] > maxR) maxR = arr[i];
        s2[i] = maxR;
    }
    // check count or water collection
    let count = 0;
    for(let i = 0; i < n; i++) {
        let min = Math.min(s1[i], s2[i]);
        count += min - arr[i];
    }
    return count;
};











