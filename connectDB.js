import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoC = await mongoose.connect(process.env.db_uri)
        console.log(`Connected to MongoDB: ${mongoC.connection.host}`)
    }
    catch (err) {
        if (err) {
            console.log(err)
            process.exit(1)
        }
    }
}