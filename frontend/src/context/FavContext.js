import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favourites");
    if (saved) setFavourites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (itemId) => {
    setFavourites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <FavContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavContext);
}
