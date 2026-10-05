// ============================ Linked List Implementation ============================

// IMPLEMENTING A SINGLY LINKED-LIST

// class LinkedListNode {
//     data: any;
//     next: LinkedListNode | null;

//     constructor(value: any){
//         this.data = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     head: LinkedListNode | null;
//     tail: LinkedListNode | null;
//     length: number;

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     // append to the linkedlist (Back) 0(1).
//     append(value: any){
//         let newNode = new LinkedListNode(value);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;

//         } else {
//             this.tail!.next = newNode;
//             this.tail = newNode;
//         }
//             this.length++;
//     };

//     // prepend to the linkedlist (Front) 0(1).
//     prepend(value: any){
//         let newNode = new LinkedListNode(value);
        
//         if(!this.head){
//             this.append(value);
//             return;
//         } else{
//             const currentHead = this.head;
//             newNode.next = currentHead;
//             this.head = newNode;
//         }
//             this.length++
//     };

//     // find a node in the linkedlist 0(n).
//     traverseToIndex(index: number){
//         let count = 0;
//         let currentNode = this.head;
        
//         while(count !== index){
//             currentNode = currentNode!.next;
//             count++;
//         }
//         return currentNode;
//     }
    
//     // remove a node from the linkedlist 0(n).
//     remove(index:number){
//         if(index < 0 || index >= this.length){
//             console.log(`Index ${index} is invalid.`);
//             return;
//         }
//         let leadingNode = this.traverseToIndex(index - 1);
//         let targetNode = this.traverseToIndex(index);
//         let holdingNode = targetNode!.next;

//         leadingNode!.next = holdingNode;
//         this.length--;
//     }

//     // insert a node in the linkedlist at an index 0(n).
//     insertAtIndex(index: number, value: any){
//         /**
//          * Create a newNode with the given value.
//          * Find the node at index - 1 (leadingNode).
//          * Find the node at index (holdingNode).
//          * Set leadingNode.next to newNode.
//          * Set newNode.next to holdingNode.
//          * Increment the length of the linked list.
//          */
//         let newNode = new LinkedListNode(value);
//         let leadingNode = this.traverseToIndex(index -1);
//         let holdingNode = this.traverseToIndex(index);

//         leadingNode!.next = newNode;
//         newNode.next = holdingNode;
//         this.length++;
//     }

//     // Reverse the linkedlist 0(n).
//     reversedLinkedList(){
//         if (!this.head || !this.head.next) {
//             return;
//         }
//         let previous: LinkedListNode | null = null;
//         let current: LinkedListNode | null = this.head;
//         this.tail = this.head;

//         while(current !== null){
//             const next: LinkedListNode | null = current.next;
//             current.next = previous
//             previous = current
//             current = next
//         }  
//         this.head = previous;
//     }

//     printList(){
//         let list = [];
//         let currentNode = this.head;

//         if(this.head === null){
//             console.log("The LinkedList is empty");
//             return;
//         }
//         while(currentNode !== null){
//             list.push(currentNode.data);
//             currentNode = currentNode.next;
//         }
//             return list;
//     };

// }


// // ====================== DOUBLY LINKED-LIST IMPLEMENTATION =================================
// class DoublyListNode{
//     data: any;
//     prev: DoublyListNode | null;
//     next: DoublyListNode | null;

//     constructor(value: any){
//         this.data = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList{
//     head: DoublyListNode | null;
//     tail: DoublyListNode | null;
//     size: number;

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     append(value: any){
//         let newNode = new DoublyListNode(value);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail!.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.size++;
//     }
// }


// class LinkedListNode{
//     value: any;
//     next: LinkedListNode | null;
//     prev: LinkedListNode | null;

//     constructor(value: any){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     };
// }

// class LinkedList{
//     head: LinkedListNode | null
//     tail: LinkedListNode | null
//     size: number

//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(value: any){
//         let newNode = new LinkedListNode(value);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail!.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     reverse(){
//         if(!this.head || !this.head.next){
//             return;
//         };
        
//         let current: LinkedListNode | null = this.head;
//         let oldHead: LinkedListNode | null = this.head;
//         let oldTail: LinkedListNode | null  = this.tail;

//         while(current !== null){
//             const next: LinkedListNode | null = current.next;
//             current.next = current.prev;
//             current.prev = next;
//             current = next;
//         }
//         this.head = oldTail;
//         this.tail = oldHead;
//     } 
// }



// ==================== 04-07-2026 =============================

// class LinkedList {
//     head: {value: any, next: any} | null;
//     tail: {value: any, next: any} | null;
//     length: number;

//     consturctor(value: any){
//         this.head = {value: value, next: null};
//         this.tail = this.head;
//         this.length = 1;
//     }
// }

// TODO: Learn the implementation of linkedList




// ===========================================================================

class LinkedListNode {
    value: any;
    next: null | any;

    constructor(value: any) {
        this.value = value;
        this.next = null;       
    }
}

class LinkedList {
    head: {value: any, next: any};
    tail: {value: any, next: any};
    length: number;

    constructor(value: any) {
        this.head = new LinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(incomingValue: any) {
        const newNode = new LinkedListNode(incomingValue) ;

        this.tail.next = newNode;

        this.tail = newNode;
        this.length++
    }

    prepend(incomingValue: any) {
        const newNode = new LinkedListNode(incomingValue) ;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index: number, value: any) {
        // Create a new node
        // Get access to the leading node before the index
        // Store leadingNode.next into a holding variable
        // so we point the newnode.next to holding variable
        // leading node.next is equalt to the newNode
        // this.length++
        if(index >= this.length) {
            this.append(value) 
                return "Index tooo large, but value has been appended to the end"
        }
        const newNode = new LinkedListNode(value);
        const leadingNode = this.traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;
        newNode.next = holdingNode;
        leadingNode.next = newNode;
        this.length++;
    }

    traverseToIndex(index: number) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++
        }

        return currentNode;
    }

    remove(index: number) {
        const leadingNode = this.traverseToIndex(index-1);
        const node_to_delete = leadingNode.next;
        const holdingNode = node_to_delete.next;
        leadingNode.next = holdingNode;
        this.length--;
    }

    reverse() {
        let first = this.head;
        this.tail = this.head;  
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp
        }
        this.head.next = null;
        this.head = first;
    }

}


const firstLinkedList = new LinkedList(5)
console.log(firstLinkedList)
firstLinkedList.append(3);
firstLinkedList.prepend(1);
firstLinkedList.reverse();
console.log(firstLinkedList.printList())

/**
 * linkedList = {
 *  value: 5,
 *  next: {
 *     value: 3,
 *      next: {
 *          value: 2,
 *          next: null
 * }
 * }
 * }
 */