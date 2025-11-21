const express = require("express");

module.exports = function (db) {
  const router = express.Router();
  const menu = db.collection("menuitems");

  router.get("/", async (req, res) => {
    const data = await menu.find().toArray();
    res.json(data);
  });

  router.post("/", async (req, res) => {
    await menu.insertOne(req.body);
    res.json({ message: "Menu item added" });
  });

  return router;
};


