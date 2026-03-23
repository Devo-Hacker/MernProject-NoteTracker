// const express = require('express');
import express from 'express'; //in package.json i had set type: module instead common js so i am able to do import
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import cors from 'cors';
import noteRoutes from './routes/note.routes.js';

dotenv.config();
const app = express();
// app.use(cors());
const port = process.env.PORT || 4007;
//for my database connection 
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database is connected successfully");
} catch(error){
    console.log(`There's some error related to the database connection ${error}`);
}
//routing middleware
app.use(express.json())
app.use("/api/v1/notetracker", noteRoutes);

app.listen(port, ()=>{
    console.log("server started");
})