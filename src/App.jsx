import { useState } from "react";
import "./App.css";

import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "product" && (
        <Products setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "cart" && <Cart setCurrentPage={setCurrentPage} />}
    </>
  );
}

export default App;
