// Set vs Array

// Arrays can contain duplicate values whereas Sets cannot

// Insertion order is maintained in arrays but it is not the case with sets

// Searching and deleting an element in the set is faster compared to arrays

const set = new Set([1, 2, 3]);
set.add(4);
set.delete(2);

console.log(set.has(4));

console.log(set.size);

set.clear();

for (const item of set) {
  console.log(item);
}
