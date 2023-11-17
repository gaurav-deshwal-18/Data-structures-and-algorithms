// ===============================
// * Kruskal's Algorithm Overview
// ===============================
// Kruskal's algorithm finds the minimum spanning tree (MST) in a connected, weighted graph,
// minimizing the total edge weight.

// -------------------------------
// * Algorithm Steps
// -------------------------------
// 1. Sort Edges by Weight:
//    - Arrange all graph edges in ascending order based on their weights.

// 2. Initialize an Empty MST:
//    - Create an empty set to hold the Minimum Spanning Tree.

// 3. Iterate through Edges:
//    - Starting with the smallest weighted edge, consider each edge sequentially.

// 4. Add Edge to MST:
//    - Add the edge to the MST if it doesn’t create a cycle in the current MST.

// 5. Continue Adding Edges:
//    - Repeat the process until all edges are considered or enough edges form a spanning tree.

// -------------------------------
// * Implementation in JavaScript
// -------------------------------
// To implement Kruskal's algorithm in JavaScript:
// - Sort edges by weight.
// - Use the union-find algorithm to check for cycles when adding edges to the MST.
