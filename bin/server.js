#!/usr/bin/env node
const app = require('../app');

//Server Port
const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
  