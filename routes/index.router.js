const express=require('express')
const notasController=require('../controllers/notasController')
const router=express.Router()
router.get('/',notasController.listar)
router.post('/',notasController.registrar)
router.delete('/:_id',notasController.delete)
router.put('/:_id',notasController.update)
module.exports=router