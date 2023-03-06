const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {
    filename: String,
    mimetype: String,
    size: Number,
    url: String,
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;