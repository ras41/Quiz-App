import React from "react";

export default function Layout({ children }) {
  // Create a lot of shapes with varied positions
  const shapes = [
    // You can generate more or use map/random
    { type: "triangle", className: "top-5 left-10" },
    { type: "hexagon", className: "top-20 left-1/4" },
    { type: "diamond", className: "top-40 left-1/2" },
    { type: "triangle", className: "top-60 right-1/4" },
    { type: "hexagon", className: "top-10 right-10" },
    { type: "diamond", className: "top-80 left-20" },
    { type: "triangle", className: "bottom-32 right-1/3" },
    { type: "hexagon", className: "bottom-10 left-1/5" },
    { type: "diamond", className: "bottom-20 right-10" },
    { type: "circle", className: "bottom-26 right-19" },

    { type: "triangle", className: "top-1/2 left-10" },
    { type: "hexagon", className: "top-1/3 right-1/2" },
  ];

  const renderShape = (shape, index) => {
    const commonProps = `absolute opacity-30 floating-shape-slow w-8 h-8 ${shape.className}`;

    switch (shape.type) {
      case "triangle":
        return (
          <svg
            key={index}
            className={commonProps}
            viewBox="0 0 100 100"
            fill="none"
            stroke="#219ebc" // sky blue
            strokeWidth="2"
          >
            <polygon points="50,0 100,100 0,100" />
          </svg>
        );
      case "hexagon":
        return (
          <svg
            key={index}
            className={commonProps}
            viewBox="0 0 100 100"
            fill="none"
            stroke="#219ebc"
            strokeWidth="2"
          >
            <polygon points="25,10 75,10 100,50 75,90 25,90 0,50" />
          </svg>
        );
      case "diamond":
        return (
          <svg
            key={index}
            className={commonProps}
            viewBox="0 0 100 100"
            fill="none"
            stroke="#219ebc"
            strokeWidth="2"
          >
            <polygon points="50,0 100,50 50,100 0,50" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-soft-gradient overflow-hidden flex items-center justify-center p-4">
      {/* Background shapes */}
      {shapes.map((shape, index) => renderShape(shape, index))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl">{children}</div>
    </div>
  );
}
