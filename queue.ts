/**
 * ========================  11-06-2026  =====================================
 *    QUEUE (Implementing QUEUE with the use of arrays and linkedlist).
 * The first-in, first-out structure behind scheduling, buffering, and breadth-first search -- plus the circular trick that makes if fast.
 * 
 *  -- Dequeuing is the process of removing an item from the front of the queue.
 *  -- Enqueuing is the process of adding an item to the back of the queue.
 *  -- A circular queue is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
 * 
 *  ABSTRACT DATA TYPE:
 * An Abstract Data Type (ADT) is a logical description of a data structure.
 * It defines:
 * What operations can be performed
 * What those operations should do
 * It does not define how those operations are implemented.
 * 
 * Think of an ADT as a contract or blueprint.
 * ADT = What
 * Data Structure = How
 * 
 * 
 * */

// ==================================== LinledList Queue ===============================================

// class QueueNode<T>{
//     value: T
//     next: QueueNode<T> | null

//     constructor(value: T){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedListQueue<T>{
//     private front: QueueNode<T> | null
//     private rear: QueueNode<T> | null
//     private size: number

//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     public isEmpty(): boolean{
//          return this.size === 0
//     }

//     public enqueue(value: T): void{
//         const newNode = new QueueNode(value)

//         if(this.front === null){
//             this.front = newNode
//             this.rear = newNode
//         } else{
//             this.rear!.next = newNode
//             this.rear = newNode
//         }
//             this.size++
//      }

//     public dequeue(): T | void{
//         if(this.isEmpty()){
//             console.log("This is an empty queue.")
//             return
//         }
    
//          const removedNode = this.front

//          this.front = this.front!.next;
//          this.size--;

//          if(this.front === null){
//              this.rear = null;
//          }
//          return removedNode!.value
//      }

//     public peek(): T | void {
//         if(this.isEmpty()){
//             console.log("This is an empty queue")
//             return
//         } return this.front!.value
//     }

//     public queueSize(): number | void{
//         return this.size
//     }

//     public printQueue(): void{
//         if(this.isEmpty()){
//             console.log("This is an empty queue")
//             return
//         }

//         let currentNode = this.front
//         console.log("Front ->")

//         while(currentNode !== null){
//             console.log(`>> ${currentNode.value} <<`)
//             currentNode = currentNode.next
//         }
//         console.log("<- Rear")
//     }
// }


// ========================================= Array Queue ================================================

// Queue with a linear array. When it get's full it stops and cannot take a new element.
// class ArrayQueue<T>{
//     private items: T[] 
//     private front: number 
//     private rear: number
//     private maxSize: number

//     constructor(maxSize: number){
//         this.items = []
//         this.front = 0
//         this.rear = 0
//         this.maxSize = maxSize
//     }

//     public isEmpty(): boolean {
//         return this.front === this.rear
//     }

//     public isFull(): boolean {
//         return this.front === this.maxSize
//     }

//     public enqueue(value: T):void{
//         if(this.isFull()){
//             console.log("This queue is full")
//             return
//         } 
//         this.items[this.rear] = value
//         this.rear++
//     }

//     public dequeue(){
//         if(this.isEmpty()){
//             console.log("This queue is empty")
//             return
//         }
//         const removedItem = this.front
//         this.items.pop()
//         return removedItem
//     } 
// }


// Queue with a circular array. This allows us to wrap the front and rear index around the array to allow for new elements at free indexes.
class CircularQueue<T>{
    private items: T[]
    private front: number
    private rear: number
    private maxSize: number
    private size: number

    constructor(maxSize: number){
        this.items = []
        this.front = 0
        this.rear = 0
        this.maxSize = maxSize
        this.size = 0
    }

    public isEmpty(): boolean{
        return this.size === 0
    }

    public isfull(): boolean{
        return this.size === this.maxSize
    }

    public enqueue(value: T): void{
        if(this.isfull()){
            console.log("This queue is full")
            return
        }
        this.items[this.rear] = value
        this.rear = (this.rear + 1) % this.maxSize
        this.size++
    }

    public dequeue(): T | undefined{
        if(this.isEmpty()){
            console.log("This queue is empty")
            return
        }
        const removedItem = this.items[this.front]
        this.front = (this.front + 1) % this.maxSize
        this.size--
        return removedItem
    }

    public peek(): T | undefined {
        if (this.isEmpty()) {
            console.log("This queue is empty")
            return
        }
        return this.items[this.front]
    }
}


// class Myqueue<T>{
//     private input: Stack<T>
//     private output: Stack<T>

//     constructor(){
//         this.input = Stack<T>
//         this.output = Stack<T>
//     }
// }