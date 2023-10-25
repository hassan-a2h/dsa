
function DFS(root, graph) {
  visit(root);

  for (const neighborIndex of root.neighbors) {
    const neighbor = graph
      .find(vertex => vertex.vertex === neighborIndex);

    if (!neighbor.isVisited) {
      DFS(neighbor, graph);
    }
  }
};

function visit(vertex) {
  console.log(vertex.vertex);
  vertex.isVisited = true;
};

module.exports = { DFS, visit };
