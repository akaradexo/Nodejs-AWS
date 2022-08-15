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
    }).catch(next);
});

// READ one item
router.get('/:name', function (req, res) {
    Inventory.findOne({'name':req.params.name}).then(function(item){
        res.send(item);
    }).catch(next);
});

// CREATE
router.post('/', function (req, res,next) {
    // create an object of new name
    Inventory.create(req.body).then(function(item){
        res.send(item);
    }).catch(next);
    // var newItem = new Inventory(req.body);
    // newItem.save();
});

// UPDATE
router.put('/:name', function (req, res,next) {
    Inventory.findOneAndUpdate({'name':req.params.name},req.body).then(function(item){
        res.send(item);
    }).catch(next);
});

// DELETE all item
router.delete('/', function (req, res,next) {
    Inventory.deleteMany({}).then(function(){
        res.send("all items are deleted");
    }).catch(next);
});

// DELETE perticular item
router.delete('/:name', function (req, res,next) {
    Inventory.findOneAndRemove({'name':req.params.name}).then(function(item){
        res.send(item);
    }).catch(next);
});

module.exports = router;