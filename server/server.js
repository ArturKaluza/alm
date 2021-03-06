const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('../db/mongoose');

// Routes
const products = require('./routes/products');
const agd = require('./routes/agd');
const rtv = require('./routes/rtv');
const others = require('./routes/others');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('work');
});

app.use('/products', products);
app.use('/agd', agd);
app.use('/rtv', rtv);
app.use('/others', others);


app.listen(5000, () => {
    console.log('server running on port 5000');
});