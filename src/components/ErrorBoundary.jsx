import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex items-center justify-center h-full min-h-[300px]">
          <div className="text-center max-w-md px-6">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Render Error</h3>
            <p className="text-sm text-gray-500 mb-4">This prototype threw an error during rendering.</p>
            <pre className="text-xs text-red-600 bg-red-50 rounded-lg p-4 text-left overflow-auto max-h-48">
              {this.state.error.message}
            </pre>
            <button
              onClick={() => this.setState({ error: null })}
              className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 underline underline-offset-2"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
