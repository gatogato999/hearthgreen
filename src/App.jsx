import { useState } from "react";
import "./App.css";

import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let pageComponent;
  if (currentPage === "home") pageComponent = <Home />;
  else if (currentPage === "product") pageComponent = <Products />;
  else if (currentPage === "cart") pageComponent = <Cart />;

  return (
    <div>
      <nav
        style={{
          marginBottom: "200px",
        }}
      >
        <button onClick={() => setCurrentPage("home")}>Home</button>
        {" | "}
        <button onClick={() => setCurrentPage("product")}>Products</button>
        {" | "}
        <button onClick={() => setCurrentPage("cart")}>Cart</button>
      </nav>
      {pageComponent}
    </div>
  );
}

export default App;
