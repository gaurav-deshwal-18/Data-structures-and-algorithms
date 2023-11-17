// Dijkstra's algorithm is used to find the shortest path from a starting node to all other
// nodes in a graph with non-negative edge weights. It's like finding the shortest route on a
// map where each road has a certain distance.

// Here's a simplified explanation of Dijkstra's algorithm:

//     Start at the Source Node: Begin with the starting node and set its distance from itself to 0.
//     Set the distance of all other nodes to infinity (or a very large number) initially.

//     Explore Neighbors: Explore the neighbors of the current node and update their distances if
//     a shorter path is found through the current node.

//     Choose the Closest Unvisited Node: Among the unvisited nodes, choose the one with the smallest
//     distance and mark it as visited.

//     Repeat Until All Nodes are Visited: Keep repeating steps 2 and 3 until all nodes are visited or
//     until you have found the shortest path to the desired nodes.

function dijkstra(graph, start) {
  const numVertices = graph.length;
  const distances = Array(numVertices).fill(Infinity);
  const visited = Array(numVertices).fill(false);

  distances[start] = 0;

  for (let i = 0; i < numVertices - 1; i++) {
    const minDistanceIndex = findMinDistance(distances, visited);
    visited[minDistanceIndex] = true;

    for (let j = 0; j < numVertices; j++) {
      if (
        !visited[j] &&
        graph[minDistanceIndex][j] !== 0 &&
        distances[minDistanceIndex] !== Infinity &&
        distances[minDistanceIndex] + graph[minDistanceIndex][j] < distances[j]
      ) {
        distances[j] = distances[minDistanceIndex] + graph[minDistanceIndex][j];
      }
    }
  }

  return distances;
}

function findMinDistance(distances, visited) {
  let min = Infinity;
  let minIndex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && distances[i] <= min) {
      min = distances[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// Example usage:
const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

const shortestPaths = dijkstra(graph, 0);
console.log(shortestPaths);
