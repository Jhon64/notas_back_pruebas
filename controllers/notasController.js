const NotasMode=require('../models/notasModel.js')
const notasController={
    async registrar(req,res){
        const{title,description}=req.body
        const newNota={
            title,description,status:true,
            createdAt:Date.now(),
            updatedAt:Date.now()
        }
        res.send(await NotasMode.register(newNota))
    },
    async listar(req,res){
        res.send(await NotasMode.listar())
    },
    async delete(req,res){
        const {_id}=req.params
        res.send(await NotasMode.delete(_id))
    },
    async update(req,res){
        const {_id}=req.params
        const {title,description,status,createdAt,updatedAt}=req.body
        const nota={title,description,status,createdAt,updatedAt}
        res.send(await NotasMode.update(_id,nota))
    }
}
module.exports=notasController