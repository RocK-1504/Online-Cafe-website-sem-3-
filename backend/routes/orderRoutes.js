const express = require("express");

module.exports = function (db) {
  const router = express.Router();
  const orders = db.collection("orders");

  router.post("/", async (req, res) => {
    const order = {
      items: req.body.items,
      total: req.body.total,
      user: req.body.user,
      mobile: req.body.mobile,
      date: new Date()
    };

    await orders.insertOne(order);
    res.json({ message: "Order placed" });
  });

  router.get("/:mobile", async (req, res) => {
    const mobile = req.params.mobile;

    const data = await orders
      .find({ mobile })
      .sort({ date: -1 })
      .toArray();

    res.json(data);
  });

  return router;
};
