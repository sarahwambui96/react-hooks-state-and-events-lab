import React,{useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart]= useState(true) 


  function handleItem(){
    setAddToCart(!addToCart)
  }

  //const itemClass = addToCart ? "" : "in-cart"
  return (
    <li className={addToCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className="add">{addToCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
