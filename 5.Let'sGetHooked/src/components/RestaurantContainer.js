import { CDN_URL } from "../utils/constants";

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
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines}</p>
      <h4>{deliveryTime}</h4>
      <p>{avgRating}</p>
      <h2>Two for {costForTwo / 100}</h2>
      <h5></h5>
    </div>
  );
};

export default RestaurantContainer;
