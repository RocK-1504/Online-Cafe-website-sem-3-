const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function start() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    db = client.db("dailygrind");

    const menuRoutes = require("./routes/menuRoutes")(db);
    const orderRoutes = require("./routes/orderRoutes")(db);
    const userRoutes = require("./routes/userRoutes")(db); 
    const contactRoutes = require("./routes/contactRoutes")(db);

    app.use("/api/menuitems", menuRoutes);
    app.use("/api/orders", orderRoutes);
    app.use("/api/users", userRoutes);  
    app.use("/api/contact", contactRoutes);

    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

start();
