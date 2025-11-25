import { useState } from "react";
import "./App.css";

import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import { useSelector } from "react-redux";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const cart = useSelector((state) => state.cart);

  let pageComponent;
  if (currentPage === "home")
    pageComponent = <Home setCurrentPage={setCurrentPage} />;
  else if (currentPage === "product") pageComponent = <Products />;
  else if (currentPage === "cart") pageComponent = <Cart />;

  return (
    <div className="wholePage">
      <nav className="nav">
        <button
          onClick={() => setCurrentPage("home")}
          setCurrentPage={setCurrentPage}
        >
          Home
        </button>
        {" | "}
        <button onClick={() => setCurrentPage("product")}>Products</button>
        {" | "}
        <button onClick={() => setCurrentPage("cart")}>
          Cart {cart.length}{" "}
        </button>
      </nav>
      {pageComponent}
    </div>
  );
}

export default App;
