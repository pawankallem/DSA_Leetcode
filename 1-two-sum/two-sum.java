import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            int pairNum = target - nums[i];
            if(map.containsKey(pairNum) == true) {
                int[] arr = new int[2];
                arr[0] = map.get(pairNum);
                arr[1] = i;
                return arr;
            }else {
                map.put(nums[i], i);
            }
        }
        int[] arr = new int[2];
        arr[0] = 0;
        arr[1] = 0;
        return arr;
    }
}