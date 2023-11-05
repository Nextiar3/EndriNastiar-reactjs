import { useState } from "react";
import Nav from "./Navigation/Nav";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

//import database
import products from "./db/data";
import Card from "./components/Card";

import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //input filter
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //radio filter
  const handlechange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handlechange={handlechange} />
      <Nav
        query={query}
        handleChange={handleChange}
        handlechange={handlechange}
      />
      <Content result={result} handleClick={handleClick} />
    </>
  );
}

export default App;
