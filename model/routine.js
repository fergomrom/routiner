var mongoose = require('mongoose');

var routineSchema = mongoose.Schema({
        name: String,
        description: String,
        checked: { type: Boolean, default: false },
        //categoryId: ObjectId,
        updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Routine', routineSchema);
