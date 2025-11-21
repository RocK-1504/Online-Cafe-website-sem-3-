import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-row">

        <div className="about-text-section">
          <h2>About The Daily Grind</h2>

          <p>
            The Daily Grind is a cozy, welcoming café known for freshly brewed
            coffee, handcrafted beverages, and a warm ambience. We believe in
            serving high-quality coffee sourced from trusted coffee growers
            while maintaining an inviting experience for everyone.
          </p>

          <p>
            Whether you're looking to relax, study, or catch up with friends,
            The Daily Grind offers the perfect environment. Our signature drinks
            and homemade pastries make every visit memorable.
          </p>

          <p>
            This website is a simple online ordering system that lets customers
            explore the menu, add items to the cart, and place an order with ease.
          </p>
        </div>

        <div className="about-image-section">
          <img src="/cafe.jpg" alt="Cafe" className="about-image" />
        </div>

      </div>
    </div>
  );
}


