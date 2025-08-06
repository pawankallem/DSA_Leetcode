class Solution {
    public int singleNumber(int[] nums) {
        int val = 0;
        for( int i = 0; i < nums.length; i++) {
            val = val ^ nums[i];
        }
        System.out.println(val);
        return val;
    }
}