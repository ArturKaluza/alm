const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AGDSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const AGD = mongoose.model('AGD', AGDSchema);

module.exports = {AGD};