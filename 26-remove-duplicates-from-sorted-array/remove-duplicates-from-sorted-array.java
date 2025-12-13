class Solution {
    public int removeDuplicates(int[] arr) {

        if(arr.length == 0 || arr.length == 1) return arr.length;
        int first = 0;
        for(int i = 1; i < arr.length; i++) {
            if(arr[first] != arr[i]) {
                ++first;
                arr[first] = arr[i];
            }
        }
        return first + 1;
        
    }
}