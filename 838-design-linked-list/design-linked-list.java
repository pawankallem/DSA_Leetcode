class ListNode {
    int val;
    ListNode next;

    public ListNode(int value) {
        this.val = value;
        this.next = null;
    }
}

class MyLinkedList {
    private ListNode head;
    private int size;

    public MyLinkedList() {
        this.head = null;
        this.size = 0;
    }

    // public void print() {
    //     ListNode curr = head;
    //     while(curr != null) {
    //         System.out.print(curr.val + " : ");
    //         curr = curr.next;
    //     }
    //     System.out.println("---------------");
    // }
    
    public int get(int index) {
        // System.out.println("size is " + size + " : " + index);
        if( size <= index ) return -1;
        int count = 0;
        ListNode curr = head;
        while( count < index) {
            curr = curr.next;
            ++count;
        }
        return curr.val;
    }
    
    public void addAtHead(int val) {
        ListNode curr = head;
        head = new ListNode(val);
        head.next = curr;
        ++size;
        // print();
    }
    
    public void addAtTail(int val) {
        if( size == 0) {
            head = new ListNode(val);
        }else {
            ListNode curr = head;
            while(curr != null && curr.next != null) {
                curr = curr.next;
            }
            curr.next = new ListNode(val);
        }
        ++size;
        // print();
    }
    
    public void addAtIndex(int index, int val) {
        if( index == 0) {
            ListNode temp = head;
            head = new ListNode(val);
            head.next = temp;
            ++size;
        } else if(size >= index) {
            ListNode curr = head;
            int count = 0;
            while( count + 1 < index) {
                curr = curr.next;
                ++count;
            }
            ListNode temp = curr.next;
            curr.next = new ListNode(val);
            curr.next.next = temp;
            ++size;
        }
        // print();
    }
    
    public void deleteAtIndex(int index) {
        if( size >= 1 && index == 0) {
            head = head.next;
            --size;
        }else if( size != 0 && size > index ) {
            ListNode curr = head;
            int count = 0;
            while(count + 1 < index) {
                curr = curr.next;
                ++count;
            }
            if(curr != null && curr.next != null) {
                curr.next = curr.next.next;
                --size;
            }
        }
        // print();
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */