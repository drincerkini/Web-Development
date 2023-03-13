import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    client: String,
    description: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('reviews', schema);


export default model;