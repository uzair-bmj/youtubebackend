// require('dotenv').config({path : './env'});
import { config } from "dotenv";

import mongoose from "mongoose";
// import { db_Name } from "./constants";
import connectDB from "./db/index.js";

config({
    path : "./env"
})


connectDB()


/*
import { express } from "express";

const app = express()


;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${db_Name}`)
        app.on("error", (error)=>{
            console.log("ERR" , error)
            throw error
        })
        
        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error: ", error)
        throw error
    }
})()
*/