const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'others'});
});

module.exports = router;