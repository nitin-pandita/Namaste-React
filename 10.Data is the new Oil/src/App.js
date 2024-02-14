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

import { Spin } from "antd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Error from "./components/Error";
import Header from "./components/Header";
import Order from "./components/Order";
import RestaurantPage from "./components/RestaurantPage";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  // authentication logic

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = {
      name: "John Doe",
      email: "john@gamil.com",
      phone: "1234567890",
    };
    setUser(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser: user, setUser: setUser }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Spin />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
