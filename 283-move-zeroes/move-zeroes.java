class Solution {
    public void moveZeroes(int[] arr) {
        int i = 0;
        int j = 0;
        while(j < arr.length) {
            if(arr[i] == 0) {
                if(arr[j] == 0) {
                    j++;
                }else {
                    arr[i++] = arr[j];
                    arr[j] = 0;
                    j = i + 1;
                }
            }else {
                i++;
                j = i + 1;
            }
        }
    }
}