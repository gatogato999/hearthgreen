import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../cartSlice";
import { useState } from "react";

export default function Products() {
  // logic to disable buttons
  const [clicked, setClicked] = useState(new Set());
  function handleClick(id) {
    setClicked((prev) => new Set(prev).add(id));
  }

  const dispatch = useDispatch();
  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="cat-container">
        <h4>Best Selling</h4>
        <div className="category">
          {products
            .filter((p) => p.categ === "best")
            .map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} className="plantImg" />
                <br />
                {p.name} - {p.price}${" "}
                <button
                  onClick={() => {
                    (dispatch(addToCart(p)), handleClick(p.id));
                  }}
                  disabled={clicked.has(p.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
        <h4>Royal Plants</h4>
        <div className="category">
          {products
            .filter((p) => p.categ === "royal")
            .map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} className="plantImg" />
                <br />
                {p.name} - {p.price}${" "}
                <button
                  onClick={() => {
                    (dispatch(addToCart(p)), handleClick(p.id));
                  }}
                  disabled={clicked.has(p.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
        <h4>Economic Plants</h4>
        <div className="category">
          {products
            .filter((p) => p.categ === "econ")
            .map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} className="plantImg" />
                <br />
                {p.name} - {p.price}${" "}
                <button
                  onClick={() => {
                    (dispatch(addToCart(p)), handleClick(p.id));
                  }}
                  disabled={clicked.has(p.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
