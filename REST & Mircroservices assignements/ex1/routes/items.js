// import required essentials
const express = require('express');
// create new router
const router = express.Router();
//models
const Inventory = require("../models/Inventory");
// HTTP methods ↓↓ starts here.

// READ all item
router.get('/', function (req, res) {
    Inventory.find({}).then(function(item){
        res.send(item);
    });
});

// READ one item
router.get('/:name', function (req, res) {
    Inventory.findOne({'name':req.params.name}).then(function(item){
        res.send(item);
    })
});

// CREATE
router.post('/', function (req, res) {
    // create an object of new name
    Inventory.create(req.body).then(function(item){
        res.send(item);
    });
    // var newItem = new Inventory(req.body);
    // newItem.save();
});

// UPDATE
router.put('/:name', function (req, res) {
    Inventory.findOneAndUpdate({'name':req.params.name},req.body).then(function(item){
        res.send(item);
    });
});

// DELETE all item
router.delete('/', function (req, res) {
    Inventory.deleteMany({}).then(function(){
        res.send("all items are deleted");
    });
});

// DELETE perticular item
router.delete('/:name', function (req, res) {
    Inventory.findOneAndRemove({'name':req.params.name}).then(function(item){
        res.send(item);
    });
});

module.exports = router;