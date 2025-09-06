import java.util.Stack;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(ch == ')' || ch == '}' || ch == ']') {
                if(stack.isEmpty() == false && stack.peek() == s.charAt(i)) {
                    stack.pop();
                }else {
                    return false;
                }
            }else {
                if(ch == '(') {
                    ch = ')';
                }else if(ch == '{') {
                    ch = '}';
                }else {
                    ch = ']';
                }
                stack.push(ch);
            }
        }

        return stack.isEmpty();
    }
}