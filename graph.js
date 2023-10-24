// Implement Graph in js using adjacency list
// The graph is considered to be a bi-directional Graph
// Currently, only numbers/integers are supported as valid vertices

function createGraph() {
  let connections = [];       // stores vertices and connections
  let totalVertices = 0;
  let edges = 0;

  const addEdge = (v1, v2) => {       // v1 stand for vertex1
    if (!connections.some(vertex => vertex.vertex === v1)) {
      addVertex(v1);
    }
    if (!connections.some(vertex => vertex.vertex === v2)) {
      addVertex(v2);
    }

    let vertex1 = connections.find(vertex => vertex.vertex === v1);
    let vertex2 = connections.find(vertex => vertex.vertex === v2);

    vertex1.neighbors.push(v2);
    vertex2.neighbors.push(v1);
    edges += 2;
    console.log('Edge Inserted');
  }

  const addVertex = (v) => {
    let vertex = {
      vertex: v,
      neighbors: [],
    };

    console.log(`Node: ${v} inserted to graph`);
    connections.push(vertex);
    totalVertices++;
  }

  const displayGraph = () => {
    console.table(connections);
  }

  // return only the methods that are required for use.
  return {
    addEdge, 
    displayGraph,
  };
}

const G1 = createGraph();

G1.addEdge(15, 100);
G1.addEdge(15, 11);
G1.addEdge(15, 17);
G1.addEdge(100, 50);
G1.addEdge(50, 11);
G1.addEdge(50, 17);
G1.addEdge(17, 19);

G1.displayGraph();

// In order to use same implementation in future
export default createGraph;