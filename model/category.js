var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String,
    thumbnail: String,
});

module.exports = mongoose.model('Category', categorySchema);
