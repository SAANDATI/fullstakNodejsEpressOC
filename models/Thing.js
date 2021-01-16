const mongoose = require('mongoose');

const thingSchem = mongoose.Schema({
    tittle: {type: String, require: true},
    description: {type: String, require: true},
    imageUrl: {type: String, require: true},
    price: {type: Number, require: true},
    userId: {type: String, require: true},
});

module.exports = mongoose.model('Thing', thingSchem);
