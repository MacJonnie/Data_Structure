class QueueNode<T>{
    value: T;
    priority: number;
    
    constructor(value: T, priority: number){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue<T>{
    private items: QueueNode<T>[];

    constructor(){
        this.items = [];
    }

// a PRIORITY QUEUE is a data structure that stores elements along with their associated priority. Elements with higher priority are served before elements with lower priority. In this implementation, we will use an array to store the elements and their priorities. This implementation will allow us to insert elements in O(n) time and remove elements in O(1) time. The enqueue operation will insert the new element in the correct position based on its priority, while the dequeue operation will remove the element with the highest priority (the first element in the array).

    public enqueue(value: T, priority: number): void{
        let newNode = new QueueNode(value, priority);

        let index = 0;
        while(index < this.items.length && this.items[index].priority > priority){ 
            index++;
        }
        this.items.splice(index, 0, newNode);
    }
}


/**
 * class QueueNode<T> {
    value: T;
    priority: number;

    constructor(value: T, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    private items: QueueNode<T>[];

    constructor() {
        this.items = [];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public enqueue(value: T, priority: number): void {
        const newNode = new QueueNode(value, priority);

        let index = 0;

        while (
            index < this.items.length &&
            this.items[index].priority > priority
        ) {
            index++;
        }

        this.items.splice(index, 0, newNode);
    }

    public dequeue(): T | null {
        if (this.isEmpty()) {
            console.log("This priority queue is empty");
            return null;
        }

        const removedNode = this.items.shift()!;

        return removedNode.value;
    }

    public peek(): T | null {
        if (this.isEmpty()) {
            console.log("This priority queue is empty");
            return null;
        }

        return this.items[0].value;
    }

    public queueSize(): number {
        return this.items.length;
    }

    public print(): void {
        if (this.isEmpty()) {
            console.log("This priority queue is empty");
            return;
        }

        console.log("Highest Priority ->");

        for (const node of this.items) {
            console.log(`>> ${node.value} (Priority: ${node.priority}) <<`);
        }

        console.log("<- Lowest Priority");
    }

 * 
 * 
 * 
 * 
 */








// View Queue Implementation Fix on ChatGPT