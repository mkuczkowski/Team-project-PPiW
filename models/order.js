var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    created: {type: String},
    status: {type: String, default: "Pending"},
    fullName: {type: String},
    email: {type: String},
    city: {type: String},
    address: {type: String},
    bankInfo: {type: String, default: "0000 0712 1981 2874"},
    totalPrice: {type: String}
});


module.exports = mongoose.model('Order', orderSchema);