var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},
    created: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    rating: {type: Number, required: true, validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value."
    }, default: 0}
});

module.exports = mongoose.model('Comment', schema);