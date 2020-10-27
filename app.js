//modules
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./model/book.js')
//express server
const app = express();
const key = '';//maybe ı collect all data in json server
mongoose.connect()
    .then(() => app.listen(3000))
    .catch(err => console.log(err))

//middleware
app.use(express.urlencoded({extended : true}))
app.use(express.static())

//view engine
app.set('view wngine', 'ejs')

//routers

