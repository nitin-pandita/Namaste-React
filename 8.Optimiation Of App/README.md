# Optimizing Our App

## **Single Responsibility Principal :**

This principle states that we have the Component we make for our Application. The Single Responsibility principle states that each component should have a single Responsibility. Creating a Restaurant Menu component should only show the restaurant menu.

This will help us in making our App more:

1. Manageable.
2. Testable.

## Creating our Custome Hooks:

Custom Hooks are not mandatory to create, but we use them to make our code :

- Reusable
- Readable
- Modular

In our code, we have a **RestaurantPage.js** page that fetches and displays the data. However, each Component should follow the **Single Responsibility Principle.** Here we can take the help of custom hooks where we can add the functionality of fetching the data and using that functionality in our **RestaurantPage.js**

### Now how to create a custom hook?

The custom hooks should follow a name convention. It should have “**use**” added to the functionality.

Eg: in RestaurantPage.js we need the fetch functionality, so we will create a hook called “useRestaurantPage.js” 

```jsx
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimer from "./Shimer";

const RestaurantPage = () => {
  const { resId } = useParams();

// we are using a custom hook and passing the resId
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimer />;

  const { name, cuisines, costForTwoMessage, city } =
    resInfo.cards[0]?.card?.card?.info;
  const resInfoSecondGroupedCard =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const itemCards1 = resInfoSecondGroupedCard?.cards[1]?.card?.card?.itemCards;
  const itemCards2 = resInfoSecondGroupedCard?.cards[2]?.card?.card?.itemCards;

  console.log("Item card 1", itemCards1);
  console.log("Item Card 2", itemCards2);

  return (
    <div className="resContainer">
      <h1>{name}</h1>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{costForTwoMessage}</h5>
      <h5>{city}</h5>
      <ul>
        {itemCards1 &&
          itemCards1.map((items) => (
            <div key={items.card.info.id}>
              <li>{items.card.info.name}</li>
              <div className="price">
                <h3>{items.card.info.itemAttribute.vegClassifier}</h3>
                <h5>${items.card.info.price / 100}</h5>
              </div>
            </div>
          ))}
      </ul>
      <ul>
        {itemCards2 &&
          itemCards2.map((items) => (
            <div key={items.card.info.id}>
              <li>{items.card.info.name}</li>
              <div className="price">
                <h3>{items.card.info.itemAttribute.vegClassifier}</h3>
                <h5>${items.card.info.price / 100}</h5>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
```

## Custom Hook “useRestaurant”:

```jsx
import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_URL}/${resId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  return resInfo;
};

export default useRestaurant;
```

### Now let’s create a custom hook to check whether the user is online or offline.

Now let’s think of it this way, what is the input of the hook and what is the output of the hook?

1. We will create a file in the hook folder and name it “**useOnlineStatus.js”.** 
2. We will implement the logic
    
    ```jsx
    import { useEffect, useState } from "react";
    
    const useOnlineStatus = () => {
      const [online, setOnline] = useState(true);
      useEffect(() => {
        window.addEventListener("online", () => {
          setOnline(true);
        });
    
        window.addEventListener("offline", () => {
          setOnline(false);
        });
      }, []);
      return online;
    };
    
    export default useOnlineStatus;
    ```
    
    We can implement this logic to find out whether the internet is up or not.
    
    ## In React Js we know the use of “parcel”, parcel bundles the whole app and creates a single file for all the all the components and files
    
    # Chunking or Code Splitting or Lazy Loading or On-demand Loading:
    
    ---
    
    Now we will be creating a spread bundle for  a new component let’s say **Grocery, it help in making the App much more optimized and efficient**
    
    Now for that, we will be making use of “**lazy**” coming from **react**.
    
    Let’s see how we can import it :
    
    ```jsx
    // it is a named component so we will be importing it inside the curly braces
    
    import {lazy} from 'react'
    ```
    
    This lazy function takes a call-back function and uses import to import the component
    
    ```jsx
    const Grocery = lazy(() => import("./components/Grocery"));
    ```
    
    We will see an error so to fix that error we need to wrap our **Grocery** component inside a
    
    **Suspense** Component
    
    ```jsx
    {
            path: "/grocery",
            element: (
              <Suspense fallback={<Shimer />}>
                <Grocery />
              </Suspense>
            ),
          },
    ```
    
    and inside the Suspense, we have a **fallback** that will render some message or JSX to display when the data is loading onto the component.