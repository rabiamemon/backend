const router = require('express').Router(); 
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const {registerValidation, loginValidation} = require('../validation');


//Register
router.post('/register', async (req, res) => {

    //Let's validate before adding a user 
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    //Hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Creating a new user 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save()
        res.send({user: user._id});
    }
    catch(err){
        res.status(400).send(err);
    }
  
});
//Login 
router.post('/login', async (req,res) => {

    //Let's validate before a successful login 
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //checking if the email already exists 
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email is not found');
    //checking if password is correct 
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid Password');

    //Create and assign a token 
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    // res.send('Logged in'); 

});

module.exports = router; 
