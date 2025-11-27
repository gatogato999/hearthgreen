import { products } from "../data/products";
import { addToCart } from "../cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

export default function Products({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isAdded = (id) => cart.some((item) => item.id === id);
  const categories = ["Indoor", "Outdoor", "Succulent"];
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <h1 style={{ textAlign: "center" }}>Products</h1>
      {categories.map((cat) => (
        <section key={cat} className="category">
          <h2>{cat} </h2>
          {products
            .filter((p) => p.categ === cat)
            .map((p) => (
              <div className="product-card" key={p.id}>
                <h3>{p.name}</h3>
                <img src={p.image} alt={p.name} />
                <p>{p.desc}</p>
                <b>${p.price}</b>
                <br />
                <button
                  disabled={isAdded(p.id)}
                  onClick={() => dispatch(addToCart(p))}
                >
                  {isAdded(p.id) ? "Added" : "Add To Cart "}
                </button>
              </div>
            ))}
        </section>
      ))}
    </div>
  );
}
