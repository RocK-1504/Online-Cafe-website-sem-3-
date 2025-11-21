import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { FavProvider } from "./context/FavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <FavProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavProvider>
  </BrowserRouter>
);
