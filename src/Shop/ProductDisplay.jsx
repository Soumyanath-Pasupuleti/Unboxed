import React, { useState } from "react";
import { Link, json } from "react-router-dom";

const desc = "sdalsdsad sdadsada hasdhadasd hasdas dasdhasd hdshadhdsdasdasdd";

const ProductDisplay = ({ item }) => {
  const { name, price, id, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("select size");
  const [color, setColor] = useState("select color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
      price: price,
    };
    // console.log(product);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }
    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form field
    setQuantity(1);
    setSize("select size");
    setColor("select color");
    setCoupon("");
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount}review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart componenet */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* {coloring} */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select color</option>
              <option>Pink</option>
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Green</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              // price="price"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/* coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {/* button section */}
          <button type="submit" className="lab-btn">
            <span>Add to cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
