/* eslint-disable react/prop-types */
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handlechange }) => {
  return (
    <section className="sidebar">
      <Category handlechange={handlechange} />
      <Price handlechange={handlechange} />
      <Colors handlechange={handlechange} />
    </section>
  );
};

export default Sidebar;
