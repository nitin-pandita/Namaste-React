import RestaurantContainer from "./RestaurantContainer";
import { resList } from "../utils/resData";
import { useState } from "react"; // importing as named import
const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState(resList);

  // common javaScript variable
  let listOfRest2 = [
    {
      type: "restaurant",
      data: {
        id: "334475",
        name: "KFC",
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
        avgRating: "3.8",
        totalRatings: 500,
        new: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "332475",
        name: "Domonios",
        area: "BTM Layout",
        totalRatingsString: "600+ ratings",
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
        avgRating: "4.8",
        totalRatings: 500,
        new: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "332495",
        name: "MCS",
        area: "BTM Layout",
        totalRatingsString: "600+ ratings",
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
        avgRating: "4.8",
        totalRatings: 500,
        new: false,
      },
    },
  ];
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
