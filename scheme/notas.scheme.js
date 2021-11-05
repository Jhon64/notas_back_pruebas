const { Schema } = require("mongoose");

const notaScheme=new Schema({
    title:String,
    description:String,
    status:Boolean,
    createdAt:String,
    updatedAt:String
})
module.exports=notaScheme