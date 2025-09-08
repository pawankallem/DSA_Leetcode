/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let n = nums.length;
    let ans = new Array(n).fill(-1);
    stack.push(nums[n-1]);

    for(let i = (2 * n) - 2; i >= 0; i--) {
        let index = i % n;
        while(stack.length) {
            let val = stack[stack.length - 1];
            if(nums[index] < val) {
                ans[index] = val;
                break;
            }else {
                stack.pop();
            }
        }
        stack.push(nums[index]);
    }

    return ans;
};