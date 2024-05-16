const bookData=require('../models/book.js');
 const  getBook=async (req,res)=>{
    try{
        const data=await bookData.find({})
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
}
module.exports=getBook;