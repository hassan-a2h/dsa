// Implement Graph in js using adjacency list
// The graph is considered to be a bi-directional Graph
// Currently, only numbers/integers are supported as valid vertices

const { DFS } = require('./DFS');

class Graph {
  #connections = [];       // stores vertices and connections
  #totalVertices = 0;
  #edges = 0;

  constructor() {}

  addEdge(v1, v2) {       // v1 stand for vertex1
    if (!this.#connections.some(vertex => vertex.vertex === v1)) {
      this.addVertex(v1);
    }
    if (!this.#connections.some(vertex => vertex.vertex === v2)) {
      this.addVertex(v2);
    }

    let vertex1 = this.#connections.find(vertex => vertex.vertex === v1);
    let vertex2 = this.#connections.find(vertex => vertex.vertex === v2);

    vertex1.neighbors.push(v2);
    vertex2.neighbors.push(v1);
    this.#edges += 2;
    console.log('Edge Inserted');
  }

  addVertex(v) {
    let vertex = {
      vertex: v,
      isVisited: false,
      neighbors: [],
    };

    console.log(`Node: ${v} inserted to graph`);
    this.#connections.push(vertex);
    this.#totalVertices++;
  }

  displayGraph() {
    console.table(this.#connections);
  }

  depthFirstSearch() {
    console.log('Depth First Traversal: ');
    DFS(this.#connections[0], this.#connections);
  }

  get vertices() {
    return this.#totalVertices;
  }

  get edgeCount() {
    return this.#edges;
  }
}

const G1 = new Graph();

G1.addEdge(15, 100);
G1.addEdge(15, 11);
G1.addEdge(15, 17);
G1.addEdge(100, 50);
G1.addEdge(50, 11);
G1.addEdge(50, 17);
G1.addEdge(17, 19);

G1.displayGraph();
G1.depthFirstSearch();

// In order to use same implementation in future
module.exports = Graph;