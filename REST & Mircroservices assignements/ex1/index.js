// import required essentials
// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
var port = 3000;
const itemsRouter = require('./routes/items');

// connection to db

mongoose.connect('mongodb+srv://todo2:todo2@test.hbdyljx.mongodb.net/?retryWrites=true&w=majority')

app.use(bodyParser.json());
// default URL to API
// app.use('/', function(req, res) {
//     res.send('node-ex-api works :-)');
// });

app.use('/inventory', itemsRouter);


//listen to port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
 });