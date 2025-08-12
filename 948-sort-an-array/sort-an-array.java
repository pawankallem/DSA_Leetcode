class Solution {
    public int[] sortArray(int[] nums) {
        if( nums.length == 1) return nums; 
        int[] left = sortArray(split(nums, 0, nums.length / 2));
        int[] right = sortArray(split(nums, nums.length / 2, nums.length));
        return merge(left, right);
    }
    public int[] split( int[] nums, int start, int end) {
        int n = end - start;
        int[] arr = new int[n];
        int i = 0;
        while(start < end) {
            arr[i++] = nums[start++];
        }
        return arr;
    }
    public int[] merge( int[] left, int[] right) {
        int[] arr = new int[right.length + left.length];
        int l = 0;
        int r = 0;
        int i = 0;
        while( l < left.length && r < right.length ) {
            if( left[l] < right[r] ) {
                arr[i++] = left[l++];
            }else {
                arr[i++] = right[r++];
            }
        }
        while( l < left.length ) {
            arr[i++] = left[l++];
        }
        while( r < right.length ) {
            arr[i++] = right[r++];
        }
        return arr;
    }
}