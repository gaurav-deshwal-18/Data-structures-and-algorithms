// A Directed Acyclic Graph (DAG) is a type of graph data structure where edges
// between nodes have a specific direction and do not form any cycles.
//  In other words, it's a graph with directed edges that never lead to a loop.

class DAGNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class DAG {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new DAGNode(value);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(fromNode, toNode) {
    fromNode.children.push(toNode);
  }

  // Topological Sorting (DFS-based)
  topologicalSort() {
    const visited = new Set();
    const result = [];

    const visit = (node) => {
      visited.add(node);
      node.children.forEach((child) => {
        if (!visited.has(child)) {
          visit(child);
        }
      });
      result.unshift(node.value); // Adding node to the beginning for topological order
    };

    this.nodes.forEach((node) => {
      if (!visited.has(node)) {
        visit(node);
      }
    });

    return result;
  }
}

// Example Usage:
const dag = new DAG();
const node1 = dag.addNode("A");
const node2 = dag.addNode("B");
const node3 = dag.addNode("C");
const node4 = dag.addNode("D");

dag.addEdge(node1, node2);
dag.addEdge(node1, node3);
dag.addEdge(node2, node4);
dag.addEdge(node3, node4);

const topologicalOrder = dag.topologicalSort();
console.log("Topological Order:", topologicalOrder); // Output: ["A", "C", "B", "D"]