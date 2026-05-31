import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
          <img
            src="/images/LogoNOBG.webp"
            alt="Arabian Amenity Travels"
            className="w-24 h-auto mb-6 opacity-80"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Something went wrong
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md mb-8">
            We're sorry for the inconvenience. Please try refreshing the page
            or return to the homepage.
          </p>
          <button
            onClick={this.handleReset}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Return to Homepage
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;