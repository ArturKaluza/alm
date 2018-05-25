const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://alm:123test@ds135290.mlab.com:35290/alm');

module.exports = {mongoose};

