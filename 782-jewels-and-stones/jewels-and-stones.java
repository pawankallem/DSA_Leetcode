import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int count = 0;
        Set<Character> set = new HashSet<>();
        for(int j = 0; j < jewels.length(); j++) {
            set.add(jewels.charAt(j));
        }

        for(int i = 0; i < stones.length(); i++) {
            if(set.contains(stones.charAt(i))) {
                count++;
            }
        }
        return count;
    }
}