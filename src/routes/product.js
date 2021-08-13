
"use strict";
const express = require('express');
const pool = require("../../config/db.config");
let router = express.Router();

router.route("/")
  .get(async (req, res) => {
    try {
      const allProducts = await pool.query("SELECT * FROM product");
      res.json(allProducts.rows);
    } catch (err) {
      console.log(err.message);
    }
  })
  .post(async (req, res) => {
    try {
      const { description } = req.body;
      const newProduct = await pool.query(
        "INSERT INTO product (description) VALUES ($1) RETURNING *",
        [description]
      );

      res.json(newProduct.rows[0]);
    } catch (err) {
      console.error(err.message);
    }

  });

router.route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const product = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
      res.json(product.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;

      const upProduct = await pool.query("UPDATE product SET description = $1 WHERE ID = $2 RETURNING *", [description, id]);

      res.json(upProduct.rows[0]);

    } catch (err) {
      console.error(err.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;

      const delProduct = await pool.query("DELETE FROM product WHERE id = $1", [id]);
      res.json("It has been deleting");
    } catch (err) {
      console.error(err.message);
    }

  });

module.exports = router;