class Solution {
    public boolean isSubsequence(String s, String t) {

        if(s.length() <= 0) {
            return true;
        }
        if(t.length() <= 0 || t.length() < s.length()) {
            return false;
        }

        int i = 0;
        int j = 0;
        boolean isSS = false;

        while(i < s.length() && j < t.length()) {
            if(s.charAt(i) == t.charAt(j)) {
                ++i;
                ++j;
                if(i == s.length()) {
                    isSS = true;
                    break;
                }

            }else {
                ++j;
            }
        }


        return isSS;
        
    }
}