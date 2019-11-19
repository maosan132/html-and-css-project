class Node {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

class Stack {
    constructor() {
        this.stack = null
    }
    push(element) {
        const head = this.stack;
        const newNode = new Node(null, element);
        if (!head) {
            this.stack = newNode;
        } else {
            newNode.next = head;
            this.stack = newNode;
        }
    }
    pop() {
        const head = this.stack;
        if (!head) return 'Stack is empty';
        this.stack = head.next;
        return head.value;
    }
    peek() {
        if (!this.stack) return 'Stack is empty';
        return this.stack.value;
    }
}
const stack1 = new Stack();

//adding elements the stack
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
//picking the top element from the stack;
console.log(stack1.peek()); // 4
//printing the linkedlist    
console.log(JSON.stringify(stack1.stack));
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
