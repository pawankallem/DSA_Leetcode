class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if( n > 0) {
            int i = m - 1;
            int j = n - 1;
            int k = nums1.length - 1;
            while( i >= 0 && j >= 0 ) {
                if( nums1[i] < nums2[j]) {
                    nums1[k] = nums2[j];
                    --j;
                }else {
                    nums1[k] = nums1[i];
                    --i;
                }
                if( j < 0) {
                    break;
                }
                --k;
            }
            while( j >= 0) {
                nums1[j] = nums2[j];
                --j;
            }
        }
        
    }
}





