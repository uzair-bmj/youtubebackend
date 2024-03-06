import { config } from "dotenv";
import dbconnection from "./db/index.js"
import { app } from "./App.js";


config({
    path: "./env"
});

dbconnection()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err=>{
    console.log("database connected failes !! ", err)
}))

