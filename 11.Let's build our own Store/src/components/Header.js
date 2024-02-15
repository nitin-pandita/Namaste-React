import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLogin, setIsLogin] = useState("LogOut");

  // ? we are subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.item) || [];
  console.log(cartItems);
  // useEffect will be rendered after the component is being rendered.
  // if the dependency array is empty useEffect is called on initial render when the component is rendered

  // getting content from user context
  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect called");
  }, [isLogin]);

  const toggleBtn = () => {
    setIsLogin((prevInterval) =>
      prevInterval === "LogOut" ? "Login" : "LogOut"
    );
  };

  const status = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg h-[100px] px-7 w-full">
      <div className="logo-container">
        <img className="w-[94px]" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex justify-between w-[800px] items-center text-center h-full">
          <li>Online Status : {status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex justify-center items-center">
                <CiShoppingCart size={"30px"} />({cartItems.length} Items)
              </div>
            </Link>
          </li>
          <button
            className="outline-1 border-2 p-4 m-3 rounded-sm"
            onClick={toggleBtn}
          >
            {isLogin}
          </button>
          <li className="">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
