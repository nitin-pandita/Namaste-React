# Talk is Cheap, Show me the Code

So in today's Learning, we will build a **Food Ordering** **App.**

To build an application there are some steps we need to follow

# Stage 1: Planning.

1. **Designing: We need to have a raw design of our layout, how will it look like. This will make the coding part much easier and simpler**
    
    ![Food ordering app.jpg](Talk%20is%20Cheap,%20Show%20me%20the%20Code%2092bb3373fa944cf0a46261fff1e65974/Food_ordering_app.jpg)
    
2. **Number of Components : Now we need to have an idea of how many components will our App have.**
3. **Start Coding the Layout :**
    
     ****
    
    ```jsx
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
    
    const Header = () => {
      return (
        <div className="header">
          <div className="logo-container">
            <img
              className="logo"
              src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>Orders</li>
              <li>Menu</li>
              <li>Account</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      );
    };
    
    // restaurant container
    const RestaurantContainer = () => {
      return (
        <div className="res-card">
          <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rjffhtmjxelmcdbe9nbd"
            alt="res image"
          />
          <h3>Cookie and Crumb</h3>
          <h5>Pizza, Cheese, Indian</h5>
          <h4>4.3 Rating</h4>
          <h4>38 min</h4>
        </div>
      );
    };
    
    // body container
    
    const Body = () => {
      return (
        <div className="body">
          <div className="search">search</div>
          <div
            className="Card-container"
            style={{
              backgroundColor: "#f0f0f0",
            }}
          >
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
            <RestaurantContainer />
          </div>
        </div>
      );
    };
    
    const AppLayout = () => {
      return (
        <div className="app">
          <Header />
          <Body />
        </div>
      );
    };
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(<AppLayout />);
    ```
    
    Output: 
    
    ![Untitled](Talk%20is%20Cheap,%20Show%20me%20the%20Code%2092bb3373fa944cf0a46261fff1e65974/Untitled.png)
    
    Now you see how we can reuse different components inside another component. Now here you can see we have the same name, rating and other stuff.
    
    Now the question arises how can we see them? Is there any way to give different names to different cards?
    
    The answer is Yes, using “ **props “.**
    
    ## Props, also known as properties, are used similarly to passing arguments in a function.
    
    ```jsx
    <RestaurantContainer
              resName="Himalayan Food"
              cuisines="Biryani, Burger, Pizza"
            />
            <RestaurantContainer
              resName="Marathi Food"
              cuisines="Wada Pao, Burger, Pizza"
            />
    ```
    
    Inside the **<RestaurantContainer />** we are passing props. The Props that we are passing is an **Object.**
    
    ```jsx
    const RestaurantContainer = (props) => {
    // we consoling the props out
      console.log(props);
      return (
        <div className="res-card">
          <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rjffhtmjxelmcdbe9nbd"
            alt="res image"
          />
          <h3>Cookie and Crumb</h3>
          <h5>Pizza, Cheese, Indian</h5>
          <h4>4.3 Rating</h4>
          <h4>38 min</h4>
        </div>
      );
    };
    ```
    
    Output
    
    We will get two Objets.
    
    ![Untitled](Talk%20is%20Cheap,%20Show%20me%20the%20Code%2092bb3373fa944cf0a46261fff1e65974/Untitled%201.png)
    
    Now we can make our card dynamic using “Props”
    
    ```jsx
    const RestaurantContainer = (props) => {
      console.log(props);
      return (
        <div className="res-card">
          <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rjffhtmjxelmcdbe9nbd"
            alt="res image"
          />
    // using that object and changing it with the props that we passed in the RestaurantConatainer
          <h3>{props.resName}</h3>
          <h5>Pizza, Cheese, Indian</h5>
          <h4>4.3 Rating</h4>
          <h4>38 min</h4>
        </div>
      );
    };
    ```
    
    > *When we want to dynamically pass the data into a component we use **Props***
    > 
    
    ### We can also de-structure the Props
    
    ```jsx
    					 	              	// restructuring it 
    const RestaurantContainer = ({ resName, cuisines }) => {
      return (
        <div className="res-card">
          <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rjffhtmjxelmcdbe9nbd"
            alt="res image"
          />
          <h3>{resName}</h3>
          <h5>{cuisines}</h5>
          <h4>4.3 Rating</h4>
          <h4>38 min</h4>
        </div>
      );
    };
    ```
    
    ### **Config Driven UI** :
    
    Config drives the UI. It gets updated as per the location, Event, etc
    
    Now the data we have used is hardcoded data that will not dynamically change. So we make the data change dynamically we can use an API , that is in “JSON format”.
    
    eg : 
    
    ```json
    {
        type: "restaurant",
        data: {
          type: "F",
          id: "334475",
          name: "KFC",
          uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
          city: "1",
          area: "BTM Layout",
          totalRatingsString: "500+ ratings",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          tags: [],
          costForTwo: 40000,
          costForTwoString: "₹400 FOR TWO",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          slaString: "36 MINS",
          lastMileTravel: 3.5,
          slugs: {
            restaurant: "kfc-btm-layout-btm",
            city: "bangalore",
          },
          cityState: "1",
          address:
            "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
          locality: "2nd Stage",
          parentId: 547,
          unserviceable: false,
          veg: false,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "FREE DELIVERY",
            shortDescriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          aggregatedDiscountInfoV2: {
            header: "",
            shortDescriptionList: [
              {
                meta: "Free Delivery",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FREE DELIVERY",
                discountType: "FREE_DELIVERY",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
          },
          ribbon: [
            {
              type: "PROMOTED",
            },
          ],
          chain: [],
          feeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
          },
          lastMileTravelString: "3.5 kms",
          hasSurge: false,
          sla: {
            restaurantId: "334475",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 3.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
          },
          promoted: true,
          avgRating: "3.8",
          totalRatings: 500,
          new: false,
        },
        subtype: "basic",
      },
    ```
    
    This a JSON data that we can use to update the data in the DOM automatically
    
    Now how can we do that :
    
    ```jsx
    const Body = () => {
      return (
        <div className="body">
          <div className="search">search</div>
          <div
            className="Card-container"
            style={{
              backgroundColor: "#f0f0f0",
            }}
          >
    //Inside the div we are going to map through the JSON file and extract the data from it
            {resList.map((restaurant, key) => (
              <RestaurantContainer key={key} resData={restaurant} />
            ))}
          </div>
        </div>
      );
    };
    ```
    
    We are passing the props in the Restaurant Functional Component
    
    ```jsx
    const RestaurantContainer = ({ resData }) => {
      //   destructuring
    
      const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        costForTwo,
        cuisines,
      } = resData.data;
    
      return (
        <div className="res-card">
          <img
            className="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          />
          <h3>{name}</h3>
          <p>{cuisines}</p>
          <h4>{deliveryTime}</h4>
          <p>{avgRating}</p>
          <h2>Two for {costForTwo / 100}</h2>
          <h5></h5>
        </div>
      );
    };
    
    // body container
    
    const Body = () => {
      return (
        <div className="body">
          <div className="search">search</div>
          <div
            className="Card-container"
            style={{
              backgroundColor: "#f0f0f0",
            }}
          >
            {resList.map((restaurant, key) => (
              <RestaurantContainer key={key} resData={restaurant} />
            ))}
          </div>
        </div>
      );
    };
    ```
    
    ## Role of Key in React :
    
    Key plays a very crucial role in react when we are mapping over data it is very important to give each element a unique ID because if we don't give the unique key to each element it will result in re-rendering of elements. React will not know which element was already there and which element came now, as a result, it will re-render the elements. 
    
    Providing a unique key to each element will help in the Optimization of the Application.