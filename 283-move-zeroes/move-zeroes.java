class Solution {
    public void moveZeroes(int[] nums) {
        int ptr = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[ptr] == 0) {
                if(nums[i] != 0) {
                    nums[ptr++] = nums[i];
                    nums[i] = 0;
                }
            }else {
                ptr++;
            }
        }
    }
}