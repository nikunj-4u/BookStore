const {Schema,model}=require('mongoose');
const eachUser=new Schema({
    name:String,
    email:{type:String,required:true,unique:[true,"User already exists !"]},
    password:{type:String,required:true}
})
module.exports=new model("user",eachUser);
