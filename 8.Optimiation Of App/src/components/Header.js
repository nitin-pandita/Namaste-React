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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
          <button className="btn" onClick={toggleBtn}>
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
