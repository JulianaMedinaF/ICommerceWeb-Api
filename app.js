const fs = require('fs');
const express = require('express');
const pool = require("./config/db.config");
const test = require("./routes/test");
const app = express();

app.use(express.json());
//app.use("/", index);
app.use("/test", test);


/*app.get("/"), (req, res) => {
  console.log("Hello root!");
};*/


module.exports = app;