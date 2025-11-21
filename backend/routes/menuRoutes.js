const express = require("express");

module.exports = function (db) {
  const router = express.Router();
  const menu = db.collection("menu");

  router.get("/", async (req, res) => {
    const items = await menu.find().toArray();
    res.json(items);
  });
  
  router.post("/bulk", async (req, res) => {
    await menu.insertMany(req.body);
    res.json({ message: "Inserted" });
  });

  return router;
};

