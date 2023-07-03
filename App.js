import React from "react";
import ReactDOM from "react-dom/client";

//JSX

const jsxHeading = <h1>Namste React using JSX</h1>;

// React component
// Class basd component - old
// Functional component - new
const Title = () => <h1>Hi, i'm a H1 tag</h1>;
// React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
