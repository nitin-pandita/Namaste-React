import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.item);
  return (
    <div className="text-center  p-4 w-[70%] m-auto">
      <div className="text-2xl font-bold">Cart</div>
      <button
        className="bg-red-500 p-4 text-white font-semibold rounded-sm"
        onClick={handleClear}
      >
        Clear List
      </button>
      <div className="shadow-lg">
        {cartItems.length === 0 && <h1>No Items Found in the Cart 😟</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
