import "../styles/cart.css";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  async function handleCheckout() {
    if (cart.length === 0) return alert("Cart is empty.");
    if (!user) return alert("Please login first.");

    const order = {
      items: cart,
      total,
      user: user.name,
      mobile: user.mobile
    };

    try {
      await axios.post("http://localhost:5000/api/orders", order);

      clearCart();

      alert("Order placed successfully!");
      window.location.href = "/orders";
    } catch (err) {
      console.log(err);
      alert("Error placing order.");
    }
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.name}>
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="quantity-controls">
            <button
              onClick={() => updateQty(item.name, item.qty - 1)}
              disabled={item.qty === 1}
            >
              -
            </button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.name, item.qty + 1)}>
              +
            </button>
          </div>

          <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="total">Total: ₹{total}</h2>

          <button className="checkout-btn" onClick={handleCheckout}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
