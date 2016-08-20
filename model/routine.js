var mongoose = require('mongoose');

var routineSchema = mongoose.Schema({
    description: String,
    checked: { type: Boolean, default: false },
    categoryId: mongoose.Schema.ObjectId,
    created: { type: Date, default: Date.now },
    periodicity: String
});

module.exports = mongoose.model('Routine', routineSchema);
