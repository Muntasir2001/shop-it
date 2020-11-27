const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   address: { 
      address1: { type: String, required: true },
      address2: { type: String },
      city: { type: String, required: true },
      postal: { type: String, required: true }
    },
   // date: { type: Date, required: true }
}, {
   timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;