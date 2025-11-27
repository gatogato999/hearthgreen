import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQty,
  increaseQty,
  clearCart,
} from "../cartSlice";
import Header from "../components/Header";

export default function Cart({ setCurrentPage }) {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  if (items.length === 0)
    return (
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gap: "100%",
        }}
      >
        <Header setCurrentPage={setCurrentPage} />
        <h2
          style={{
            color: "tomato",
            fontFamily: "sans-serif",
            justifySelf: "center",
          }}
        >
          {" "}
          Your cart is empty !!!
        </h2>
      </div>
    );

  return (
    <div className="cart-page">
      <Header setCurrentPage={setCurrentPage} />

      <h1> Cart</h1>
      {items.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price} each</p>

          <div>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h2>Cart Total: ${cartTotal}</h2>

      <button onClick={() => setCurrentPage("product")}>
        Continue Shopping
      </button>

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

      <button onClick={() => alert("Coming soon!")}>Checkout</button>
    </div>
  );
}
