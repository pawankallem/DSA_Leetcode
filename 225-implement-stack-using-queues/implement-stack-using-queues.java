import java.util.ArrayDeque;
import java.util.Queue;

class MyStack {
    Queue<Integer> q1 = new ArrayDeque<>();

    public MyStack() {
    }
    
    public void push(int x) {
        q1.add(x);
        
    }
    
    public int pop() {
        int n = q1.size();
        for(int i = 0; i < n-1; i++) {
            q1.add(q1.remove());
        }
        int ans = q1.remove();
        return ans;
    }
    
    public int top() {
        int n = q1.size();
        for(int i = 0; i < n-1; i++) {
            q1.add(q1.remove());
        }
        int ans = q1.remove();
        q1.add(ans);
        return ans;
        
    }
    
    public boolean empty() {
        return q1.size() == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */