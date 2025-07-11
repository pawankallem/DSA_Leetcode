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

            if(map.isEmpty() == false && map.containsKey(s.charAt(i)) && map.get(s.charAt(i)) == 1) {
                while(queue.isEmpty() == false) {
                    char ch = queue.remove();
                    map.put(ch,0);
                    if(ch == s.charAt(i)) {
                        break;
                    }
                }
            }

            map.put(s.charAt(i), 1);
            queue.add(s.charAt(i));
            if(max < queue.size()) {
                max = queue.size();
            }
        }

        return max;
    }
}