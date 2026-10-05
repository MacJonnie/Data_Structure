/*
 * ===================================== DEQUE =====================================
 * This is a good next step because you've just finished queues, and a deque will show you something interesting: a single data structure can behave like both a queue and a stack depending on which operations you use.

1. What is a Deque?

Deque is short for Double-Ended Queue. A Deque is a linear data structure that allows you to insert and delete elements from both the front and the back ends.
It acts as a hybrid, generalized structure that combines the capabilities of both a Stack (Last-In-First-Out / LIFO) and a regular Queue (First-In-First-Out / FIFO) into a single entity.

Pronounced:

"deck"

Unlike a normal queue, where:
insert → REAR
remove → FRONT

There are ways to implement a deque, but the most common is to use a doubly linked list. This allows for O(1) insertion and deletion at both ends of the deque. The other way to implement a deque is to use a circular array, which is what we will do here. This allows for O(1) insertion and deletion at both ends of the deque, but it has a fixed size.
*/

// ===================================== DEQUE =====================================
class DequeNode<T> {
    value: T;
    next: DequeNode<T> | null
    prev: DequeNode<T> | null

    constructor(value: T){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedListDeque<T>{
    private front: DequeNode<T> | null
    private rear: DequeNode<T> | null
    private size: number

    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    public isEmpty(): boolean{
        return this.size === 0
    }

    public addFront(value: T): void{
        const newNode = new DequeNode(value)
        const currentFront = this.front
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
        } else{
            currentFront!.prev = newNode
            newNode.next = currentFront
            this.front = newNode
        }
        this.size++
    }

    public addRear(value: T): void{
        const newNode = new DequeNode(value)
        const currentRear = this.rear
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
        } else{
            currentRear!.next = newNode
            newNode.prev = currentRear
            this.rear = newNode
        }
        this.size++
    }

    public removefront(): T | null{
        if(this.isEmpty()){
            return null
        }
        const removedValue = this.front
        if(this.size === 1) {
            this.front = null
            this.rear = null
        } else {
        this.front = removedValue!.next
        this.front!.prev = null
        }
        this.size--
        return removedValue!.value
    }

    public removeRear(): T | null{
        if(this.isEmpty()){
            return null
        }
        const removedValue = this.rear
        if(this.size === 1) {
            this.front = null
            this.rear = null
        } else {
        this.rear = removedValue!.prev
        this.rear!.next = null
        }
        this.size--
        return removedValue!.value
    }

    public peekFront(): T | null{
        if(this.size === 0){
            return null
        } 
        return this.front!.value
    }

    public peekRear(): T | null{
        if(this.size === 0){
            return null
        } 
        return this.rear!.value
    }

    public dequeSize(): number | null{
        return this.size
    }

    public print(): void{
        if(this.isEmpty()){
            console.log("This queue is empty")
            return
        }

        let currentNode = this.front
        console.log("Front ->")
        while(currentNode !== null){
            console.log(`>> ${currentNode!.value} <<`)
            currentNode = currentNode!.next
        }
        console.log("Rear")
    }


}

const deque = new DoublyLinkedListDeque<number>()