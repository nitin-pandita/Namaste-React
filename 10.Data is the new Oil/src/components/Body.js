import { useContext, useEffect, useState } from "react"; // importing as named import
import { MdToggleOff } from "react-icons/md";
import { Link } from "react-router-dom";
import useBodyData from "../utils/hooks/useBodyData";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import RestaurantContainer from "./RestaurantContainer";
import { withPromotedLabel } from "./RestaurantContainer";
import { Spin, Input } from "antd";
import UserContext from "../utils/UserContext";
const { Search } = Input;

const Body = () => {
  // local state variable - Super Powerful Variable
  const [listOfRest, setListOfRest] = useState([]);
  const [ListCopy, setListCopy] = useState([]);
  const [search, setSearch] = useState("");

  console.log("List of Restaurant", listOfRest);

  const RestaurantCardVeg = withPromotedLabel(RestaurantContainer);

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

  // useContext hook
  const { loggedUser, setUser } = useContext(UserContext);

  return listOfRest.length === 0 ? (
    <Spin
      size="large"
      className=" flex justify-center items-center h-[100vh] spin-large"
    />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="flex justify-between m-4">
          <Search
            placeholder="Enter Restaurant Name: "
            enterButton={
              <button
                onClick={handleSearch}
                className="p-3 bg-blue-500 text-white rounded-sm"
              >
                Search
              </button>
            }
            size="large"
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <input
            placeholder="Enter Restaurant Name: "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <button
            className="p-3 bg-blue-500 text-white rounded-sm"
            onClick={handleTopRes}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="flex justify-between m-4">
          <Search
            placeholder="Username: "
            enterButton={
              <button
                onClick={handleSearch}
                className="p-3 bg-blue-500 text-white rounded-sm"
              >
                Search
              </button>
            }
            size="large"
            className="search"
            value={loggedUser}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center items-center  "
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        {listOfRest.map((restaurant, key) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {
              // if the restaurant is veg then add a veg label to it
              restaurant.info.veg ? (
                <RestaurantCardVeg resData={restaurant} />
              ) : (
                <RestaurantContainer resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
