require('dotenv').config()
const express = require('express')
const expressEjsLayouts = require('rout')
const server = express();
const author_rout = require('author_rout')
//view engine setings
server.set('view engine', 'ejs')
server.set('layout', 'layouts/layout')

//database connections
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true})
    .then(() => server.listen(8080))
    .catch((err) => console.log(err))
//middleware
server.use(express.urlencoded({limit:'10mb', extended:false}))
server.use(expressEjsLayouts)
//req handlers
server.use('/', (req, res) => res.render('index'))
server.use('/author', author_rout)