//* Implement browser history (Medium).

// History class to manage browser history
class BrowserHistory {
  constructor() {
    this.historyStack = []; // Stack to store history states
    this.currentIndex = -1; // Index of the current state in the history stack
    this.onPopState = this.onPopState.bind(this);
    window.addEventListener("popstate", this.onPopState);
  }

  // Method to navigate to a new URL
  navigate(url) {
    // Update the browser's address bar
    history.pushState({}, "", url);

    // Add the new state to the history stack
    this.historyStack.push(url);
    this.currentIndex = this.historyStack.length - 1;
  }

  // Method to handle popstate event
  onPopState(event) {
    // Update the currentIndex to reflect the current state
    this.currentIndex = this.historyStack.indexOf(location.pathname);

    // Perform any necessary actions based on the current state
    // For example, update the UI to reflect the current state
    console.log("Current URL:", location.pathname);
  }

  // Method to navigate back to the previous state
  goBack() {
    if (this.currentIndex > 0) {
      history.back();
    }
  }

  // Method to navigate forward to the next state
  goForward() {
    if (this.currentIndex < this.historyStack.length - 1) {
      history.forward();
    }
  }
}

// Create an instance of BrowserHistory
const browserHistory = new BrowserHistory();

// Example usage:
browserHistory.navigate("/page1"); // Navigate to /page1
browserHistory.navigate("/page2"); // Navigate to /page2
browserHistory.goBack(); // Go back to /page1
browserHistory.goForward(); // Go forward to /page2
