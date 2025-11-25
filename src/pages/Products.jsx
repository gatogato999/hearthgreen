import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  return (
    <div className="product-page">
      <h1>Products</h1>
      <h1></h1>
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.name} className="plantImg" />
          <br />
          {p.name} - ${p.price}{" "}
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
