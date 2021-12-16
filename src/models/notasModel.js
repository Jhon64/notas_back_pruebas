const mongodb = require('../../mongodb')
const notaScheme = require('../scheme/notas.scheme')
const NotasModel = {
    async listar() {
        const mongoose = await mongodb;
        return await mongoose.model('Notas', notaScheme).find()
    },
    async register(nota){
        const mongoose=await mongodb
        const Notas=mongoose.model('Notas',notaScheme)
        const newNota=new Notas(nota)
        return await newNota.save()
    },
    async delete(_id){
        const mongoose=await mongodb
        return await mongoose.model('Notas',notaScheme).deleteOne({_id})
    },
    async update(_id,body){
        const mongoose=await mongodb
        return await mongoose.model('Notas',notaScheme).updateOne({_id},body)
    }

}

module.exports = NotasModel