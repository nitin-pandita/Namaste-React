import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [isLogin, setIsLogin] = useState("LogOut");
  const toggleBtn = () => {
    setIsLogin((prevInterval) =>
      prevInterval === "LogOut" ? "Login" : "LogOut"
    );
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Orders</li>
          <li>Menu</li>
          <li>Account</li>
          <li>Cart</li>
          <button className="btn" onClick={toggleBtn}>
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
