const graph = [[0,2], [2,3], [2,1],[1,3]];

const adjacencyList = {
    0:[2],
    2:[0, 3,1],
    3:[2,1],
    1:[2,3],
}

class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacencyList = {

        }
    }
    // addVertex(val){
    //     this.adjacencyList[val] = [];
    //     return this;
    // }
    addEdge(node1, node2){
        if(this.adjacencyList[node1]){
            this.adjacencyList[node1].push(node2)
        }else{
            this.adjacencyList[node1] = [node2];
            this.numberOfNodes++;
        }
        if(this.adjacencyList[node2]){
            this.adjacencyList[node2].push(node1);
        }else{
            this.adjacencyList[node2] = [node1];
            this.numberOfNodes++;
        }
        console.log(this.adjacencyList);
        console.log(this.numberOfNodes);
        return this.adjacencyList;
    }
}

let  gr = new Graph();
gr.addEdge(1,2);
gr.addEdge(1,3);
gr.addEdge(4,1);
gr.addEdge(2,3);
gr.addEdge(3,4);
gr.addEdge(5,6);
gr.addEdge(5,7)
