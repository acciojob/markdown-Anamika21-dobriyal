import React, { useState, useEffect } from "react";
import { marked } from "marked"; // For parsing markdown
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(""); // State to store markdown input
  const [html, setHtml] = useState(""); // State to store converted HTML
  const [isLoading, setIsLoading] = useState(false); // State for loading

  // Effect to update HTML whenever markdown changes
  useEffect(() => {
    setIsLoading(true); // Show loading indicator
    const timer = setTimeout(() => {
      setHtml(marked(markdown)); // Convert markdown to HTML
      setIsLoading(false); // Hide loading indicator
    }, 500); // Simulate delay for rendering

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [markdown]);

  return (
    <div className="app">
      {/* Markdown Input Section */}
      <textarea
        className="textarea"
        placeholder="Write your markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      {/* Preview Section */}
      <div className="preview">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
}

export default App;

