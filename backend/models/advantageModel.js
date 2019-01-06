const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advantageSchema = new Schema({
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
  }
})

module.exports = mongoose.model("advantages", advantageSchema);