class Solution {
    public String reverseStr(String s, int k) {
        String finalStr = "";
        String str = "";
        int count = 0;
        int i = 0;
        while(i < s.length()) {
            char val = s.charAt(i);
            if(count < k) {
                str = val + str;
            }else {
                str = str + val;
            }
            count++;
            if(count == 2 * k) {
                count = 0;
                finalStr += str;
                str = "";
            }
            i++;
        }
        finalStr += str;
        return finalStr;
    }
}