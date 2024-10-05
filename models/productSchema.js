const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pName:String,
    pDesc:String,
    pPrice:Number
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;