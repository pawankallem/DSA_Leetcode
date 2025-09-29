class Solution {
    public int findMin(int[] nums) {
        int l = 0;
        int r = nums.length - 1;

        while( l < r) {
            int mid = l + (( r - l) / 2);
            if(mid + 1 < nums.length && nums[mid] > nums[mid + 1]) {
                return nums[mid + 1];
            }
            if(nums[mid] < nums[r]) {
                r = mid;
            }else {
                l = mid + 1;
            }
        }
        return nums[r];
    }
}