const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all(data => res.render("index", {burgers: data}));
});

router.post("/", (req, res) => {
  burger.create(["burger_name"], [req.body.name], () => res.redirect("/"));
});

router.put("/:id", (req, res) => {
  burger.updateOne('devoured', true, 'id', req.params.id,() => res.redirect("/"));
});

router.delete("/:id", (req, res) => {
  burger.remove('id', req.params.id, () => res.redirect("/"));
})

module.exports = router;