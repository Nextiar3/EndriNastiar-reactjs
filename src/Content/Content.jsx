import "./Content.css";

import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
const Content = ({ result, handleClick }) => {
  return (
    <div className="main_content">
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default Content;
