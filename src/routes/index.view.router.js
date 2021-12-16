const express=require('express')
const secret_key = '2c924c9adb7f44a68d9467e9d26eb4e3'
const client_id = 'movilshop_test'
const axios =require('axios')
const url_apurata_addons='https://apurata.com/pos/pay-with-apurata-add-on/';
const router=express.Router()
router.get('/',(req,res)=>{
  res.render('index')
})
router.get('/create-order-apurata', function (req, res) {
  const {monto,product_id} = req.query
  console.log(monto,product_id)
  const params = {
      page : "cart",
      variable_amount : "FALSE",
      multiple_products : "TRUE",
      is_dark_theme : "FALSE",
      continue_url : "https://apurata.com/"
  }
  const newUrl=url_apurata_addons+monto+'?'+ new URLSearchParams(params)
  axios({
      url:newUrl,
      method:'get',
      headers:{"Client_id":client_id}
  })
  .then(({data})=>{
     // console.log(data);
      res.render('detail-order',{informacion:data,product:product_id,monto:monto})
  }).catch(error=>{
     // console.log(error)
      res.send(error)
  })
  
})
module.exports=router