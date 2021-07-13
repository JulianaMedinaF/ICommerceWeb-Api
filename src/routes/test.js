
"use strict";
const express = require('express');
const pool = require("../../config/db.config");
let router = express.Router();

router.route("/")
   .get(async (req, res) => {
    try {
      const allTest = await pool.query("SELECT * FROM test_table");
      res.json(allTest.rows);
    } catch (err) {
      console.log(err.message);
    }
  })
  .post(async (req, res) => {
    try {
      const { description } = req.body;
      const newTest = await pool.query(
        "INSERT INTO test_table (description) VALUES ($1) RETURNING *",
        [description]
      );
  
      res.json(newTest.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  
  });

router.route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
        try {
          const test = await pool.query("SELECT * FROM test_table WHERE id = $1", [id]);
          res.json(test.rows[0]);
        } catch (err) {
          console.log(err.message);
        }
      })
    .put(async (req, res) => {
        try {
          const { id } = req.params;
          const { description } = req.body;
      
          const upTest = await pool.query("UPDATE test_table SET description = $1 WHERE ID = $2 RETURNING *", [description, id]);
      
          res.json(upTest.rows[0]);
          
        } catch (err) {
          console.error(err.message);
        }
      })
    .delete(async (req, res) => {
        try {
          const { id } = req.params;
      
          const delTest = await pool.query("DELETE FROM test_table WHERE id = $1",[id]);
          res.json("It has been deleting");    
        } catch (err) {
          console.error(err.message);
        }
      
      });

module.exports = router;