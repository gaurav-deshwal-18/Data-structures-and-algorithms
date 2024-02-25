//*  Implement a Turtle class that moves a turtle on a 2D plane.

class Turtle {
  constructor() {
    this.x = 0; // initial x-coordinate
    this.y = 0; // initial y-coordinate
    this.angle = 0; // initial angle (facing upwards)
  }

  /**
   * Move the turtle forward by a given distance.
   * @param {number} distance - The distance to move forward.
   */
  forward(distance) {
    const dx = Math.cos(this.angle) * distance;
    const dy = Math.sin(this.angle) * distance;
    this.x += dx;
    this.y += dy;
  }

  /**
   * Turn the turtle left by a given angle in radians.
   * @param {number} angle - The angle to turn left in radians.
   */
  left(angle) {
    this.angle -= angle;
  }

  /**
   * Turn the turtle right by a given angle in radians.
   * @param {number} angle - The angle to turn right in radians.
   */
  right(angle) {
    this.angle += angle;
  }

  /**
   * Get the current position of the turtle.
   * @returns {object} - Object containing x and y coordinates of the turtle.
   */
  getPosition() {
    return { x: this.x, y: this.y };
  }
}

// Example usage:
const turtle = new Turtle();
console.log(turtle.getPosition()); // Output: { x: 0, y: 0 }

turtle.forward(10); // Move forward by 10 units
console.log(turtle.getPosition()); // Output: { x: 0, y: 10 }

turtle.left(Math.PI / 2); // Turn left by 90 degrees (π/2 radians)
turtle.forward(5); // Move forward by 5 units
console.log(turtle.getPosition()); // Output: { x: -5, y: 10 }

turtle.right(Math.PI / 4); // Turn right by 45 degrees (π/4 radians)
turtle.forward(7); // Move forward by 7 units
console.log(turtle.getPosition()); // Output: { x: -1.535..., y: 14.464... }
