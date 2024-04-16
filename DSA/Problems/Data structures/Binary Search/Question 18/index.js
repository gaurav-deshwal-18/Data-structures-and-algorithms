//* Allocate Minimum Number of Pages from N books to M students

function countStudents(arr, pages) {
  var n = arr.length;
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
    if (pagesStudent + arr[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      students++;
      pagesStudent = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  if (m > n) return -1;

  var left = Math.max(...arr);
  var right = arr.reduce((a, b) => a + b, 0);
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var students = countStudents(arr, mid);
    if (students > m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var m = 4;
var ans = findPages(arr, n, m);
console.log("The answer is: " + ans);
