import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    }
});

const model = mongoose.model('products', schema);




export default model;