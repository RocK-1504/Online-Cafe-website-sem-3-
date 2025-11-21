const express = require("express");

module.exports = function (db) {
  const router = express.Router();
  const users = db.collection("users");

  router.post("/login", async (req, res) => {
    const { name, mobile } = req.body;

    if (!name || !mobile)
      return res.status(400).json({ error: "All fields required" });

    let user = await users.findOne({ mobile });

    if (!user) {
      user = { name, mobile };
      await users.insertOne(user);
    }

    res.json(user);
  });

  return router;
};

