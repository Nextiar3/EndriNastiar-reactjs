/* eslint-disable react/prop-types */
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button onClick={handleClick} className="btns">
          All Items
        </button>
        <button onClick={handleClick} value="ReadyStock" className="btns">
          Ready Stock
        </button>
        <button onClick={handleClick} value="PreOrder" className="btns">
          Pre Order
        </button>
        <button onClick={handleClick} value="BackOrder" className="btns">
          Back Order
        </button>
        <button onClick={handleClick} value="Showcase" className="btns">
          ShowCase
        </button>
      </div>
    </div>
  );
};

export default Recommended;
