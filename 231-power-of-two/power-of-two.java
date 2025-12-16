class Solution {
    public boolean isPowerOfTwo(int n) {
        return findPower(0, n);
    }
    public boolean findPower(int i, int num) {

        double powValue =  Math.pow(2, i);
        System.out.println("value : " + powValue + " : " + i + " : " + num + " : " + Math.pow(2, i));

        if(powValue == num) {
            return true;
        }else if(powValue > num) {
            return false;
        }

        return findPower(++i, num);
    }
}