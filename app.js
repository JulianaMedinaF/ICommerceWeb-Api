const fs = require('fs');
const express = require('express');
const index = require("./routes/index");
const test = require("./routes/test");
const product = require("./routes/product");
const app = express();

app.use(express.json());
app.use("/", index);
app.use("/test", test);
app.use("/product", product);


module.exports = app;