const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    console.log('database connected');
});

const formscehma = new mongoose.Schema({

    name: String,
    email: String,
    phone: Number,
    msg: String
    
})

exports.Form = new mongoose.model('Form', formscehma);
