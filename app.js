const fs = require('fs');
const express = require('express');
const cors = require("cors");
const index = require("./src/routes/index");
const test = require("./src/routes/test");
const product = require("./src/routes/product");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", index);
app.use("/test", test);
app.use("/product", product);


module.exports = app;