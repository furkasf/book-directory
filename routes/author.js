const express = require('express')
const mongoose = require('mongoose')
const Author = require('../model/auther')
const rout = express.Router()

rout.get('/', async (res, req)  =>{
    const search = {}
    if(req.name.query != null && req.name.query){
        search.name = new RegExp(req.name.query, 'i')
    }
    Author.found(search)
        .then((a) => res.render('author/newAuthor', {author:a, title: 'search'}))
        .catch((err) => console.log(err))
})

exports.module = rout