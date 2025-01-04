import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="logo" />
  </a>
);

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to='/contact'><li>Contact</li></Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLogIn ? (
        <button onClick={() => setIsLogIn(false)}>LogIn</button>
      ) : (
        <button onClick={() => setIsLogIn(true)}>LogOut</button>
      )}
    </div>
  );
};

export default Header;
