const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  image: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("prices", priceSchema);