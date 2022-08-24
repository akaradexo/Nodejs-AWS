//load express
const express = require('express');
const app = express();
const axios = require('axios');
const Order = require('./Order');
const mongoose = require('mongoose');

const bodyParser =require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
// connection to db
mongoose.connect('mongodb+srv://todo2:todo2@test.hbdyljx.mongodb.net/orders',()=> console.log('database connected'));
mongoose.Promise = global.Promise;


app.post('/order', (req, res) =>{
    var newOrder = {
        CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
        BookID: mongoose.Types.ObjectId(req.body.BookID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate,
    }
    var order = new Order(newOrder)
    order.save().then(()=>{
        res.send("order created with success");
    }).catch((err)=>{
        console.log(err)
    })
});

app.get('/orders', (req, res) =>{
    Order.find().then((books)=>{
        res.json(books)
    }).catch((err) => {
        throw err
    });
});

app.get('/order/:id', (req, res) =>{
    var id = req.params.id
    Order.findById(id).then((order)=>{
        if(order){
            axios.get("http://localhost:5555/customer/"+order.CustomerID).then((response)=>{
                var orderObject = {customerName: response.data.name, bookTitle:''}
                axios.get("http://localhost:4545/book/"+order.BookID).then((response)=>{
                     orderObject.bookTitle = response.data.title
                     res.json(orderObject);
                })
            })
        }else{
            res.send("Invalid orders")
        }
    })
});

app.listen(7777,()=>{
    console.log("up and running!-- this is our Orders services.")
})