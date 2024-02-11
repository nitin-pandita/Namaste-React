import { useEffect, useState } from "react"; // importing as named import
import { Link } from "react-router-dom";
import useBodyData from "../utils/hooks/useBodyData";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import RestaurantContainer from "./RestaurantContainer";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

import Shimer from "./Shimer";
const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState([]);
  const [ListCopy, setListCopy] = useState([]);
  const [search, setSearch] = useState("");

  const data = useBodyData();

  useEffect(() => {
    if (data) {
      const restaurant =
        data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];
      setListOfRest(restaurant);
      setListCopy(restaurant);
    }
  }, [data]);

  // handling search
  // handling search
  const handleSearch = () => {
    const filterData = ListCopy.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );

    setListOfRest(filterData);
  };

  // handling top rated
  const handleTopRes = () => {
    const filterRes = ListCopy.filter((res) => res.info.avgRating > 4);

    setListOfRest(filterRes);
  };

  // for finding the online and offline status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="offline">
        <MdToggleOff size={"130px"} color="red" />
        <h1>It looks like you are offline please connect to Internet !!</h1>
      </div>
    );
  }

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
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRes}>
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
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantContainer resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
