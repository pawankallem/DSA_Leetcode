class Solution {
    public void moveZeroes(int[] nums) {
        int i = 0;
        int j = 0;
        while( i < nums.length && j < nums.length) {
            if( nums[i] == 0) {
                if( nums[j] == 0) {
                    ++j;
                }else {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    ++i;
                    ++j;
                }
            }else {
                ++i;
                j = i;
            }
        }
    }
}