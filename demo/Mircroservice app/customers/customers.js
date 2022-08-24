//load express
const express = require('express');

const bodyParser =require('body-parser');
//load mongoose
const mongoose = require('mongoose');

const Customer = require('./Customer');

const app = express();

app.use(bodyParser.json());
// connection to db
mongoose.connect('mongodb+srv://todo2:todo2@test.hbdyljx.mongodb.net/customers',()=> console.log('database connected'));
mongoose.Promise = global.Promise;


app.get('/', (req, res) =>{
    res.send('This is our main endpoint!');
});

app.post('/customer', (req, res) =>{
    var newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    var customer = new Customer(newCustomer)
    customer.save().then(()=>{
        console.log("New customer created")
    }).catch((err)=>{
        console.log(err)
    })
    res.send("New customer created!")
});

app.get('/customers', (req, res) =>{
    Customer.find().then((Customers)=>{
        res.json(Customers)
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});

app.get('/customer/:id', (req, res) =>{
    var id = req.params.id
    Customer.findById(id).then((customers)=>{
        if(customers){
            res.json(customers)
        }else{
            res.sendStatus(404)
        }
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});

app.delete('/customer/:id', (req, res) =>{
    var id = req.params.id
    Customer.findByIdAndRemove(id).then(()=>{
       res.send("customers removed succesfully")
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});

app.listen(5555,()=>{
    console.log("up and running!-- this is our Customers services.")
})