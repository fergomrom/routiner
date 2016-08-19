var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String,
    urlName: String,
    thumbnail: String,
});

module.exports = mongoose.model('Category', categorySchema);
