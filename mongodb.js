const mongoose=require('mongoose')
const conexion=mongoose.connect('mongodb://localhost:27017/notasdb')

module.exports=conexion