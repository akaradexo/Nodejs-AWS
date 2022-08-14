const express = require('express');
// create new router
const router = express.Router();
let data = [
    { id: 1, item: 'shirt',  price: 100, completed: true, createdOn: new Date() },
    { id: 2, item: 'apple',     price: 24, completed: true, createdOn: new Date() },
    { id: 3, item: 'jeans', price: 90, completed: true, createdOn: new Date() },
    { id: 4, item: 'cap', price: 80, completed: false, createdOn: new Date() },
    { id: 5, item: 'shoe', price: 50, completed: false, createdOn: new Date() },
];


// READ
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ specific item
router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
router.post('/', function (req, res) {
    let itemIds = data.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    let newItem = {
        id: newId, 
        item: req.body.item, 
        price: req.body.price, 
        completed: false,
        createdOn: new Date() 
    };
    data.push(newItem);
    res.status(201).json(newItem);
});

// UPDATE
router.put('/:id', function (req, res) {
    // get item object match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {
        let updated = {
            id: found.id,
            item: req.body.item, 
            price: req.body.price,
            completed: req.body.completed 
        };
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1, updated);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
router.delete('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
    }
    res.sendStatus(204);
});
module.exports = router;