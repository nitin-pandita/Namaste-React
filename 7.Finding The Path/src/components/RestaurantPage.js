import { useEffect, useState } from "react";
import Shimer from "./Shimer";

import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantPage = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    //converting this data into json
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimer />;
  const {
    avgRating,
    category,
    name,
    city,
    id,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards: itemCards1 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { itemCards: itemCards2 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("Item card 1", itemCards1);
  console.log("Item Card 2", itemCards2);
  return (
    <div className="resContainer">
      <h1>{name}</h1>
      <h5>{cuisines.join(",")}</h5>
      <h5>{costForTwoMessage}</h5>
      <h5>{city}</h5>
      <ul>
        <h2>{itemCards1[0].card.info.category}</h2>
        {itemCards1.map((items) => (
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
        <h2>{itemCards2[0].card.info.category}</h2>
        {itemCards2.map((items) => (
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
