const express=require('express');
const router=express.Router();
const User=require('../models/User');


//router.get('/', (req, res) => {
//    res.send("We are on post");
//});

router.get('/', async (req, res) => {
    try{
        const users=await User.find();
        res.json(users);
    } catch (err) {
        res.json({message : err});
    }
});
    

router.post('/' ,  (req,res) => {
    const user= new User({
        title: req.body.title,
        description: req.body.description
    });
    
    user.save().then(()=> {
        res.send(user);
    }).catch((e) => {
        res.send(e)
    });
});


module.exports=router;