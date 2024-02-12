// import mongoose from "mongoose";

// const connectToMongoDB = async () => {
//	try {
//		await mongoose.connect(process.env.MONGO_DB_URI);
//		console.log("Connected to MongoDB");
//	} catch (error) {
//		console.log("Error connecting to MongoDB", error.message);
//	}
//};

//export default connectToMongoDB;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importing cors package

const app = express();

// Adding middleware to enable CORS
app.use(cors());

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: { w: 'majority' }
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

//connectToMongoDB();
export default connectToMongoDB;