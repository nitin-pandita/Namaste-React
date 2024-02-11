import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimer from "./Shimer";

const RestaurantPage = () => {
  const { resId } = useParams();

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
