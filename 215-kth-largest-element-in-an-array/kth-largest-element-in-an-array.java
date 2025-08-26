class Solution {
    public int findKthLargest(int[] nums, int k) {
        MaxHeap heap = new MaxHeap();
        int n = nums.length;
        for (int i = n - 1; i >= 0; --i) {
            heap.heapifyDown(nums, i, n);
        }
        int index = n - 1;
        while (index > 0) {
            int temp = nums[index];
            nums[index] = nums[0];
            nums[0] = temp;
            heap.heapifyDown(nums, 0, index);
            --index;
        }
        return nums[nums.length - k];
    }
}

class MaxHeap {
    public int getParent(int i) {
        return (i - 1) / 2;
    }

    public int getLeftChild(int i) {
        return (2 * i) + 1;
    }

    public int getRightChild(int i) {
        return (2 * i) + 2;
    }

    public void heapifyDown(int[] nums, int i, int n) {
        while (i < n) {
            int l = getLeftChild(i);
            int r = getRightChild(i);
            int curr = i;
            if (l < n && nums[curr] < nums[l])
                curr = l;
            if (r < n && nums[curr] < nums[r])
                curr = r;
            if (curr != i) {
                int temp = nums[curr];
                nums[curr] = nums[i];
                nums[i] = temp;
                i = curr;
            } else {
                break;
            }
        }
    }
}
