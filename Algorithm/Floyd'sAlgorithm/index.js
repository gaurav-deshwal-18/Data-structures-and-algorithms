// Floyd's algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph.
// It calculates the shortest distances between every pair of vertices in the graph.

// Here's a simplified explanation of Floyd's algorithm:

//     Initialize the Distance Matrix: Start by initializing a matrix that represents the shortest distances between every
//     pair of vertices. Initially, the matrix contains direct
//     edge weights between vertices, and for vertices that are not directly connected, the distance is set to infinity.

//     Iterate Through Vertices: Consider each vertex as an intermediate vertex and try to improve the shortest path
//     between every pair of vertices using this intermediate vertex.

//     Update the Distance Matrix: For every pair of vertices i and j, check if going through an intermediate vertex
//      k shortens the path between i and j. If it does, update the shortest distance between i and j through vertex k.

//     Repeat Until All Paths are Checked: Keep iterating and updating the matrix until all vertices are considered
//     as intermediate vertices, ensuring that you've found the shortest paths between all pairs of vertices.

function floydWarshall(graph) {
  const numVertices = graph.length;
  const dist = [];

  // Initialize the distance matrix with the given graph
  for (let i = 0; i < numVertices; i++) {
    dist[i] = [];
    for (let j = 0; j < numVertices; j++) {
      if (i === j) {
        dist[i][j] = 0; // Distance to itself is 0
      } else if (graph[i][j] === 0 || !graph[i][j]) {
        dist[i][j] = Infinity; // If there's no direct edge, set distance to Infinity
      } else {
        dist[i][j] = graph[i][j]; // Set distance to the edge weight
      }
    }
  }

  // Calculate shortest paths using dynamic programming
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (
          dist[i][k] !== Infinity &&
          dist[k][j] !== Infinity &&
          dist[i][k] + dist[k][j] < dist[i][j]
        ) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Example usage:
const graph = [
  [0, 3, 0, 7],
  [8, 0, 2, 0],
  [5, 0, 0, 1],
  [2, 0, 0, 0],
];

const shortestPaths = floydWarshall(graph);
console.log(shortestPaths);
