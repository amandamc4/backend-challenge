var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    messages: {type: Array, default: []}
});

module.exports = mongoose.model('Conversation', schema);