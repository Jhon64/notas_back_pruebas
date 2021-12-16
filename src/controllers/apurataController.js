const axios = require('axios')
const apurataController = {
    async login({ req, res }) {
        const secret_key = '2c924c9adb7f44a68d9467e9d26eb4e3'
        const client_id = 'movilshop_test'
      /* const result=await axios({
            method: 'post',
            url: 'https://apurata.com/pos/order/create',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${secret_key}`,
            },
            data:{
                "amount": 123.30,
                "order_id": "001",
                "pos_client_id": "tecno-tiendaz",
                "description": "PC Gamer",
                "expiration_ts":"2021-11-13 20:00:00.456",
                "url_redir_on_canceled": "https://tecnotiendaz.com/checkout",
                "url_redir_on_rejected": "https://tecnotiendaz.com/checkout",
                "url_redir_on_success": "https://tecnotiendaz.com/order_paid",
                "url_redir_on_order_detail": "https://tecnotiendaz.com/profile",
                "customer_data":{
                    "address": "Dir. 123",
                    "dni": "14159265",
                    "email": "example@example.com",
                    "name": "Example ",
                    "phone": "99999999",
                    "billing_city": "Lima"
                }
            }
        });*/
        const result=await axios({methid:'post',url:'https://apurata.com/pos/client/landing_config',
        headers:{
            'content-type':'application/json',
            'authorization':`Bearer ${secret_key}`,
        },
    })
        console.log(result.data)
        return await res.send(result.data);
       
    }
}
module.exports = apurataController