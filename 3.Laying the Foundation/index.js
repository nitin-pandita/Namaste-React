import React from "react";
import ReactDOM from "react-dom/client";

// using the react
//* React.createElement => JS Object => HTML
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Nitin React js Learning"
);

// jsx syntax
//*  JSX Code => React.createElement => JS Object => HTML

const jsxSyntax = <h1>Welcome to JSX </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// react element
const ele = <span>React Element</span>;

const title = (
  <div>
    <h1>Welcome to title</h1>
  </div>
);

// React Components
// Class Based Components : Later were used

// Functional Components : New way of writing code

const TitleComponent = () => (
  <h1 className="heading-welcome"> Welcome to the Title Component</h1>
);

const numbers = 10;

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1>{56 * numbers}</h1>
      <TitleComponent />
      <h1>Namasta Heading Components</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
