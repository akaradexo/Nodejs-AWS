const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type : String,
        require: true
    },
    author:{
        type : String,
        require: true
    },
    numberPages:{
        type : Number,
        require: false
    },
    publisher:{
        type : String,
        require: false
    }
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;