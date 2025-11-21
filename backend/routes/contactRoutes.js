const express = require("express");

module.exports = function (db) {
  const router = express.Router();
  const messages = db.collection("messages");

  router.post("/", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields required" });
      }

      await messages.insertOne({
        name,
        email,
        phone: phone || null, 
        message,
        date: new Date()
      });

      res.json({ success: true, message: "Message sent successfully!" });

    } catch (err) {
      console.error("CONTACT ERROR:", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  return router;
};
