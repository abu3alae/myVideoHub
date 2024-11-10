import express from "express";
import connectDb from "./config/db";
import dotenv from "dotenv";
import routes from "./route/index"
import passportJwtStrategy from "./config/passportJwtStrategy";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectDb()

app.use(passportJwtStrategy.initialize())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', routes)
app.listen(port, () => {
    console.log(`Server Running on the port ${port}`);
});