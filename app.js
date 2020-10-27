//modules
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./model/book.js')
//express server
const app = express();
const url = 'mongodb+srv://furkan:JKts5yPNhjvYSki9@cluster0.l9fic.mongodb.net/Cluster0<?retryWrites=true&w=majority';//maybe ı collect all data in json server
mongoose.connect(key, { useNewUrlParser: true })
    .then(() => app.listen(3000))
    .catch(err => console.log(err))

//middleware
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))

//view engine
app.set('view engine', 'ejs')

//routers
app.get('/', (req, res) => res.render('home'))
