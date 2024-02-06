// Header
// - Logo
// - Nav Links

// Body
//  -Search
//  - Card Container
//  - Restaurant Card
// - img
// name of res
// card rating
// cuisines
// Delivery time

// Footer
// - Logo
// - Links
// Copyright

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
