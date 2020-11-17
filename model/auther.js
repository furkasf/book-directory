const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

exports.module = mongoose.model('Author', bookSchema)