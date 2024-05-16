const express=require('express');
const router=express.Router();
const userFunctions=require('../controller/user');
router.post('/signup',userFunctions.signup);
router.post('/login',userFunctions.login);
module.exports=router;