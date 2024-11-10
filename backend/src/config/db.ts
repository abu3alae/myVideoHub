import  dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string,);

        console.log("MongoDB Connected");

    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`);
    }
}

export default connectDb;
