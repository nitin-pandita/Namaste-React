import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { class: "Kartik" },
  "Hello World ! From React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I am a H1 Tag"),
    React.createElement("h1", {}, "Welcome to React"),
    React.createElement("h1", {}, "Hey there I am a second h1 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
