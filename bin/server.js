#!/usr/bin/env node
const app = require('../app');

//Server Port
const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
  