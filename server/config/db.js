import mongoose from "mongoose";




// Mongodb Database connection
const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://bipin123:bipin123@cluster0.lfsbj.mongodb.net/ytlist?retryWrites=true&w=majority', {
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