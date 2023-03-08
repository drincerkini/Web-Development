const mongoose = require('mongoose');

const WomanProductSchema = new mongoose.Schema({
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

const WomanProduct = mongoose.model('WomanProduct', WomanProductSchema);

export default WomanProduct;