// const express = require('express');
import express from 'express'; //in package.json i had set type: module instead common js so i am able to do import
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const port = process.env.PORT || 4007;
//for my database connection 
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database is connected successfully");
} catch(error){
    console.log(`There's some error related to the database connection ${error}`);
}
app.listen(port, ()=>{
    console.log("server started");
})