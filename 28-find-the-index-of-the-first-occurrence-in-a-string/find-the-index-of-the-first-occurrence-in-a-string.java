class Solution {
    public int strStr(String haystack, String needle) {

        if(needle.length() > haystack.length()) {
            return -1;
        }
        
        int i = 0;
        int j = 0;

        System.out.println(haystack.length() + " : " + needle.length() + " : " + (haystack.length() - needle.length()));

        while(i <= ( haystack.length() - needle.length() )) {
            if(needle.charAt(j) != haystack.charAt(i)) {
                i++;
                j = 0;
            }else {

                String sub = haystack.substring(i, i + needle.length());
                if(sub.equals(needle)) {
                    return i;
                }else {
                    i++;
                    j = 0;
                }

            }
        }

        return -1;
    }
}