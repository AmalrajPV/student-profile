import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoute from "./routes/authRouter.js";
import studentRoute from "./routes/studentRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();
dotenv.config();


const connect = () =>{
    try {
        mongoose.connect(process.env.DB);
        console.log("connected to database");
    } catch (error) {
        throw error;
    }
}


mongoose.connection.on("disconnection", ()=>console.log("Database disconnected"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", studentRoute);
app.use("/api/admin", adminRouter);

app.listen(8000, ()=>{
    connect();
    console.log("App running...");
});