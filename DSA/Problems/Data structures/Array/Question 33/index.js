/**
 * Penality for a shop
 *
 * Input: customers = "YYNY"
 * Output: 2
 * Explanation:
 * - Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
 * - Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
 * - Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
 * - Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
 * - Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
 * Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.
 */

function bestClosingTime(customers) {
  let length = customers.length;
  let totalY = 0;
  let totalN = 0;
  let minValue = Infinity;
  let minIndex = 0;

  for (let i = 0; i < length; i++) {
    if (customers[i] === "Y") {
      totalY++;
    }
  }

  for (let i = 0; i <= length; i++) {
    if (totalN + totalY < minValue) {
      minValue = totalN + totalY;
      minIndex = i;
    }

    if (i >= length) {
      break;
    }

    let char = customers[i];

    if (char === "N") {
      totalN++;
    }

    if (char === "Y") {
      totalY--;
    }
  }

  return minIndex;
}

// Test
const customers = "YYNY";
console.log(bestClosingTime(customers)); // Output: 2
