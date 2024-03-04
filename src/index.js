import { config } from "dotenv";
import dbconnection from "./db/index.js"


config({
    path: "./env"
});

dbconnection()

