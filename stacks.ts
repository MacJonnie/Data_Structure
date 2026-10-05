/**
 * ========================  10-06-2026  =====================================
 * STACKS 
 * (Implementing Stacks with the use of arrays and linkedlist).
 * 
 * This is the standard fixed-capacity array implementation of a stack and is commonly taught in data structures courses because it clearly demonstrates stack overflow, stack underflow, and constant-time push, pop, and peek operations.
 */

// ======================  Implementing Stack with Array.  ==============================

// class Stack<T>{
//     private items: T[];
//     private top: number;
//     private maxSize: number;

//     constructor(maxSize: number){
//         this.items = new Array(maxSize)
//         this.top = -1
//         this.maxSize = maxSize 
//     }


// // Check if Stack is full
// public isEmpty(): boolean{
//         return this.top === -1
//     }


// // Check if Stack is empty
// public isFull(): boolean{
//         return this.top === this.maxSize -1
//     }

// public push(value: T): void{
//         if(this.isFull()){
//             console.log("Stack Overflow: Cannot push, the stack is full.")
//             return
//         } else{
//             this.items[this.top] = value
//             this.top++
//             console.log(`Pushed ${value} to the stack.`)
//             console.log(`Current Stack: ${this.items}`)
//         }
//     }

// public pop(): T | undefined {
//         if(this.isEmpty()){
//             console.log("Stack Underflow: Cannot pop, the stack is empty.")
//             return undefined
//         } else {
//             const removedItem = this.items[this.top]
//             this.top--
//             console.log(`Popped ${removedItem} from the stack.`)
//             return this.items[this.top]
//         }
//     }

// public peek(): T | null {
//         if(this.isEmpty()){
//             console.log("Stack is empty: Cannot peek.")
//             return null
//         } return this.items[this.top]
//     }

// public size(): number{
//         return this.top + 1
//     }

// public print(): void {
//         if (this.isEmpty()) {
//             console.log("Stack is empty.");
//             return;
//         }

//         console.log("Top");

//         for (let i = this.top; i >= 0; i--) {
//             console.log("| " + this.items[i] + " |");
//         }
//     }

// }


// const stack = new Stack<T>(5);

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print();

// console.log(stack.peek());



// ====================  IMPLEMENTING A STACK USING A LINKED LIST.  ===============================

class StackNode<T> {
    value: T;
    next: StackNode<T> | null;


    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack<T>{
    private top: StackNode<T> | null;
    private size: number;

    constructor(){
        this.top = null;
        this.size = 0;
    }


    public push(value: T): void{
        const newNode = new StackNode(value);

        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    public pop(): T | null {
        if(!this.top || this.top === null){
            return null
        }
        const removedElement = this.top;
        this.top = this.top.next;
        this.size--;
        
        return removedElement.value;
    }

    public peek(): T | null{
        if(!this.top){
            return null;
        } 
        return this.top.value
    }

    public isEmpty(): boolean {
        return this.top === null
    }
    
    public stackSize(): number {
        return this.size
    }

    public print(){
        let currentElement = this.top

        while(currentElement !== null){
            console.log(currentElement.value);
            currentElement = currentElement.next;
        }
    }
}



