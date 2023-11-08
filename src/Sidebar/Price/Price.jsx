import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handlechange }) => {
  return (
    <div>
      <h2 className="sidebar-title-price">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handlechange} type="radio" value="" name="test2" />{" "}
        <span className="checkmark"></span>All
      </label>

      <Input
        handlechange={handlechange}
        value="IDR 2.549.000"
        title="Highest Price"
        name="test2"
      />
      <Input
        handlechange={handlechange}
        value="DP IDR 50.000"
        title="Lowest Price"
        name="test2"
      />
      <Input
        handlechange={handlechange}
        value="On Sale Soon"
        title="Soon"
        name="test2"
      />
    </div>
  );
};

export default Price;
