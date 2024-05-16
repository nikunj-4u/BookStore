const express=require('express');
const userData=require('../models/user');
const bcrypt=require('bcryptjs');
const signup=async (req,res)=>{
    try{
    const{name,email,password}=req.body;
     const isUser=await userData.findOne({email:email})
    
    if(isUser){
        return res.status(400).json({message:"User already present !"});
    }
    else{
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=new userData({
            name:name,
            email:email,
            password:hashPassword
        })
       await newUser.save();
       res.status(200).json({message:"user added !",user:{
        name:name,
        email:email,
        _id:newUser.id
       }})
    }
}
    catch(err){
        console.log(err);
        res.status(400).json({message:err.message});
    }

} 
const login=async(req,res)=>{
const {email,password}=req.body;
const ispresent=await userData.findOne({email:email});
if(!ispresent){
    res.status(400).json({message:"User is not present"});
}
else{
    const check=await bcrypt.compare(password,ispresent.password);
    if(check){
        res.status(200).json({message:"Auth success",user:{
            _id:ispresent._id,
            name:ispresent.name,
            email:ispresent.email
        }})
    }
        else{
            res.status(400).json({message:"Wrong Password"});
        }
}
}

exports.signup=signup;
exports.login=login;