class Node {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

class Queue {
    constructor() {
        this.queue = null
    }
    enqueue(element) {
        const head = this.queue;
        const newNode = new Node(null, element);
        if (!head) {
            this.queue = newNode;
        } else {
            let traverseNode = head;
            while (traverseNode.next) {
                traverseNode = traverseNode.next;
            };
            traverseNode.next = newNode;
        }
    }
    dequeue() {
        const head = this.queue;
        if (!head) return 'Queue is empty';
        this.queue = head.next;
        return head.value;
    }
    peek() {
        if (!this.queue) return 'Queue is empty';
        return this.queue.value;
    }
}
const queue1 = new Queue();

//adding elements the queue
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
//picking the top element from the queue;
console.log(queue1.peek()); // 4
//printing the linkedlist    
console.log(JSON.stringify(queue1.queue));
//dequeueing 3 elements from the queue
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
//picking the top element from the queue;
console.log(queue1.peek()); //4
//dequeueing the last element
queue1.dequeue();
//picking the top element from the queue;
console.log(queue1.peek()); //queue is empty
