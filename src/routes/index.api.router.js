const express = require('express')
const notasController = require('../controllers/notasController')
const apurataController = require('../controllers/apurataController')
const secret_key = '2c924c9adb7f44a68d9467e9d26eb4e3'
const client_id = 'movilshop_test'
const axios = require('axios')
const url_apurata_addons = 'https://apurata.com/pos/pay-with-apurata-add-on/';

const router = express.Router()
router.get('/', notasController.listar)
router.post('/', notasController.registrar)
router.delete('/:_id', notasController.delete)
router.put('/:_id', notasController.update)
router.post('/apurata/login', apurataController.login)
router.post('/webhook', function (req, res) {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router