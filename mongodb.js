const mongoose=require('mongoose')
const conexion=mongoose.connect('mongodb+srv://jhon:sneider10@cluster0.nimo2.mongodb.net/notasdb?retryWrites=true&w=majority')

module.exports=conexion