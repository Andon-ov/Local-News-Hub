import React from "react";

// This is a custom error boundary component that captures and handles errors in your application.

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the component state with hasError set to false.
    this.state = {
      hasError: false,
    };
  }

  // Static method that captures errors and updates the component's state.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Lifecycle method that logs errors to the console.
  componentDidCatch(error, errorInfo) {
    console.log("Error from componentDidCatch:", error);
  }

  render() {
    // Check if an error has occurred.
    if (this.state.hasError) {
      return (
        <div>
          {/* <h1>Sorry, an error occurred.</h1>
          <p>Please try again later or contact us for support.</p> */}

          <h1>Извинете, възникна грешка.</h1>
          <p>
            Моля, опитайте отново по-късно или се свържете с нас за поддръжка.
          </p>
        </div>
      );
    }

    // If no error has occurred, render the children components.
    return this.props.children;
  }
}

export default CustomErrorBoundary;
