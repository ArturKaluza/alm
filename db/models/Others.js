const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OthersSchema = new Schema({
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

const Others = mongoose.model('Others', OthersSchema);

module.exports = {Others};