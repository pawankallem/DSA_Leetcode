class Solution {
    public int missingNumber(int[] arr) {
        int indexSum = 0;
        int numSum = 0;
        for(int i = 0; i < arr.length; i++) {
            indexSum += ( i + 1);
            numSum += arr[i];
        }
        return (indexSum - numSum);
    }
}