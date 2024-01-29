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

root.render(jsxSyntax);
