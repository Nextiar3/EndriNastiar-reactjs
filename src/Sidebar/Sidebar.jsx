import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";

const Sidebar = ({ handlechange }) => {
  return (
    <section className="sidebar">
      <Category handlechange={handlechange} />
      <Price handlechange={handlechange} />
    </section>
  );
};

export default Sidebar;
