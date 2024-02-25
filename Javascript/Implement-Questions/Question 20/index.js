//* Implement a class that can subscribe to and emit events that
//*  trigger attached callback functions.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Subscribe to an event.
   * @param {string} eventName - The name of the event to subscribe to.
   * @param {function} callback - The callback function to be triggered when the event occurs.
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  /**
   * Emit an event, triggering all attached callback functions.
   * @param {string} eventName - The name of the event to emit.
   * @param  {...any} args - Arguments to pass to the callback functions.
   */
  emit(eventName, ...args) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback(...args);
      });
    }
  }

  /**
   * Unsubscribe from an event.
   * @param {string} eventName - The name of the event to unsubscribe from.
   * @param {function} callback - The callback function to be removed.
   */
  unsubscribe(eventName, callback) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter((cb) => cb !== callback);
    }
  }
}

// Example usage:
const emitter = new EventEmitter();

// Subscribe to an event
emitter.subscribe("message", (data) => {
  console.log("Message received:", data);
});

// Emit an event
emitter.emit("message", "Hello, world!");

// Unsubscribe from an event
const callback = () => {
  console.log("This should not be called.");
};
emitter.subscribe("test", callback);
emitter.emit("test");
emitter.unsubscribe("test", callback);
emitter.emit("test"); // This should not trigger the callback
