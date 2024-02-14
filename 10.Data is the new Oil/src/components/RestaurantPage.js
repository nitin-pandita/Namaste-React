import { Spin } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurant(resId);
  const dummy = "Hi Dummy data";
  if (resInfo === null) return <Spin />;

  const { name, cuisines, costForTwoMessage, city } =
    resInfo.cards[0]?.card?.card?.info;
  const resInfoSecondGroupedCard =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const itemCards1 = resInfoSecondGroupedCard?.cards[1]?.card?.card?.itemCards;
  const itemCards2 = resInfoSecondGroupedCard?.cards[2]?.card?.card?.itemCards;

  const categories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("Categories: ", categories);

  // console.log(categories);
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div>
        <h1 className="text-[50px] font-semibold">{name}</h1>
        <h5 className="text-2xl">{cuisines?.join(", ")}</h5>
        <h5 className="text-2xl">{city}</h5>
      </div>

      {/* Catagories  */}
      {categories.map((c, index) => (
        <div>
          <RestaurantCategory
            data={c.card.card}
            key={c?.card?.card?.title}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantPage;
