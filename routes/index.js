
"use strict";
const express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.send('GET ON THE index!');
  });

module.exports = router;