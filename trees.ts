class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    public preOrderTraversal(node: TreeNode<T> | null): void {
        if(node === null){
            return;
        }

        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    public inOrderTraversal(node: TreeNode<T> | null): void {
        if(node === null){
            return;
        }

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    public postOrderTraversal(node: TreeNode<T> | null): void {
        if(node === null){
            return;
        }

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }

    public levelOrderTraversal(): void {
        if(this.root === null){
            return
        }

        const queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while(queue.length > 0){
            const currentNode = queue.shift()!;
            console.log(currentNode.value);

            if(currentNode.left !== null){
                queue.push(currentNode.left)
            }
            if(currentNode.right !== null){
                queue.push(currentNode.right)
            }

        }
    }

}



class BinarySearchTree{
    root: TreeNode<number> | null;

    constructor() {
        this.root = null;
    }

    public insert(value: number): void {
        const newNode = new TreeNode(value);

        if(this.root === null){
            this.root = newNode;
            return;
        }

        let currentNode = this.root

        while(true){
            if(value < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null){
                    currentNode.right =  newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    public search(value: number): boolean {
        if(this.root === null){
            return false;
        }

        let currentNode = this.root;

        while(currentNode !== null){
            if(value === currentNode.value){
                return true;
            } if(value < currentNode.value){
                currentNode = currentNode.left!
            } else {
                currentNode = currentNode.right!
            }
        }
        return false;
    }
    
    public delete(value: number): void{
        let currentNode = this.root;  // Get the current node starting from the root.
        let parentNode: TreeNode<number> | null = null; // Keep track of the parent node.

        // Search for the node to be deleted.
        while(currentNode !== null && currentNode.value !== value){
            parentNode = currentNode;
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        } 
        if(currentNode === null) {
            console.log("Value not found in the tree.");
            return
        }

        console.log("Target:", currentNode?.value);
        console.log("Parent:", parentNode?.value);

    }

    


}


const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.insert(10);

console.log(bst.root);

bst.delete(40);
bst.delete(30);
bst.delete(50);
bst.delete(999);


