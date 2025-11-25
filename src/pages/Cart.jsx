import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart.length) return <h1>Your cart is empty.</h1>;
  return (
    <div className="cart-page">
      <h1>shopping Cart </h1>
      {cart.map((item, index) => (
        <div key={index}>
          <img src={item.image} />
          {item.name} - ${item.price}
        </div>
      ))}
      <h2>total : ${total}</h2>
    </div>
  );
}
