const express = require('express')
const notasController = require('../controllers/notasController')
const apurataController = require('../controllers/apurataController')
const secret_key = '2c924c9adb7f44a68d9467e9d26eb4e3'
const client_id = 'movilshop_test'
const axios = require('axios')
const { route } = require('./index.api.router')
const url_apurata_addons = 'https://apurata.com/pos/pay-with-apurata-add-on/';

const router = express.Router()


router.get('/financiacion', async function (req, res) {
    const result = await axios({
        methid: 'get',
        url: 'https://apurata.com/pos/client/landing_config',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${secret_key}`,
        },
    })
    console.log(result.data)
    return res.send(result.data);

})

router.get('/informacion', async function (req, res) {
    const result = await axios({
        methid: 'get', url: `https://apurata.com/pos/${client_id}/info-steps`,
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${secret_key}`,
        },
    })
})

router.get('/crear-orden', async function (req, res) {
    const result = await axios({
        method: 'post',
        url: 'https://apurata.com/pos/order/create',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${secret_key}`,
        },
        data: {
            "amount": 500.00,
            "order_id": "007",
            "pos_client_id": client_id,
            "description": "PC Gamer",
            "expiration_ts": "2021-12-10 20:00:00.456",
            "url_redir_on_canceled": "http://192.168.0.3:5500/",
            "url_redir_on_rejected": "http://192.168.0.3:5500/",
            "url_redir_on_success": "http://192.168.0.3:5500/apurata/order-success",
            "url_redir_on_order_detail": "http://192.168.0.3:5500/profile",
            "customer_data": {
                "address": "Dir. 123",
                "dni": "14159265",
                "email": "example@example.com",
                "name": "Example ",
                "phone": "99999999",
                "billing_city": "Lima"
            }
        }
    });
    res.send(result.data);
});

router.get('/order-success',function(req,res){
    console.log(req)
    res.send('success')

})

module.exports = router