import java.util.Queue;
import java.util.ArrayDeque;
import java.util.Map;
import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        Queue<Character> queue = new ArrayDeque<>();
        Map<Character,Integer> map = new HashMap<>();

        for(int i = 0; i < s.length(); i++) {
            char key = s.charAt(i);

            if(map.isEmpty() == false && map.containsKey(key) && map.get(key) == 1) {
                while(queue.isEmpty() == false) {
                    char ch = queue.remove();
                    map.put(ch,0);
                    if(ch == key) {
                        break;
                    }
                }
            }

            map.put(key, 1);
            queue.add(key);
            if(max < queue.size()) {
                max = queue.size();
            }
        }

        return max;
    }
}