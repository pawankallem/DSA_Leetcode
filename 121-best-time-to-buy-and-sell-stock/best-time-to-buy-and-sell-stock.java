class Solution {
    public int maxProfit(int[] arr) {
        int maxProfit = 0;
        int index = 0;

        for(int i = 0; i < arr.length; i++) {
            if(arr[index] < arr[i]) {
                if( (arr[i] - arr[index]) > maxProfit) {
                    maxProfit = (arr[i] - arr[index]);
                }
            }else if( arr[i] < arr[index] ) {
                index = i;
            }
        }

        return maxProfit;
    }
}