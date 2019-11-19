class Node{
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtBeginning (data) {
        // A newNode object is created with property data and next = null
            let newNode = new Node(data);
        // The pointer next is assigned head pointer so that both pointers now point at the same node.
            newNode.next = this.head;
        // As we are inserting at the beginning the head pointer needs to now point at the newNode.             
            this.head = newNode;
            return this.head;
    }

    insertAtEnd (data) {
        // A newNode object is created with property data and next=null
            let newNode = new Node(data);
        // When head = null i.e. the list is empty, then head itself will point to the newNode.
            if(!this.head){
                this.head = newNode;
                return this.head;
            }
        // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
           let tail = this.head;
           while(tail.next !== null){
                tail = tail.next;
           }
           tail.next = newNode;
           return this.head;
    }

    // A helper function getAt() is defined to get to the desired position. 
    //This function can also be later used for performing delete operation from a given position.
    getAt (index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    // The insertAt() function contains the steps to insert a node at a given index.
    insertAt (data, index) {
        // if the list is empty i.e. head = null
                if (!this.head) {
                    this.head = new Node(data);
                    return;
                }
        // if new node needs to be inserted at the front of the list i.e. before the head. 
                if (index === 0) {
                   this.head = new Node(data, this.head);
                   return;
                }
        // else, use getAt() to find the previous node.
                const previous = this.getAt(index - 1);
                let newNode = new Node(data);
                newNode.next = previous.next;
                previous.next = newNode;       
        
                return this.head
    }
    //The first node in a linked list is pointed by the head pointer. 
    //To perform a delete operation at the beginning of the list, we will have to make the next node to the head node as the new head.
    deleteFirstNode () {
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }    
    //To remove the last node from the list, we will first have to traverse the list to find the last node and at the same time maintain an extra pointer to point at the node before the last node. 
    //To delete the last node, we will then set the next pointer of the node before the last node to null.
    deleteLastNode () {
        if(!this.head){
            return null;
        }
        // if only one node in the list
        if(!this.head.next){
            this.head = null;
            return;
        }
       let previous = this.head;
       let tail = this.head.next;
       
       while(tail.next !== null){
           previous = tail;
           tail = tail.next;
       }
       
       previous.next = null;
       return this.head;
    }
    //Similar to the above case, we will first have to traverse the list to find the desired node to be deleted 
    //and at the same time maintain an extra pointer to point at the node before the desired node.
    deleteAt (index) {
        // when list is empty i.e. head = null
            if (!this.head) {
                 this.head = new Node(data);
                 return;
             }
        // node needs to be deleted from the front of the list i.e. before the head.
            if (index === 0) {
                this.head = this.head.next;
                return;
            }
        // else, use getAt() to find the previous node.
            const previous = this.getAt(index - 1);
            
            if (!previous || !previous.next) {
                return;
            }
            
            previous.next = previous.next.next;     
            return this.head
    }
    //Now, lets delete the complete linked list. This can be done by just one single line of code.
    deleteList () {
        this.head = null;
    }
}

const stack1 = new LinkedList();

stack1.insertAtEnd(1);
stack1.insertAtEnd(2);
stack1.insertAtEnd(3);
stack1.insertAtEnd(4);
//printing the linkedlist    
console.log(JSON.stringify(stack1));