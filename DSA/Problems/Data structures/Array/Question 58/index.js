// You are given an array ‘ARR’ of size ‘N,’ and you have to tell the minimum number of elements that need to be removed such that the array contains all distinct elements. More formally, there should not be any ‘I’ and ‘J’ such that ‘I’ != ‘J’ and ‘ARR’[‘I’] = ‘ARR’[‘J’].

// For example:

// Given ‘N’ = 4,
// 'ARR' = { 1, 2, 1, 2}
// Then the answer is 2 because 1 and 2 are repeated once therefore we need to remove 2 elements.

// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:

// 1 <= ‘T’ <= 10
// 1 <= ‘N’ <= 5000
// 0 <= 'ARR[i]’ <= 10 ^ 6

// Time Limit: 1 sec.

// Sample Input 1 :

// 2
// 4
// 1 2 1 2
// 5
// 3 6 7 12 13

// Sample Output 1 :

// 2
// 0

// Explanation of the Sample Input 1:

// In the first test case, there are 4 elements in the array and elements at index 2 and 3(0-based indexing) are repeated. Therefore we need to remove 2 elements to make this array of all distinct elements.

// In the second test case, there are 5 elements in the array and all the elements are unique therefore we don't need to remove any element from the array.

// Sample Input 2 :

// 2
// 4
// 1 1 1 1
// 5
// 1 2 3 1 2

// Sample Output 2 :

// 3
// 2

// C++ (g++ 5.4)
// 1
// 2
// 3
// 4
// 5
