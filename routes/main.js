const express = require('express')
const route = express.Router();

route.get('/' , (req , res) => res.render('index'))
route.get('/about' , (req , res) => res.send('about something'))

module.exports = route;