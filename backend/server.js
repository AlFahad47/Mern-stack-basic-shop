import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/products",(req,res)=>{});

console.log(process.env.MONGO_URI);

app.listen(5000,()=>{
    console.log("server started at location host 5000")
})