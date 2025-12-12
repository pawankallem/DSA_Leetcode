class Solution {
    public int reverse(int n) {
        int x = (int) Math.abs(n);
        long reverse = 0;
        while (x > 0) {
            reverse = (x % 10) + (reverse * 10);
            x = (int) Math.floor(x / 10);
        }
        if (reverse > Integer.MAX_VALUE)
            return 0;
        if (n < 0) {
            return (int) -(reverse);
        }
        return (int) reverse;
    }
}