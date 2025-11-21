import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/menu.css";
import { useCart } from "../context/CartContext";
import { useFavourites } from "../context/FavContext";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [showFavs, setShowFavs] = useState(false);

  const { addToCart } = useCart();
  const { favourites, toggleFavourite } = useFavourites();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menuitems")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredItems = showFavs
    ? items.filter((item) => favourites.includes(item._id))
    : items;

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>

      <button
        className="fav-toggle"
        onClick={() => setShowFavs(!showFavs)}
      >
        {showFavs ? "Show All" : "Show Favourites ★"}
      </button>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item._id}>

            <img src={item.image} className="menu-image" alt={item.name} />

            <span
              className={`fav-star ${
                favourites.includes(item._id) ? "active" : ""
              }`}
              onClick={() => toggleFavourite(item._id)}
            >
              ★
            </span>

            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <p className="menu-price">₹{item.price}</p>

              <button
                className="add-btn"
                onClick={() =>
                  addToCart({
                    name: item.name,
                    price: item.price,
                    desc: item.desc,
                    image: item.image,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

