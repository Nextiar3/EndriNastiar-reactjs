import "./SidebarMobile.css";
import Category from "./Category/Category";
import Price from "./Price/Price";

const SidebarMobile = ({ handlechange }) => {
  return (
    <section className="sidebar-mobile">
      <Category handlechange={handlechange} />
      <Price handlechange={handlechange} />
    </section>
  );
};

export default SidebarMobile;
