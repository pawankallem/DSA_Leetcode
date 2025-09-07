/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let i = 0; i < tokens.length; i++) {
        if( ['+','-','*','/'].includes(tokens[i]) ) {
            let leftVal = stack.pop();
            let leftLeftVal = stack.pop();
            let val;
            if( tokens[i] == '+') val = leftLeftVal + leftVal;
            else if( tokens[i] == '-') val = leftLeftVal - leftVal;
            else if( tokens[i] == '*') val = leftLeftVal * leftVal;
            else {
                val = (leftLeftVal / leftVal);
                val = val < 0 ? Math.ceil(val) : Math.floor(val);
            }
            stack.push(val);
        }else {
            stack.push( Number(tokens[i]) );
        }
    }
    return stack.pop();
};