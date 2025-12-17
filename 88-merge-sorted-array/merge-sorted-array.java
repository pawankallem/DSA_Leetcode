class Solution {
    public void merge(int[] num1, int m, int[] num2, int n) {
        int n1 = m - 1;
        int n2 = n - 1;
        while(n1 >= 0 && n2 >= 0) {
            if( num1[n1] < num2[n2] ) {
                num1[n1+n2+1] = num2[n2--];
            }else {
                num1[n1+n2+1] = num1[n1--];
            }
        }
        while(n2 >= 0) {
            num1[n2] = num2[n2--];
        }
    }
}