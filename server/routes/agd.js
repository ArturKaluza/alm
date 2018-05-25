const express = require('express');
const router = express.Router();

const {AGD} = require('../../db/models/AGD');

// get all AGD items
router.get('/', (req, res) => {
    AGD.find({ }).then((doc) => {
        res.status(200).send(doc);
    }, e => res.status(400).send(e));
});


// crete new agd item
router.post('/new', (req, res) => {
    const {name, amount, desc} = req.body;

    if (name === undefined || amount === undefined || desc === undefined) {
        return res.status(400).send();
    }

    const agd = new AGD({
        name,
        amount, 
        desc
    });

    agd.save().then((item) => {
        res.status(201).send(item);
    }, e => {
        res.status(400).send(e);
    });
});

// get one AGD item
router.get('/:id', (req, res) => {
    const id = req.params.id
    
    AGD.findOne({_id: id}).then((item) => {
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    }, e => res.status(400).send(e));
});

// delete item
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    AGD.findByIdAndRemove(id).then((item) => {
        if (!item) {
            return res.status(404).send();
        }
        res.send();
    }, e => res.status(400).send(e));
});

// update item
router.patch('/:id', (req, res) => {
    const id = req.params.id;

    const {name, desc, amount} = req.body;
    
    AGD.findOneAndUpdate({_id: id}, {$set: { name, desc, amount }}, {new: true}).then((item) => {
        if (!item) {
            return res.status(404).send();
        }

        res.send(item);
    }).catch(e => res.status(400).send(e));
})

module.exports = router;