#!/usr/bin/env node
const app = require('../app');
const cors = require("cors");

var corsOptions = {
    frontEnd: "http://localhost:3000"
  };

app.use(cors(corsOptions));


//Server Port
const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
  