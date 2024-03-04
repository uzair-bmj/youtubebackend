import mongoose from "mongoose";
import { db_Name } from "../constants.js";


const connectDB = async () => {
    try{
        const connecton = await mongoose.connect(`${process.env.MONGODB_URL}/${db_Name}`)
        console.log(`mongodb connected !! DB HOST: ${connecton.connection.host}`)
    }
    catch(err){
        console.log("Mongodb connection error " , err)
        process.exit(1)
    }
}

export default connectDB;