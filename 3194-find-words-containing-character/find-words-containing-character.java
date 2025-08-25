
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        List<Integer> newArray = new ArrayList<>();
        for(int i = 0; i < words.length; i++) {
            String word = words[i];
            for(int j = 0; j < word.length(); j++) {
                if(x == word.charAt(j)) {
                    newArray.add(i);
                    break;
                }
            }
        }

        return newArray;
    }
}