import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int l = 0;
        int r = arr.length;

        while( l < r) {
            int m = l + (( r - l) / 2);

            if( m + k < arr.length && (x - arr[m]) > (arr[m + k] - x) ) {
                l = m + 1;
            }else {
                r = m;
            }
        }

        List<Integer> ans = new ArrayList<>();
        for(int i = l; i < l + k; i++) {
            ans.add(arr[i]);
        }

        return ans;
    }
}