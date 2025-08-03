/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const heap = new Heap();
    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
    }
    for (let i = nums.length - 1; i >= 0; --i) {
        nums[i] = heap.extractMax();
    }
    return nums;

};

class Heap {
    constructor() {
        this.heap = [];
    }
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChild(i) {
        return (2 * i) + 1;
    }
    getRightChild(i) {
        return (2 * i) + 2;
    }
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(i) {
        while (i > 0) {
            const p_index = this.getParent(i);
            if (this.heap[p_index] < this.heap[i]) {
                let temp = this.heap[p_index];
                this.heap[p_index] = this.heap[i];
                this.heap[i] = temp;
                i = p_index;
            }else {
                break;
            }
        }
    }
    heapifyDown(i) {
        let l_child = this.getLeftChild(i);
        let r_child = this.getRightChild(i);
        let n = this.heap.length;

        let largest = i;
        if( l_child < n && this.heap[l_child] > this.heap[largest]) largest = l_child;
        if( r_child < n && this.heap[r_child] > this.heap[largest]) largest = r_child;

        if( largest != i) {
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
            this.heapifyDown(largest);
        }
    }
    extractMax() {
        const val = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return val;
    }
}






