const express = require('express');
const app = express(); 

const body = require('body-parser');
app.use(body.urlencoded({extended :false}));
app.use(body.json()); 

const cors = require('cors');
app.use(cors());


const server = app.listen(5000, ()=> {console.log("sasasasa")}); 


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
  })

app.post('/add' , function(req, res){
  console.log(req.body)
})
