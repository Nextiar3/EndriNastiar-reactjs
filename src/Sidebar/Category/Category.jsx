import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handlechange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Availability</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handlechange} type="radio" value="" name="test" />{" "}
          <span className="checkmark"></span>All
        </label>

        <Input
          handlechange={handlechange}
          value="exclusive"
          title="Exclusive"
          name="test"
        />
        <Input
          handlechange={handlechange}
          value="Limited"
          title="Limited"
          name="test"
        />
        <Input
          handlechange={handlechange}
          value="Bonus"
          title="Bonus"
          name="test"
        />
        <Input
          handlechange={handlechange}
          value="Revive"
          title="Revive"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
