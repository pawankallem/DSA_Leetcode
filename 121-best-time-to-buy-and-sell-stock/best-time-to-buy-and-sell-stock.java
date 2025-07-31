class Solution {
    public int maxProfit(int[] prices) {
        int maxIndex = 0;
        int minIndex = 0;
        int max = 0;
        for(int i = 0; i < prices.length; i++) {
            if( prices[minIndex] > prices[i] ) { minIndex = i; maxIndex = i; }
            if( prices[maxIndex] < prices[i] ) { maxIndex = i;}
            int sum = prices[maxIndex] - prices[minIndex];
            if( max < sum ) max = sum;
        }
        return max;
    }
}