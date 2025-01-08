import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="w-56" src={LOGO_URL} alt="logo" />
  </a>
);

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <Title />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 font-bold text-xl">
              Cart- ({cartItems.length} items)
            </li>
          </Link>
          {isLogIn ? (
            <button onClick={() => setIsLogIn(false)}>LogIn</button>
          ) : (
            <button onClick={() => setIsLogIn(true)}>LogOut</button>
          )}

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
