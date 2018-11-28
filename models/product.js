var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    trailer: {type: String, required: true},
    cover: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }  
    ]
});

module.exports = mongoose.model('Product', schema);