/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};

    for(let i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        if(obj[num] != undefined) {
            return [obj[num], i];
        }else {
            obj[nums[i]] = i;
        }
    }

    return [0,0];
};