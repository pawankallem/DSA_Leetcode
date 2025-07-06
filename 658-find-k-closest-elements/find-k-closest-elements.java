import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int a = 0;
        int b = arr.length - 1;

        while( a < b ) {
            int mid = a + ((b - a) / 2);

            if(mid + k < arr.length && ( arr[mid + k] - x) < ( x - arr[mid] )) {
                a = mid + 1;
            }else {
                b = mid;
            }
        }

        List<Integer> ans = new ArrayList<>();
        for(int i = a; i < a+k; i++) {
            ans.add(arr[i]);
        }

        return ans;
    }
}