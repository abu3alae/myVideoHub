import express from "express";
import connectDb from "./config/db";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectDb()

app.listen(port, () => {
    console.log(`Server Running on the port ${port}`);
});