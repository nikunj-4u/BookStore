require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const Bookrouter=require('./routes/book');
const userRouter=require('./routes/user');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.URL+'bookstore').then((data)=>{
    console.log("DB success");
}).catch((err)=>console.log(err));

app.use('/books',Bookrouter);
app.use('/users',userRouter);

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log("Server Started");
    }
})