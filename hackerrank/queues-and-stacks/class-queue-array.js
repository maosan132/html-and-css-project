class Queue {
    constructor() {
        this.queue = [];
    }
    // Inserts the element at the end of the queue
    enqueue(element) {
        this.queue.push(element);
    }
    // Removes the element from the beginning of the queue and return that element
    dequeue() {
        if (this.isEmpty()) return 'Queue is empty!'
        return this.queue.shift();
    }
    // Return which element is on the beginning of the queue
    peek() {
        return !this.isEmpty() ? this.queue[0] : 'Queue is empty';
    }
    isEmpty() {
        return !this.queue.length;
    }
}

const queue1 = new Queue();

//adding elements the queue
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
//picking the top element from the queue;
console.log(queue1.peek());
//printing the array    
console.log(queue1.queue);
//dequeueing 3 elements from the stack
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
//picking the top element from the stack;
console.log(queue1.peek()); //4
//dequeueing the last element
queue1.dequeue();
//picking the top element from the stack;
console.log(queue1.peek()); //Stack is empty
