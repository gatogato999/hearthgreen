import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart.length) return <h1>Your cart is empty.</h1>;
  return (
    <div>
      <h1>shopping Cart </h1>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
      <h2>total : ${total}</h2>
    </div>
  );
}
