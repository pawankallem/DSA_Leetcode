class Solution {
    public boolean isPalindrome(int x) {

        if(x < 0) return false;

        int reverse = 0;
        int n = x;
        while(n > 0) {
            reverse = ( n % 10) + ( reverse * 10);
            n = (int) Math.floor(n/10);
        }

        return x == reverse;
    }
}