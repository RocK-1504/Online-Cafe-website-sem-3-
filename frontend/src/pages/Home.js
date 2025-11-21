import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to The Daily Brew</h1>
      <p>Fresh coffee. Simple ordering.</p>

      <img src="/coffee.jpg" alt="Cafe" className="home-image" />
    </div>
  );
}
