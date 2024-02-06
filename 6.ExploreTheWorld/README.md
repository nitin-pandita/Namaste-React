# Exploring the World

## Monolith Architecture :

A monolithic architecture is the traditional unified model for the design of a [software](https://www.techtarget.com/searchapparchitecture/definition/software) program. Monolithic, in this context, means "composed all in one piece."

## Microservices Architecture :

Microservices - also known as the [microservice architecture](https://microservices.io/patterns/microservices.html) - is an architectural style that structures an application as a collection of services that are:

- [Independently deployable](https://microservices.io/post/architecture/2022/05/04/microservice-architecture-essentials-deployability.html)
- [Loosely coupled](https://microservices.io/post/architecture/2023/03/28/microservice-architecture-essentials-loose-coupling.html)

## Difference :

![https://d1.awsstatic.com/Developer Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png](https://d1.awsstatic.com/Developer Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png)

In microservice, we don’t have any language barrier. We used mutiple tech stack in the microservice for different services.

- In microservice project each service runs on different port.

## UI services fetches data from the backend in two different ways:

There are two approaches for it:

1. Loads WebPage —→ API’s —→ Renders
    
    Let’s say the API’s takes 500 ms to load so our page will wait for 500 ms to render the data.
    
2. Loads WebPage —→ Render —→ API —→ Re-Render with new data

React is fast because it has better rendering. In react we follow the second Approach.

## **useEffect():**

**useEffect()** is a react hook function that take two arguments:

1. Callback function
2. Dependency Array

```jsx
useEffect(() => {
    console.log("Use Effect called")
  },[])
```

When the body component is render and as soon as the render cycle is finished it will quickly render the useEffect callback function.

```jsx
import RestaurantContainer from "./RestaurantContainer";
import { resList } from "../utils/resData";
import { useState, useEffect } from "react"; // importing as named import

const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState(resList);

// this callback function is store and run after the component is rendered
  //? useEffect()
  useEffect(() => {
    console.log("Use Effect called");
  }, []);

// useEffect is rendered after the whole component is rendered
  console.log("Body is begin rendered...");

  // common javaScript variable
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterRes = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRest(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div
        className="Card-container"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        {listOfRest.map((restaurant, key) => (
          <RestaurantContainer key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

## Trying to fetch the API data from Swiggy:

```jsx
useEffect(() => {
    fetchData();
  }, []);

  // function for fetching the data
  const fetchData = async () => {
    // fetch is given us by browser that javascript use for fetching the data
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.742895&lng=74.8225962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
  };
```

What do you think will it work. Let’s run this and see.

![Untitled](Exploring%20the%20World%20ded54fd8bc104a9faab15f4029f4a1b0/Untitled.png)

We will get an error “localhost/:1 Access to fetch at '[https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.742895&lng=74.8225962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING](https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.742895&lng=74.8225962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING)' from origin '[http://localhost:1234](http://localhost:1234/)' has been blocked by CORS policy” 

### Q: What does CORS policy means ?

Ans: **Cross-Origin Resource Sharing** ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)-header-based mechanism that allows a server to indicate any [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin) (domain, scheme, or port) other than its own from which a browser should permit loading resources.

CORS will check the original origin host and the current host, if they are not same then the brower blocks the API and shows us error.

Now how to overcome this problem, there is an extension called “Allow CORS” which allows us to use swiggy API

## Conditional Rendering

```jsx
return listOfItem.length === 0 ? ( do something) : (otherwise do something)
```

> The useState in react is very usefull, the local state variable make it easy for us to update the value whenever the state is updated. React compares the changes and only update that component where the changes have been made, which helps in making it much faster rendering.
> 

## Searching Functionality :

Now we will be adding the searching functionality in our App

```jsx
import RestaurantContainer from "./RestaurantContainer";
import { resList } from "../utils/resData";
import { useState, useEffect } from "react"; // importing as named import
const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState(resList);
  const [ListCopy, setListCopy] = useState([]);
  const [search, setSearch] = useState("");
  console.log("Body is being rendered");
  //? useEffect()
  useEffect(() => {
    fetchData();
  }, []);

  // function for fetching the data
  const fetchData = async () => {
    // fetch is given us by browser that javascript use for fetching the data
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.742895&lng=74.8225962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      "Json data",
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListCopy(
      json.data.card
      );

    // setListOfRest(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  if (listOfRest === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
// making use of local state variable to update the value.
          <input
            placeholder="Enter Restaurant Name: "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

// converting all the name to lowercase for fixing the bug
          <button
            onClick={() => {
              const filterData = listOfRest.filter((res) =>
                res.data.name.toLowerCase().includes(search.toLowerCase())
              );

              setListCopy(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filterRes = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRest(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div
        className="Card-container"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        {ListCopy.map((restaurant, key) => (
          <div>
            <RestaurantContainer
              key={restaurant.data.id}
              resData={restaurant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

```

## Adding Login, LogOut toggle button:

```jsx
//Header Component
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
// created a useState for Login and Logout functionality
  const [isLogin, setIsLogin] = useState("LogOut");
  const toggleBtn = () => {
    setIsLogin((prevInterval) =>
      prevInterval === "LogOut" ? "Login" : "LogOut"
    );
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Orders</li>
          <li>Menu</li>
          <li>Account</li>
          <li>Cart</li>
          <button className="btn" onClick={toggleBtn}>
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
```