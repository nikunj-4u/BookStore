const express=require('express');
const router=express.Router();
const getBook=require('../controller/book.js');
router.get('/',getBook);
module.exports=router;