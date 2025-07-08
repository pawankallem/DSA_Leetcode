/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0, r = height.length - 1;

    while(l < r) {
        let area = ( r - l) * (Math.min(height[l], height[r]));
        if(area > max) {
            max = area;
        }

        if(height[l] > height[r]) {
            r--;
        }else {
            l++;
        }
    }

    return max;
};