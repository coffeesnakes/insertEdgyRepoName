const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1004;
const path = require("path");
const db = require('../database');
const controllers = require('./controllers');

// parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// server client
app.use("/", express.static(path.join(__dirname, "../client/dist")));

// routes
app.get('/weebs', controllers.getFilms);

// listener
app.listen(port, ()=>(console.log(`alive on port:${port}`)));