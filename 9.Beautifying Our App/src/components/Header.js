import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
const Header = () => {
  const [isLogin, setIsLogin] = useState("LogOut");

  // useEffect will be rendered after the component is being rendered.
  // if the dependency array is empty useEffect is called on initial render when the component is rendered
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
    <div className="flex justify-between shadow-lg h-[100px]">
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
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <button
            className="outline-1 border-2 p-4 m-3 rounded-sm"
            onClick={toggleBtn}
          >
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
