import mongoose from "mongoose";
import { db_Name } from "../constants.js";

const dbconnection = async ()=>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${db_Name}`)
        console.log(`Database connected !! host ${connection.connection.host}`)
    }
    catch(error){
        console.log("Mongodb connection error: ", error)

    }
}

export default dbconnection;