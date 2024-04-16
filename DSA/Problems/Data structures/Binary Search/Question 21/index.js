//* Split Array Largest Sum
var splitArray = (arr, k) => {
  let n = arr.length;

  let min = Infinity;

  let left = Math.max(...arr);

  let right = arr.reduce((acc, num) => acc + num, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let res = isPossible(arr, mid, n);

    if (res<=k) {
      min = Math.min(min, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
};

function isPossible(arr, cap, n) {
  let sum = 0;
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (sum + arr[i] <= cap) {
      sum += arr[i];
    } else {
      sum = arr[i];
      count++;
    }
  }
  return count;
}
