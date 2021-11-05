
const express=require('express')
const morgan = require('morgan')
const indexRouter=require('./routes/index.router')
const bodyParser=require('body-parser')
const App=express()
//middlewares
App.use(morgan('dev'))
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.json())
App.use(indexRouter)
App.set('PORT',process.env.PORT||5000)
App.listen(App.get('PORT'),()=>{
    console.log('http://localhost:'+App.get('PORT'))
})