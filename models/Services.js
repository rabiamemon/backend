const mongoose = require('mongoose'); 

const PostSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    type: {
        type: String,
        required: true 

    } 
});

module.exports = mongoose.model('Services', PostSchema); 
