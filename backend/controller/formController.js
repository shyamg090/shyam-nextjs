const express = require('express');

const formModel = require('../model/formModel');
const Form = formModel.Form;

const router = express.Router();

router.post('/', (req, res) => {
    const formdata = new Form(req.body);

    formdata.save().then(() => {
        res.status(201).json({ message: 'Sent Sucessfully' });
    }).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
})

exports.router = router;
