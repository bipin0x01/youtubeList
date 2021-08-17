import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "../.env"})


// Mongodb Database connection
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MONGODB Database Connection Successful: ${connect.connection.host}`);
    } catch (error) {
        console.log('Error:', error.message);
        process.exit(1)
    }
}


export default connectDB