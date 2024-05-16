const { model } = require('mongoose');

const Schema=require('mongoose').Schema;
const eachBook=new Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
});
module.exports=new model('book',eachBook);