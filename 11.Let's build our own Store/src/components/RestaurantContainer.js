import { CDN_URL } from "../utils/constants";
import { Card } from "antd";
const { Meta } = Card;
const RestaurantContainer = ({ resData }) => {
  //   destructuring

  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    costForTwo,
    cuisines,
  } = resData.info;

  return (
    <Card
      hoverable
      className="flex items-center text-center  flex-col m-[10px]"
      style={{ width: 240, height: 500 }}
      cover={<img className="" src={CDN_URL + cloudinaryImageId} />}
    >
      <Meta title={name} style={{ color: "red" }} />
      <p className="w-[200px] h-auto m-2">{cuisines}</p>
      <h4>{deliveryTime}</h4>
      <p>{avgRating}</p>
      <h2>{costForTwo}</h2>
      <h5></h5>
    </Card>
  );
};

// Higher Order component

// input --> RestaurantCard --> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantContainer) => {
  return ({ props }) => {
    <div>
      <label>Vegetarian</label>
      <RestaurantContainer {...props} />
    </div>;
  };
};

export default RestaurantContainer;
