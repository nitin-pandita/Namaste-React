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
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Order from "./components/Order";
import RestaurantPage from "./components/RestaurantPage";
const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// configuration : some info that will tell the browser router what will happen on a specific path

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
