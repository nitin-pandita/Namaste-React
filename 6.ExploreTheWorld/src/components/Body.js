import RestaurantContainer from "./RestaurantContainer";
import { resList } from "../utils/resData";
import { useState, useEffect } from "react"; // importing as named import
import Shimer from "./Shimer";
const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState([]);
  const [ListCopy, setListCopy] = useState([]);
  const [search, setSearch] = useState("");
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

    setListCopy(json.data.card);

    setListOfRest(
      // optimal chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRest.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            placeholder="Enter Restaurant Name: "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              const filterData = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );

              setListOfRest(filterData);
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
              (res) => res.info.avgRating > 4
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
          <RestaurantContainer key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
