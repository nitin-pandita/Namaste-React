import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  const handleClick = () => {
    // Toggle the showItem state by calling setShowIndex with the opposite value
    setShowIndex(!showItem);
  };

  return (
    <div className="flex flex-col w-[1200px] m-3 shadow-md">
      <div
        className="flex justify-between p-6 cursor-pointer transition-all duration-500 ease-in-out"
        onClick={handleClick}
      >
        <span className="font-bold text-2xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          {showItem ? (
            <MdKeyboardArrowUp size={"40px"} />
          ) : (
            <MdKeyboardArrowDown size={"40px"} />
          )}
        </span>
      </div>
      {/* Apply conditional rendering with transition */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          showItem ? "h-auto" : "h-0"
        }`}
      >
        <ItemList item={data.itemCards} dummy={dummy} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
