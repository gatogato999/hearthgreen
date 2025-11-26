import { useSelector } from "react-redux";

export default function Header({ setCurrentPage }) {
  const count = useSelector((state) =>
    state.cart.items.reduce((s, i) => s + i.quantity, 0),
  );
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ cursor: "pointer" }} onClick={() => setCurrentPage("home")}>
        HearthGreen 🎍
      </h2>
      <nav>
        <button onClick={() => setCurrentPage("product")}>Products</button>
        <button onClick={() => setCurrentPage("cart")}>
          {" "}
          🛒 Cart ({count})
        </button>
      </nav>
    </header>
  );
}
