import mongoose from "mongoose"

const postDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

export const PostData = mongoose.model("PostData", postDataSchema)