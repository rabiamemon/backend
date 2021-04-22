const express = require('express'); 
const router = express.Router(); 
const Services = require('../models/Services');
 

//GET ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const services = await Services.find();
        res.json(services);
    }
    catch(err){
        res.json({message: err})
    }
});

router.post('/', async (req, res) => {
    const service = new Services({
        name: req.body.name, 
        price: req.body.price,
        type: req.body.type
    });

    try{
    const savedService = await service.save();
    res.json(savedService);
    }
    catch(err){
        res.json({message: err});
    }

});

module.exports= router; 