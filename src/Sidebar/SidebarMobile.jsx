/* eslint-disable react/prop-types */
import "./SidebarMobile.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const SidebarMobile = ({ handlechange }) => {
  return (
    <section className="sidebar-mobile">
      <Category handlechange={handlechange} />
      <Price handlechange={handlechange} />
      <Colors handlechange={handlechange} />
    </section>
  );
};

export default SidebarMobile;
