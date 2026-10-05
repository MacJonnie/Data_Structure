    class Graph {
        numberOfNodes: number;
        adjacentList: Record<string, string[]>;

        constructor() {
            this.numberOfNodes = 0;
            this.adjacentList = {};
        }
 
        addVertex(node: string) {
            if (!this.adjacentList[node]) {
                this.adjacentList[node] = [];
                this.numberOfNodes++;
                return this.adjacentList;
            } return "Node already exists";
    }

        addEdge(node1: string, node2: string) {
            if (this.adjacentList[node1] && this.adjacentList[node2]) return "Both nodes must exist in the graph before adding an edge.";

            this.adjacentList[node1].push(node2);
            this.adjacentList[node2].push(node1);
            return this.adjacentList;
        }

            showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}



const myGraph = new Graph();
myGraph.addVertex("0")
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")

myGraph.addEdge("0", "2");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "3");
myGraph.addEdge("2", "3");

myGraph.showConnections()