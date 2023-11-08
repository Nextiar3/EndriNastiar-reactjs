import { useState } from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import mascot from "../assets/mascot.png";
import logoKyou from "../assets/kyou.png";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import SidebarMobile from "../Sidebar/SidebarMobile";

const Nav = ({ handlechange, handleChange }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="nav-logo">
        <img className="nav-logo-mascot" src={mascot} alt={mascot} />
        <img className="nav-logo-icons" src={logoKyou} alt={logoKyou} />
      </div>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Khilaf apa hari ini?"
          className="search-input"
          onChange={handleChange}
        />
        <button className="nav-search-btn">
          <AiOutlineSearch className="nav-search" />
        </button>
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        <a href="#" className="nav-go-signin">
          Sign in
        </a>
      </div>

      {toggle ? (
        <SidebarMobile handlechange={handlechange} />
      ) : (
        <div className="ht" />
      )}

      <img
        src={toggle ? close : menu}
        alt={menu}
        className="menu-img"
        onClick={() => setToggle((prev) => !prev)}
      />
    </nav>
  );
};

export default Nav;
