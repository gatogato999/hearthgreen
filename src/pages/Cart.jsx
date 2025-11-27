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
      <div>
        <Header setCurrentPage={setCurrentPage} />
        <h2>Your cart is empty .</h2>
      </div>
    );

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />

      <h1>Your Cart</h1>

      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px" }}>
          <img src={item.image} width="100" alt={item.name} />
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
