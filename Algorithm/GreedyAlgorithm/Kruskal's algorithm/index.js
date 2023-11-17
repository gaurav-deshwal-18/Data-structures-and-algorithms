// Kruskal's algorithm is used to find the minimum spanning tree (MST) in a connected, weighted graph.
// An MST is a subset of the edges that forms a tree including all the vertices, where
// the total edge weight is minimized.

// Here's a simple explanation of Kruskal's algorithm:

//     Sort Edges by Weight: Sort all the edges in the graph by their weights in ascending order.

//     Start with an Empty MST: Create an empty set to hold the MST.

//     Iterate through Edges: Starting with the smallest weighted edge, consider each edge one by one.

//     Add Edge to MST: Add the edge to the MST if including it doesn’t form a cycle in the current MST.

//     Continue Adding Edges: Continue this process until you've considered all the edges or added
//     enough edges to form a spanning tree.

// Implementing Kruskal's algorithm in JavaScript involves sorting the edges based on their weights
// and using the union-find algorithm to check for cycles when adding edges to the MST.

class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill(-1);
  }

  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }
    return this.find(this.parent[x]);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function kruskalMST(graph) {
  const numVertices = graph.length;
  const edges = [];

  // Populate edges array with { weight, src, dest } objects
  for (let i = 0; i < numVertices; i++) {
    for (let j = i + 1; j < numVertices; j++) {
      if (graph[i][j] !== 0) {
        edges.push({ weight: graph[i][j], src: i, dest: j });
      }
    }
  }

  // Sort edges by weight in ascending order
  edges.sort((a, b) => a.weight - b.weight);

  const mst = [];
  const unionFind = new UnionFind(numVertices);

  edges.forEach((edge) => {
    const { weight, src, dest } = edge;
    const rootSrc = unionFind.find(src);
    const rootDest = unionFind.find(dest);

    if (rootSrc !== rootDest) {
      mst.push(edge);
      unionFind.union(src, dest);
    }
  });

  return mst;
}

// Example usage:
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

const minimumSpanningTree = kruskalMST(graph);
console.log(minimumSpanningTree);
