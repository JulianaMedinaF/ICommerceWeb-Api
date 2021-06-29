const express = require('express');
const test = require('./dataTest/data');

const app = express();

app.get('/test', (req, res) => {

  res.json(test);

  });
  
module.exports = app;