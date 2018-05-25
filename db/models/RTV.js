const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RTVSchema = new Schema({
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

const RTV = mongoose.model('RTV', RTVSchema);

module.exports = {RTV};