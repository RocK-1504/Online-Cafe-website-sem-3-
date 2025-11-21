import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:5000/api/orders/${user.mobile}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log("Orders fetch error:", err));
  }, [user]);

  return (
    <div className="orders-container">
      <h2>Your Previous Orders</h2>

      {orders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>

            <h4>Items:</h4>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} x {item.qty}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

