import { IoIosRadioButtonOn } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
const ItemList = ({ item, dummy }) => {
  console.log(dummy);
  return (
    <div className="">
      <ul className="">
        {item.map((e, index) => {
          return (
            <div className="p-2 m-2 transition-all border-b-2 h-[100%] ">
              <div
                className="flex h-auto justify-between relative"
                key={e.card.info.id}
              >
                <div className="flex flex-col">
                  <span className="font-light text-xl">{e.card.info.name}</span>
                  {/* for veg or non veg */}
                  {e.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                    <IoIosRadioButtonOn style={{ color: "red" }} />
                  ) : (
                    <IoIosRadioButtonOn style={{ color: "green" }} />
                  )}
                  <span className="text-green-500 font-semibold text-xl">
                    ₹{(e.card.info.price || e.card.info.defaultPrice) / 100}
                  </span>
                  <p className="text-xs">{e.card.info.description}</p>
                </div>
                <img
                  className="relative"
                  src={`${
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_148,h_148,c_fit/" +
                    e.card.info.imageId
                  }`}
                />
                <button className="absolute text-lg right-3 bottom-0 bg-orange-400 text-white px-7 items-center text-center rounded-sm shadow-sm ">
                  Add+
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
