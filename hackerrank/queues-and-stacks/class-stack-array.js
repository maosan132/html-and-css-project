class Stack {
    constructor() {
        this.stack = [];
    }
    // Inserts the element into the top of the stack
    push(element) {
        this.stack.push(element);
    }
    // Removes the element from the top of the stack and return that element
    pop() {
        if (this.isEmpty()) return 'Stack is empty!'
        return this.stack.pop();
    }
    // Return which element is on top of the stack
    peek() {
        return !this.isEmpty() ? this.stack[this.stack.length - 1] : 'Stack is empty';
    }
    isEmpty() {
        return !this.stack.length;
    }
}

const stack1 = new Stack();

//adding elements the stack
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
//picking the top element from the stack;
console.log(stack1.peek());
//printing the array    
console.log(stack1.stack);
//popping 3 elements from the stack
stack1.pop();
stack1.pop();
stack1.pop();
//picking the top element from the stack;
console.log(stack1.peek()); //1
//popping the last element
stack1.pop();
//picking the top element from the stack;
console.log(stack1.peek()); //Stack is empty
