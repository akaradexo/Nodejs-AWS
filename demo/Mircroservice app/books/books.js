//load express
const express = require('express');

//load mongoose
const mongoose = require('mongoose');

const bodyParser =require('body-parser');

const Book = require('./Book');

const app = express();

app.use(bodyParser.json());

// connection to db
mongoose.connect('mongodb+srv://todo2:todo2@test.hbdyljx.mongodb.net/books',()=> console.log('database connected'));
mongoose.Promise = global.Promise;


app.get('/', (req, res) =>{
    res.send('This is our main endpoint!');
});

app.post('/book', (req, res) =>{
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }
    var book = new Book(newBook)
    book.save().then(()=>{
        console.log("New Book created")
    }).catch((err)=>{
        console.log(err)
    })
    res.send("New book created!")
});

app.get('/books', (req, res) =>{
    Book.find().then((books)=>{
        res.json(books)
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});

app.get('/book/:id', (req, res) =>{
    var id = req.params.id
    Book.findById(id).then((books)=>{
        if(books){
            res.json(books)
        }else{
            res.sendStatus(404)
        }
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});

app.delete('/book/:id', (req, res) =>{
    var id = req.params.id
    Book.findByIdAndRemove(id).then(()=>{
       res.send("books removed succesfully")
    }).catch(err => {
        if (err){
            console.log(err);
        }
    });
});


app.listen(4545,()=>{
    console.log("up and running!-- this is our Books services.")
})