const express = require('express'); 
const mongoose = require('mongoose');
const app = express(); 
const bodyParser = require('body-parser'); 
require('dotenv/config');

//Middleware for JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use('/posts', postsRoute)

//ROUTES 
app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connecting to DB 
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => console.log('connected to DB')
);

app.listen(3000); 


