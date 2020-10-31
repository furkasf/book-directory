if(process.env.NODE_ENV !== 'production'){
    require('dotenv').load()
}

const express = require('express')
const moongoose = require('mongoose')
const route_main = require('./routes/main')
const expressLayouts = require('express-ejs-layouts')

const app = express();
app.listen(process.env.PORT || 3000)

app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded())

moongoose.connect(process.env.CONECTİON_STRİNG, {useNewUrlParser : true})

app.use('/', route_main)