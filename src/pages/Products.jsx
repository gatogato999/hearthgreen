import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}{" "}
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
