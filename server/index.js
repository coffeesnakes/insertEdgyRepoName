const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1004;
const path = require("path");
const db = require('../database');

// parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// server client
// app.use("/", express.static(path.join(__dirname, "../client/dist")));

// routes
app.get('/', (req, res)=> {
  res.send('server get helloFriend')
})

// listener
app.listen(port, ()=>(console.log(`alive on port:${port}`)));