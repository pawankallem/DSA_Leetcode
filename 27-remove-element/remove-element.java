class Solution {
    public int removeElement(int[] arr, int val) {
        if(arr.length == 0) return 0;
        int left = 0;
        int right = arr.length - 1;
        int k = 0;
        while(left <= right) {
            if(arr[left] == val) {
                if(arr[right] == val) {
                    right--;
                    continue;
                }
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right--] = temp;
                k++;
            }
            left++;
        }
        // System.out.println("Remove elements : "+ right + " : " + left + " : " + k);
        return left;
    }
}