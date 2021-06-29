const fs = require('fs');
const express = require('express');
const test = require('./dataTest/data');

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {

  res.json(test);

});

app.get('/test/:id', (req, res) => {

  res.json(test.find(t => t.id == req.params.id));

});

const writeTest = json => {
  fs.writeFile('./dataTest/data.json', JSON.stringify(json), err => console.log(err));
} 

app.post('/test', (req, res) => {

  const {message, number, animal} = req.body;

  const test_ids = test.map(t => t.id);

  const new_test = test.concat({
    id: (test_ids.length > 0 ? Math.max(...test_ids) : 0) + 1,
    message,
    number,
    animal
  });

  writeTest(new_test);

  res.json(new_test);
});

app.put('/test/:id', (req, res) => {
  const { id } = req.params;

  const old_test = test.find( t => t.id == id);

  ['message','number','animal'].forEach(key =>{
    if(req.body[key]) old_test[key] = req.body[key];
  });

  writeTest(test);

  res.json(test);

});

app.delete('/test/:id', (req, res) => {
  const { id } = req.params;

  const new_test = test.filter( t => t.id != id);

  writeTest(new_test);

  res.json(new_test);

});

  
module.exports = app;