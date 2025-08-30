class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length()-1;
        while(left < right) {
            boolean leftRes = isPresent(s.charAt(left));
            boolean rightRes = isPresent(s.charAt(right));
            if(leftRes == true && rightRes == true) {
                if(Character.toLowerCase(s.charAt(left)) == Character.toLowerCase(s.charAt(right))) {
                    left++;
                    right--;
                }else {
                    return false;
                }
            }else if(leftRes == false) {
                left++;
            }else {
                right--;
            }
        }
        return true;
    }
    public boolean isPresent(char w) {
        if((w >= 'a' && w <= 'z') || (w >= 'A' && w <= 'Z') || (w >= '0' && w <= '9')) {
            return true;
        }
        return false;
    }
}