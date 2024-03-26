// Aakash is a member of Ninja club. He has a weird family structure. Every male member (M) gives birth to a male child first and then a female child, whereas every female (F) member gives birth to a female child first and then to a male child. Aakash analyses this pattern and wants to know what will be the Kth child in his Nth generation. Can you help him?

// A sample generation tree is shown, where ‘M’ denotes the male member and ‘F’ denotes the female member.

function findKthChildGender(N, K) {
  // Determine if the generation is even or odd
  // If even, the first child is male, otherwise, it's female
  let isEvenGeneration = N % 2 === 0;

  // Determine if the Kth child is in the first half or second half
  // If K is odd, it's in the first half, otherwise, it's in the second half
  let isFirstHalf = K % 2 !== 0;

  // If generation is even, the first child is male, otherwise female
  // If K is odd, first half is male, otherwise female
  // So, if both are equal, it's a male child, otherwise female
  return isEvenGeneration === isFirstHalf ? "M" : "F";
}

// Example usage:
const N = 3; // Generation number
const K = 5; // Child number
const gender = findKthChildGender(N, K);
console.log(
  `The gender of the ${K}th child in the ${N}th generation is: ${gender}`,
);
