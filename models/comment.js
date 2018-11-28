var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},
    created: {type: String}
});

module.exports = mongoose.model('Comment', schema);