//*Factorial of large number using array

//* Time complexity ---> O(N)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  multiplyWithNumber(number) {
    let carry = 0;
    let current = this.head;

    while (current !== null) {
      let product = current.data * number + carry;
      current.data = product % 10;
      carry = Math.floor(product / 10);
      if (current.next === null && carry > 0) {
        current.next = new Node(carry);
        break;
      }
      current = current.next;
    }
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current !== null) {
      result = current.data + result;
      current = current.next;
    }

    return result;
  }
}

function factorial(n) {
  const result = new LinkedList();
  result.add(1);

  for (let i = 2; i <= n; i++) {
    result.multiplyWithNumber(i);
  }

  return result.toString();
}

const number = 100;
console.log(`Factorial of ${number} is:`, factorial(number));
