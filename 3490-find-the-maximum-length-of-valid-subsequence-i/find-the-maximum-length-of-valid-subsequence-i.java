class Solution {
    public int maximumLength(int[] nums) {
        int count1 = 0, count2 = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] % 2 == 0) count1++;
            else count2++;
        }

        int e = 0, o = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] % 2 == 0) {
                e = Math.max(e, o+1);
            }else {
                o = Math.max(o, e+1);
            }
        }

        return Math.max(Math.max(count1, count2), Math.max(e,o));
    }
}