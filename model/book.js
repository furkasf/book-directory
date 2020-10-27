const mongoose = require('mongoose');
const Blog = require('../../reblog/model/model');
const { model } = require('../../reblog/model/model');

const schema = mongoose.Schema;

const bookSchmea = schema({
    name :{
        type : String,
        require : true
    },
    date :{
        type : String,
        require : true
    },
    author :{
        type : String,
        require : true
    },
    img :{
        type : Image,
        require : true
    }
})

const Book = mongoose.model('Book', bookSchmea);

module.export = Book;