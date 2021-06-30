const fs = require('fs');
const express = require('express');
const pool = require("./db");

const app = express();

app.use(express.json());

// Routes

// get all


// get one


// create one
app.post('/test', async(req, res) => {
 /* try {
    const 
    const { description } = req.body;
    const newTest = await pool.query(
      "INSERT INTO test (id, description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTest);
  } catch (err) {
    console.error(err.message);
  }*/

 });

// update one

// delete one

app.get('/test', (req, res) => {

  //res.json(test);

});

app.get('/test/:id', (req, res) => {

 // res.json(test.find(t => t.id == req.params.id));

});

/*const writeTest = json => {
  fs.writeFile('./dataTest/data.json', JSON.stringify(json), err => console.log(err));
} */



app.put('/test/:id', (req, res) => {
  /*const { id } = req.params;

  const old_test = test.find( t => t.id == id);

  ['message','number','animal'].forEach(key =>{
    if(req.body[key]) old_test[key] = req.body[key];
  });

  writeTest(test);

  res.json(test);*/

});

app.delete('/test/:id', (req, res) => {
  /*const { id } = req.params;

  const new_test = test.filter( t => t.id != id);

  writeTest(new_test);

  res.json(new_test);*/

});

  
module.exports = app;