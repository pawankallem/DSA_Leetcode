import java.util.Stack;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack = new Stack<>();
        int n = temperatures.length;
        int[] ans = new int[n];

        stack.push(n - 1);
        ans[n - 1] = 0;

        for(int i = n - 2; i >= 0; i--) {
            while( stack.empty() == false ) {
                int index = stack.peek();
                if(temperatures[index] > temperatures[i]) {
                    ans[i] = index - i;
                    break;
                }
                else {
                    stack.pop();
                }
            }
            stack.push(i);
        }

        return ans;
    }
}